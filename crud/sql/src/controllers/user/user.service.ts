import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/sql";
import { ModelCtor, Model } from "sequelize";

@Injectable()
export class UserServices {
  @Models("user") model!: ModelCtor<Model<any, any>>;

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
      return this.model.findOne({
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

  async update(id: string, body: any) {
    try {
      await this.model.update(body, {
        where: { id },
      });
      return this.model.findOne({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }
}
