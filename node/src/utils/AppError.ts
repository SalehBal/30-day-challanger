import { StatusCodes } from 'http-status-codes';
class AppError extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
  BadRequest() {
    this.statusCode = StatusCodes.BAD_REQUEST;
    return this;
  }
  NotFound() {
    this.statusCode = StatusCodes.NOT_FOUND;
    return this;
  }
  Unauthorized() {
    this.statusCode = StatusCodes.UNAUTHORIZED;
    return this;
  }
}

export default AppError;
