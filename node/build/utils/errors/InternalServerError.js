import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './CustomApiError';
class InternalServerError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    }
}
export default InternalServerError;
//# sourceMappingURL=InternalServerError.js.map