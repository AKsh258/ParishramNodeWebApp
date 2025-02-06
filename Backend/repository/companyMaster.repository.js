const company=require("../models/companyMaster.model")

const findAll = async () => {
    try {
        return await company.findAll({attributes: ['Name', 'Code', 'Address', 'City', 'State', 'Country', 'Phone', 'Email', 'Website', 'Fax', 'Prefix']});
    } catch (error) {
        throw new Error('Error fetching companies : ' + error.message);
    }
};

module.exports = { findAll };