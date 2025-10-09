import { useEffect } from "react";
import ChatHeader from "@/components/ChatHeader";
import ChatContainer from "@/components/ChatContainer";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  useEffect(() => {
    // Previne zoom em dispositivos móveis ao focar inputs
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
      );
    }
  }, []);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <ChatHeader />
          <ChatContainer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
