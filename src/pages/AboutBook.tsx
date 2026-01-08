import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import bookCover from "@/assets/book-cover.png";

const AboutBook = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Book Cover */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-lg blur-xl opacity-50" />
                <img
                  src={bookCover}
                  alt="Pandora's Ball by Edward S. Bicker"
                  className="relative w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
              </div>
            </ScrollReveal>

            {/* Title & Introduction */}
            <ScrollReveal delay={200}>
              <div>
                <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4">
                  The Book
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-glow">
                  Pandora's Ball
                </h1>
                <p className="font-serif text-xl italic text-muted-foreground mb-8">
                  Truth, Deception, and the Hidden Reality of Our World
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A provocative exploration of mass deception, questioning the
                  mainstream narratives about media, government, education,
                  medicine, religion, and the very foundations of accepted
                  reality.
                </p>
                <Button variant="heroGold" size="lg" asChild>
                  <a
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Order Your Copy
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Premise */}
      <section className="py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="glow-separator w-24 mx-auto mb-12" />

              <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
                The Core Premise
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Pandora's Ball argues that controlled information produces
                  controlled behavior — and that the strongest control doesn't
                  require force; it requires narrative dominance.
                </p>

                <p>
                  Framed as a "rabbit hole" journey, the book presents a step-by-step
                  descent: starting with the media, then government, then broader
                  systems like education, healthcare, and organized religion, before
                  arriving at the author's central claim about cosmology and the
                  nature of reality itself.
                </p>

                <blockquote className="border-l-2 border-primary/50 pl-6 py-2 my-8">
                  <p className="font-serif text-xl italic text-foreground">
                    "If information drives behavior, who benefits from controlling
                    information?"
                  </p>
                </blockquote>

                <p>
                  The author invites readers to take a "red pill" approach — choosing
                  uncomfortable questions over comfortable consensus — because the
                  mortal enemy of corruption is truth.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Journey Through the Book */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
              The Descent
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
              Each chapter builds upon the last, taking you deeper into the
              architecture of influence.
            </p>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: "01",
                title: "The Means of Mass Communication",
                description:
                  "How television and major media function as a curated reality engine — shaping what becomes 'news' and which interpretations become socially acceptable.",
              },
              {
                number: "02",
                title: "Government & Freedom",
                description:
                  "Examining how governments justify growth under 'protection,' while sliding into systems where elected officials become employees of the industries that finance them.",
              },
              {
                number: "03",
                title: "War & Propaganda",
                description:
                  "Understanding conflict not as moral necessity, but as an engineered outcome of propaganda, fear, and institutional incentives.",
              },
              {
                number: "04",
                title: "Education & Belief",
                description:
                  "Questioning whether formal education trains independent thinkers or functions as belief installation.",
              },
              {
                number: "05",
                title: "Healthcare & Industry",
                description:
                  "Exploring how medicine intertwines with government and business, questioning whether the system prioritizes cures or profitable management.",
              },
              {
                number: "06",
                title: "Religion & Spirituality",
                description:
                  "Separating internal spirituality from hierarchical religion, examining how institutions use fear and authority to regulate conscience.",
              },
              {
                number: "07",
                title: "The Foundation",
                description:
                  "The turning point where isolated scandals give way to a meta-claim — that society's controlling structures depend on foundational myths.",
              },
            ].map((chapter, index) => (
              <ScrollReveal key={chapter.number} delay={index * 100}>
                <div className="atmospheric-card p-8 flex gap-6">
                  <div className="font-serif text-4xl text-primary/30 font-light">
                    {chapter.number}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-3">
                      {chapter.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* For Readers */}
      <section className="py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">
                Who Is This Book For?
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed text-left">
                <p>
                  This book is for readers who feel the official story is
                  incomplete. For those who consume alternative commentary, who
                  hold healthy skepticism of media and government, who appreciate
                  "connect-the-dots" nonfiction and narrative persuasion.
                </p>

                <p>
                  It's for people newly disillusioned by modern media and politics,
                  looking for an explanation model that ties systems together.
                </p>

                <p>
                  If you've ever felt manipulated and want to understand how and
                  why — this journey is for you.
                </p>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroSolid" size="lg" asChild>
                  <a
                    href="https://amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Your Copy
                  </a>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/about-author">About the Author</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default AboutBook;
