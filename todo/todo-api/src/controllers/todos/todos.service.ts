import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";

@Injectable()
export class TodosServices {
  @Models("todos") model: any;

  constructor() {}

  async addTodo(body: any) {
    const user = new this.model(body);
    await user.save();
    return user.toObject();
  }

  async allTodos() {
    return await this.model.find();
  }

  async todobyId(_id: string) {
    return await this.model.find({ _id });
  }

  async updateTodo(_id: string, body: any) {
    return await this.model.findOneAndUpdate({ _id }, body, { new: true });
  }

  async deleteTodo(_id: string) {
    return await this.model.findOneAndDelete({ _id });
  }
}
