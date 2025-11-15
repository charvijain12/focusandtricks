import { useState } from "react";
import { Button } from "@/components/ui/button";
import RiddleCard from "@/components/RiddleCard";
import { riddles } from "@/data/riddles";

const Riddles = () => {
  const [filter, setFilter] = useState<"All" | "Easy" | "Medium" | "Hard">("All");

  const filteredRiddles = filter === "All" 
    ? riddles 
    : riddles.filter((riddle) => riddle.difficulty === filter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Riddle Archive</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our complete collection of brain teasers. Filter by difficulty and challenge yourself!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", "Easy", "Medium", "Hard"].map((difficulty) => (
            <Button
              key={difficulty}
              variant={filter === difficulty ? "default" : "outline"}
              onClick={() => setFilter(difficulty as typeof filter)}
              className={filter === difficulty ? "gradient-primary" : ""}
            >
              {difficulty}
            </Button>
          ))}
        </div>

        {/* Riddles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRiddles.map((riddle) => (
            <RiddleCard key={riddle.id} riddle={riddle} />
          ))}
        </div>

        {filteredRiddles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No riddles found for this difficulty level.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Riddles;
