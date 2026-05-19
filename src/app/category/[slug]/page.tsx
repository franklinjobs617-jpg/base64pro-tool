import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BookOpen, Skull, Sword, Target, Coffee, Gamepad2, Layers3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { games, siteConfig } from '@/lib/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function availabilityLabel(game: { status: 'released' | 'upcoming'; releaseDate: string }) {
  if (game.status === 'released') {
    return { variant: 'default' as const, className: 'bg-primary', label: 'Available Now' };
  }

  const target = new Date(`${game.releaseDate}T00:00:00`);
  const now = new Date();
  const dayMs = 1000 * 60 * 60 * 24;

  if (!Number.isNaN(target.getTime()) && now.getTime() >= target.getTime() && now.getTime() < target.getTime() + dayMs * 2) {
    return { variant: 'outline' as const, className: 'border-amber-400/40 bg-amber-400/10 text-amber-700 dark:text-amber-200', label: 'Launch Day' };
  }

  return { variant: 'secondary' as const, className: '', label: 'Coming Soon' };
}

// Category definitions
const categories = [
  {
    name: 'Horror',
    slug: 'horror',
    description: 'Spine-chilling horror experiences that will keep you on the edge of your seat',
    icon: Skull,
  },
  {
    name: 'Survival',
    slug: 'survival',
    description: 'Survive against the odds in harsh environments with limited resources',
    icon: Sword,
  },
  {
    name: 'Stealth',
    slug: 'stealth',
    description: 'Master the art of infiltration and avoid detection',
    icon: Target,
  },
  {
    name: 'Simulation',
    slug: 'simulation',
    description: 'Build, manage, and shape living systems across farms, towns, and sandboxes',
    icon: Layers3,
  },
  {
    name: 'Visual Novel',
    slug: 'visual-novel',
    description: 'Story-driven experiences with meaningful choices',
    icon: Coffee,
  },
  {
    name: 'RPG',
    slug: 'rpg',
    description: 'Dialogue-heavy role-playing, builds, choices, and consequences',
    icon: BookOpen,
  },
  {
    name: 'Action Adventure',
    slug: 'action-adventure',
    description: 'Epic journeys combining action and exploration',
    icon: Gamepad2,
  },
];

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category.name} Games - ${siteConfig.name}`,
    description: category.description,
    alternates: {
      canonical: `${siteConfig.url}/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const CategoryIcon = category.icon;

  // Filter games by category (matching tags)
  const categoryGames = games.filter((game) =>
    game.tags.some((tag) => tag.toLowerCase() === category.name.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Categories', href: '/category' },
          { label: category.name },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 sm:py-16">
        <div className="container px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <CategoryIcon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">{category.name} Games</h1>
              <p className="text-muted-foreground mt-1">{category.description}</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            {categoryGames.length} game{categoryGames.length !== 1 ? 's' : ''} in this category
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12">
        <div className="container px-4">
          {categoryGames.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryGames.map((game) => (
                <Card key={game.slug} className="overflow-hidden group hover:shadow-lg transition-all">
                  <div className="relative aspect-video bg-muted">
                    <Image
                      src={game.heroImage}
                      alt={`${game.name} - ${category.name} game cover`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      {(() => {
                        const availability = availabilityLabel(game);
                        return (
                          <Badge variant={availability.variant} className={availability.className}>
                            {availability.label}
                          </Badge>
                        );
                      })()}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                      {game.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {game.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {game.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild size="sm" className="w-full">
                      <Link href={`/game/${game.slug}`}>
                        View Guides
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No games found in this category yet.</p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/">Browse All Games</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-xl font-bold mb-6">Browse Other Categories</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories
              .filter((c) => c.slug !== slug)
              .map((otherCategory) => {
                const OtherIcon = otherCategory.icon;
                return (
                  <Link
                    key={otherCategory.slug}
                    href={`/category/${otherCategory.slug}`}
                    className="p-4 rounded-lg border bg-background hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <OtherIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {otherCategory.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
