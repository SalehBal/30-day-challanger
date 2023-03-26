import { Request, Response } from 'express';

class AppError extends Error {
  errorCode: string;
  statusCode: number;

  constructor(errorCode: string, message: string, statusCode: number) {
    super(message);
    this.errorCode = errorCode;
    this.statusCode = statusCode;
  }
}
const errorHandler = (error: { name: string; details: any }, req: Request, res: Response, next: any) => {
  console.log(error);

  if (error.name === 'ValidationError') {
    return res.status(400).send({
      type: 'ValidationError',
      details: error.details,
    });
  }
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      errorCode: error.errorCode,
    });
  }

  return res.status(500).send('Something went wrong');
};

export default errorHandler;
