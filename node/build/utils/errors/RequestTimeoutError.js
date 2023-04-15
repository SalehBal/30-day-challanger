import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './CustomApiError';
class RequestTimeout extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.REQUEST_TIMEOUT;
    }
}
export default RequestTimeout;
//# sourceMappingURL=RequestTimeoutError.js.map