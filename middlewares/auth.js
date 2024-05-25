const jwt = require('jsonwebtoken');

const AuthMiddleware = (role = "") => {
    return (req, res, next) => {
        // getting token
        const token = req.cookies.token;

        // if token not exist
        if (!token) {
            return res.status(401).json({ message: 'Access Denied' });
        }


        try {
            // decode token
            const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
            // set user detail 
            req.user = decoded;
            if (role.length && role !== decoded.role) {
                return res.status(403).json({ message: 'You have no permission to perform this action.' });
            }
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid Token' });
        }
    }
}

module.exports = AuthMiddleware