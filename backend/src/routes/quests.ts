import express from 'express';
const router = express.Router();
import { getQuest, getQuests } from '../controllers/questControllers';

// GET home page
router.get('/', (req: any, res: any) => {
    res.json({mssg: 'GET home page'})
})

// GET quests
router.get('/quests', getQuests);

// GET individual quest
router.get('/quests/:id', getQuest);

// GET user profile
router.get('/:userid', (req: any, res: any) => {
    res.json({mssg: 'GET user profile'})
})

// GET users uncompleted quests
router.get('/:userid/quests', (req: any, res: any) => {
    res.json({mssg: 'GET users quests'})
})

// GET users completed quests
router.get('/:userid/completed', (req: any, res: any) => {
    res.json({mssg: 'GET users completed quests'})
})

// GET user friend list
router.get('/:userid/friends', (req: any, res: any) => {
    res.json({mssg: 'GET user friend list'})
})

// GET users friend profile
router.get('/:userid/friends/:userid', (req: any, res: any) => {
    res.json({mssg: 'GET user friend profile'})
})

export default router;