const { getAll, save } = require( "../repository/contectUs.repository" );
const CustomError = require( "../utils/errorHandler.util.js" );

const getAllContact = async ( req, res, next ) =>
{
    try
    {

        const contects = await getAll();

        if ( !contects )
        {
            res.status( 404 ).json( {
                success: false,
                message: "No contacts found",
                data: null
            } );
        } else
        {
            res.status( 200 ).json( {
                success: true,
                message: "Contacts retrieved successfully",
                data: contects
            } );
        }
    } catch ( error )
    {

        next( new CustomError( 500, "Failed to fetch contact data" ) );

    }
};

const saveContact = async ( req, res, next ) =>
{
    try
    {
        const contectData = req.body;

        if ( !contectData )
        {

            return next( new CustomError( 400, " Missing required name, email and phone are compulsory " ) );
        }

        const savedContect = await save( contectData );

        res.status( 201 ).json( {
            success: true,
            message: "Your Detail Submitted Succesfully We Will Connect You Soon ",
            data: "thank you to connecting with us " + savedContect.name
        } );

    } catch ( error )
    {
        next( new CustomError( 500, "Failed to save contact data" ) );
    }
};

module.exports = {
    getAllContact,
    saveContact
};
