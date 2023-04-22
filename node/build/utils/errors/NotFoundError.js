import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './CustomApiError';
class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}
export default NotFoundError;
//# sourceMappingURL=NotFoundError.js.map