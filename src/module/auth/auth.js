import ErrorHandler from '../../exeptions/errorHandler.js';
import {userFounder, register, userExsist, deleteUser} from './model.js'
import { sign } from "../../utils/jwt.js";

export default {
  LOGIN: async (req, res, next) => {

    const {user_name, user_password} = req.filtered;

    const foundUser = await userFounder(user_name, user_password);

    if (foundUser.length == 0) {
      return next(new ErrorHandler("username or userpassword incorrect", 400));
    }

    res.status(200).json({
      message: "User successfully login",
      access_token: sign({ id: foundUser.id, role: foundUser.role }),
      status: 200,
    });
  },
  REGISTER: async (req, res, next) => {
    const { user_name, user_password,user_firstName, user_lastName } = req.filtered;

    const existing = await userExsist(user_name);

    if (existing.length) {
      return next(new ErrorHandler("Username existing", 409));
    }

    const [newUser] = await register(user_name, user_password, user_firstName, user_lastName);

    res.status(201).json({
      message: "User has successfully been created",
      access_token: sign({ id: newUser.id, role: newUser.role }),
      status: 201,
    });
  },
  DEL_USER: async (req, res ,next)=>{
    const {id} = req.params;

    const deletedUser = await deleteUser(id)
    .catch(err => next(new ErrorHandler(err.message, 503)))

    if (deletedUser) {
      res.json({
        message: "deleted user",
        status: 200
      })
    }
  }
}