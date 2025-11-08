import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Demo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    if (!preview) return;

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setResult({
        quality: "Fresh",
        confidence: 96.8,
        defects: "None detected",
        ripeness: "Optimal",
        recommendation: "Ready for market distribution"
      });
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Fruit quality has been assessed successfully"
      });
    }, 2000);
  };

  return (
    <section id="demo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Try Our <span className="text-primary">Demo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Upload a fruit image to see our AI in action
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-card">
              <h3 className="text-xl font-semibold mb-4">Upload Image</h3>
              
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors bg-background/50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {preview ? (
                    <img src={preview} alt="Preview" className="max-h-48 rounded-lg" />
                  ) : (
                    <>
                      <ImageIcon className="w-12 h-12 mb-4 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">PNG, JPG or JPEG</p>
                    </>
                  )}
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>

              <Button 
                className="w-full mt-4" 
                onClick={analyzeImage}
                disabled={!preview || isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Analyze Fruit
                  </>
                )}
              </Button>
            </Card>

            <Card className="p-8 bg-gradient-card">
              <h3 className="text-xl font-semibold mb-4">Analysis Results</h3>
              
              {result ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Quality Status</span>
                      <span className="text-2xl font-bold text-primary">{result.quality}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Confidence: {result.confidence}%
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Defects</span>
                      <span className="text-sm text-muted-foreground">{result.defects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Ripeness</span>
                      <span className="text-sm text-muted-foreground">{result.ripeness}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20 mt-4">
                    <div className="text-sm font-medium mb-1">Recommendation</div>
                    <div className="text-sm text-muted-foreground">{result.recommendation}</div>
                  </div>
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  Upload an image to see analysis results
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
