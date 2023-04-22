import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './CustomApiError';
class BadGatewayError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.BAD_GATEWAY;
    }
}
export default BadGatewayError;
//# sourceMappingURL=BadGatewayError.js.map