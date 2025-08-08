import express from 'express'
import {getAllblog,getblogById,createblog,updateblog,deleteblog} from "../controllers/blog.controllers.js"

const router =express.Router()
router.get("/", getAllblog);
router.get("/:id", getblogById);
router.post("/", createblog);
router.put("/:id", updateblog);
router.delete("/:id", deleteblog);
export default router;