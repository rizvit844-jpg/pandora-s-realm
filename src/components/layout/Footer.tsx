import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/30 bg-background">
      {/* Subtle glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="font-serif text-lg tracking-widest text-foreground hover:text-primary transition-colors duration-300"
            >
              EDWARD S. BICKER
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-6">
            <Link
              to="/about-book"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              The Book
            </Link>
            <Link
              to="/about-author"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              The Author
            </Link>
            <Link
              to="/contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Quote */}
          <div className="text-center md:text-right">
            <p className="font-serif text-sm italic text-muted-foreground">
              "The mortal enemy of corruption is truth."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
