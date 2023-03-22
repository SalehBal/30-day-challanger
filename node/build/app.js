"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
// APP
var app = (0, express_1.default)();
// CORS
app.use((0, cors_1.default)());
// LOG EVRY REQUEST
app.use((0, morgan_1.default)('dev'));
// Get acces to req body
app.use(express_1.default.json());
// UNHANDLED ROUTES
app.all('*', function (req, res) { });
exports.default = app;
