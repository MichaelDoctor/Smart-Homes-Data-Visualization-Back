"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const path_1 = __importDefault(require("path"));
const api_1 = __importDefault(require("./controllers/routes/api"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const crossOrigin_1 = __importDefault(require("./middleware/crossOrigin"));
dotenv_1.config();
const PORT = 5000 || process.env.PORT;
const app = express_1.default();
// Check DB accessability
const checkDB = async () => {
    try {
        await dbConfig_1.default();
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use(express_1.default.json({ type: 'application/json' }));
        // Give React access to node
        app.use(crossOrigin_1.default);
        // Access React Frontend
        app.use(express_1.default.static(path_1.default.join(__dirname, 'views/build')));
        // Api endpoints
        app.use('/api', api_1.default);
        // Handles any requests that don't match the ones above
        app.get('*', (req, res) => {
            res.sendFile(path_1.default.join(`${__dirname}/views/build/index.html`));
        });
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`);
        });
    }
    catch (err) {
        console.log(err);
    }
};
checkDB();
exports.default = app;
