import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest){
  console.log('Middleware 실행 중! 체크중~~~@@@')
  if (request.nextUrl.pathname.startsWith('/products/1004')){
    console.log('Middleware - 경로를 리다이렉팅함! ')
    return NextResponse.redirect(new URL('/products/1004', request.url));
  }
}


export const config = {
  matcher: ['/products/:path*']
}