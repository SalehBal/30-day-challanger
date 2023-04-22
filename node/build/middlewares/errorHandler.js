import { StatusCodes } from 'http-status-codes';
const errorHandler = (err, req, res, next) => {
    // set defaults
    console.log('/*--------------------------- ERROR ---------------------------*/', err);
    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try again later!',
    };
    const errorForSending = {
        msg: customError.msg,
    };
    // ADD STACK IF DEVELOPMENT
    if (process.env.NODE_ENV === 'development') {
        errorForSending.stack = err.stack;
    }
    res.status(customError.statusCode).json(errorForSending);
};
export default errorHandler;
//# sourceMappingURL=errorHandler.js.map