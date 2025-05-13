"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const TaskController_1 = require("../controller/TaskController");
const router = express_1.default.Router();
router.get('/task', TaskController_1.getTask);
router.get('/task/:id', TaskController_1.getTaskById);
router.post('/ask', TaskController_1.saveTask);
router.put('/task', TaskController_1.updateTask);
router.delete('/task', TaskController_1.deleteTask);
exports.default = router;
