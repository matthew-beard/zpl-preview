import { createCanvas } from "canvas";

export async function zplToPng(zplString) {
  const canvas = createCanvas(600, 300);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("ZPL Rendered Placeholder", 50, 150);

  return canvas.toBuffer("image/png");
}
