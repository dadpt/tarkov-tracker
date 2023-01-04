"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
// GET home page
router.get('/', (req, res) => {
    res.json({ mssg: 'GET home page' });
});
// GET quests
router.get('/quests', (req, res) => {
    res.json({ mssg: 'GET list of quests' });
});
// GET individual quest
router.get('/quests/:id', (req, res) => {
    res.json({ mssg: 'GET individual quest' });
});
// GET user profile
router.get('/:userid', (req, res) => {
    res.json({ mssg: 'GET user profile' });
});
// GET users uncompleted quests
router.get('/:userid/quests', (req, res) => {
    res.json({ mssg: 'GET users quests' });
});
// GET users completed quests
router.get('/:userid/completed', (req, res) => {
    res.json({ mssg: 'GET users completed quests' });
});
// GET user friend list
router.get('/:userid/friends', (req, res) => {
    res.json({ mssg: 'GET user friend list' });
});
// GET users friend profile
router.get('/:userid/friends/:userid', (req, res) => {
    res.json({ mssg: 'GET user friend profile' });
});
exports.default = router;
