'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Clock3,
  Coffee,
  Compass,
  ExternalLink,
  Flame,
  Gamepad2,
  Layers3,
  Shield,
  Skull,
  Sparkles,
  Sword,
  Target,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface HomeGameCard {
  id: string;
  name: string;
  slug: string;
  status: 'released' | 'upcoming';
  category: string;
  releaseDate: string;
  description: string;
  heroImage: string;
  cardImage: string;
  tags: string[];
  platforms: string;
  storeUrl: string;
}

export interface HomeGuideCard {
  href: string;
  title: string;
  game: string;
  tag: string;
  description: string;
  image: string;
  imageAlt: string;
  verificationStatus: string;
  timeToRead: string;
  updatedAt: string;
}

export interface HomeUpdateCard {
  href: string;
  title: string;
  game: string;
  badge: string;
  updatedAt: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface HomeGenreCard {
  name: string;
  slug: string;
  description: string;
  count: number;
  featuredGame: string;
}

interface HomepagePortalProps {
  games: HomeGameCard[];
  popularGuides: HomeGuideCard[];
  recentUpdates: HomeUpdateCard[];
  genres: HomeGenreCard[];
}

const genreIcons: Record<string, LucideIcon> = {
  Horror: Skull,
  Survival: Sword,
  Stealth: Target,
  Simulation: Layers3,
  'Visual Novel': Coffee,
  'Action Adventure': Sparkles,
};

const statusClasses = {
  released: 'border-emerald-400/30 bg-emerald-400/15 text-emerald-100',
  upcoming: 'border-sky-400/30 bg-sky-400/15 text-sky-100',
};

function formatReleaseDate(date: string) {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(parsed);
}

function formatUpdatedDate(date: string) {
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(parsed);
}

function countdownLabel(date: string) {
  const target = new Date(`${date}T00:00:00`);
  const now = new Date();

  if (Number.isNaN(target.getTime())) return formatReleaseDate(date);

  const diff = target.getTime() - now.getTime();
  const dayMs = 1000 * 60 * 60 * 24;
  const days = Math.ceil(diff / dayMs);

  if (days <= 0) return 'Live now';
  if (days === 1) return 'Tomorrow';
  if (days < 7) return `In ${days} days`;

  return `${days} days out`;
}

function statusLabel(game: HomeGameCard) {
  if (game.status === 'released') return 'Released';
  return 'Upcoming';
}

export function HomepagePortal({
  games,
  popularGuides,
  recentUpdates,
  genres,
}: HomepagePortalProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % games.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [games.length]);

  useEffect(() => {
    const carousel = carouselRef.current;
    const activeCard = carousel?.querySelector<HTMLElement>(
      `[data-carousel-index="${activeIndex}"]`
    );

    if (!carousel || !activeCard) {
      return;
    }

    carousel.scrollTo({
      left: activeCard.offsetLeft - (carousel.clientWidth - activeCard.clientWidth) / 2,
      behavior: 'smooth',
    });
  }, [activeIndex]);

  const activeGame = games[activeIndex];
  const releasedCount = games.filter((game) => game.status === 'released').length;
  const upcomingCount = games.length - releasedCount;
  const nextLaunches = games.filter((game) => game.status === 'upcoming');
  const changeFeaturedGame = (direction: -1 | 1) => {
    setActiveIndex((current) => (current + direction + games.length) % games.length);
  };

