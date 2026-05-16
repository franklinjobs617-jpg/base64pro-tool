import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service | Base64Pro',
  description: 'Terms of Service for Base64Pro - Rules and guidelines for using our gaming guides website.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Terms of Service', href: '/terms-of-service' }]} />
      
      <main className="container px-4 py-8 sm:py-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: May 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing Base64Pro.top, you agree to these Terms of Service. If you do not agree, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Use of Content</h2>
            <p className="text-muted-foreground mb-4">
              All guides, walkthroughs, and content on Base64Pro are provided for personal, non-commercial use. You may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Copy, reproduce, or redistribute our content without permission</li>
              <li>Use our content for commercial purposes</li>
              <li>Remove or alter copyright notices</li>
              <li>Use automated systems to scrape or download content at scale</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Accuracy of Information</h2>
            <p className="text-muted-foreground">
              We strive for accuracy, but game content may change with updates. We provide guides &quot;as is&quot; without guarantees. Always verify critical information in-game.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">User Conduct</h2>
            <p className="text-muted-foreground mb-4">
              When using our site, you agree not to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Attempt to disrupt or damage our servers or services</li>
              <li>Use the site for any unlawful purpose</li>
              <li>Interfere with other users&apos; access to the site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Third-Party Links</h2>
            <p className="text-muted-foreground">
              Our site may contain links to external websites (such as Steam, YouTube, or Reddit). We are not responsible for the content or practices of these third-party sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Intellectual Property</h2>
            <p className="text-muted-foreground">
              Game titles, logos, and related content belong to their respective owners. Base64Pro is not affiliated with or endorsed by game developers or publishers unless explicitly stated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Base64Pro is not liable for any damages arising from the use of our content or services. Use guides at your own discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Modifications</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-muted-foreground">
              Questions about these terms? Contact us at{' '}
              <a href="mailto:legal@base64pro.top" className="text-primary hover:underline">
                legal@base64pro.top
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
