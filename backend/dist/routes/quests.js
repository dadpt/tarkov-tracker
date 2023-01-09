"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const questControllers_1 = require("../controllers/questControllers");
// GET home page
router.get('/', (req, res) => {
    res.json({ mssg: 'GET home page' });
});
// GET quests
router.get('/api/quests', questControllers_1.getQuests);
// GET individual quest
router.get('/api/quests/:id', questControllers_1.getQuest);
// GET user profile
router.get('/api/:userid', (req, res) => {
    res.json({ mssg: 'GET user profile' });
});
// GET users uncompleted quests
router.get('/api/:userid/quests', (req, res) => {
    res.json({ mssg: 'GET users quests' });
});
// GET users completed quests
router.get('/api/:userid/completed', (req, res) => {
    res.json({ mssg: 'GET users completed quests' });
});
// GET user friend list
router.get('/api/:userid/friends', (req, res) => {
    res.json({ mssg: 'GET user friend list' });
});
// GET users friend profile
router.get('/api/:userid/friends/:userid', (req, res) => {
    res.json({ mssg: 'GET user friend profile' });
});
exports.default = router;
