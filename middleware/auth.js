const User = require('../models/userModels');

exports.verifyUser = async(req, res, next) => {
    const token = req.cookies.jwt;

    if(!token){
        return res.status(403).json({
            message: 'missing credential'
        });
    }
    
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if(!decode){
        return res.status(400).json({
            status: 'invalid'
        })
    }

    try {
        const user = await User.findById(decode);

        if(!user){
            return res.status(403)
        }
        
        req.user = user;
        
    } catch (error) {
        return res.status(500).json({
            message: 'Internal error'
        });
    }

    next();
}