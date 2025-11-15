import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap, ArrowRight, Instagram } from "lucide-react";
import RiddleCard from "@/components/RiddleCard";
import { riddles } from "@/data/riddles";

const Home = () => {
  const featuredRiddles = riddles.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold">Welcome to Focus & Tricks</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Challenge Your Mind,
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              Master Your Focus
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Daily riddles to sharpen your thinking and productivity tips to help you achieve more.
            Join our growing community of curious minds!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary shadow-soft">
              <Link to="/daily" className="flex items-center gap-2">
                Today's Riddle <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://instagram.com/focus.and.tricks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-soft transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Daily Brain Teasers</h3>
                <p className="text-muted-foreground">
                  Fresh riddles every day to keep your mind sharp and engaged.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Focus Strategies</h3>
                <p className="text-muted-foreground">
                  Proven techniques to boost concentration and productivity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-soft transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Tips</h3>
                <p className="text-muted-foreground">
                  Actionable productivity hacks you can apply immediately.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Riddles Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Riddles</h2>
            <p className="text-muted-foreground text-lg">
              Try these popular brain teasers from our collection
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredRiddles.map((riddle) => (
              <RiddleCard key={riddle.id} riddle={riddle} />
            ))}
          </div>
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/riddles" className="flex items-center gap-2">
                View All Riddles <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Follow @focus.and.tricks on Instagram for daily riddles, motivation, and productivity tips!
          </p>
          <Button asChild size="lg" variant="secondary">
            <a
              href="https://instagram.com/focus.and.tricks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mx-auto"
            >
              <Instagram className="h-5 w-5" />
              Follow Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
