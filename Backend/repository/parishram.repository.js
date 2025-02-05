const ParishramResource=require("../models/parishram.model")
ParishramResource.sync({ force: false }) ;
const getAll = async () => {
    try {
        return await ParishramResource.findAll();
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};
const save = async (productData) => {
    try {
        return await ParishramResource.create(productData);
    } catch (error) {
        throw new Error('Error saving product: ' + error.message);
    }
};
 
const login = async (email, password) => {
    const user = await ParishramResource.findOne({ where: { email, password } });
    return user;
    
};
module.exports = { getAll, save ,login};