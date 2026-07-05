import fs from "node:fs";
import path from "node:path";

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

export interface GalleryItem {
  image: string;
  text: string;
}

function toTitle(fileName: string): string {
  const base = fileName.slice(0, fileName.lastIndexOf("."));
  return base
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getGalleryItems(): GalleryItem[] {
  let files: string[];
  try {
    files = fs.readdirSync(GALLERY_DIR);
  } catch {
    return [];
  }

  return files
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => ({
      image: `/images/gallery/${file}`,
      text: toTitle(file),
    }));
}
