import { Request, Response } from 'express';
import User from '../models/userModel';
import { v4 as uuidv4 } from 'uuid';
import hashPassword from '../utils/hashPassword';
import jwt from 'jsonwebtoken';

export async function signupFn(req: Request, res: Response) {
  try {
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
    const token = jwt.sign(payload, 'process.env.JWTSECRET');
    res.status(201).json({
      status: 'sucess',
      token,
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    });
  }
}
export async function loginFn(req: Request, res: Response) {}
export async function loginAutoFn(req: Request, res: Response) {}
