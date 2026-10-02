import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { ArrowLeft, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | EcomLayer.ai`,
    description: post.description,
    alternates: {
      canonical: `https://ecomlayer.ai/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-300 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all guides
      </Link>

      <div className="mb-8">
        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/20 text-xs font-semibold uppercase mb-4 inline-block">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
          <span>•</span>
          <span className="text-emerald-400 font-medium">Verified by E-Commerce Engineers</span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-[#0d1424] border border-slate-800 text-xs text-slate-300 mb-10 leading-relaxed flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-white block mb-0.5">Summary Key Takeaway:</span>
          {post.description}
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
        {post.content.split('\n\n').map((paragraph, i) => {
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={i} className="text-2xl font-bold text-white pt-6 border-t border-slate-800">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={i} className="text-xl font-semibold text-cyan-300 pt-3">
                {paragraph.replace('### ', '')}
              </h3>
            );
          }
          if (paragraph.startsWith('|')) {
            return (
              <div key={i} className="overflow-x-auto my-6 p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
                <pre>{paragraph}</pre>
              </div>
            );
          }
          return <p key={i}>{paragraph}</p>;
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-500/30 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Ready to edit your e-commerce images?</h3>
        <p className="text-xs text-slate-400 mb-6 max-w-md mx-auto">
          Try our 40 interactive e-commerce demos or upload your own product photos to test layer decomposition.
        </p>
        <Link
          href="/#demos"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-500/20"
        >
          <span>Explore 40 Live Demos Free</span>
        </Link>
      </div>
    </article>
  );
}
