"use server";

import { NextResponse, NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import { getUserByUsername } from '../../lib/db'; // Adjust the path as needed 

const secret = process.env.JWT_SECRET_TOKEN || '01M85JHXDZJFoMJckgbdwYEY+kPNGg+O+2JdDU+dBCU';

export async function POST(request: NextRequest) {
    const { username, password } = await request.json();

    console.log("Received:", username, password);
    // Fetch the user from the database
    const user = await getUserByUsername(username);
    if (!user) {
        return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    console.log("User found:", user);

    // Verify the stored JWT password
    let decodedPassword;
    try {
        const decoded = jwt.verify(user.password, secret);
        // @ts-ignore
        decodedPassword = decoded.password;
    } catch (error) {
        console.error('Error verifying password:', error);
        return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    // Compare the provided password with the decoded password
    if (decodedPassword !== password) {
        console.log("Password does not match");
        return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
    }

    // Generate a new JWT token for the session
    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

    // Set the token as a cookie
    const response = NextResponse.json({ message: 'Login successful', token: token }); 

    return response;
}
