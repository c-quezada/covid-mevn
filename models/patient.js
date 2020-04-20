import mongoose, { Schema } from "mongoose";

const patientSchema = new Schema({
  name: { type: String, maxlength: 50, unique: true, required: true },
  ubication: { type: String, required: true },
  documents: { type: Object },
  createdAt: { type: Date, default: Date.now },
  verifiedAt: { type: Date },
  status: {
    yype: String,
    enum: ["Confirmed", "Quarantine", "Recovered", "Death"],
  },
});

const Patient = mongoose.model("patient", patientSchema);

export default Patient;
