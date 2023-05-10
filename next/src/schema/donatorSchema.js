import { Schema, model, models } from "mongoose";

const donatorSchema = new Schema({
  address: String,
  type: String,
});

const Donators = models.donators || model("donators", donatorSchema);

export default Donators;
