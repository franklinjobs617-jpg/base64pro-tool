import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Mail, MessageCircle, Twitter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Base64Pro',
  description: 'Get in touch with the Base64Pro team. We welcome feedback, suggestions, and collaboration inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
      
      <main className="container px-4 py-8 sm:py-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have a question, suggestion, or found an error in one of our guides? We&apos;d love to hear from you.
        </p>

        <div className="space-y-6">
          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Email</h2>
            </div>
            <p className="text-muted-foreground mb-2">
              For general inquiries, feedback, or business opportunities:
            </p>
            <a 
              href="mailto:admin@base64pro.top" 
              className="text-primary hover:underline font-medium"
            >
              admin@base64pro.top
            </a>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <MessageCircle className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Guide Corrections</h2>
            </div>
            <p className="text-muted-foreground">
              Found something inaccurate? Please include the game name, guide title, and specific section when reporting errors. We review all feedback and update guides promptly.
            </p>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Twitter className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold">Social Media</h2>
            </div>
            <p className="text-muted-foreground">
              Follow us for updates on new guides and game coverage announcements.
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-muted/50 rounded-xl">
          <h3 className="font-semibold mb-2">Response Time</h3>
          <p className="text-sm text-muted-foreground">
            We typically respond within 24-48 hours. For urgent matters, please mention it in your subject line.
          </p>
        </div>
      </main>
    </>
  );
}
