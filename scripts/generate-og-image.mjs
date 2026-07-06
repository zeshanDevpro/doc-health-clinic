import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const logoPath = path.join(root, "public/images/Waqar-almadina-full-logo.jpeg");
const outputPath = path.join(root, "public/images/og-image.jpg");

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const BACKGROUND = { r: 249, g: 248, b: 246 }; // brand off-white

const logo = sharp(logoPath);
const logoMeta = await logo.metadata();
const maxLogoWidth = Math.floor(OG_WIDTH * 0.72);
const maxLogoHeight = Math.floor(OG_HEIGHT * 0.78);

const resizedLogo = await logo
  .resize({
    width: maxLogoWidth,
    height: maxLogoHeight,
    fit: "inside",
    withoutEnlargement: false,
  })
  .png()
  .toBuffer();

const resizedMeta = await sharp(resizedLogo).metadata();
const left = Math.floor((OG_WIDTH - (resizedMeta.width ?? 0)) / 2);
const top = Math.floor((OG_HEIGHT - (resizedMeta.height ?? 0)) / 2);

await sharp({
  create: {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    channels: 3,
    background: BACKGROUND,
  },
})
  .composite([{ input: resizedLogo, left, top }])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(outputPath);

console.log("Generated", outputPath, `${OG_WIDTH}x${OG_HEIGHT}`);
