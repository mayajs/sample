import { MongoSchema, MongoModel } from "@mayajs/mongo";

const schema = MongoSchema({
  email: {
    type: String,
    required: [ true, "Email is required"]
  },
  password: {
    type: String,
    required: [ true, "Password is required"]
  }
});

export default MongoModel("Login", schema);