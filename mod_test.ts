import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { numberToWords } from "./mod.js";

const validateNumber = (word: any) => {
  if(word=="One Hundred, Twenty Three")
     return true;
  return false
}

Deno.test("test numberToWords function", async (): Promise<void> => {
  var data= await numberToWords(123);
   assertEquals(validateNumber(data.word), true);
});
