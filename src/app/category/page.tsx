import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Skull, Sword, Target, Coffee, Gamepad2, Layers3 } from 'lucide-react';
import { games, siteConfig } from '@/lib/site';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: `Game Categories - ${siteConfig.name}`,
  description: 'Browse games by category. Find the perfect game guide for your favorite genre.',
  alternates: {
    canonical: `${siteConfig.url}/category`,
  },
};

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

export default function CategoriesPage() {
  return (
    <div className="flex flex-col">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Categories' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 sm:py-16">
        <div className="container px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Game Categories</h1>
          <p className="text-muted-foreground text-lg">
            Browse our comprehensive game guides by genre. Find the perfect walkthrough for your favorite type of game.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const CategoryIcon = category.icon;
              const gameCount = games.filter((game) =>
                game.tags.some((tag) => tag.toLowerCase() === category.name.toLowerCase())
              ).length;

              return (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  className="group p-6 rounded-xl border bg-background hover:border-primary hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors">
                      <CategoryIcon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {category.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">{gameCount} games</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
