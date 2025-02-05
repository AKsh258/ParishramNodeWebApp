const parishramService = require('../repository/parishram.repository');
const mrfService = require('../repository/mrf.repository');
const cityforceService = require('../repository/cityforce.repository');
const roleDefined =require("../repository/auth.service")


exports.login = async (req, res) => {
    const { email, password } = req.body;
            const role =  await roleDefined(email);
    try {
        let loginResult;
        switch (role) {
            case 'parishram':
                loginResult = await parishramService.login(email, password);
                break;
            case 'mrf':
                loginResult = await mrfService.login(email, password);
                break;
            case 'cityforce':
                loginResult = await cityforceService.login(email, password);
                break;
            default:
                return res.status(400).json({ message: 'Invalid role specified' });
        }
        if (loginResult) {
            res.status(200).json({ message: 'Login successful', data: loginResult });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error });
    }
};
