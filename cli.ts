import { numberToWords } from "./mod.js";

const cli = async () => {
  if (Deno.args.length) {
    const number = Deno.args[0];
    var NumberToWord=await numberToWords(number);
    console.log("Entered Number: " + NumberToWord.number)
    console.log("Number in Words : " + NumberToWord.word)
  }
  else{
    console.log("Please pass in a number (example): deno run cli.ts 22")
  }
}

cli();
