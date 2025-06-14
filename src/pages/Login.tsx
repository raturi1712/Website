
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>
        
        <LoginForm />
        
        <div className="pt-4 text-center text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <a href="#" className="text-purple-600 hover:text-purple-800 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-purple-600 hover:text-purple-800 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
