import jwt from "jsonwebtoken";

console.log("✅ userAuth middleware hit");


const userAuth = async (req, res, next)=>{
    const {token} = req.cookies;

    if(!token){
        return res. json({success: false, message: 'Not Authorized. Login Again'})
    }

    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id){
            req.body = req.body || {}; //added 
            req.body.userId = tokenDecode.id
        } else {
            return res.json({ success: false, message: 'Not Authorized. Login Again'});
        }

        next();

    } catch (error){
        res.json({success: false, message: error.message});
    }
}

export default userAuth;