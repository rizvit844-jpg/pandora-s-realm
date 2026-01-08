import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

// Placeholder blog posts - in a real implementation, these would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "The Architecture of Belief",
    excerpt:
      "How do ideas become accepted truths? Exploring the mechanisms by which narratives are constructed and propagated through society.",
    date: "January 2026",
    readTime: "8 min read",
    category: "Philosophy",
  },
  {
    id: 2,
    title: "Questions Worth Asking",
    excerpt:
      "In an age of information overload, the quality of our questions matters more than ever. Here's how to cultivate critical inquiry.",
    date: "December 2025",
    readTime: "6 min read",
    category: "Critical Thinking",
  },
  {
    id: 3,
    title: "The Comfort of Consensus",
    excerpt:
      "Why do we find safety in shared beliefs, even when those beliefs remain unexamined? An exploration of social conformity and truth.",
    date: "November 2025",
    readTime: "10 min read",
    category: "Society",
  },
  {
    id: 4,
    title: "Information as Control",
    excerpt:
      "The relationship between narrative control and behavioral outcomes — understanding the invisible forces that shape our choices.",
    date: "October 2025",
    readTime: "7 min read",
    category: "Media",
  },
  {
    id: 5,
    title: "The Red Pill Dilemma",
    excerpt:
      "Once you begin questioning, where do you stop? Navigating the challenges of living outside comfortable illusions.",
    date: "September 2025",
    readTime: "9 min read",
    category: "Philosophy",
  },
  {
    id: 6,
    title: "Institutional Trust",
    excerpt:
      "From government to media to science, we place enormous faith in institutions. But how do we evaluate that trust?",
    date: "August 2025",
    readTime: "8 min read",
    category: "Society",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Thoughts & Reflections
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
                Journal
              </h1>
              <p className="text-muted-foreground text-lg">
                Essays, insights, and explorations on truth, society, and the
                forces that shape our understanding of the world.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 100}>
                <article className="atmospheric-card group h-full flex flex-col">
                  {/* Category Badge */}
                  <div className="p-6 pb-0">
                    <span className="inline-block px-3 py-1 text-xs font-sans tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More - appears on hover */}
                  <div className="px-6 pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="sm" className="w-full text-primary">
                      Read Article →
                    </Button>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Coming Soon Message */}
          <ScrollReveal delay={600}>
            <div className="max-w-2xl mx-auto text-center mt-16 py-12 border-t border-border/30">
              <p className="font-serif text-xl text-muted-foreground italic mb-4">
                More essays coming soon...
              </p>
              <p className="text-sm text-muted-foreground">
                Subscribe to receive new articles directly in your inbox.
              </p>
              <div className="mt-6">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Subscribe</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Dive Deeper
              </h2>
              <p className="text-muted-foreground mb-8">
                These essays offer glimpses into the ideas explored in Pandora's
                Ball. For the complete journey, explore the book.
              </p>
              <Button variant="heroSolid" size="lg" asChild>
                <Link to="/about-book">Explore the Book</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
