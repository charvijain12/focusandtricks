import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Brain, Heart, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Focus & Tricks</h1>
          <p className="text-muted-foreground text-lg">
            Where curiosity meets productivity
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Focus & Tricks was created to help people sharpen their minds while building better productivity habits. 
                    We believe that mental challenges and smart work strategies go hand in hand. Through daily riddles and 
                    actionable focus tips, we're building a community of curious, motivated individuals who want to think 
                    better and achieve more.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">What We Do</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Every day, we share brain teasers that challenge your thinking and productivity tips that actually work. 
                    Our content is designed to be:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Engaging:</strong> Riddles that make you think differently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Practical:</strong> Tips you can apply immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Science-backed:</strong> Strategies based on research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-foreground">Accessible:</strong> Simple language, powerful results</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Join Our Community</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Follow us on Instagram @focus.and.tricks for daily riddles, motivation, and productivity hacks. 
                    Be part of a growing community that values both mental challenges and personal growth.
                  </p>
                  <Button asChild className="gradient-primary">
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
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
