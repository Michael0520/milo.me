import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { NextResponse } from "next/server";
import sharp from "sharp";
import VCard from "vcard-creator";

import { USER } from "@/features/portfolio/data/user";
import { decodeEmail, decodePhoneNumber } from "@/utils/string";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export async function GET() {
  const card = new VCard();

  card
    .addName({ familyName: USER.lastName, givenName: USER.firstName })
    .addPhoneNumber({ number: decodePhoneNumber(USER.phoneNumber) })
    .addAddress({ locality: USER.address })
    .addEmail({ address: decodeEmail(USER.email) })
    .addUrl({ url: USER.website });

  const photo = await getVCardPhoto(USER.avatar);
  if (photo) {
    card.addPhoto({ image: photo.image, mime: photo.mime });
  }

  if (USER.jobs.length > 0) {
    const company = USER.jobs[0];
    card.addCompany({ name: company.company }).addJobtitle(company.title);
  }

  return new NextResponse(card.toString(), {
    status: 200,
    headers: {
      "Content-Type": "text/x-vcard",
      "Content-Disposition": `attachment; filename=${USER.username}-vcard.vcf`,
    },
  });
}

// The route is force-static, so this runs at build time when nothing is
// serving the site. Read the avatar off disk from public/ — fetch() on the
// relative USER.avatar path throws (Node requires an absolute URL) and the
// old catch swallowed it, so the vCard never carried a photo.
async function getVCardPhoto(publicPath: string) {
  try {
    const buffer = await readFile(join(process.cwd(), "public", publicPath));
    if (buffer.length === 0) {
      return null;
    }

    const jpegBuffer = await convertImageToJpeg(buffer);
    const image = jpegBuffer.toString("base64");

    return {
      image,
      mime: "jpeg",
    };
  } catch {
    return null;
  }
}

async function convertImageToJpeg(imageBuffer: Buffer): Promise<Buffer> {
  try {
    const jpegBuffer = await sharp(imageBuffer)
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true,
      })
      .toBuffer();

    return jpegBuffer;
  } catch (error) {
    console.error("Error converting image to JPEG:", error);
    throw error;
  }
}
