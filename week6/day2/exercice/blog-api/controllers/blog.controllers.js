import post from "../models/blog.js";


export const getAllblog = async (req, res) => {
    try {
        const Posts = await post.findAll();
        res.json({
            success: true,
            data: Posts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            errors: error.message,
        });
    }
};

export const getblogById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                errors: "post ID is required",
            });
        }

        const Posts = await post.findById(id);

        if (!Posts) {
            return res.status(404).json({
                success: false,
                errors: "Post not found",
            });
        }
        res.json({
            success: true,
            data: Posts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            errors: error.message,
        });
    }
};


export const createblog= async (req, res) => {
    try {
        const { title, content} = req.body;
        if (!title || !content ) {
            return res.status(400).json({
                success: false,
                errors: "All fields are required",
            });
        }
        const Posts = await post.create({ title,content});
        res.json({
            success: true,
            data: Posts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            errors: error.message,
        });
    }
};


export const updateblog = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                errors: "Post ID is required",
            });
        }
        const { title, content } = req.body;
        const Posts = await post.update({ id, title, content });
        res.json({
            success: true,
            data: Posts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            errors: error.message,
        });
    }
};

export const deleteblog = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                errors: "Post ID is required",
            });
        }
        const Posts = await post.delete(id);
        res.json({
            success: true,
            data: Posts,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            errors: error.message,
        });
    }
};