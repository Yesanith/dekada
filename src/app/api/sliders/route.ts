import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const sliders = await prisma.sliders.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json(sliders, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch sliders', error);
    return NextResponse.json({ error: 'Failed to fetch sliders', details: error }, { status: 500 });
  }
}
