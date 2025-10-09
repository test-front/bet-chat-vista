import { Moon, Sun, Bot, GraduationCap, PanelLeftOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

const ChatHeader = () => {
  const { theme, setTheme } = useTheme();
  const { open, openMobile } = useSidebar();

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      {!open && !openMobile && (
        <SidebarTrigger className="fixed left-4 top-20 z-50 group">
          <div className="p-3 bg-gradient-primary rounded-full shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-primary/20">
            <PanelLeftOpen className="w-5 h-5 text-primary-foreground group-hover:animate-pulse" />
          </div>
        </SidebarTrigger>
      )}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative p-2 bg-gradient-primary rounded-lg shadow-glow">
            <Bot className="w-6 h-6 text-primary-foreground" />
            <GraduationCap className="absolute -top-1 -right-0.5 w-4 h-4 text-primary-foreground" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-card rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-foreground border border-card" 
                   style={{ 
                     background: 'radial-gradient(circle at 30% 30%, hsl(0 0% 100%), hsl(0 0% 20%))',
                     boxShadow: 'inset -1px -1px 2px rgba(0,0,0,0.3)'
                   }} 
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Almanaque Bot</h1>
            <p className="text-xs text-muted-foreground">Seu assistente de apostas esportivas</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full hover:bg-muted transition-colors"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alternar tema</span>
        </Button>
      </div>
    </header>
  );
};

export default ChatHeader;
