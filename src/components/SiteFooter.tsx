'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gamepad2, Mail, MessageSquare, Twitter } from 'lucide-react';
import { categories, games, siteConfig } from '@/lib/site';

export function SiteFooter() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const isPortalChrome =
    pathname === '/' || pathname.startsWith('/game/') || pathname.startsWith('/category/');

  return (
    <footer
      className={
        isPortalChrome
          ? 'border-t border-white/8 bg-[#04060a] text-white'
          : 'border-t bg-muted/30'
      }
    >
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.25fr)_repeat(3,minmax(0,0.75fr))]">
          <div className="space-y-4">
            <Link
              href="/"
              className={`flex items-center gap-2 text-lg font-semibold ${
                isPortalChrome ? 'text-white' : 'text-foreground'
              }`}
            >
              <Gamepad2 className={`h-5 w-5 ${isPortalChrome ? 'text-white' : 'text-primary'}`} />
              <span>{siteConfig.name}</span>
            </Link>
            <p className={`max-w-sm text-sm leading-7 ${isPortalChrome ? 'text-zinc-400' : 'text-muted-foreground'}`}>
              Guide hubs for launch-week browsing, walkthrough planning, platform fact checks, and
              pre-release pages that stay useful without pretending to know what has not been
              verified yet.
            </p>
            <a
              href={siteConfig.links.reddit}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm transition-colors ${
                isPortalChrome ? 'text-zinc-300 hover:text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              Join our community: r/enjoy4game
            </a>
          </div>

          <div className="space-y-4">
            <h3 className={`text-sm font-semibold uppercase tracking-[0.18em] ${isPortalChrome ? 'text-zinc-500' : 'text-foreground'}`}>
              Games
            </h3>
            <ul className="space-y-2">
              {games.map((game) => (
                <li key={game.id}>
                  <Link
                    href={`/game/${game.slug}`}
                    className={`text-sm transition-colors ${
                      isPortalChrome ? 'text-zinc-300 hover:text-white' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {game.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className={`text-sm font-semibold uppercase tracking-[0.18em] ${isPortalChrome ? 'text-zinc-500' : 'text-foreground'}`}>
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/category/${category.slug}`}
                    className={`text-sm transition-colors ${
                      isPortalChrome ? 'text-zinc-300 hover:text-white' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className={`text-sm font-semibold uppercase tracking-[0.18em] ${isPortalChrome ? 'text-zinc-500' : 'text-foreground'}`}>
              Site
            </h3>
            <ul className="space-y-2">
              {[
                ['/about', 'About'],
                ['/contact', 'Contact'],
                ['/privacy-policy', 'Privacy Policy'],
                ['/terms-of-service', 'Terms of Service'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-sm transition-colors ${
                      isPortalChrome ? 'text-zinc-300 hover:text-white' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row ${
            isPortalChrome ? 'border-white/8' : ''
          }`}
        >
          <p className={`text-sm ${isPortalChrome ? 'text-zinc-500' : 'text-muted-foreground'}`}>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                isPortalChrome ? 'text-zinc-400 hover:text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@base64pro.top"
              className={`transition-colors ${
                isPortalChrome ? 'text-zinc-400 hover:text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
