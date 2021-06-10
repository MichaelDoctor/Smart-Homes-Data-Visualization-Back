"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crossOrigin = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // if (req.method === 'OPTIONS') {
    //   return res.sendStatus(200);
    // }
    next();
};
exports.default = crossOrigin;
