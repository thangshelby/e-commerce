from selenium import webdriver
from selenium.webdriver.common.by import By
from PIL import Image
import requests
import unittest
from selenium.webdriver.support import expected_conditions as EC
import io


import os

os.chdir("../../public./assets")
# print(os.getcwd())

new_directory = os.getcwd()
print(new_directory)


def download_image(download_path, url, file_name):
	try:
		image_content = requests.get(url).content
		image_file = io.BytesIO(image_content)
		image = Image.open(image_file)
		file_path = download_path + file_name

		with open(file_path, "wb") as f:
			image.save(f, "JPEG")

	except Exception as e:
		print('FAILED -', e)





class Scrapping(unittest.TestCase):
    def setUp(self) -> None:
        self.driver = webdriver.Chrome()
        self.driver.get(f'https://www.facebook.com/DaQuyThuanAnna/photos_by')

    def test_scrap(self):
        closeButton = self.driver.find_element(By.CLASS_NAME,'x92rtbv')
        
        closeButton.click()
        
        result= set()
        while len(result)<100:
            self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
            imgList = self.driver.find_elements(By.TAG_NAME, 'img')
            for img in imgList:
                if  img.get_attribute('src') not in result:
                    result.add(img.get_attribute('src'))
        
        for i, url in enumerate(result):
	        download_image(new_directory+'/images/', url, str(i) + ".jpg")
        

if (__name__ == '__main__'):
    unittest.main()
    pass
