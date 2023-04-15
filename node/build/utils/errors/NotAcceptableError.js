import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './ErrorClass.js';
class NotAcceptableError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.NOT_ACCEPTABLE;
    }
}
export default NotAcceptableError;
//# sourceMappingURL=NotAcceptableError.js.map