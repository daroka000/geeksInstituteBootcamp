import {pool} from "../config/db.js";
const book = {
    //insert book
  async create({ title, author,publishedYear }) {
    const query = `
            INSERT INTO Book (title, author,publishedYear)
            VALUES ($1,$2,$3)
            RETURNING *
        `;
        
    const values = [title, author,publishedYear];
    const result = await pool.query(query, values);
    return result.rows[0];
  },//find all book
  async findAll({title,author,publishedYear}){
     const query=`
     select * from Book
     ORDER BY  title DESC
  `;
  const result=await pool.query(query);
  return result.rows;
  },//find book by id
  async findById({id,title,author,publishedYear}){
    const query=`
    select * from Book
    where $1=id `;
    const result=await pool.query(query,[id]);
    return  result.rows[0]
  },//update book
  async update({id,title,author,publishedYear}){
    const query = `
            UPDATE Book 
            SET title = COALESCE($2, title),
                author = COALESCE($3, author),
                publishedYear = COALESCE($4, publishedYear),
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $1
            RETURNING *
        `;
        const values=[id,title,author,publishedYear];
        const result=await pool.query(query,values);
        return  result.rows[0]
  },//delete book
  async delete({id,title,author,publishedYear}){
    const query=`
    delete * from Book 
    where $1=id
    RETURNING *

    `
    const result=await pool.query(query,[id]);
    return  result.rows[0]

  }
 
};

export default book;