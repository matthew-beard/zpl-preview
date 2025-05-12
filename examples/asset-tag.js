import { zplToPng } from "../index.js";
import { writeFileSync } from "fs";

const zpl = `^XA
^FO50,50^ADN,36,20^FDHello ZPL!^FS
^XZ`;

async function run() {
  const imageBuffer = await zplToPng(zpl);
  writeFileSync("./examples/output.png", imageBuffer);
  console.log("PNG saved to ./examples/output.png");
}

run();
