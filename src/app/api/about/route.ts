import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const about = await prisma.about.findUnique({
      where: { id:"669551a5a02ba79c564c519b" }, // assuming you have a single row with id 1
    });
    return NextResponse.json(about, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch about text' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { aboutText } = await req.json();

  try {
    const updatedAbout = await prisma.about.update({
      where: { id: "669551a5a02ba79c564c519b" }, // assuming you have a single row with id 1
      data: { text: aboutText },
    });
    return NextResponse.json({ message: "updated", about: updatedAbout }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update about text' }, { status: 500 });
  }
}
