import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/sql";

@Injectable()
export class UserServices {
  @Models("user") model: any;

  constructor() {}

  hello() {
    return "Hello world!";
  }

  async create(body: any) {
    try {
      await this.model.create(body);
    } catch (error) {
      return error;
    }
  }
}
