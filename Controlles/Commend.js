const Commend = require("../Models/Commend")

exports.AddCommend =async(req,res)=>{
    try {
    
        const commende = new Commend(req.body)
        await commende.save()
        res.status(200).send({msg  : 'Commende passt ' , commende})
    } catch (error) {
        res.status(500).send({msg  : 'Could not addCommend'})
    }
}


exports.GetAllCommends =async(req,res)=>{
    try {
        const commends = await Commend.find().populate('article').populate('owner')
        res.status(200).send({msg : "All commends " , commends})
    } catch (error) {
        res.status(500).send({msg : 'Could not get commends'})
    }
}

exports.GetMyCommends =async(req,res)=>{
    try {
        const commends = await Commend.find({owner : req.user._id}).populate('article').populate('owner')
        res.status(200).send({msg : "All commends " , commends})
    } catch (error) {
        res.status(500).send({msg : 'Could not get commends'})
    }
}


exports.GetOneCommend =async(req,res)=>{
    try {
        const {id} = req.params
        const commend = await Commend.findById(id)
        if (!commend) {
            res.status(400).send({msg : 'Commend not found'})
        }
        res.status(200).send({msg : 'commend founded' , commend})
    } catch (error) {
        res.status(500).send({msg : 'could not get commend'})
    }
}

exports.UpdateCommend=async(req,res)=>{
    try {
        const {id} = req.params
        const { article , quantiti } = req.body
        const updatedCommend = await Commend.findByIdAndUpdate(id,{$set : req.body})
        if (!updatedCommend) {
            res.status(400).send({msg : 'Commend not logique'})
        }
        res.status(200).send({msg : 'Commend updated'})
    } catch (error) {
       res.status(500).send({msg : 'commend not updated' }) 
    }
}

exports.DeleteCommend =async(req,res)=>{
    try {
        const {id} = req.params
        const deleteCommend = await Commend.findByIdAndDelete(id)
        res.status(200).send({msg : 'Commend deleted' , deleteCommend})
    } catch (error) {
        res.status(500).send({msg : 'commend not deleted'})
    }
}