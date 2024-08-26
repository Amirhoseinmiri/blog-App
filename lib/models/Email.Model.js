import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// check if mongoose model.email is available
const EmailModel = mongoose.models.email || mongoose.model("email", Schema);
export default EmailModel;
