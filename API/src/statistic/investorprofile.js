const invitation=require('../FriendshipInvitation/friendshipModel');

const viewfriends =async (req,res)=>{
try{
    const id=req.params.id
    const invitations=await invitation.countDocuments({ sender:id})
    return res.status(200).json({ invitations });
}
catch (error) {
    res.status(500).send(error);
  }
}

module.exports={viewfriends}