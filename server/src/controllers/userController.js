import SSMSModel from "../database/model/MyModel.js";


export const getAllUsers = async (req, res) => {
  try {
    const UserModel = new SSMSModel();

    const users = await UserModel.Read(
      "SITE_USER",
      "SITE_USER.ID,FIRST_NAME,LAST_NAME,PHONE_NUMBER,EMAIL,BIRTH,STATUS AS ACCESS",
      "JOIN USER_STATUS ON STATUS_ID = USER_STATUS.ID "
    );
    let response = [];

    for (let i = 0; i < users.length; i++) {
      response.push({
        id: users[i].ID,
        name: users[i].FIRST_NAME + " " + users[i].LAST_NAME,
        email: users[i].EMAIL,
        age: Number(users[i].BIRTH.toString().split(" ")[3])-2004 ,
        phone: users[i].PHONE_NUMBER,
        access: users[i].ACCESS,
      });

    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => { 
  const userId = req.params.id;
  try {
    const UserModel = new SSMSModel();
    const users = await UserModel.Read(
      "SITE_USER",
      "SITE_USER.ID,FIRST_NAME,LAST_NAME,PHONE_NUMBER,EMAIL,BIRTH,STATUS AS ACCESS,GENDER",
      `JOIN USER_STATUS ON STATUS_ID =  USER_STATUS.ID WHERE SITE_USER.ID=${userId}`
    );

    const response = {
      id: users[0].ID,
      firstName: users[0].FIRST_NAME,
      lastName: users[0].LAST_NAME,
      email: users[0].EMAIL,
      birth: users[0].BIRTH,
      gender:users[0].GENDER,
      phone: users[0].PHONE_NUMBER, 
    };
    return res.status(200).send(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
