import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";

@Injectable()
export class SampleServices {
  @Models("sample") model: any;

  getSamples() {
    // Your logic here
    console.log(this.model);
    console.log("This is from SampleServices.");
  }
}
