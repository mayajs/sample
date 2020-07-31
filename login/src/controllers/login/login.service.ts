import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";
import { PaginateModel } from "mongoose";

@Injectable()
export class LoginServices {
  @Models("login") model!: PaginateModel<any>;

  constructor() {}

  login(body: any) {
    return body;
  }
}
