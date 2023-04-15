class ErrorClass extends Error {
    constructor(message) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
}
export default ErrorClass;
//# sourceMappingURL=ErrorClass.js.map