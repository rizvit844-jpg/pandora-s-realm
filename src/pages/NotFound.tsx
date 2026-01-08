import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 text-center px-6">
          <h1 className="font-serif text-8xl md:text-9xl text-primary/20 mb-4">
            404
          </h1>
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-glow">
            Lost in the Void
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you seek has vanished into shadow. Perhaps the truth lies
            elsewhere.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
