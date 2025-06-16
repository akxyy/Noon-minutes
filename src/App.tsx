import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProfilesPage from "./components/ProfilesPage";
import SignInPage from "./components/SignInPage";
import NotFound from "./pages/NotFound";
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
            {/* Default route redirects to /login */}
            <Route path="/" element={<Navigate to="/login" />} />

            {/* Login route */}
            <Route
              path="/login"
              element={
                isSignedIn ? (
                  <Navigate to="/login" />
                ) : (
                  <SignInPage onSignIn={() => setIsSignedIn(true)} />
                  // <Navigate to="/login" />
                )
              }
            />
            <Route path="/profiles" element={<ProfilesPage />} />

            {/* Protected dashboard route */}
            <Route
              path="/dashboard"
              element={
                isSignedIn ? (
                  <Dashboard onLogout={() => setIsSignedIn(false)} />
                ) : (
                  <Navigate to="/login" />
                )
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