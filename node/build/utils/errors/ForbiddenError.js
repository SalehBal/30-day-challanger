import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './CustomApiError';
class ForbiddenError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}
export default ForbiddenError;
//# sourceMappingURL=ForbiddenError.js.map