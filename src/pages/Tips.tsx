import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { tips } from "@/data/tips";

const Tips = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Focus & Productivity Tips</h1>
          <p className="text-muted-foreground text-lg">
            Science-backed strategies to boost your focus, productivity, and mental clarity.
          </p>
        </div>

        <div className="space-y-6">
          {tips.map((tip) => (
            <Card key={tip.id} className="shadow-card hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="outline">{tip.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {tip.readTime}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3">{tip.title}</h2>
                <p className="text-muted-foreground mb-4">{tip.excerpt}</p>
                <div className="prose prose-sm max-w-none">
                  <p className="text-foreground leading-relaxed">{tip.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
