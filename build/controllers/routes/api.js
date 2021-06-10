"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Sub domains
const readingRoute_1 = __importDefault(require("./reading/readingRoute"));
const idRoute_1 = __importDefault(require("./id/idRoute"));
const serialRoute_1 = __importDefault(require("./serial/serialRoute"));
const router = express_1.Router();
/*
@route    GET /api/reading
@route    GET /api/reading?day=2019-04-30&sn=M709000844&id=99941666
@desc     Get data for earliest recording (2019-04-29)
@access   public
*/
router.get('/reading', readingRoute_1.default);
/*
@route    GET /api/serial
@desc     Get all unique sn
@access   public
*/
router.get('/serial', serialRoute_1.default);
/*
@route    GET /api/id
@desc     Get all unique ids
@access   public
*/
router.get('/id', idRoute_1.default);
exports.default = router;
