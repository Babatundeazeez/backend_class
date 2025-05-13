const CategoryModel = require("../models/category")

const addNewCategory = async (req, res)=>{
    try {
        const category = await CategoryModel.create(req.body)
        if(!category){
            return res.status(400).json({
                status: "error",
                messae: "Category not added"
            })
        }

        res.status(201).json({
            status: 'success',
            message: "Category has been added",
            category
        })
    } catch (error) {
        console.log(error)
    }
}

const getAllCategories =async (req, res)=>{
    try {
        const categories = await CategoryModel.find() // return all categories
        if(!categories){
            return res.status(404).json({
                status: "error",
                message: "categories not found"
            })
        }

        res.status(200).json({
            status: 'success',
            message: "categories fetched!",
            categories
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    addNewCategory,
    getAllCategories
}