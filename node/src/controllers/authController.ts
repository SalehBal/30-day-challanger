import { NextFunction, Request, Response } from 'express';
import AppError from '../utils/AppError.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
// SIGNUP
export async function signupFn(req: Request, res: Response, next: NextFunction) {
  const { password, email, userName, keepUserLoggedIn } = req.body;
  try {
    if (!password || !email || !userName) {
      next(new AppError('Please privide email, password and a username!').BadRequest());
    }
    const date = new Date();
    const newPassword = await bcrypt.hash(password, 16);
    const newUserData = {
      id: uuidv4(),
      email: email,
      userName: userName,
      password: newPassword,
      createdAt: date.toISOString(),
    };
    const newUser = await User.create(newUserData);
    const payload = {
      id: newUser.id,
    };
    const options = { expiresIn: '7d' };
    const token = jwt.sign(payload, process.env.JWTSECRET, options);
    if (keepUserLoggedIn) {
      res.cookie('jwt', token, { httpOnly: true, maxAge: 604800000 });
    }
    res.status(201).json({
      status: 'success',
    });
  } catch (err) {
    next(new AppError(err).BadRequest());
  }
}
// LOGIN
export async function loginFn(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password, keepUserLoggedIn } = req.body;
    // CHECK IF THERE IS EMAIL OR PASSWORD
    if (!email || !password) {
      next(new AppError('Please privide email and password!').BadRequest());
    }
    // CHECK IF USEREXISTS && PASSWORD IS CORRECT
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!user || !isPasswordCorrect) {
      next(new AppError('Incorrect email or password!').Unauthorized());
    }
    // IF EVRYHING IS OK SEND TOKEN
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.JWTSECRET);
    if (keepUserLoggedIn) {
      res.cookie('jwt', token, { httpOnly: true, maxAge: 604800000 });
    }
    return res.status(200).json({
      status: 'sucess',
    });
  } catch (err) {
    next(new AppError(err));
  }
}
export async function loginAutoFn(req: Request, res: Response, next: NextFunction) {}
