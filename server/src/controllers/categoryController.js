import SSMSModel from "../database/model/MyModel.js";

export const getAllCategories = async (req, res) => {
    try {
        const CategoryModel= new SSMSModel();
        const response = await CategoryModel.Read('CATEGORY', '*','WHERE 1=1');
        return res.status(200).send(response);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }   
}

