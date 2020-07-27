import { Injectable } from "@mayajs/core";

@Injectable()
export class SampleServices {
  constructor() {}
  
  hello() {
    return "Hello world!";
  }

}