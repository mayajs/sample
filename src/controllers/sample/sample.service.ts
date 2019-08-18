import { Injectable, Models } from "@mayajs/core";

@Injectable()
export class SampleServices {
  @Models("sample") model: any;

  getSamples() {
    // Your logic here
    console.log("this is from SampleServices.");
  }
}
