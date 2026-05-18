import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs, type BreadcrumbItem } from '@/components/Breadcrumbs';

interface GuideSection {
  title: string;
  id: string;
}

interface GuideMedia {
  image: string;
  alt: string;
  caption: string;
}

interface GuideVideo {
  title: string;
  url: string;
  channel: string;
  duration: string;
}

interface GuideFaq {
  question: string;
  answer: string;
}

interface RelatedGuide {
  href: string;
  title: string;
  description: string;
}

interface GuidePortalPageProps {
  breadcrumbs: BreadcrumbItem[];
  jsonLd: unknown;
  backHref: string;
  backLabel: string;
  heroImage?: string;
  heroImageAlt?: string;
  title: string;
  description: string;
  spoilerLevel?: 'safe' | 'spoiler';
  verificationStatus?: string;
  timeToRead: string;
  lastUpdated: string;
  sections: GuideSection[];
  sectionMedia?: Record<string, GuideMedia>;
  videos: GuideVideo[];
  content: string;
  faqs: GuideFaq[];
  relatedGuides: RelatedGuide[];
}

function getTextContent(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(getTextContent).join('');
  }

  return '';
}

function findSectionId(sections: GuideSection[], children: ReactNode) {
  const heading = getTextContent(children).trim().toLowerCase();
  return sections.find((section) => section.title.toLowerCase() === heading)?.id;
}

function getYouTubeId(url: string) {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );
  return match?.[1] || '';
}

