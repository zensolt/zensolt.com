import {
  createOgImageResponse,
  ogContentType,
  ogImageAlt,
  ogImageSize,
} from "../lib/og-image";

export const runtime = "edge";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return createOgImageResponse();
}
