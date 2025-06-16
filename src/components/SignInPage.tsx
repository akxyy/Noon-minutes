import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface SignInPageProps {
  onSignIn: () => void;
}

const SignInPage = ({ onSignIn }: SignInPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === 'noonminutes@gmail.com' && password === '12345') {
      onSignIn();
      navigate('/dashboard');
      return;
    }

    alert("This account is restricted. Please use different credentials.");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex min-h-[600px]">
          <div className="flex-1 bg-white p-12 flex items-center justify-center">
            <div className="text-center text-black max-w-md">
              <h1 className="text-4xl font-bold mb-6">Noon Minutes</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Ready to optimize your business logistics? Explore our smart solutions in Saudi Arabia.
              </p>
            </div>
          </div>

          <div className="flex-1 p-12 flex items-center">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
                <p className="text-gray-600">Fill your data to sign in</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                  />
                </div>

                <Button type="submit" className="w-full h-12 bg-red-600 text-white">
                  Sign In
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 px-12 py-6 flex items-center justify-center">
          <div className="flex items-center space-x-3 text-gray-600">
            <span className="text-sm">Powered by</span>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">AE</span>
              </div>
              <span className="font-medium text-gray-900">Noon Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
