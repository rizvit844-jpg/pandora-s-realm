import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import authorImage from "@/assets/author-ed-bicker.png";

const AboutAuthor = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Author Introduction - Shown first on mobile, second on desktop */}
            <ScrollReveal delay={200}>
              <div className="lg:pt-8">
                <p className="font-sans text-sm tracking-[0.3em] uppercase text-accent mb-4">
                  The Author
                </p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-glow-gold">
                  Edward S. Bicker
                </h1>
                <p className="font-serif text-xl italic text-muted-foreground mb-8">
                  Political activist, community advocate, truth seeker
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Edward Spiro Bicker is a writer, thinker, and former public
                  servant dedicated to challenging the narratives that shape our
                  collective understanding of reality. His work invites readers
                  to question, investigate, and ultimately think for themselves.
                </p>
              </div>
            </ScrollReveal>

            {/* Author Image */}
            <ScrollReveal>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-radial from-accent/15 via-transparent to-transparent rounded-full blur-2xl opacity-50" />
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={authorImage}
                    alt="Edward S. Bicker"
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl object-cover max-h-[500px]"
                  />
                  {/* Subtle overlay for consistency */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="glow-separator w-24 mx-auto mb-12" />

              <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
                The Journey to Pandora's Ball
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Edward S. Bicker brings a unique perspective shaped by decades
                  of civic engagement and intellectual curiosity. As a former
                  city councilman, he witnessed firsthand how political systems
                  operate from the inside — an experience that deepened his
                  understanding of institutional power and its mechanisms.
                </p>

                <p>
                  With an MBA and membership in the Delta Mu Delta honor society,
                  Edward combines academic rigor with practical experience. His
                  time as a college mathematics tutor honed his ability to break
                  down complex ideas into accessible insights — a skill that
                  permeates every page of Pandora's Ball.
                </p>

                <p>
                  As a political activist and community volunteer, Edward has
                  long been committed to questioning accepted narratives and
                  encouraging others to do the same. He believes that critical
                  thinking and independent research are not just valuable
                  skills, but essential tools for navigating the modern world.
                </p>

                <blockquote className="border-l-2 border-accent/50 pl-6 py-2 my-8">
                  <p className="font-serif text-xl italic text-foreground">
                    "I don't claim to have all the answers. What I offer is a
                    framework for asking better questions."
                  </p>
                </blockquote>

                <p>
                  Pandora's Ball represents the culmination of years of research,
                  observation, and reflection. It's an invitation for readers to
                  join Edward on a journey of discovery — not to accept his
                  conclusions blindly, but to examine the evidence and reach
                  their own understanding.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credentials & Experience */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
              Background & Credentials
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Public Service",
                description: "Former City Councilman with direct experience in local governance",
                icon: "🏛️",
              },
              {
                title: "Education",
                description: "MBA holder, Delta Mu Delta honor society member",
                icon: "🎓",
              },
              {
                title: "Teaching",
                description: "College mathematics tutor with passion for clear explanation",
                icon: "📐",
              },
              {
                title: "Activism",
                description: "Political activist and dedicated community volunteer",
                icon: "✊",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="atmospheric-card p-6 text-center h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-serif text-lg text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">
                Writing Philosophy
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Edward positions himself not as someone claiming sole discovery
                of hidden truths, but as a conduit encouraging independent
                research. His approach respects the reader's intelligence and
                autonomy, providing frameworks for investigation rather than
                demanding acceptance.
              </p>

              <p className="font-serif text-lg italic text-primary/80 mb-12">
                "Investigate for yourself. Question everything — including me.
                The only authority that matters is the truth you verify
                personally."
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroSolid" size="lg" asChild>
                  <Link to="/about-book">Explore the Book</Link>
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default AboutAuthor;
