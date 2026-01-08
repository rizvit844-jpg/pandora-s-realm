import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll respond soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-sans text-sm tracking-[0.3em] uppercase text-accent mb-4">
                Get in Touch
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-glow-gold">
                Contact
              </h1>
              <p className="text-muted-foreground text-lg">
                Questions, inquiries, or thoughts to share? Reach out below.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-sans text-muted-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-card border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-sans text-muted-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-card border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-sans text-muted-foreground mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                    className="bg-card border-border focus:border-primary focus:ring-primary/20 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-sans text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    rows={6}
                    className="bg-card border-border focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="heroSolid"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="glow-separator w-24 mx-auto mb-12" />

              <h2 className="font-serif text-3xl md:text-4xl mb-8">
                Stay Connected
              </h2>

              <p className="text-muted-foreground mb-8">
                For media inquiries, speaking engagements, or interview
                requests, please use the contact form above with the appropriate
                subject line.
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
                <div className="atmospheric-card p-6 text-center">
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    Media & Press
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    For interviews and review copies
                  </p>
                </div>
                <div className="atmospheric-card p-6 text-center">
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    Reader Inquiries
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Questions about the book or ideas
                  </p>
                </div>
              </div>

              <p className="font-serif text-lg italic text-primary/80 mt-12">
                "Every question is a door. Some lead to answers, others to
                deeper questions still."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
