import { Schema, model, models } from "mongoose";

const ongSchema = new Schema({
  ongCode: String,
  password: String,
  address: String,
  type: String,
});

const Ongs = models.ongs || model("ongs", ongSchema);

export default Ongs;
