import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './CustomApiError';
class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}
export default BadRequestError;
//# sourceMappingURL=BadRequestError.js.map