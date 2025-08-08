import {pool} from "../db/db.js";
const post = {
    //insert blog
  async create({ title, content }) {
    const query = `
            INSERT INTO posts (title, content)
            VALUES ($1, $2)
            RETURNING *
        `;
    const values = [title, content];
    const result = await pool.query(query, values);
    return result.rows[0];
  },//findById blog
  async findById(id) {
    const query = `
        SELECT * 
        FROM posts 
        WHERE id = $1
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },
  //findAll blog
  async findAll() {
    const query = `
        SELECT *
        FROM  posts
        ORDER BY title DESC
    `;
    const result = await pool.query(query);
    return result.rows;
  },
  //update blog by id
  async update({ id, title, content }) {
    const query = `
            UPDATE posts 
            SET title = COALESCE($2, title),
                content = COALESCE($3, content),
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $1
            RETURNING *
        `;
    const values = [id, title, content];
    const result = await pool.query(query, values);
    return result.rows[0];
  },
  //delete blog by id 
  async delete(id) {
    const query = `
        DELETE FROM posts WHERE id = $1
        RETURNING *
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  },
};

export default post;