  return (
    <div className="bg-[#06070b] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/8">
        <div className="absolute inset-0">
          <Image
            src={activeGame.heroImage}
            alt={`${activeGame.name} feature background`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[1.08] contrast-[1.08] saturate-[1.16]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,11,0.86)_0%,rgba(6,7,11,0.54)_43%,rgba(6,7,11,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,11,0.22)_0%,rgba(6,7,11,0.04)_34%,rgba(6,7,11,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(255,255,255,0.12),transparent_30%)]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 lg:px-8 lg:pb-14 lg:pt-32">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[11px] text-white hover:bg-white/[0.08]">
                Featured game hub
              </Badge>
              <Badge
                className={`rounded-full border px-3 py-1 text-[11px] ${statusClasses[activeGame.status]}`}
              >
                {statusLabel(activeGame)}
              </Badge>
              <Badge className="rounded-full border border-white/10 bg-black/[0.35] px-3 py-1 text-[11px] text-zinc-200 hover:bg-black/[0.35]">
                {countdownLabel(activeGame.releaseDate)}
              </Badge>
            </div>

            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Base64Pro Game Guides, Walkthroughs, and Launch Hubs
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-zinc-200 sm:text-base sm:leading-8">
              Find release dates, walkthrough routes, trophy planning, co-op answers, demo guides,
              and first-click recommendations built around what players usually search first.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full bg-white px-5 text-[#06070b] hover:bg-zinc-200"
              >
                <Link href={`/game/${activeGame.slug}`}>
                  View {activeGame.name} Hub
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 rounded-full border-white/15 bg-white/[0.06] px-5 text-white hover:bg-white/[0.12] hover:text-white"
              >
                <Link href={activeGame.storeUrl} target="_blank" rel="noopener noreferrer">
                  {activeGame.status === 'upcoming' ? 'Wishlist on Steam' : 'View Store Page'}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                {
                  label: 'Tracked hubs',
                  value: String(games.length),
                  icon: Gamepad2,
                  note: 'full lineup',
                },
                {
                  label: 'Released now',
                  value: String(releasedCount),
                  icon: Flame,
                  note: 'verified routes',
                },
                {
                  label: 'Upcoming',
                  value: String(upcomingCount),
                  icon: Clock3,
                  note: 'watchlist',
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-white">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-2xl font-semibold leading-none text-white">{item.value}</p>
                      <p className="mt-1 text-sm font-medium text-zinc-100">{item.label}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-400">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <nav className="mt-8 flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
              {[
                ['Trending', '#trending'],
                ['Upcoming', '#upcoming'],
                ['Guides', '#guides'],
                ['Genres', '#genres'],
                ['Updated', '#updates'],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="shrink-0 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-zinc-100">Pick a featured game</p>
              <p className="mt-1 text-sm text-zinc-400">Jump straight into its hub or store page.</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous featured game"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white transition-colors hover:bg-white/10"
                onClick={() => changeFeaturedGame(-1)}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next featured game"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white transition-colors hover:bg-white/10"
                onClick={() => changeFeaturedGame(1)}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pr-4 hide-scrollbar"
          >
            {games.map((game, index) => (
              <button
                key={game.id}
                type="button"
                data-carousel-index={index}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`group relative w-[260px] shrink-0 snap-start overflow-hidden rounded-[28px] border text-left transition-all sm:w-[280px] lg:w-[300px] xl:w-[320px] ${
                  index === activeIndex
                    ? 'border-white/22 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.42)]'
                    : 'border-white/8 bg-white/[0.04] hover:border-white/16 hover:bg-white/[0.07]'
                }`}
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={game.cardImage}
                    alt={`${game.name} cover art`}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 320px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,11,0.02)_0%,rgba(6,7,11,0.22)_45%,rgba(6,7,11,0.92)_100%)]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-center gap-2">
                    <Badge
                      className={`rounded-full border px-2.5 py-1 text-[10px] ${statusClasses[game.status]}`}
                    >
                      {statusLabel(game)}
                    </Badge>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-300">
                      {countdownLabel(game.releaseDate)}
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold text-white">{game.name}</h2>
                  <p className="mt-1 text-sm text-zinc-300">{game.category}</p>
                  <p className="mt-2 line-clamp-1 text-xs uppercase tracking-[0.14em] text-zinc-400">
                    {game.platforms}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="upcoming" className="border-b border-white/8 bg-[#05070c] py-12 sm:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm font-medium text-violet-300">
              <CalendarDays className="h-4 w-4" />
              Upcoming / pre-order
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Upcoming watchlist
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              Release date, platform, and the first page to read before launch.
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            {nextLaunches.map((game) => (
              <article
                key={game.id}
                role="link"
                tabIndex={0}
                aria-label={`Open ${game.name} hub`}
                onClick={() => router.push(`/game/${game.slug}`)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    router.push(`/game/${game.slug}`);
                  }
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition-all hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_28px_80px_rgba(0,0,0,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <div className="absolute inset-0">
                  <Image
                    src={game.heroImage}
                    alt={`${game.name} upcoming showcase`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,11,0.76)_0%,rgba(6,7,11,0.52)_45%,rgba(6,7,11,0.82)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,11,0.18)_0%,rgba(6,7,11,0.86)_100%)]" />
                </div>

                <div className="relative flex min-h-[360px] h-full flex-col justify-end p-5 sm:min-h-[400px] sm:p-6">
                  <div className="max-w-[34rem]">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="rounded-full border border-sky-400/30 bg-sky-400/15 text-[11px] text-sky-100">
                        Coming soon
                      </Badge>
                      <Badge className="rounded-full border border-white/10 bg-black/[0.35] text-[11px] text-zinc-200 hover:bg-black/[0.35]">
                        {countdownLabel(game.releaseDate)}
                      </Badge>
                    </div>

                    <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                      {game.name}
                    </h3>
                    <p className="mt-4 h-[56px] overflow-hidden text-sm leading-7 text-zinc-300">
                      {game.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
                      <span>{formatReleaseDate(game.releaseDate)}</span>
                      <span className="h-1 w-1 rounded-full bg-zinc-600" />
                      <span>{game.category}</span>
                      <span className="h-1 w-1 rounded-full bg-zinc-600" />
                      <span className="line-clamp-1">{game.platforms}</span>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2.5">
                      {game.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Button
                        asChild
                        className="h-11 rounded-full bg-white text-[#06070b] hover:bg-zinc-200"
                      >
                        <Link href={`/game/${game.slug}`}>
                          View Hub
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="h-11 rounded-full border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.12] hover:text-white"
                      >
                        <Link
                          href={game.storeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                        >
                          Wishlist
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="guides" className="border-b border-white/8 bg-[#070910] py-12 sm:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm font-medium text-amber-300">
              <BookOpen className="h-4 w-4" />
              Popular guides
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Most-clicked guides
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              Trophy routes, walkthroughs, launch prep, demo answers, and buying guides.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {popularGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group relative overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_28px_80px_rgba(0,0,0,0.36)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,11,0.04)_0%,rgba(6,7,11,0.9)_100%)]" />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <Badge className="rounded-full border border-white/10 bg-black/[0.35] text-[10px] text-zinc-200 hover:bg-black/[0.35]">
                      {guide.game}
                    </Badge>
                    <Badge className="rounded-full border border-amber-300/30 bg-amber-300/15 text-[10px] text-amber-100">
                      {guide.tag}
                    </Badge>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="text-xl font-semibold text-white">{guide.title}</h3>
                  </div>
                </div>

                <div className="space-y-4 p-5">
                  <p className="line-clamp-3 text-sm leading-7 text-zinc-300">{guide.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                    <span className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1">
                      {guide.timeToRead}
                    </span>
                    <span className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1">
                      {guide.verificationStatus}
                    </span>
                    <span className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1">
                      Updated {formatUpdatedDate(guide.updatedAt)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    Open guide
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="genres" className="border-b border-white/8 bg-[#05070c] py-12 sm:py-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-300">
              <Layers3 className="h-4 w-4" />
              Browse by genre
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Choose a genre
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              Jump into the part of the site that matches the game mood you already want.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {genres.map((genre) => {
              const Icon = genreIcons[genre.name] ?? Compass;

              return (
                <Link
                  key={genre.slug}
                  href={`/category/${genre.slug}`}
                  className="group rounded-[28px] border border-white/8 bg-white/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{genre.name}</h3>
                    <span className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-xs text-zinc-300">
                      {genre.count}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{genre.description}</p>
                  <p className="mt-4 text-sm text-zinc-200">Featured: {genre.featuredGame}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="updates" className="border-b border-white/8 bg-[#070910] py-12 sm:py-14">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
          <div className="overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(160deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.28)] sm:p-7">
            <div className="flex items-center gap-2 text-sm font-medium text-rose-300">
              <Shield className="h-4 w-4" />
              Reading priority
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              What should you open first?
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300 sm:text-base">
              Pick the page that matches your intent: buying before launch, learning the first
              survival loop, or playing a finished route right now.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  label: 'Buying before launch',
                  title: 'Project: Mist release and demo facts',
                  body: 'Release date, demo scope, Early Access status, and what still needs testing.',
                  href: '/game/project-mist/release-date-platforms-guide',
                  icon: CalendarDays,
                },
                {
                  label: 'Starting the demo',
                  title: 'Project: Mist first steps survival route',
                  body: 'Chest loot, axe crafting, UI basics, food setup, and the first danger checks.',
                  href: '/game/project-mist/first-steps-survival-guide',
                  icon: Compass,
                },
                {
                  label: 'Playable now',
                  title: 'Directive 8020 spoiler-light walkthrough',
                  body: 'A safer first-run route before you open endings, deaths, and full spoilers.',
                  href: '/game/directive-8020/walkthrough',
                  icon: Clapperboard,
                },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group grid gap-4 rounded-[24px] border border-white/8 bg-black/20 p-4 transition-all hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.06] sm:grid-cols-[44px_minmax(0,1fr)_24px]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      {index + 1}. {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-zinc-100">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">{item.body}</p>
                  </div>
                  <ArrowRight className="hidden h-4 w-4 self-center text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-white sm:block" />
                </Link>
              ))}
            </div>

            <div className="mt-5 rounded-[24px] border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
              <p className="text-sm font-medium text-cyan-100">Simple rule</p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                If the game is not live yet, read facts and first steps. If it is live, read the
                walkthrough before opening spoiler-heavy cleanup pages.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
              <div className="flex items-center gap-2 text-sm font-medium text-cyan-300">
                <Sparkles className="h-4 w-4" />
                Recently updated
              </div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                Fresh guides
              </h2>
              </div>
              <Link href="#guides" className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                Browse all guides
              </Link>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.025]">
              {recentUpdates.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group grid gap-4 border-b border-white/8 p-4 transition-colors last:border-b-0 hover:bg-white/[0.05] sm:grid-cols-[148px_minmax(0,1fr)] sm:p-5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 156px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="rounded-full border border-white/10 bg-black/25 text-[10px] text-zinc-200 hover:bg-black/25">
                        {item.game}
                      </Badge>
                      <Badge className="rounded-full border border-cyan-300/30 bg-cyan-300/15 text-[10px] text-cyan-100">
                        {item.badge}
                      </Badge>
                      <span className="text-xs text-zinc-500">
                        Updated {formatUpdatedDate(item.updatedAt)}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-zinc-100">
                      Open guide
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#05070c] py-12 sm:py-14">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200">
              <Compass className="h-4 w-4" />
              Quick answers
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Before you jump in
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              {
                question: 'Does the homepage show every tracked game hub?',
                answer:
                  'Yes. All current game hubs are discoverable from the homepage through the hero carousel, trending row, and section-level entry points.',
              },
              {
                question: 'Why are some games marked upcoming instead of full walkthrough ready?',
                answer:
                  'Because pre-release pages should stay honest. Upcoming games focus on verified store facts, trailers, demos, buyer questions, and launch-week planning until hands-on testing is possible.',
              },
              {
                question: 'Why does Directive 8020 get stronger guide depth?',
                answer:
                  'It is already released, which means walkthrough, endings, trophy routing, deaths, and route verification can be grounded in actual play rather than speculation.',
              },
              {
                question: 'What is the best next click for a new visitor?',
                answer:
                  'If you want a live game, open Directive 8020. If you want the next release, start with Project: Mist and move from its release facts into the first steps and co-op pages.',
              },
            ].map((faq) => (
              <article
                key={faq.question}
                className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400 sm:text-base">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

