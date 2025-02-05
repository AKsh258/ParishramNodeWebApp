const express=require("express")
const cityForceRepo=require("../repository/cityforce.repository")

const getAll = async (req, res) => {
    try {
        const products = await cityForceRepo.getAll();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
};
const save = async (req, res) => {
    try {
        const productData = req.body;
        const savedProduct = await cityForceRepo.save(productData);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, error: "Something went wrong" });
    }
};

module.exports = { getAll, save };
