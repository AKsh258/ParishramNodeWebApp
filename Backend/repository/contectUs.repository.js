const contectUs=require("../models/contectUs.model")
contectUs.sync({ force: false }) ;

const getAll = async () => {
    try {
        return await contectUs.findAll();
    } catch (error) {
        throw new Error('Error fetching contects: ' + error.message);
    }
};
const save = async (productData) => {
    try {
        return await contectUs.create(productData);
    } catch (error) {
        throw new Error('Error saving product: ' + error.message);
    }
};
module.exports = { getAll, save };