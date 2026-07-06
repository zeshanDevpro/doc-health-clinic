import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const root = process.cwd();
const iconPath = path.join(root, "public/images/demo-realestate-icon.svg");

/** How much of the favicon canvas the icon fills (0–1). */
const LOGO_SCALE = 0.82;

async function getSquareIcon(size) {
  const logoSize = Math.max(1, Math.floor(size * LOGO_SCALE));
  const offset = Math.floor((size - logoSize) / 2);

  const resizedLogo = await sharp(iconPath)
    .resize(logoSize, logoSize, { fit: "contain" })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: resizedLogo, left: offset, top: offset }])
    .png()
    .toBuffer();
}

const sizes = [16, 32, 48];
const pngBuffers = await Promise.all(sizes.map((size) => getSquareIcon(size)));

const icoBuffer = await toIco(pngBuffers);

fs.writeFileSync(path.join(root, "app/icon.png"), await getSquareIcon(32));
fs.writeFileSync(
  path.join(root, "app/apple-icon.png"),
  await getSquareIcon(180),
);
fs.writeFileSync(path.join(root, "app/favicon.ico"), icoBuffer);

console.log("Generated Demo Real Estate favicon assets");
console.log("  app/icon.png");
console.log("  app/apple-icon.png");
console.log("  app/favicon.ico", icoBuffer.length, "bytes");
