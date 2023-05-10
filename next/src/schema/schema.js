import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  ongCode: String,
  password: String,
  address: String,
});

const Users = models.user || model("user", userSchema);

export default Users;
