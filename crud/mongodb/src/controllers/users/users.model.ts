import { MongoSchema, MongoModel } from "@mayajs/mongo";

const schema = MongoSchema({
  firstname: {
    type: String,
    required: [true, "First name is required."],
  },
  lastname: {
    type: String,
    required: [true, "Last name is required."],
  }
});

export default MongoModel("Users", schema);