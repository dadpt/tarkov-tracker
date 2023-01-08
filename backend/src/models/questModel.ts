import mongoose from "mongoose";

const Schema = mongoose.Schema;

const questSchema = new Schema ({
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
}, {collection: 'quests'})

export default mongoose.model('Quest', questSchema);