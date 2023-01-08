"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const questSchema = new Schema({
    qid: {
        type: String,
        required: true
    },
    questTitle: {
        type: String,
        required: true
    },
    requirements: {
        level: Number,
        quests: Array
    },
    type: {
        type: String,
        required: true
    },
    questMap: {
        type: Array,
        required: true
    },
    Tasks: {
        type: Array,
        required: true
    },
    itemsNeeded: {
        type: Object
    },
    questRewards: {
        type: Object,
        required: true,
        EXP: {
            type: Number
        },
        Roubles: {
            type: Object,
            ic0: {
                type: Number
            },
            ic1: {
                type: Number
            },
            ic2: {
                type: Number
            }
        },
        UnlockedPurchases: {
            type: Object
        }
    },
    forKappa: {
        type: Boolean,
        required: true
    },
    prevQuests: {
        type: Array
    },
    nextQuests: {
        type: Array
    }
}, { collection: 'quests' });
exports.default = mongoose_1.default.model('Quest', questSchema);
