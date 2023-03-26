import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// SIGNUP
export async function signupFn(req, res) {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 16);
        const newUser = await User.create({
            email: req.body.email,
            userName: req.body.userName,
            password: newPassword,
        });
        const payload = {
            id: newUser._id,
            name: req.body.email,
        };
        const token = jwt.sign(payload, process.env.JWTSECRET);
        res.status(201).json({
            status: 'success',
            token,
        });
    }
    catch (error) {
        console.log('err', error);
    }
    // tryCatch(async (req: Request, res: Response) => {
    // });
}
// LOGIN
export async function loginFn(req, res) {
    try {
        const { email, password } = req.body;
        // CHECK IF THERE IS EMAIL OR PASSWORD
        console.log(req.body);
        if (!email || !password) {
            return res.status(400).json({
                status: 'bad req',
                mesagge: 'Please provide email or password!',
            });
        }
        // CHECK IF USEREXISTS && PASSWORD IS CORRECT
        const user = await User.findOne({ email });
        console.log('user', user);
        const isPasswordCorrect = await bcrypt.compare(req.body.password, password);
        console.log('isPasswordCorrect', isPasswordCorrect);
        if (!user || !isPasswordCorrect) {
            return res.status(401).json({
                status: 'fail',
                mesagge: 'Incorrect email or password!',
            });
        }
        // IF EVRYHING IS OK SEND TOKEN
        const payload = {
            id: user._id,
            name: email,
        };
        const token = jwt.sign(payload, process.env.JWTSECRET);
        console.log('token', token);
        return res.status(200).json({
            status: 'sucess',
            token,
        });
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