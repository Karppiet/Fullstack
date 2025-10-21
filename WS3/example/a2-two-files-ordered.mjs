import { readFile } from "fs/promises";
const one = await readFile("./files/example1.txt", "utf8");
const two = await readFile("./files/example2.txt", "utf8");
console.log(one);
console.log(two);


import { readFile, writeFile, appendFile } from "fs/promises";

const a = await readFile("./files/example1.txt", "utf8");
const b = await readFile("./files/example2.txt", "utf8");

// combine
await writeFile("./files/combined.txt", a + "\n" + b, "utf8");

// prepend
const current = await readFile("./files/combined.txt", "utf8");
await writeFile("./files/combined.txt", "TOP TEXT\n" + current, "utf8");

// append
await appendFile("./files/combined.txt", "\nEND TEXT\n", "utf8");
console.log("Done. See files/combined.txt");

const fs = require("fs");
const dir = "./new-data";
if (!fs.existsSync(dir)) fs.mkdirSync(dir);
const file = dir + "/note.txt";
if (!fs.existsSync(file)) fs.writeFileSync(file, "Hello from WS-3!");
console.log("Ready.");
// To test delete, uncomment:
// fs.unlinkSync("./files/combined.txt"); console.log("Deleted combined.txt");