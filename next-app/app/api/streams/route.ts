import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
// @ts-ignore
import youtubesearchapi from "youtube-search-api";

var YT_REGEX =
  /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:m\.)?(?:youtu(?:be)?\.com\/(?:v\/|embed\/|watch(?:\/|\?v=))|youtu\.be\/)((?:\w|-){11})(?:\S+)?$/;

const CreateStreamSchema = z.object({
  creatorId: z.string(),
  url: z.string(),
});
export async function POST(req: NextRequest) {
  try {
    const data = CreateStreamSchema.parse(await req.json());
    const isYt = data.url.match(YT_REGEX);
    if (!isYt) {
      return NextResponse.json(
        {
          message: "Wrong URL Format",
        },
        { status: 411 }
      );
    }

    const extractedId = data.url.split("?v=")[1];

    const ytVideoData = await youtubesearchapi.GetVideoDetails(extractedId);
    const thumbnails = ytVideoData.thumbnail.thumbnails;

    const stream = await prisma.stream.create({
      data: {
        userId: data.creatorId,
        url: data.url,
        extractedId,
        type: "Youtube",
        title: ytVideoData.title ?? "Can't Find Video",
        smallImg:
          (thumbnails.length > 1
            ? thumbnails[thumbnails.length - 2].url
            : thumbnails[thumbnails.length - 1]) ?? "Unable to fetch thumbnail",
        bigImg:
          thumbnails[thumbnails.length - 1].url ?? "Unable to fetch thumbnail",
      },
    });
    return NextResponse.json({
      message: "Added Stream",
      id: stream.id,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        message: "Error while adding a stream",
      },
      { status: 411 }
    );
  }
}

export async function GET(req: NextRequest) {
  const creatorId = req.nextUrl.searchParams.get("creatorId");
  const streams = await prisma.stream.findMany({
    where: {
      userId: creatorId ?? "",
    },
  });

  return NextResponse.json({
    streams,
  });
}
