import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";
import { PaginateModel } from "mongoose";
import { Document } from "mongoose";
 interface ILogin {
  email: string;
  password: string;
}

 interface ILoginModel extends ILogin , Document {
  comparePassword: (password: string) => boolean;
}

@Injectable()
export class LoginServices {
  @Models("login") model!: PaginateModel<ILoginModel>;

  constructor() {}

  login(body: any) {
    return body;
  }
}
