const isAuth = (req , res , next) => {
    if(!req.session.auth){
        req.session.user = null
    } 
}