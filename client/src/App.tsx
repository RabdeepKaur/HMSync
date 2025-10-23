
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import LandingPage from "@/pages/landing";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="landing-theme">
      <Toaster />
      <ThemeToggle />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
