import { NextResponse, NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';
import { parse } from 'cookie';

const secret = process.env.JWT_SECRET_TOKEN || 'your-secret-key';

export function authenticateToken(req: NextRequest) {
  const cookieHeader = req.headers.get('cookie');
  const cookies = parse(cookieHeader || '');
  const token = cookies.token;

  if (!token) {
    return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
  }

  try {
    verify(token, secret);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
  }
}
