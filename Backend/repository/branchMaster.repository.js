const branchMaster=require("../models/branchMaster.model")
branchMaster.sync({ force: false }) ;

const findAll = async (companyCode) => {
    try {
        return await branchMaster.findAll({
            attributes: ['Name', 'Code','CompanyCode','incharge', 'Address', 'City', 'pincode', 'faxno', 'phoneno', 'email', 'Website', 'createdBy', 'Prefix'],
            where: { CompanyCode: companyCode  }
        });
    } catch (error) {
        throw new Error('Error fetching companies : ' + error.message);
    }
};

module.exports = { findAll };