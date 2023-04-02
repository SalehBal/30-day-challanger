import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/AppError.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// SIGNUP
export async function signupFn(req: Request, res: Response, next: NextFunction) {
  const { password, email, userName } = req.body;
  try {
    if (!password || !email || !userName) {
      throw new AppError('Please privide email, password and a username!').BadRequest();
    }
    const date = new Date();
    const newPassword = await bcrypt.hash(password, 16);
    const newUser = await User.create({
      email: email,
      userName: userName,
      password: newPassword,
      createdAt: date.toISOString(),
    });
    const payload = {
      id: newUser._id,
    };
    const options = { expiresIn: '7d' };
    const token = jwt.sign(payload, process.env.JWTSECRET, options);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 604800000 });
    res.status(201).json({
      status: 'success',
    });
  } catch (err) {
    throw new AppError(err);
  }
}
// LOGIN
export async function loginFn(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    // CHECK IF THERE IS EMAIL OR PASSWORD
    if (!email || !password) {
      throw new AppError('Please privide email and password!').BadRequest();
    }
    // CHECK IF USEREXISTS && PASSWORD IS CORRECT
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordCorrect) {
      throw new AppError('Incorrect email or password!').Unauthorized();
    }
    // IF EVRYHING IS OK SEND TOKEN
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.JWTSECRET);
    res.cookie('jwt', token, { httpOnly: true, maxAge: 604800000 });
    return res.status(200).json({
      status: 'sucess',
    });
  } catch (err) {
    throw new AppError(err);
  }
}
export async function loginAutoFn(req: Request, res: Response, next: NextFunction) {}
