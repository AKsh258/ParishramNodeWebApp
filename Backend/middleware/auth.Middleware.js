const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(401).json({ success: false, message: "Access denied. No token provided." });
    }

    try {
        const secretkey = process.env.JWT_SECRETKEY;

        // Expected format of header authorization = Bearer xhxhxxhhxhxhxhxhxhx(token)
        // ['Bearer', 'xhxhxxhhxhxhxhxhxhx']
        const currentToken = token.split(" ")[1]

        const decoded = jwt.verify(currentToken, secretkey);

        req.user = decoded; // Attaching decoded user data to request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {

        return res.status(403).json({ success: false, message: "Invalid token." });
    }
};

module.exports = authenticateToken;

