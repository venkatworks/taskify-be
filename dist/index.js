"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const routes_1 = __importDefault(require("./routes/routes"));
const morgan_1 = __importDefault(require("morgan"));
const connection_1 = require("./dbConnection/connection");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms'));
app.use('/v1', routes_1.default);
(0, connection_1.DBConnection)().then(() => {
});
app.listen(process.env.PORT, () => {
    console.log('Listening on port');
});
