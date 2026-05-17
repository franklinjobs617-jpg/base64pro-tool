import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  BookOpen,
  Clock3,
  Coffee,
  Compass,
  Gamepad2,
  Skull,
  Sparkles,
  Sword,
  Target,
  Trophy,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { games, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `${siteConfig.name} - Ultimate Gaming Guides & Wiki`,
  description:
    'Discover comprehensive game guides, walkthroughs, tips, and strategies for the latest games. Your go-to source for mastering your favorite titles.',
  alternates: {
    canonical: siteConfig.url,
  },
};

const categoryIcons: Record<string, LucideIcon> = {
  Horror: Skull,
  Survival: Sword,
  Stealth: Target,
  'Visual Novel': Coffee,
  'Action Adventure': Gamepad2,
};

const directivePopularGuides = [
  { title: 'Trophy Guide', slug: 'trophy-guide', clicks: 331, icon: Trophy },
  { title: 'Walkthrough', slug: 'walkthrough', clicks: 107, icon: BookOpen },
  { title: 'All Endings', slug: 'all-endings-guide', clicks: 121, icon: Sparkles },
  { title: 'Choices Guide', slug: 'choices-guide', clicks: 60, icon: Compass },
];

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

export default function HomePage() {
  const releasedGames = games.filter((game) => game.status === 'released');
  const upcomingGames = games.filter((game) => game.status === 'upcoming');
  const trackedGames = [...releasedGames, ...upcomingGames];
  const latestRelease = releasedGames[0] ?? games[0];
  const categoryCards = Object.entries(
    games.reduce<Record<string, number>>((acc, game) => {
      acc[game.category] = (acc[game.category] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, count]) => ({
    name,
    count,
    slug:
      name === 'Visual Novel'
        ? 'visual-novel'
        : name === 'Action Adventure'
          ? 'action-adventure'
          : name.toLowerCase(),
    description:
      name === 'Horror'
        ? 'Cinematic tension, endings, and survival routes'
          : name === 'Survival'
            ? 'Crafting, building, and launch-week planning'
            : name === 'Stealth'
              ? 'Heists, routes, and silent solutions'
              : name === 'Visual Novel'
                ? 'Character arcs, drinks, and route guides'
                : 'Spycraft, missions, and progression hubs',
  }));

  return (
    <div className="flex flex-col bg-background">
      <section className="relative isolate overflow-hidden border-b bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.96),rgba(250,249,245,0.9)_30%,rgba(250,249,245,1)_65%)]">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(20,20,19,0.06),transparent_70%)]" />
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-start">
            <div className="py-2 sm:py-4">
              <Badge variant="outline" className="rounded-full px-3 py-1 text-[11px]">
                5 tracked game hubs
              </Badge>
              <h1 className="mt-5 max-w-3xl font-serif text-4xl font-normal leading-[1.02] tracking-normal text-foreground sm:text-5xl lg:text-[68px]">
                Clean game hubs that actually get players to answers
              </h1>
              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-muted-foreground sm:text-base">
                Base64Pro tracks high-interest releases and newly launched games with guide hubs,
                walkthrough routes, endings, trophies, collectibles, co-op notes, and launch-week
                fact checks.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-11 rounded-full px-5">
                  <Link href={`/game/${latestRelease.slug}`}>
                    Open {latestRelease.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-11 rounded-full px-5">
                  <Link href="#all-games">Browse All Games</Link>
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Tracked games', value: trackedGames.length, icon: Gamepad2 },
                  { label: 'Released now', value: releasedGames.length, icon: Sparkles },
                  { label: 'Upcoming watchlist', value: upcomingGames.length, icon: Clock3 },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border/80 bg-background/60 p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-muted/40 text-foreground">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-2xl font-semibold leading-none text-foreground">{item.value}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-border/80 bg-card/90 p-4 shadow-[0_1px_2px_rgba(20,20,19,0.04),0_12px_28px_rgba(20,20,19,0.04)] backdrop-blur sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Current lineup</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Every tracked game hub is reachable from the first screen.
                  </p>
                </div>
                <Badge variant="secondary" className="rounded-full px-3">
                  {trackedGames.length} live
                </Badge>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {trackedGames.map((game) => (
                  <Link
                    key={game.id}
                    href={`/game/${game.slug}`}
                    className="group flex items-center gap-4 rounded-[22px] border border-border/80 bg-background p-3 transition-all hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-sm"
                  >
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-[16px] bg-muted">
                      <Image
                        src={game.cardImage}
                        alt={`${game.name} guide hub preview`}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold leading-tight text-foreground">{game.name}</p>
                        <Badge variant="outline" className="rounded-full text-[10px]">
                          {game.status === 'released' ? 'Released' : 'Upcoming'}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">{game.category}</p>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">
                        {formatReleaseDate(game.releaseDate)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="all-games" className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
                <Gamepad2 className="h-4 w-4" />
                All game hubs
              </div>
              <h2 className="font-serif text-3xl font-normal tracking-normal text-foreground sm:text-4xl">
                Every tracked game, visible on one page
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Released titles and pre-release watchlist pages are both listed here so homepage
                traffic does not dead-end on only one or two games.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {trackedGames.map((game) => (
              <Card
                key={game.id}
                className="group overflow-hidden rounded-[24px] border-border/80 bg-card shadow-[0_1px_2px_rgba(20,20,19,0.05)] transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={game.cardImage}
                    alt={`${game.name} game guide cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
                    <Badge className="rounded-full bg-white text-foreground hover:bg-white">
                      {game.status === 'released' ? 'Released' : 'Upcoming'}
                    </Badge>
                    <Badge variant="outline" className="rounded-full border-white/15 bg-black/55 text-white">
                      {formatReleaseDate(game.releaseDate)}
                    </Badge>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="font-serif text-2xl font-normal leading-tight text-white">
                      {game.name}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-200">{game.category}</p>
                  </div>
                </div>
                <CardContent className="p-5 sm:p-6">
                  <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
                    {game.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {game.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="h-10 flex-1 rounded-full">
                      <Link href={`/game/${game.slug}`}>
                        Open Hub
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-10 flex-1 rounded-full">
                      <Link href={`/category/${game.category === 'Visual Novel' ? 'visual-novel' : game.category === 'Action Adventure' ? 'action-adventure' : game.category.toLowerCase()}`}>
                        {game.category}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/20 py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start lg:px-8">
          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Released now
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {releasedGames.map((game) => (
                <Link key={game.id} href={`/game/${game.slug}`} className="group rounded-[20px] border border-border/80 bg-card p-4 transition-all hover:border-foreground/15 hover:shadow-sm">
                  <div className="flex gap-4">
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-2xl bg-muted">
                      <Image
                        src={game.cardImage}
                        alt={`${game.name} card art`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground">{game.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{game.category}</p>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2 text-sm font-medium text-primary">
              <Clock3 className="h-4 w-4" />
              Upcoming watchlist
            </div>
            <div className="space-y-3">
              {upcomingGames.map((game) => (
                <Link
                  key={game.id}
                  href={`/game/${game.slug}`}
                  className="flex items-center gap-4 rounded-[20px] border border-border/80 bg-card p-4 transition-all hover:border-foreground/15 hover:shadow-sm"
                >
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={game.heroImage}
                      alt={`${game.name} watchlist preview`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-foreground">{game.name}</h3>
                      <Badge variant="outline" className="rounded-full text-[10px]">
                        {formatReleaseDate(game.releaseDate)}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{game.category}</p>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {game.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <div className="mb-5">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Trophy className="h-4 w-4" />
                  Proven demand
                </div>
                <h2 className="mt-2 font-serif text-3xl font-normal tracking-normal">
                  Directive 8020 pages players already click
                </h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  High-interest routes stay visible on the homepage so traffic lands on actual
                  answers instead of a thin index page.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {directivePopularGuides.map((guide) => (
                  <Link key={guide.slug} href={`/game/directive-8020/${guide.slug}`}>
                    <div className="group rounded-[20px] border border-border/80 bg-card p-4 transition-all hover:border-foreground/15 hover:shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-muted/40 text-foreground">
                          <guide.icon className="h-4 w-4" />
                        </span>
                        <Badge variant="secondary" className="rounded-full">
                          {guide.clicks}+ clicks
                        </Badge>
                      </div>
                      <h3 className="mt-4 font-semibold text-foreground">{guide.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Open the live guide page directly from the homepage.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Compass className="h-4 w-4" />
                  Browse by play style
                </div>
                <h2 className="mt-2 font-serif text-3xl font-normal tracking-normal">
                  Categories that reflect how players search
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {categoryCards.map((category) => {
                  const Icon = categoryIcons[category.name];

                  return (
                    <Link
                      key={category.slug}
                      href={`/category/${category.slug}`}
                      className="group rounded-[20px] border border-border/80 bg-card p-4 transition-all hover:border-foreground/15 hover:shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/80 bg-muted/40 text-foreground">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">{category.name}</h3>
                            <span className="text-xs text-muted-foreground">{category.count}</span>
                          </div>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/20 py-12 sm:py-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-normal tracking-normal text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              What is tracked, how fast pages update, and what kind of guide quality readers should
              expect from the site.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                question: 'What games are shown on the homepage?',
                answer:
                  'All six currently tracked game hubs are shown on the homepage, including both released titles and upcoming watchlist pages.',
              },
              {
                question: 'Are upcoming games only teaser pages?',
                answer:
                  'No. Upcoming games get factual pre-release hubs built around official store data, trailers, platform status, and clearly labeled verification limits.',
              },
              {
                question: 'How often are guides updated?',
                answer:
                  'Pages are updated around release windows, after major store-page changes, and when launch-week testing confirms route, platform, or performance details.',
              },
              {
                question: 'Why do some games have more guide depth than others?',
                answer:
                  'Released games can support verified routes and completion pages. Upcoming titles stay focused on facts, preparation, and useful launch-week questions until hands-on testing is possible.',
              },
            ].map((faq) => (
              <article
                key={faq.question}
                className="rounded-[24px] border border-border/80 bg-card p-5 shadow-[0_1px_2px_rgba(20,20,19,0.05)] sm:p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
