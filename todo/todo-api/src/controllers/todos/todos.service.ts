import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";

@Injectable()
export class TodosServices {
  @Models("todos") model: any;

  constructor() {}

  async addUser(body: any) {
    const user = new this.model(body);
    await user.save();
    return user.toObject();
  }

  async allUser() {
    return await this.model.find();
  }

  async userbyId(_id: string) {
    return await this.model.find({ _id });
  }

  async updateUser(_id: string, body: any) {
    return await this.model.findOneAndUpdate({ _id }, body, { new: true });
  }

  async deleteUser(_id: string) {
    return await this.model.findOneAndDelete({ _id });
  }
}
