import { NextResponse, type NextRequest } from 'next/server';

function isLegacyBase64Url(pathname: string) {
  return /^\/guide\/[^/]+\.html$/.test(pathname) || /^\/[^/]+\.html$/.test(pathname);
}

export function proxy(request: NextRequest) {
  if (isLegacyBase64Url(request.nextUrl.pathname)) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'x-robots-tag': 'noindex',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/guide/:path*', '/:path*.html'],
};
