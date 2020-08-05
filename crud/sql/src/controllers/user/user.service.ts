import { Injectable } from "@mayajs/core";

@Injectable()
export class UserServices {
  constructor() {}

  hello() {
    return "Hello world!";
  }
}
