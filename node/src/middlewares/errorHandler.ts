import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

interface errorForSendingType {
  msg: string;
  stack?: string;
}

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  // set defaults
  console.log('/*--------------------------- ERROR ---------------------------*/', err);
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later!',
  };

  const errorForSending: errorForSendingType = {
    msg: customError.msg,
  };
  // ADD STACK IF DEVELOPMENT
  if (process.env.NODE_ENV === 'development') {
    errorForSending.stack = err.stack;
  }
  res.status(customError.statusCode).json(errorForSending);
};
export default errorHandler;
