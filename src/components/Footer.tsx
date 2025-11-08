import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Fruit Quality Detection
            </h3>
            <p className="text-sm text-muted-foreground">
              Advanced AI solution for automated fruit quality assessment and classification.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Deep Learning</li>
              <li>Computer Vision</li>
              <li>TensorFlow & PyTorch</li>
              <li>YOLOv8 & ResNet</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Applications</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Agricultural Sorting</li>
              <li>Supply Chain Management</li>
              <li>Quality Control</li>
              <li>Market Analysis</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Fruit Quality Detection. Built with AI technology.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
