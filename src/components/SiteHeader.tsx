'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Search, X, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { siteConfig, games } from '@/lib/site';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={`flex shrink-0 items-center gap-2 text-xl font-bold ${isSearchOpen ? 'hidden sm:flex' : ''}`}
        >
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Games
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 rounded-md border bg-background shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {games.map((game) => (
                <Link
                  key={game.id}
                  href={`/game/${game.slug}`}
                  className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
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
              className="absolute inset-x-4 top-2 z-10 flex items-center gap-2 rounded-lg border bg-background p-1 shadow-lg sm:static sm:inset-auto sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none"
            >
              <Input
                type="search"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 min-w-0 flex-1 sm:w-64 sm:flex-none"
                autoFocus
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label="Close search"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </form>
          ) : (
            <Button variant="ghost" size="icon" aria-label="Open search" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-4 w-4" />
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background shadow-lg">
          <nav className="mx-auto flex max-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col gap-2 overflow-y-auto px-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="text-sm font-medium text-muted-foreground py-2">Games</div>
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/game/${game.slug}`}
                className="text-sm py-2 pl-4 hover:text-primary transition-colors"
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
