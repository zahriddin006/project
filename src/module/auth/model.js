import { fetchData } from '../../utils/postgress.js'

const USER_FOUND = `
  SELECT * FROM users WHERE user_name = $1 AND user_password = $2
`
const USERNAME_FOUND = `
  SELECT * FROM users WHERE user_name = $1
`
const REGISTER = `
  INSERT INTO users(user_name, user_password,user_firstName,user_lastName) VALUES($1, $2, $3,$4) RETURNING *
`

const DELETE_USER = `
DELETE FROM users WHERE id = $1;
`

export const userFounder = (user_name, user_password) => fetchData(USER_FOUND, user_name, user_password);
export const userExsist = (user_name) => fetchData(USERNAME_FOUND, user_name);
export const register = (user_name, user_password,user_firstName,user_lastName) => fetchData(REGISTER, user_name, user_password,user_firstName,user_lastName)
export const deleteUser = (id) => fetchData(DELETE_USER, id);