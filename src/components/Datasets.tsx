import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database } from "lucide-react";

const datasets = [
  {
    name: "Fruits 360",
    description: "90,000+ images of 120 fruit classes with multiple angles and variations",
    images: "90,000+",
    classes: "120",
    link: "https://www.kaggle.com/moltean/fruits"
  },
  {
    name: "Apple Defects Dataset",
    description: "Specialized dataset focusing on apple scab and various defect types",
    images: "3,000+",
    classes: "6",
    link: "https://www.kaggle.com"
  },
  {
    name: "Plant Village",
    description: "Comprehensive plant disease dataset including tomato and brinjal defects",
    images: "54,000+",
    classes: "38",
    link: "https://www.kaggle.com"
  }
];

export const Datasets = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Training <span className="text-primary">Datasets</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            High-quality datasets powering our deep learning models
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {datasets.map((dataset, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{dataset.name}</h3>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4">{dataset.description}</p>
              
              <div className="flex gap-4 mb-4 text-sm">
                <div>
                  <div className="font-semibold text-primary">{dataset.images}</div>
                  <div className="text-muted-foreground">Images</div>
                </div>
                <div>
                  <div className="font-semibold text-secondary">{dataset.classes}</div>
                  <div className="text-muted-foreground">Classes</div>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href={dataset.link} target="_blank" rel="noopener noreferrer">
                  View Dataset
                  <ExternalLink className="ml-2 w-3 h-3" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
