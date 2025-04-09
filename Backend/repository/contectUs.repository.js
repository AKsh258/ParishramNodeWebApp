const contectUs=require("../models/contectUs.model")

const getAll = async () => {
    try {
        return await contectUs.findAll();
    } catch (error) {
        throw new Error('Error fetching contects: ' + error.message);
    }
};
const save = async ( contectData) => {

    try {

        return await contectUs.create( contectData );

    } catch (error) {

        throw new Error('Error saving product: ' + error.message);
    }
};
module.exports = { getAll, save };