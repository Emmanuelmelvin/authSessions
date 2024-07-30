const isAuth = (req , res , next) => {
    if(!req.session.isAuth){
       return  res.status(401).json({
            status: "unauthorized"
        })
    } 
    next()
}

module.exports  = isAuth