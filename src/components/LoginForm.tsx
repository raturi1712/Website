
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Lock, User } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // This would typically connect to your authentication service
    toast({
      title: "Login Attempted",
      description: "This is a demo. In a real app, you would be logged in now.",
    });
    
    console.log("Login attempted with:", { email, rememberMe });
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
            />
            <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a 
              href="#" 
              className="text-sm text-purple-600 hover:text-purple-800 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                toast({
                  title: "Password Reset",
                  description: "Password reset feature would be implemented here.",
                });
              }}
            >
              Forgot password?
            </a>
          </div>
          
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
            />
            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="remember" 
            checked={rememberMe} 
            onCheckedChange={(checked) => setRememberMe(checked === true)}
          />
          <label
            htmlFor="remember"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Remember me
          </label>
        </div>
        
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
          Sign In
        </Button>
        
        <div className="text-center text-sm">
          Don't have an account?{" "}
          <a 
            href="#" 
            className="text-purple-600 hover:text-purple-800 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              toast({
                title: "Sign Up",
                description: "Sign up feature would be implemented here.",
              });
            }}
          >
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
