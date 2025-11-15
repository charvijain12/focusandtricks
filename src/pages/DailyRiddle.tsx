import { Card, CardContent } from "@/components/ui/card";
import { Calendar, RefreshCw } from "lucide-react";
import RiddleCard from "@/components/RiddleCard";
import { dailyRiddle } from "@/data/riddles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DailyRiddle = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Calendar className="h-5 w-5 text-primary" />
            <span className="text-primary font-semibold">{today}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Today's Riddle</h1>
          <p className="text-muted-foreground text-lg">
            A fresh brain teaser to start your day. Can you solve it?
          </p>
        </div>

        <div className="mb-8">
          <RiddleCard riddle={dailyRiddle} />
        </div>

        <Card className="shadow-card bg-muted/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <RefreshCw className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Want More Riddles?</h3>
                <p className="text-muted-foreground mb-4">
                  Explore our complete archive of brain teasers, sorted by difficulty level.
                </p>
                <Button asChild variant="outline">
                  <Link to="/riddles">Browse All Riddles</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DailyRiddle;
