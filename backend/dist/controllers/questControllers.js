"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuest = exports.getQuests = void 0;
const questModel_1 = __importDefault(require("../models/questModel"));
// get all quests
const getQuests = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quests = yield questModel_1.default.find({});
    if (!quests) {
        return res.status(404).json({ error: 'Error retrieving quests' });
    }
    res.status(200).json(quests);
});
exports.getQuests = getQuests;
// get one quest
const getQuest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const quest = yield questModel_1.default.findById(id);
    if (!quest) {
        return res.status(404).json({ error: 'No such quest' });
    }
    res.status(200).json(quest);
});
exports.getQuest = getQuest;
