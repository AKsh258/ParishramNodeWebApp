const MRFProduct=require("../models/mrf.model")
MRFProduct.sync({ force: false }) ;

const getAll = async () => {
    try {
        return await MRFProduct.findAll();
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};

const save = async (productData) => {
    try {
        return await MRFProduct.create(productData);
    } catch (error) {
        throw new Error('Error saving product: ' + error.message);
    }
};

const login = async (email, password) => {

    const user = await MRFProduct.findOne({ where: { email, password } });
    return user;
};

module.exports = { getAll, save ,login};