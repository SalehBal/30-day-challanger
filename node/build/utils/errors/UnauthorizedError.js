import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './CustomApiError';
class UnauthorizedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}
export default UnauthorizedError;
//# sourceMappingURL=UnauthorizedError.js.map