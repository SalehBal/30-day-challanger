"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.post('/signup');
router.post('/login');
router.get('/loginAutomatically');
exports.default = router;
