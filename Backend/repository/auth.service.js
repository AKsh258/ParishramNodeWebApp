const { commonSecuelize } = require("../config/db");

const roleDefined = async (email) => {
  try {
    const query = `SELECT role FROM varifyRole WHERE email = :email`; 
    const roledatat = await commonSecuelize.query(query, {
      replacements: { email }, 
      type: commonSecuelize.QueryTypes.SELECT,
    });
    if (roledatat.length > 0) { 
      return roledatat[0].role; 
    } else {
      console.log("No role found for this email.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching role data:", error.message);
    throw new Error("Failed to fetch role data: " + error.message);
  }
};
module.exports= roleDefined;