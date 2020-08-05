import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/sql";

@Injectable()
export class UserServices {
  @Models("user") model: any;

  constructor() {}

  async all() {
    try {
      return this.model.findAll();
    } catch (error) {
      return error;
    }
  }

  async byID(id: string) {
    try {
      return this.model.findAll({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }

  async create(body: any) {
    try {
      return this.model.create(body);
    } catch (error) {
      return error;
    }
  }
}
