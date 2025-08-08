import express from 'express'
import {getAllBook,getBookById,createBook,updateBook,deleteBook} from "../controllers/book.controllers.js"

const router =express.Router()
router.get("/", getAllBook);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
export default router;