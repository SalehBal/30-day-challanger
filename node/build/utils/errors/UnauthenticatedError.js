import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './CustomApiError';
class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}
export default UnauthenticatedError;
//# sourceMappingURL=UnauthenticatedError.js.map