const {
    getOrgUnits,
    getProfileNames,
    getDepartments,
    getDivisions,
    getSaleOffices,
    getDesignations,
    getEmployeeTypes
} = require("../repository/dropdowns.repository.js");

const getOrganizationUnit = async (req, res) => {
  try {
    const data = await getOrgUnits();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getProfileName = async (req, res) => {
  try {
    const data = await getProfileNames();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getDepartmentInfo = async (req, res) => {
  try {
    const data = await getDepartments();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDevision = async (req, res) => {
  try {
    const data = await getDivisions();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSaleOfficeUnit = async (req, res) => {
  try {
    const data = await getSaleOffices();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getDesignation = async (req, res) => {
  try {
    const data = await getDesignations();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getEmpType = async (req, res) => {
  try {
    const data = await getEmployeeTypes();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { 
    getOrganizationUnit,
    getProfileName,
    getDepartmentInfo,
    getDevision,
    getSaleOfficeUnit,
    getDesignation,
    getEmpType,
 };