class AppError extends Error {
    constructor(errorCode, message, statusCode) {
        super(message);
        this.errorCode = errorCode;
        this.statusCode = statusCode;
    }
}
const errorHandler = (error, req, res, next) => {
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
//# sourceMappingURL=errorHandler.js.map