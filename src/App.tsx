import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import NotFound from "./pages/NotFound";
import UserProfilePage from "./pages/UserProfilePage";
import Dashboard from "./components/Dashboard";

const queryClient = new QueryClient();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Login Route */}
            <Route
              path="/"
              element={
                isSignedIn ? <Navigate to="/dashboard" /> : <SignInPage onSignIn={() => setIsSignedIn(true)} />
              }
            />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                isSignedIn ? <Dashboard onLogout={() => setIsSignedIn(false)} /> : <Navigate to="/" />
              }
            />
            <Route
              path="/profile"
              element={
                isSignedIn ? <UserProfilePage /> : <Navigate to="/" />
              }
            />

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
