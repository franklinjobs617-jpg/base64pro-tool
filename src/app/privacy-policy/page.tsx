import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | Base64Pro',
  description: 'Privacy Policy for Base64Pro - Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
      
      <main className="container px-4 py-8 sm:py-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: May 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              Base64Pro may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, time spent on site, and navigation patterns</li>
              <li><strong>Device Information:</strong> Browser type, operating system, and device type</li>
              <li><strong>Cookies:</strong> Small data files stored on your device for functionality and analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Provide and maintain our website</li>
              <li>Improve user experience and content quality</li>
              <li>Analyze site traffic and usage patterns</li>
              <li>Display relevant advertisements through Google AdSense</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Google AdSense</h2>
            <p className="text-muted-foreground">
              We use Google AdSense to display advertisements. Google may use cookies and data to serve ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting{' '}
              <a 
                href="https://www.google.com/settings/ads" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies for essential site functionality and analytics. You can control cookie settings through your browser preferences. Disabling cookies may affect site functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
            <p className="text-muted-foreground">
              Our site may use third-party services such as Google Analytics for traffic analysis and YouTube for video content. These services have their own privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
            <p className="text-muted-foreground">
              Depending on your location, you may have rights regarding your personal data, including access, correction, or deletion. Contact us for any data-related requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="text-muted-foreground">
              For privacy-related questions, contact us at{' '}
              <a href="mailto:admin@base64pro.top" className="text-primary hover:underline">
                admin@base64pro.top
              </a>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
