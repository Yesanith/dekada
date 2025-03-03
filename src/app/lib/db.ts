// src/app/lib/db.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUserByUsername(username: string) {
  return prisma.users.findUnique({
    where: { username },
  });
}

 