exports.postRetriver = (req , res) => {
    if(!req.session.auth){
       return res.json(401).json({
            status: "unahorized"
        })
    } 
}