const mongoose = require("mongoose");

const { Schema } = mongoose;

const schemaOptions = {
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true,
  },
};

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        exerciseType: String,
        name: String,
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number,
      },
    ],
  }, schemaOptions);