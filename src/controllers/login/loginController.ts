import express from "express";


class loginController {

    public async loginUser(req: express.Request, res: express.Response) {
       return res.status(200).send({ 'status':'success', 'msg': 'User login successful!'});
    }


}

export default new loginController();
