import { Request, Response } from 'express';
import User from '../models/userModel';
import hashPassword from '../utils/hashPassword';

export async function signupFn(req: Request, res: Response) {
  try {
    const newPassword = await hashPassword(req.body.password);
    const newUser = await User.create({
      email: req.body.email,
      password: req.body.password,
      userName: req.body.userName,
      passwordConfirm: req.body.passwordConfirm,
    });
    // const token = signToken(newUser._id);
    // newUser.password = undefined;
    // newUser.passwordConfirm = undefined;
    // res.status(201).json({
    //   status: 'sucess',
    //   token,
    //   data: { newUser },
    // });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err,
    });
  }
}
export async function loginFn(req: Request, res: Response) {}
export async function loginAutoFn(req: Request, res: Response) {}
