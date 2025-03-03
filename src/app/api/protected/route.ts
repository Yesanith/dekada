import { NextResponse, NextRequest } from 'next/server';
import { authenticateToken } from '../../lib/middleware';

export async function GET(req: NextRequest) {
  const authResponse = authenticateToken(req);
  if (authResponse.status === 401) {
    return authResponse;
  }

  // Your protected route logic here
  return NextResponse.json({ message: 'Protected content' });
}