export function GuidePortalPage({
  breadcrumbs,
  jsonLd,
  backHref,
  backLabel,
  heroImage,
  heroImageAlt,
  title,
  description,
  spoilerLevel,
  verificationStatus,
  timeToRead,
  lastUpdated,
  sections,
  sectionMedia,
  videos,
  content,
  faqs,
  relatedGuides,
}: GuidePortalPageProps) {
  return (
    <article className="bg-[#07080d] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 pb-6 pt-24 sm:px-6 sm:pt-28 lg:px-8">
        <div className="[&_a]:text-zinc-200 [&_a:hover]:text-white [&_li]:text-zinc-300 [&_nav]:text-zinc-400">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <header className="relative isolate mt-4 overflow-hidden rounded-[32px] border border-white/10">
          {heroImage ? (
            <div className="absolute inset-0">
              <Image
                src={heroImage}
                alt={heroImageAlt || `${title} hero image`}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,13,0.95)_0%,rgba(7,8,13,0.8)_42%,rgba(7,8,13,0.58)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,13,0.16)_0%,rgba(7,8,13,0.9)_100%)]" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(80,132,255,0.14),transparent_35%),linear-gradient(180deg,#0b0d14_0%,#07080d_100%)]" />
          )}

          <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:p-10">
            <div className="max-w-3xl">
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                {backLabel}
              </Link>

              <div className="mt-5 flex flex-wrap gap-2">
                {spoilerLevel === 'spoiler' ? (
                  <Badge className="gap-1 rounded-full border border-rose-400/30 bg-rose-400/15 px-3 py-1 text-[11px] text-rose-100 hover:bg-rose-400/15">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    Spoiler guide
                  </Badge>
                ) : (
                  <Badge className="gap-1 rounded-full border border-sky-400/30 bg-sky-400/15 px-3 py-1 text-[11px] text-sky-100 hover:bg-sky-400/15">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Spoiler-light
                  </Badge>
                )}
                {verificationStatus ? (
                  <Badge className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] text-zinc-100 hover:bg-black/30">
                    Status: {verificationStatus}
                  </Badge>
                ) : null}
              </div>

              <h1 className="mt-5 max-w-4xl font-serif text-3xl font-normal leading-[1.04] tracking-normal text-white sm:text-4xl lg:text-[52px]">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
                {description}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur">
                  <div className="flex items-center gap-2 text-sm text-zinc-200">
                    <Clock className="h-4 w-4" />
                    {timeToRead} read
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur">
                  <div className="flex items-center gap-2 text-sm text-zinc-200">
                    <BookOpen className="h-4 w-4" />
                    Updated {lastUpdated}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur">
                  <div className="flex items-center gap-2 text-sm text-zinc-200">
                    <CheckCircle2 className="h-4 w-4" />
                    {videos.length} videos
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[28px] border border-white/10 bg-black/25 p-5 backdrop-blur">
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  Reading flow
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  Use the table of contents to jump by section. Each major section keeps its own
                  screenshot, table, or answer block in the same reading stream.
                </p>
              </div>
              {videos.length ? (
                <div className="rounded-[28px] border border-white/10 bg-black/25 p-5 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Video support
                  </p>
                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {videos.length} embedded YouTube guide{videos.length > 1 ? 's' : ''} are
                    available below for side-by-side checking against the written route.
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-sm font-medium text-white">Table of Contents</h2>
              <nav className="mt-4 space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-xl px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {section.title}
                  </a>
                ))}
                {faqs.length ? (
                  <a
                    href="#faq"
                    className="block rounded-xl px-3 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    FAQ
                  </a>
                ) : null}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            {spoilerLevel === 'spoiler' ? (
              <section className="mb-6 rounded-[28px] border border-rose-400/25 bg-rose-400/10 p-5 text-rose-50">
                <div className="flex gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <h2 className="text-base font-semibold">Spoiler warning</h2>
                    <p className="mt-2 text-sm leading-7 text-rose-100/90">
                      This guide discusses route logic, outcome planning, or reveal-heavy sections.
                      Finish one story run first if you want the surprises intact.
                    </p>
                  </div>
                </div>
              </section>
            ) : null}

            {videos.length ? (
              <section className="mb-8" aria-labelledby="video-guides">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <h2
                      id="video-guides"
                      className="font-serif text-3xl font-normal tracking-normal text-white"
                    >
                      YouTube video guides
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-zinc-400 md:hidden">
                      Swipe sideways to compare videos without losing the main guide.
                    </p>
                  </div>
                  <Badge className="rounded-full border border-white/10 bg-black/25 text-zinc-200 hover:bg-black/25">
                    {videos.length} videos
                  </Badge>
                </div>
                <div className="flex snap-x gap-3 overflow-x-auto pb-3 [-webkit-overflow-scrolling:touch] hide-scrollbar md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-3">
                  {videos.map((video) => {
                    const youtubeId = getYouTubeId(video.url);

                    return (
                      <article
                        key={video.url}
                        className="w-[78vw] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] md:w-auto md:max-w-none"
                      >
                        <div className="relative aspect-video bg-zinc-950">
                          {youtubeId ? (
                            <iframe
                              src={`https://www.youtube.com/embed/${youtubeId}`}
                              title={video.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="absolute inset-0 h-full w-full"
                            />
                          ) : null}
                        </div>
                        <div className="p-4">
                          <h3 className="line-clamp-2 text-sm font-medium leading-6 text-white">
                            {video.title}
                          </h3>
                          <p className="mt-2 text-xs text-zinc-500">
                            {video.channel} - {video.duration}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ) : null}

            <section className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5 sm:p-7">
              <div className="prose prose-invert max-w-none overflow-hidden prose-p:leading-8 prose-headings:scroll-mt-24 prose-h2:mt-10 prose-h2:font-serif prose-h2:text-3xl prose-h2:font-normal prose-h2:tracking-normal prose-h3:text-lg prose-h3:font-medium prose-strong:text-white prose-li:text-zinc-300 prose-p:text-zinc-300 prose-td:text-zinc-300 prose-th:text-white prose-a:text-zinc-100">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: ({ children }) => {
                      const id = findSectionId(sections, children);
                      const media = id ? sectionMedia?.[id] : undefined;

                      return (
                        <>
                          <h2 id={id}>{children}</h2>
                          {media ? (
                            <figure className="not-prose my-5 overflow-hidden rounded-[24px] border border-white/10 bg-black/20">
                              <div className="relative aspect-[16/9] min-h-[180px] bg-zinc-950">
                                <Image
                                  src={media.image}
                                  alt={media.alt}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 860px"
                                  className="object-cover"
                                />
                              </div>
                              <figcaption className="border-t border-white/10 px-4 py-3 text-sm text-zinc-400">
                                {media.caption}
                              </figcaption>
                            </figure>
                          ) : null}
                        </>
                      );
                    },
                    table: ({ children }) => (
                      <div className="not-prose my-6 overflow-x-auto rounded-[24px] border border-white/10">
                        <table className="w-full min-w-[680px] border-collapse bg-black/20 text-sm">
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({ children }) => (
                      <th className="border-b border-white/10 bg-white/[0.04] px-4 py-3 text-left font-semibold text-white">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="border-b border-white/10 px-4 py-3 align-top text-zinc-300">
                        {children}
                      </td>
                    ),
                    hr: () => <hr className="my-8 border-white/10" />,
                  }}
                >
                  {content}
                </ReactMarkdown>
              </div>
            </section>

            {faqs.length ? (
              <section id="faq" className="mt-8" aria-labelledby="faq-heading">
                <h2
                  id="faq-heading"
                  className="mb-4 font-serif text-3xl font-normal tracking-normal text-white"
                >
                  Frequently asked questions
                </h2>
                <div className="grid gap-4">
                  {faqs.map((faq) => (
                    <article
                      key={faq.question}
                      className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5"
                    >
                      <h3 className="text-base font-semibold text-white">{faq.question}</h3>
                      <p className="mt-2 leading-8 text-zinc-400">{faq.answer}</p>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm leading-7 text-zinc-300">
                Have questions or feedback? Join our community at{' '}
                <a
                  href="https://www.reddit.com/r/enjoy4game/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-100 underline decoration-white/20 underline-offset-4 hover:text-white"
                >
                  r/enjoy4game
                </a>
                .
              </p>
            </section>

            {relatedGuides.length ? (
              <section className="mt-8" aria-labelledby="related-guides">
                <h2
                  id="related-guides"
                  className="mb-4 font-serif text-3xl font-normal tracking-normal text-white"
                >
                  Related guides
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedGuides.map((related) => (
                    <Link key={related.href} href={related.href} className="group">
                      <article className="h-full rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]">
                        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-zinc-100">
                          {related.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-zinc-400">
                          {related.description}
                        </p>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
