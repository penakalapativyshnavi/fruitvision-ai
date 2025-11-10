import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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

  const analyzeImage = async () => {
    if (!preview) return;

    setIsAnalyzing(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('analyze-fruit', {
        body: { imageData: preview }
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      // Map AI response to the existing UI format
      setResult({
        quality: data.quality,
        ripeness: data.ripeness,
        consumptionDays: parseInt(data.shelfLife.match(/\d+/)?.[0] || "3"),
        externalQuality: data.externalQuality,
        internalQuality: data.internalQuality,
        ripeningTime: data.ripeningTime,
        recommendation: data.recommendations.join(". ")
      });

      toast({
        title: "Analysis Complete",
        description: `Your ${data.fruitType} has been analyzed successfully`,
      });
    } catch (error) {
      console.error('Analysis error:', error);
      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Failed to analyze the fruit. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
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
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {/* Consumption Timeline */}
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="text-sm font-medium mb-1">Consumption Timeline</div>
                    <div className="text-3xl font-bold text-primary">{result.consumptionDays} Days</div>
                    <div className="text-xs text-muted-foreground">Optimal consumption window</div>
                  </div>

                  {/* Ripening Time */}
                  <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                    <div className="text-sm font-medium mb-1">Ripening Time</div>
                    <div className="text-sm font-semibold">{result.ripeningTime}</div>
                  </div>

                  {/* External Quality Detection */}
                  <div className="p-4 rounded-lg border border-border">
                    <div className="text-sm font-semibold mb-3">External Quality Detection</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Color:</span>
                        <span className="font-medium text-right ml-2">{result.externalQuality.color}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Texture:</span>
                        <span className="font-medium text-right ml-2">{result.externalQuality.texture}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-medium text-right ml-2">{result.externalQuality.size}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="text-muted-foreground font-medium">Appearance:</span>
                        <span className="font-bold text-primary">{result.externalQuality.appearance}</span>
                      </div>
                    </div>
                  </div>

                  {/* Internal Quality Detection */}
                  <div className="p-4 rounded-lg border border-border">
                    <div className="text-sm font-semibold mb-3">Internal Quality Detection</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Firmness:</span>
                        <span className="font-medium text-right ml-2">{result.internalQuality.firmness}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sugar Content:</span>
                        <span className="font-medium text-right ml-2">{result.internalQuality.sugarContent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Moisture:</span>
                        <span className="font-medium text-right ml-2">{result.internalQuality.moisture}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="text-muted-foreground font-medium">Freshness:</span>
                        <span className="font-bold text-primary">{result.internalQuality.freshness}</span>
                      </div>
                    </div>
                  </div>

                  {/* Overall Assessment */}
                  <div className="p-4 rounded-lg bg-muted border border-border">
                    <div className="text-sm font-semibold mb-2">Overall Assessment</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Quality Grade:</span>
                        <span className="font-medium">{result.quality}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Ripeness:</span>
                        <span className="font-medium">{result.ripeness}</span>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="text-muted-foreground mb-1">Recommendation:</div>
                        <div className="text-xs">{result.recommendation}</div>
                      </div>
                    </div>
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
