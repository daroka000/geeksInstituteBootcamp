import book from '../models/book.js';
export const getAllBook = async (req, res) => {
    try {
        const books = await book.findAll();
        res.json({
            success: true,
            data: books,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            errors: error.message,
        });
    }
};
export const getBookById= async (req, res) => {
    try{
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                errors: "book ID is required",
            });
        }
        const books = await book.findById(id);

        if (!books) {
            return res.status(404).json({
                success: false,
                errors: "book not found",
            });
        }
        res.json({
            success: true,
            data: books,
        });

    }catch(error){res.status(500).json({
        success: false,
        errors: error.message,
    });

    }

};
export const createBook= async (req, res) => {
    try {
        const { title,author,publishedYear } = req.body;
        if (!title || !author || !publishedYear) {
            res.status(400).json({
                success:false,
                error:"enter all(title,author,publishedYear)"
            });
        }
        console.log({ title,author,publishedYear })
        const books=await book.create({title, author,publishedYear})
        res.json({
            success: true,
            data:books
        })
}catch(error){
    res.status(500).json({
        success:false,
        error:error.message
    })
}



};

export const updateBook=async(req,res)=>{
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                errors: "book ID is required",
            });
        }
        const { title, author,publishedYear } = req.body;
        const books = await book.update({ id, title, author,publishedYear });
        res.json({
            success: true,
            data: books,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            errors: error.message,
        });
    }
}
export const deleteBook= async (req, res) => {
    try 
    {const {id}=req.params;
    if(!id){
        res.status(400).json({
            id:"id not found to dellete",
            delete:false
        })
    const books=await book.delete(id);
    res.status.json({
        delete:success,
        data:books

    });}

    }catch(error){
        res.status(500).json({
            message:"success false",
            error:error.message

        })
        
    }

}

