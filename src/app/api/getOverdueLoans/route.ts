import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const cookieStore = await cookies();
    const credentials = cookieStore.get('access_token')?.value;

    const searchParams = request.nextUrl.searchParams;
    const nextCursor = searchParams.get('cursor');
    const name = searchParams.get('name');

    let apiUrl = `${process.env.API_SERVER_URL}/loan`;

    if (name) {
        apiUrl += `?name=${encodeURIComponent(name)}&overdue_status=1`;
    } else if (nextCursor === "") {
        apiUrl += `?order[]=id_ASC&overdue_status=1&take=6`;
    } else {
        apiUrl += `?cursor=${nextCursor}&overdue_status=1`;
    }

    // API 요청
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${credentials}`
        },
    });

    if (!response.ok) {
        return NextResponse.json(null);
    }

    const data = await response.json();
    const loans = data.data;
    const count = data.count;
    const returnCursor = data.nextCursor;

    return NextResponse.json({ loans, returnCursor, count });
}