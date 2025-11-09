import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Apple, Sparkles, Shield, Zap } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userEmail", email);
    
    toast({
      title: "Success",
      description: isLogin ? "Logged in successfully!" : "Account created successfully!",
    });
    
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Branding */}
      <div className="hidden lg:flex flex-col justify-center items-center p-12 bg-gradient-to-br from-primary via-primary/90 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)]" />
        
        <div className="relative z-10 max-w-md space-y-8 text-primary-foreground">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background/10 border border-background/20 backdrop-blur-sm">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">AI-Powered Analysis</span>
          </div>
          
          <h1 className="text-5xl font-bold leading-tight">
            Fruit Quality
            <br />
            Detection Platform
          </h1>
          
          <p className="text-xl text-primary-foreground/90">
            Advanced deep learning technology for automated fruit quality assessment and classification.
          </p>
          
          <div className="space-y-4 pt-8">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-background/10 backdrop-blur-sm">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">99% Accuracy</h3>
                <p className="text-sm text-primary-foreground/80">Advanced AI models for precise detection</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-background/10 backdrop-blur-sm">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Real-time Processing</h3>
                <p className="text-sm text-primary-foreground/80">Instant results for your quality control</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-background/10 backdrop-blur-sm">
                <Apple className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Global Standards</h3>
                <p className="text-sm text-primary-foreground/80">Trusted by food industries worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth Form */}
      <div className="flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-primary mb-4 lg:hidden">
              <Apple className="w-8 h-8" />
              <span className="text-2xl font-bold">FruitAI</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              {isLogin ? "Welcome back" : "Get started"}
            </h2>
            <p className="text-muted-foreground">
              {isLogin 
                ? "Sign in to your account to continue" 
                : "Create your account to begin analyzing"}
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <Button type="submit" className="w-full h-11" size="lg">
                  {isLogin ? "Sign in" : "Create account"}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {isLogin 
                    ? "Don't have an account? " 
                    : "Already have an account? "}
                  <span className="font-semibold text-primary">
                    {isLogin ? "Sign up" : "Sign in"}
                  </span>
                </button>
              </div>
            </CardContent>
          </Card>

          <p className="text-xs text-center text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
