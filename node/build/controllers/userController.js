import User from '../models/userModel.js';
import { v4 as uuidv4 } from 'uuid';
import hashPassword from '../utils/hashPassword.js';
import jwt from 'jsonwebtoken';
import tryCatch from '../utils/tryCatch.js';
export async function signupFn(req, res) {
    // if (!req.body.email || !req.body.userName || !req.body.password) {
    //   res.status(400).json({
    //     status: 'fail',
    //     err: 'Please enter all user info!',
    //   });
    // }
    // console.log(req.body);
    tryCatch(async (req, res) => {
        const userId = uuidv4();
        const newPassword = await hashPassword(req.body.password);
        const newUser = await User.create({
            id: userId,
            email: req.body.email,
            userName: req.body.userName,
            password: newPassword,
        });
        const payload = {
            id: userId,
            name: req.body.email,
        };
        const token = jwt.sign(payload, process.env.JWTSECRET);
        res.status(201).json({
            status: 'success',
            token,
        });
    });
}
export async function loginFn(req, res) {
    try {
        const { email, password } = req.body;
        // CHECK IF THERE IS EMAIL OR PASSWORD
        if (!email || !password) {
            return res.status(400).json({
                status: 'bad req',
                mesagge: 'Please provide email or password!',
            });
        }
        // CHECK IF USEREXISTS && PASSWORD IS CORRECT
        const user = await User.findOne({ email }).select('+password');
        // if (!user || !(await user.correctPassworrd(password, user.password))) {
        //   res.status(401).json({
        //     status: 'fail',
        //     mesagge: 'Incorrect email or password!',
        //   });
        // }
        // IF EVRYHING IS OK SEND TOKEN
        // const token = signToken(user._id);
        // res.status(200).json({
        //   status: 'sucess',
        //   token,
        // });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            err,
        });
    }
}
export async function loginAutoFn(req, res) { }
//# sourceMappingURL=userController.js.map