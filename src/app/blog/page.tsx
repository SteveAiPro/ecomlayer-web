import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'E-Commerce Image Editing Guides & Case Studies | EcomLayer.ai Blog',
  description: 'In-depth tutorials on product image layer decomposition, Amazon pure white background compliance, cross-border infographic translation, and conversion rate optimization.',
  alternates: {
    canonical: 'https://ecomlayer.ai/blog',
  },
};

export default function BlogListingPage() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold uppercase mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          E-E-A-T Knowledge Hub
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
          E-Commerce Image Strategy & Layer Editing Guides
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Master Amazon compliance rules, multi-language translation strategies, and conversion-focused gallery designs with our engineering guides.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-slate-800 bg-[#0c1220] p-6 shadow-xl hover:border-blue-500/50 hover:bg-[#0f172a] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/20 font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-white mb-3 hover:text-cyan-300 transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
                {post.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="font-semibold text-blue-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
              >
                Read Guide <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
