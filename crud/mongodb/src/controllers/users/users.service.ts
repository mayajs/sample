import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";

@Injectable()
export class UsersServices {
  @Models("users") model:any;
  constructor() {}
  
  async add(body: any) {
    const todo = new this.model(body);
    await todo.save();
    return todo.toObject();
  }

  async get() {
    return await this.model.find();
  }

  async getById(_id: string) {
    return await this.model.findOne({ _id });
  }

  async update(_id: string, body: any) {
    return await this.model.findOneAndUpdate({ _id }, body, {new: true});
  }

  async delete(_id: string) {
    return await this.model.findOneAndDelete({ _id });
  }
  
}