// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // اگر روت اصلی است، به /login ریدایرکت کن
  if (pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// این middleware فقط روی مسیر روت اصلی اجرا شود
export const config = {
  // matcher: ['/']
  matcher: []
};
