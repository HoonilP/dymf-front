import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "next-themes";
import { UserProvider } from "@/context/UserProvider";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <UserProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">
            {children}
          </main>
        </SidebarProvider>
      </UserProvider>
    </ThemeProvider>
  );
}