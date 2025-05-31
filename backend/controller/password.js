const Password = require('../models/password')

async function handleAddPassword(req, res) {
    const {site , username, password} = req.body;
    if(req.body._id){
        const result = await Password.findByIdAndUpdate(req.body._id, {site, username, password})
        return res.status(200).json({message : "Updated"})
    }

    const result = await Password.create({
        site,
        username,
        password
    });
    if(result) {
        return res.status(201).json({message : "Password Saved!", result})
    }

}   
async function handleDeletePassword(req, res) {
    const id = req.params.id;
    const result = await Password.findByIdAndDelete({_id :id})
    if(result) {
        return res.status(200).json({message:"Deleted", result})

    }


    // const result = await Password.findByIdAndDelete({id})
    // return res.status(200).json({message : "Delete Got"})

}

async function handleGetAllPasswords(req, res) {

    const passwords = await Password.find({});
    if(passwords){
        return res.status(200).json(passwords)

    }
    else{
        return res.status(404).json({message : "No passwords "})
    }

}

module.exports = {
    handleAddPassword,
    handleDeletePassword,
    handleGetAllPasswords
}