import { StatusCodes } from 'http-status-codes';
import CustomAPIError from './CustomApiError';
class ProxyAuthenticationRequiredError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.PROXY_AUTHENTICATION_REQUIRED;
    }
}
export default ProxyAuthenticationRequiredError;
//# sourceMappingURL=ProxyAuthenticationRequiredError.js.map