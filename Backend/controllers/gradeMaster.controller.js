const { getAllGradesdb } = require('../services/gradeMaster.service.js');

const getAllGrades = async (req, res) => {
    try {
        const grades = await getAllGradesdb();
        res.status(200).json({
            success: true,
            message: 'All grades fetched successfully',
            data: grades
        });
    } catch (error) {
        console.error('Error fetching grades:', error.message);
        res.status(500).json({
            success: false,
            message: 'Grade not found somthing went wrong please try again later'
        });
    }
}
module.exports = { getAllGrades };