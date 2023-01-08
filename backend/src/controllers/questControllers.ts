import Quest from "../models/questModel";
import mongoose from "mongoose";

// get all quests
const getQuests = async (req: any, res: any) => {
    const quests = await Quest.find({});

    if(!quests) {
        return res.status(404).json({error: 'Error retrieving quests'})
    }

    res.status(200).json(quests);
}

// get one quest
const getQuest = async (req: any, res: any) => {
    const { id } = req.params;

    const quest = await Quest.findById(id);

    if(!quest) {
        return res.status(404).json({error: 'No such quest'})
    }

    res.status(200).json(quest);
}

export { getQuests, getQuest };