exports.postRetriver = (req , res) => {
    console.log(req.session.user)
    res.status(200).json({
        status: "success"
    })
}