import db from '../config/db.js';

export async function createTables() {
  const hasUsers = await db.schema.hasTable('users');
  if (!hasUsers) {
    await db.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('email');
      table.string('username').unique();
      table.string('first_name');
      table.string('last_name');
    });
  }
  const hasHashpwd = await db.schema.hasTable('hashpwd');
  if (!hasHashpwd) {
    await db.schema.createTable('hashpwd', (table) => {
      table.increments('id').primary();
      table.string('username').unique();
      table.string('password');
    });
  }
}
export async function addUser(user, hashedPassword) {
  return db.transaction(async (trx) => {
    const [userId] = await trx('users')
      .insert({
        email: user.email,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name
      })
      .returning('id');

    await trx('hashpwd').insert({
      username: user.username,
      password: hashedPassword
    });

    return userId.id || userId; 
  });
}
export function getAllUsers() {
  return db('users').select('*');
}

export function getUserById(id) {
  return db('users').where({ id }).first();
}

export function updateUser(id, data) {
  return db('users').where({ id }).update(data);
}

export function getHashedPassword(username) {
  return db('hashpwd').where({ username }).first();
}
