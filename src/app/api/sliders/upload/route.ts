import { NextResponse, NextRequest } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const uploadDir = path.resolve(process.cwd(), 'public/sliders');

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      console.error('No file uploaded');
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filePath = path.join(uploadDir, file.name);

    await fs.writeFile(filePath, buffer);
    console.log(`File saved to ${filePath}`);

    const order = formData.get('order');
    const name = formData.get('name');
    const active = formData.get('active') === 'true';

    if (!order || !name || active === undefined) {
      console.error('Missing form data');
      return NextResponse.json({ error: 'Missing form data' }, { status: 400 });
    }

    await prisma.sliders.create({
      data: {
        order: parseInt(order as string, 10),
        path: `sliders/${file.name}`,
        name: name as string,
        active: Boolean(active),
      },
    });
    console.log('Database entry created');

    return NextResponse.json({ message: 'File uploaded successfully' });
  } catch (error) {
    console.error('Failed to process request', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
