import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu } from "lucide-react";

const models = [
  {
    name: "YOLOv8",
    type: "Object Detection",
    accuracy: "95.2%",
    speed: "Fast",
    useCase: "Real-time defect detection",
    badge: "Recommended"
  },
  {
    name: "ResNet-50",
    type: "Classification",
    accuracy: "96.8%",
    speed: "Medium",
    useCase: "Quality classification",
    badge: "High Accuracy"
  },
  {
    name: "EfficientNet",
    type: "Classification",
    accuracy: "94.5%",
    speed: "Fast",
    useCase: "Mobile deployment",
    badge: "Efficient"
  },
  {
    name: "MobileNet V4",
    type: "Classification",
    accuracy: "92.1%",
    speed: "Very Fast",
    useCase: "Edge devices",
    badge: "Lightweight"
  },
  {
    name: "Faster R-CNN",
    type: "Object Detection",
    accuracy: "97.3%",
    speed: "Slow",
    useCase: "Precise defect localization",
    badge: "Most Accurate"
  },
  {
    name: "Custom CNN",
    type: "Classification",
    accuracy: "93.7%",
    speed: "Medium",
    useCase: "Specialized tasks",
    badge: "Customizable"
  }
];

export const Models = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Deep Learning <span className="text-secondary">Models</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            State-of-the-art architectures for optimal performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 border-border/50 hover:border-secondary/30 bg-gradient-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{model.name}</h3>
                    <p className="text-xs text-muted-foreground">{model.type}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">{model.badge}</Badge>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Accuracy</span>
                  <span className="font-semibold text-primary">{model.accuracy}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Speed</span>
                  <span className="font-semibold">{model.speed}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">{model.useCase}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
