import { Injectable } from "@mayajs/core";

@Injectable()
export class UpdateServices {
  constructor() {}

  async updateUser(model: any, _id: string, body: any) {
    return await model.findOneAndUpdate({ _id }, body, { new: true });
  }
}
