import { MongoSchema, MongoModel } from "@mayajs/mongo";

const schema = MongoSchema({
  description: {
    type: String,
  },
});

export default MongoModel("Todos", schema);
