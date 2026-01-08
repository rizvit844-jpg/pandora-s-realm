import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ParticleField } from "@/components/effects/ParticleField";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import bookCover from "@/assets/book-cover.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bookCover})` }}
        />

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Ambient glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent animate-slow-pulse pointer-events-none" />

        {/* Particle effects */}
        <ParticleField />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide mb-6 opacity-0 animate-fade-in-up">
              <span className="text-glow">Pandora's Ball</span>
            </h1>

            {/* Subtitle */}
            <p
              className="font-serif text-xl md:text-2xl text-muted-foreground italic mb-4 opacity-0 animate-fade-in-up animation-delay-200"
            >
              Truth, Deception, and the Hidden Reality of Our World
            </p>

            {/* Author */}
            <p
              className="font-sans text-sm tracking-[0.3em] uppercase text-primary/80 mb-12 opacity-0 animate-fade-in-up animation-delay-400"
            >
              by Edward S. Bicker
            </p>

            {/* Tagline */}
            <p
              className="font-serif text-lg md:text-xl text-foreground/80 max-w-xl mx-auto mb-12 opacity-0 animate-fade-in-up animation-delay-600"
            >
              A descent into the architecture of mass deception — where every answer unveils another question.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-800"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/about-book">Discover the Book</Link>
              </Button>
              <Button variant="heroGold" size="xl" asChild>
                <a
                  href="https://amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float-up">
          <div className="w-6 h-10 rounded-full border border-muted-foreground/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary/50 animate-slow-pulse" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              {/* Glowing separator */}
              <div className="glow-separator w-24 mx-auto mb-12" />

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 text-glow">
                What If Everything You Believe Is By Design?
              </h2>

              <p className="font-sans text-muted-foreground text-lg leading-relaxed mb-8">
                Pandora's Ball is more than a book — it's an invitation to question the narratives that shape your reality. From media manipulation to institutional power, from cultural conditioning to cosmological claims, this journey challenges the very foundations of accepted truth.
              </p>

              <p className="font-serif text-xl italic text-primary/80">
                "The mortal enemy of corruption is truth."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Themes Section */}
      <section className="relative py-32 bg-gradient-to-b from-background via-card/30 to-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
              The Descent Begins
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Media & Narrative",
                description:
                  "How information becomes the most powerful form of control — shaping belief without visible force.",
              },
              {
                title: "Power & Institutions",
                description:
                  "The invisible architecture of influence that guides society from behind closed doors.",
              },
              {
                title: "Belief & Reality",
                description:
                  "Where comfortable consensus ends and uncomfortable truth begins.",
              },
              {
                title: "Systems & Control",
                description:
                  "Education, healthcare, religion — examining the structures that shape human behavior.",
              },
              {
                title: "Questions & Answers",
                description:
                  "Each layer of understanding reveals new mysteries demanding exploration.",
              },
              {
                title: "Truth & Consequence",
                description:
                  "The courage to look beyond the veil, and what lies waiting on the other side.",
              },
            ].map((theme, index) => (
              <ScrollReveal key={theme.title} delay={index * 100}>
                <div className="atmospheric-card p-8 h-full">
                  <h3 className="font-serif text-xl text-primary mb-4">
                    {theme.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Torch-like glow */}
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent/10 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">
                Begin Your Journey
              </h2>

              <p className="text-muted-foreground mb-12">
                Step into the rabbit hole. Challenge what you think you know.
                Discover the truth that waits beneath the surface.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroSolid" size="lg" asChild>
                  <Link to="/about-book">Learn More</Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/about-author">Meet the Author</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
