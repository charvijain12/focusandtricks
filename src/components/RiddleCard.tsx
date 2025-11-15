import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface RiddleCardProps {
  riddle: {
    id: number;
    question: string;
    answer: string;
    difficulty: "Easy" | "Medium" | "Hard";
    category?: string;
  };
  showAnswer?: boolean;
}

const RiddleCard = ({ riddle, showAnswer: showAnswerProp = false }: RiddleCardProps) => {
  const [revealed, setRevealed] = useState(showAnswerProp);

  const difficultyColors = {
    Easy: "bg-green-100 text-green-800 border-green-300",
    Medium: "bg-yellow-100 text-yellow-800 border-yellow-300",
    Hard: "bg-red-100 text-red-800 border-red-300",
  };

  return (
    <Card className="group hover:shadow-soft transition-all duration-300 hover:scale-[1.02] shadow-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <Badge className={cn("border", difficultyColors[riddle.difficulty])}>
            {riddle.difficulty}
          </Badge>
          {riddle.category && (
            <Badge variant="outline" className="ml-2">
              {riddle.category}
            </Badge>
          )}
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">The Riddle</h3>
            <p className="text-muted-foreground leading-relaxed">{riddle.question}</p>
          </div>

          <div className="pt-4 border-t border-border">
            {revealed ? (
              <div className="space-y-2 animate-slide-up">
                <h4 className="text-sm font-semibold text-primary flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Answer
                </h4>
                <p className="text-foreground font-medium bg-primary/5 p-3 rounded-lg">
                  {riddle.answer}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setRevealed(false)}
                  className="mt-2"
                >
                  <EyeOff className="h-4 w-4 mr-2" />
                  Hide Answer
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setRevealed(true)}
                className="w-full gradient-primary"
              >
                <Eye className="h-4 w-4 mr-2" />
                Reveal Answer
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiddleCard;
