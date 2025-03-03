import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { promises as fs } from 'fs';
import path from 'path';
import { ObjectId } from 'mongodb';

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Slider ID is required' }, { status: 400 });
  }

  try {
    const slider = await prisma.sliders.findUnique({
      where: { id: new ObjectId(id).toString() },
    });

    if (!slider) {
      return NextResponse.json({ error: 'Slider not found' }, { status: 404 });
    }

    return NextResponse.json(slider, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch slider', error);
    return NextResponse.json({ error: 'Failed to fetch slider' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const data = await req.json();
    const { order, name, active } = data;

    if (!id || !order || !name || active === undefined) {
      console.error('Missing form data');
      return NextResponse.json({ error: 'Missing form data' }, { status: 400 });
    }

    const updatedSlider = await prisma.sliders.update({
      where: { id: new ObjectId(id).toString() },
      data: { order: parseInt(order, 10), name, active: active },
    });

    return NextResponse.json(updatedSlider, { status: 200 });
  } catch (error) {
    console.error('Failed to update slider', error);
    return NextResponse.json({ error: 'Failed to update slider' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Slider ID is required' }, { status: 400 });
  }

  try {
    // Fetch the slider record
    const slider = await prisma.sliders.findUnique({
      where: { id: new ObjectId(id).toString() },
    });

    if (!slider) {
      return NextResponse.json({ error: 'Slider not found' }, { status: 404 });
    }

    // Define the path to the file
    const filePath = path.resolve(process.cwd(), 'public', slider.path);

    // Delete the file from the filesystem
    await fs.unlink(filePath);
    console.log(`File deleted: ${filePath}`);

    // Delete the slider record from the database
    await prisma.sliders.delete({
      where: { id: new ObjectId(id).toString() },
    });

    return NextResponse.json({ message: 'Slider deleted' }, { status: 200 });
  } catch (error) {
    console.error('Failed to delete slider', error);
    return NextResponse.json({ error: 'Failed to delete slider' }, { status: 500 });
  }
}
