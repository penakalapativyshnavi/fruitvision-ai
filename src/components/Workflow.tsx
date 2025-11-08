import { Card } from "@/components/ui/card";
import { Camera, Database, Brain, CheckCircle, Upload, Cpu } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Data Collection",
    description: "Capture high-quality fruit images from various angles and lighting conditions"
  },
  {
    icon: Upload,
    title: "Data Annotation",
    description: "Label images with quality classifications and defect markers"
  },
  {
    icon: Database,
    title: "Preprocessing",
    description: "Resize, normalize, and augment images for optimal training"
  },
  {
    icon: Brain,
    title: "Model Training",
    description: "Train CNN, ResNet, or YOLOv8 models on prepared datasets"
  },
  {
    icon: Cpu,
    title: "Evaluation",
    description: "Test model accuracy, precision, and recall metrics"
  },
  {
    icon: CheckCircle,
    title: "Deployment",
    description: "Deploy to production for real-time fruit sorting"
  }
];

export const Workflow = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-secondary">Workflow</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach from data collection to deployment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 h-full hover:shadow-card transition-all duration-300 border-border/50 bg-gradient-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
