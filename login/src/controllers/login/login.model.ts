import { MongoSchema, MongoModel } from "@mayajs/mongo";

const schema = MongoSchema({
  // Add mongo fields here
});

export default MongoModel("Sample", schema);