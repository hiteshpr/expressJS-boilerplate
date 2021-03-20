import express from "express";
import loginController from "../../controllers/login/loginController";

const loginRouter = express.Router();


loginRouter.get('/user/login', loginController.loginUser);


export default loginRouter;
