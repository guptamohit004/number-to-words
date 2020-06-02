# 🌐 Convert a Number to Words.

Convert a Number to Words  using DENO.

[![Test CI](https://github.com/denorg/get-ip/workflows/Deno%20CI/badge.svg)](https://github.com/guptamohit004/number_to_words/actions)

## ⭐ Getting started

Import the `convertTime` function and use it:

```js
import { numberToWords } from "https://deno.land/x/number_to_words/mod.js";

const numberToWord = async () => {
    var numbertoword=await numberToWords(32111);
    console.log("Converted Number is:"+ numbertoword.word )
    // Output : Converted Number is:Thirty Two Thousand, One Hundred, Eleven

}

numberToWord();
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run cli.ts`:

## 👩‍💻 Development

Run tests:

```bash
deno test


## 📄 License

MIT © Mohit Gupta

