import { Card } from "@/components/ui/card";
import { Scan, Target, Zap, Shield, TrendingUp, Clock } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Quality Classification",
    description: "Automatically classify fruits as fresh, ripe, overripe, or spoiled with high accuracy."
  },
  {
    icon: Target,
    title: "Defect Detection",
    description: "Identify bruises, mold, pest damage, and other quality issues in real-time."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Process images instantly for immediate sorting decisions on production lines."
  },
  {
    icon: Shield,
    title: "Consistent Results",
    description: "Eliminate human error with consistent, objective quality assessments."
  },
  {
    icon: TrendingUp,
    title: "Ripeness Estimation",
    description: "Predict optimal harvest and market readiness for better supply chain management."
  },
  {
    icon: Clock,
    title: "24/7 Operation",
    description: "Continuous automated sorting without fatigue or quality degradation."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Advanced capabilities designed to transform fruit quality assessment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
