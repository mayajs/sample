import { ModelCtor, Model, Sequelize } from "sequelize";
import { Injectable, Database } from "@mayajs/core";
import { Models } from "@mayajs/sql";

@Injectable()
export class UserServices {
  @Models("user") model!: ModelCtor<Model<any, any>>;
  @Database<Sequelize, ModelCtor<Model<any, any>>>("sql") db: any;

  constructor() {}

  async all() {
    try {
      return this.db.models.user.findAll();
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

  async delete(id: string) {
    try {
      await this.model.destroy({
        where: { id },
      });
      return `User id ${id} is deleted!`;
    } catch (error) {
      return error;
    }
  }
}
