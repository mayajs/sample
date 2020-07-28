import { MongoSchema, MongoModel } from "@mayajs/mongo";

const schema = MongoSchema({
  title: {
    required: [true, "Title is required!"],
    type: String,
  },
  completed: {
    required: [true, "Completed is required!"],
    type: String,
  },
});

export default MongoModel("Todos", schema);
