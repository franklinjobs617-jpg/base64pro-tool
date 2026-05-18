'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, Search, X, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { siteConfig, games } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isPortalChrome =
    pathname === '/' || pathname.startsWith('/game/') || pathname.startsWith('/category/');

  const headerClass = isPortalChrome
    ? 'border-transparent bg-transparent text-white'
    : 'border-b bg-background/95 supports-[backdrop-filter]:bg-background/60';
  const headerPositionClass = isPortalChrome
    ? 'fixed top-0'
    : 'sticky top-0';
  const navLinkClass = isPortalChrome
    ? 'text-sm font-medium text-zinc-300 transition-colors hover:text-white'
    : 'text-sm font-medium text-muted-foreground transition-colors hover:text-foreground';
  const brandClass = isPortalChrome ? 'text-white' : 'text-foreground';
  const dropdownClass = isPortalChrome
    ? 'border-white/10 bg-[#0d1018] text-white shadow-2xl'
    : 'border bg-background shadow-lg';
  const searchShellClass = isPortalChrome
    ? 'border-white/10 bg-[#0d1018] shadow-2xl sm:border-0 sm:bg-transparent sm:shadow-none'
    : 'border bg-background shadow-lg sm:border-0 sm:bg-transparent sm:shadow-none';
  const searchInputClass = isPortalChrome
    ? 'border-white/10 bg-white/[0.06] text-white placeholder:text-zinc-500'
    : '';
  const iconButtonClass = isPortalChrome
    ? 'text-zinc-300 hover:bg-white/10 hover:text-white'
    : '';
  const mobileMenuButtonClass = isPortalChrome
    ? 'md:hidden text-zinc-300 hover:bg-white/10 hover:text-white'
    : 'md:hidden';

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // For now, just navigate to the game if found
      const game = games.find(
        (g) =>
          g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          g.slug.includes(searchQuery.toLowerCase())
      );
      if (game) {
        window.location.href = `/game/${game.slug}`;
      }
    }
  };

  return (
    <header className={`${headerPositionClass} z-50 w-full border-b ${headerClass}`}>
      <div
        className={`relative mx-auto mt-2 flex h-14 w-[calc(100%-1rem)] max-w-7xl items-center justify-between rounded-full px-4 sm:mt-3 sm:w-[calc(100%-2rem)] sm:px-6 lg:px-8 ${
          isPortalChrome
            ? 'border border-white/10 bg-[#05070c]/42 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl'
            : ''
        }`}
      >
        <Link
          href="/"
          className={`flex shrink-0 items-center gap-2 text-xl font-bold ${brandClass} ${isSearchOpen ? 'hidden sm:flex' : ''}`}
        >
          <Gamepad2 className={`h-6 w-6 ${isPortalChrome ? 'text-white' : 'text-primary'}`} />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className={navLinkClass}>
            Home
          </Link>
          <Link href="/#trending" className={navLinkClass}>
            Trending
          </Link>
          <Link href="/#upcoming" className={navLinkClass}>
            Upcoming
          </Link>
          <Link href="/#guides" className={navLinkClass}>
            Guides
          </Link>
          <div className="relative group">
            <button className={navLinkClass}>
              Games
            </button>
            <div
              className={`invisible absolute left-0 top-full mt-2 w-56 rounded-2xl border opacity-0 transition-all group-hover:visible group-hover:opacity-100 ${dropdownClass}`}
            >
              {games.map((game) => (
                <Link
                  key={game.id}
                  href={`/game/${game.slug}`}
                  className={`block px-4 py-3 text-sm transition-colors ${
                    isPortalChrome ? 'hover:bg-white/[0.08]' : 'hover:bg-muted'
                  }`}
                >
                  {game.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <form
              onSubmit={handleSearch}
              className={`absolute inset-x-4 top-2 z-10 flex items-center gap-2 rounded-xl p-1 sm:static sm:inset-auto sm:p-0 ${searchShellClass}`}
            >
              <Input
                type="search"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`h-10 min-w-0 flex-1 sm:w-64 sm:flex-none ${searchInputClass}`}
                autoFocus
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Close search"
                className={iconButtonClass}
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </form>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open search"
              className={iconButtonClass}
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            className={mobileMenuButtonClass}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className={`border-t shadow-lg md:hidden ${
            isPortalChrome ? 'border-white/8 bg-[#0b0e15]' : 'bg-background'
          }`}
        >
          <nav className="mx-auto flex max-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col gap-2 overflow-y-auto px-4 py-4">
            <Link
              href="/"
              className={`py-2 text-sm font-medium transition-colors ${
                isPortalChrome ? 'text-zinc-100 hover:text-white' : 'hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#trending"
              className={`py-2 text-sm font-medium transition-colors ${
                isPortalChrome ? 'text-zinc-300 hover:text-white' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trending
            </Link>
            <Link
              href="/#upcoming"
              className={`py-2 text-sm font-medium transition-colors ${
                isPortalChrome ? 'text-zinc-300 hover:text-white' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Upcoming
            </Link>
            <Link
              href="/#guides"
              className={`py-2 text-sm font-medium transition-colors ${
                isPortalChrome ? 'text-zinc-300 hover:text-white' : 'text-muted-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Guides
            </Link>
            <div className={`py-2 text-sm font-medium ${isPortalChrome ? 'text-zinc-500' : 'text-muted-foreground'}`}>
              Games
            </div>
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/game/${game.slug}`}
                className={`py-2 pl-4 text-sm transition-colors ${
                  isPortalChrome ? 'text-zinc-300 hover:text-white' : 'hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {game.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
