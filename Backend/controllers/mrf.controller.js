const express=require("express")
const mrfProductRepo=require("../repository/mrf.repository")

const getAll = async (req, res) => {
    try {
        const products = await mrfProductRepo.getAll();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
};
const save = async (req, res) => {
    try {
        const productData = req.body;
        const savedProduct = await mrfProductRepo.save(productData);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
};
module.exports = { getAll, save };
