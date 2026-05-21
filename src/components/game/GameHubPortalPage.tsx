import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/Breadcrumbs';

type Tone = 'accent' | 'muted' | 'danger' | 'success';

interface PortalBadge {
  label: string;
  tone?: Tone;
}

interface PortalCta {
  label: string;
  href: string;
  external?: boolean;
  variant?: 'solid' | 'outline';
}

interface SpotlightCard {
  label: string;
  value: string;
  note: string;
}

interface StartHereCard {
  title: string;
  href: string;
  body: string;
}

interface AnswerCard {
  label: string;
  value: string;
  status: string;
}

interface GuideCard {
  href: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badges: PortalBadge[];
}

interface SideNote {
  label: string;
  body: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface GameHubPortalPageProps {
  breadcrumbs: BreadcrumbItem[];
  jsonLd: unknown;
  heroImage: string;
  heroImageAlt: string;
  heroBadges: PortalBadge[];
  title: string;
  description: string;
  ctas: PortalCta[];
  spotlightCards: SpotlightCard[];
  sideNotes: SideNote[];
  startHereTitle: string;
  startHereIntro: string;
  startHere: StartHereCard[];
  answerTitle: string;
  answerCards: AnswerCard[];
  overviewParagraphs: string[];
  communityResearch?: ReactNode;
  guideSectionDescription: string;
  guideCountLabel: string;
  guideCards: GuideCard[];
  routeMapTitle: string;
  tips: string[];
  faq: FaqItem[];
}

function badgeClass(tone: Tone = 'muted') {
  if (tone === 'accent') {
    return 'border border-cyan-300/35 bg-cyan-300/15 text-cyan-50 hover:bg-cyan-300/15';
  }
  if (tone === 'danger') {
    return 'border border-rose-400/30 bg-rose-400/15 text-rose-100 hover:bg-rose-400/15';
  }
  if (tone === 'success') {
    return 'border border-emerald-400/30 bg-emerald-400/15 text-emerald-100 hover:bg-emerald-400/15';
  }
  return 'border border-white/10 bg-black/30 text-zinc-100 hover:bg-black/30';
}

export function GameHubPortalPage({
  breadcrumbs,
  jsonLd,
  heroImage,
  heroImageAlt,
  heroBadges,
  title,
  description,
  ctas,
  spotlightCards,
  sideNotes,
  startHereTitle,
  startHereIntro,
  startHere,
  answerTitle,
  answerCards,
  overviewParagraphs,
  communityResearch,
  guideSectionDescription,
  guideCountLabel,
  guideCards,
  routeMapTitle,
  tips,
  faq,
}: GameHubPortalPageProps) {
  return (
    <div className="min-h-screen bg-[#06070b] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_12%_34%,rgba(56,189,248,0.08),transparent_24%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="[&_a]:text-zinc-300 [&_a:hover]:text-white [&_li]:text-zinc-400 [&_nav]:text-zinc-500">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <header className="relative isolate mt-4 overflow-hidden rounded-[30px] border border-white/10 bg-[#06070b] shadow-[0_24px_80px_rgba(0,0,0,0.36)]">
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center brightness-[1.05] contrast-[1.08] saturate-[1.12]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,11,0.9)_0%,rgba(6,7,11,0.64)_46%,rgba(6,7,11,0.26)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,11,0.18)_0%,rgba(6,7,11,0.18)_38%,rgba(6,7,11,0.9)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(255,255,255,0.12),transparent_30%)]" />
          </div>

          <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:p-10">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                {heroBadges.map((badge) => (
                  <Badge key={badge.label} className={`rounded-full px-3 py-1 text-[11px] ${badgeClass(badge.tone)}`}>
                    {badge.label}
                  </Badge>
                ))}
              </div>

              <h1 className="mt-5 max-w-4xl font-serif text-4xl font-normal leading-[1.04] tracking-normal text-white sm:text-5xl lg:text-[58px]">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-200 sm:text-lg">
                {description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {ctas.map((cta, index) => (
                  <Button
                    key={cta.label}
                    asChild
                    size="lg"
                    variant={cta.variant === 'outline' ? 'outline' : 'default'}
                    className={
                      cta.variant === 'outline'
                        ? 'h-11 rounded-full border-white/15 bg-white/[0.06] px-5 text-white hover:bg-white/[0.12] hover:text-white'
                        : 'h-11 rounded-full bg-white px-5 text-[#06070b] hover:bg-zinc-200'
                    }
                  >
                    {cta.external ? (
                      <a href={cta.href} target="_blank" rel="noopener noreferrer">
                        {cta.label}
                        <ExternalLink className={`h-3.5 w-3.5 ${index === 0 ? 'ml-2' : 'ml-2'}`} />
                      </a>
                    ) : (
                      <Link href={cta.href}>
                        {cta.label}
                        {index === 0 ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
                      </Link>
                    )}
                  </Button>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {spotlightCards.map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/15 bg-white/[0.08] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-medium text-white">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-300">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {sideNotes.map((item) => (
                <div key={item.label} className="rounded-[28px] border border-white/10 bg-black/30 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-md">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-4 lg:grid-cols-3" aria-labelledby="start-here">
          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-sky-300">Recommended path</p>
            <h2 id="start-here" className="mt-2 text-3xl font-semibold tracking-tight text-white">
              {startHereTitle}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-400">{startHereIntro}</p>
          </div>
          {startHere.map((item, index) => (
            <Link key={item.title} href={item.href} className="group">
              <div className="relative h-full overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.03] p-5 transition-all hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500">0{index + 1}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/25 text-zinc-300 transition-colors group-hover:bg-white group-hover:text-[#06070b]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.body}</p>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="space-y-8">
            <section className="rounded-[30px] border border-white/8 bg-[#070910] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.18em] text-violet-300">Quick answers</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                {answerTitle}
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {answerCards.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm font-medium leading-7 text-zinc-100">{item.value}</p>
                    <p className="mt-3 text-xs text-zinc-500">{item.status}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {overviewParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-8 text-zinc-300 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {communityResearch}

            <section aria-labelledby="guide-library">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-amber-300">Choose a guide</p>
                  <h2 id="guide-library" className="mt-2 text-3xl font-semibold tracking-tight text-white">
                    Guide library
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-zinc-400">{guideSectionDescription}</p>
                </div>
                <Badge className="w-fit rounded-full border border-white/10 bg-black/25 px-3 text-zinc-200 hover:bg-black/25">
                  {guideCountLabel}
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {guideCards.map((guide) => (
                  <Link key={guide.href} href={guide.href} className="group">
                    <div className="h-full overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_28px_80px_rgba(0,0,0,0.36)]">
                      <div className="relative aspect-[16/10] bg-zinc-950">
                        <Image
                          src={guide.image}
                          alt={guide.imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,13,0.02)_0%,rgba(7,8,13,0.82)_100%)]" />
                        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                          {guide.badges.map((badge) => (
                            <Badge
                              key={`${guide.href}-${badge.label}`}
                              className={`rounded-full text-[10px] ${badgeClass(badge.tone)}`}
                            >
                              {badge.label}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-semibold leading-snug tracking-tight text-white">
                          {guide.title}
                        </h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-400">
                          {guide.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[28px] border border-white/8 bg-[#070910] p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-rose-300">Route notes</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                {routeMapTitle}
              </h2>
              <div className="mt-4 space-y-3">
                {tips.map((tip, index) => (
                  <div key={tip} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-medium text-[#06070b]">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-zinc-300">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5">
              <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300">FAQ</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                FAQ
              </h2>
              <div className="mt-4 space-y-4">
                {faq.map((item) => (
                  <article key={item.question}>
                    <h3 className="text-sm font-medium text-white">{item.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
