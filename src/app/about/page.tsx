import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Gamepad2, Users, Zap, Target, Heart, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Base64Pro - Your Gaming Guides Hub',
  description: 'Base64Pro is your ultimate destination for gaming guides, walkthroughs, and wiki content. We help players discover, explore, and master their favorite games with comprehensive guides crafted by passionate gamers.',
  keywords: 'about Base64Pro, gaming guides, game walkthroughs, gaming wiki, game strategy guides',
  openGraph: {
    title: 'About Us | Base64Pro',
    description: 'Your ultimate destination for gaming guides, walkthroughs, and wiki content.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'About Us', href: '/about' }]} />
      
      <main className="container px-4 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Base64Pro
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted source for gaming guides, walkthroughs, and strategies. 
            Built by gamers, for gamers.
          </p>
        </section>

        {/* Why Base64Pro? */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-primary/5 rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold">Why &quot;Base64Pro&quot;?</h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Great question! While &quot;Base64&quot; might sound like tech jargon, it represents something fundamental to what we do: <strong className="text-foreground">decoding complex games into clear, actionable guidance</strong>.
              </p>
              <p className="mb-4">
                Just as Base64 encoding transforms data into a more accessible format, we transform overwhelming game mechanics, hidden secrets, and branching storylines into easy-to-follow guides that help you get the most out of every gaming experience.
              </p>
              <p>
                The &quot;Pro&quot; part? That&apos;s you. Whether you&apos;re hunting for platinum trophies, exploring every ending, or just trying to survive your first playthrough — we&apos;re here to help you play like a pro.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Spotlight Quality Indies</h3>
              <p className="text-muted-foreground">
                We focus on games that deserve more attention — hidden gems, indie darlings, and upcoming titles that big outlets often overlook.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast &amp; Accurate Content</h3>
              <p className="text-muted-foreground">
                When a game launches, we&apos;re already there. Our guides go live before or at release, so you&apos;re never left searching for answers.
              </p>
            </div>
            <div className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Written by Players</h3>
              <p className="text-muted-foreground">
                Every guide is crafted by someone who actually played the game. No AI-generated fluff — just real insights from real gamers.
              </p>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">What We Cover</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <h3 className="font-semibold">Trophy &amp; Achievement Guides</h3>
                <p className="text-sm text-muted-foreground">Complete roadmaps to platinum and 100% completion</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <h3 className="font-semibold">Full Walkthroughs</h3>
                <p className="text-sm text-muted-foreground">Step-by-step guides from start to finish</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <h3 className="font-semibold">Multiple Endings</h3>
                <p className="text-sm text-muted-foreground">Every ending explained with trigger conditions</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <h3 className="font-semibold">Choice Consequences</h3>
                <p className="text-sm text-muted-foreground">Know what happens before you decide</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <h3 className="font-semibold">Collectibles &amp; Secrets</h3>
                <p className="text-sm text-muted-foreground">All hidden items, locations, and easter eggs</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <div>
                <h3 className="font-semibold">Tips &amp; Strategies</h3>
                <p className="text-sm text-muted-foreground">Combat tips, build guides, and survival tactics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl font-bold">Our Approach</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">We Play First, Write Second</h3>
                <p className="text-muted-foreground">
                  Every guide is based on actual gameplay. We don&apos;t just regurgitate information — we verify everything through hands-on experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Community-Driven Updates</h3>
                <p className="text-muted-foreground">
                  Games change, and so do our guides. We monitor community discussions, patch notes, and player feedback to keep content accurate and up-to-date.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Respect Your Time</h3>
                <p className="text-muted-foreground">
                  We get straight to the point. Each guide starts with a quick summary, so you can decide if you need the deep dive or just a quick answer.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Spoiler-Conscious</h3>
                <p className="text-muted-foreground">
                  We clearly mark spoilers and structure guides so you can find what you need without accidentally ruining surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Currently Covering */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Currently Covering</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Directive 8020', 'Lorain', 'Project: Mist', 'Thick As Thieves', 'Coffee Talk Tokyo', '007 First Light'].map((game) => (
              <Link 
                key={game} 
                href={`/game/${game.toLowerCase().replace(/[:'\s]+/g, '-').replace(/-+/g, '-')}`}
                className="px-4 py-2 bg-primary/10 hover:bg-primary/20 rounded-full text-sm font-medium transition-colors"
              >
                {game}
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-card border rounded-2xl p-8 sm:p-12">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Level Up?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Browse our growing collection of guides and start mastering your favorite games today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">Browse Games</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/category">View Categories</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
