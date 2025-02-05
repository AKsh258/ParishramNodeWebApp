const Cityforce=require("../models/cityforce.model")
Cityforce.sync({ force: false }) ;

const getAll = async () => {
    try {
        return await Cityforce.findAll();
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};
const save = async (productData) => {
    try {
        return await Cityforce.create(productData);
    } catch (error) {
        throw new Error('Error saving product: ' + error.message);
    }
};
const login = async (email, password) => {
    const user = await Cityforce.findOne({ where: { email, password } });
    return user;
};
module.exports = { getAll, save ,login};