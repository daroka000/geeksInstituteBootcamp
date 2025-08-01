const express=require('express');
const app=express();
app.use(express.json()); //necessit pour que server  peut lir json 

const PORT = 6000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});

const data = [
    {
      id: 1,
      title: "javascripts",
      content: "learning javascripts here "
    },
    {
        id: 2,
        title: "python",
        content: "learning python here "
      },
      {
        id: 3,
        title: "php",
        content: "learning php here "
      },
  ];
  //all post
  app.get('/posts', (req, res) => {
    res.json(data)

  });
  //find post par id 
  app.get('/posts/:id', (req, res) =>{
    try{
        const postID= Number(req.params.id);
        const post=data.find(post => post.id===postID);
        if (!post){
            return res.status(404).json({ error: "post not found" });
        }
        res.json(post)
    }

    catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    });

  // creat new post
app.post('/posts',(req,res)=> {
    try {
    const{ title,content }=req.body;
    if(!title ||! content){
        return res.status(400).json({ error: "Title and content are required" });
    }
    const newPost = {
        id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
        title,
        content,
      };
      data.push(newPost);
      res.status(201).json({
        message: "add post successful",         
        success: true,                   
        post: newPost                  
      });
      }catch(error){
        res.status(500).json({ error: "Internal server error" });

      }
  });
    

  //put  par id 
app.put('/posts/:id',(req,res )=>{
    try{
        const postID = Number(req.params.id);
        const { title, content } = req.body;
        const post = data.find(p => p.id === postID);ذ
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
    }

        if (title) post.title = title;
        if (content) post.content = content;

        res.json({
            message: "Post updated successfully",
            success: true,
            post: post
    });
  }catch(error){
    res.status(500).json({ error: "Internal server error" });

  }
});
  //delete par id
app.delete('/posts/:id',(req,res )=>{
    try {
    const postID= Number(req.params.id);
    const index=data.findIndex(post => post.id===postID);
    if (index ===-1){
        return res.status(404).json({ error: "post not found" });
    }
    const deletedPost = data.splice(index, 1)[0];
    res.json({
        message: "Post deleted successfully",
        success: true,
        deleted: deletedPost
      });}catch(error){
        res.status(500).json({ error: "Internal server error" });
      }


})


  