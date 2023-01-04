"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const quests_1 = __importDefault(require("./routes/quests"));
// express app
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
// routes
app.use('', quests_1.default);
// connect to DB
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT);
    });
})
    .catch((error) => {
    console.log(error);
});
