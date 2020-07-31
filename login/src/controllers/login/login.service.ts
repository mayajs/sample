import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";
import { PaginateModel } from "mongoose";
import { Document } from "mongoose";
interface ILogin {
  email: string;
  password: string;
}

interface ILoginModel extends ILogin, Document {
  comparePassword: (password: string) => boolean;
}

@Injectable()
export class LoginServices {
  @Models("login") model!: PaginateModel<ILoginModel>;

  constructor() {}

  async login(body: any) {
    try {
      const user = await this.model.findOne({email: body.email});
      
      if (!user) {
        throw "User not found!";
      }

      if (!user?.comparePassword(body.password)) {
        throw "Password not matched";
      }

      return "Login successfully!";
    } catch (error) {
      return error;
    }
  }
}
