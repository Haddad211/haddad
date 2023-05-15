
const Post = require('./posteModel');

const getPosts = async (req, res) => {
  try {

      const posts = await Post.find().sort({ createdAt: 'desc' }).exec();
      res.status(200).json(posts);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const listofposts =async(req,res)=>{
  try{
    const id=req.params.id;
    const listposts =await Post.find({innovator:id})
    res.status(200).json(listposts)
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

}
module.exports = { getPosts,listofposts };
