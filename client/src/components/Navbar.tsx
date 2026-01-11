import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { Zap, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: t('nav.home'), id: "home", isPage: true, path: "/" },
    { label: t('nav.about'), id: "about", isPage: true, path: "/about" },
    { label: t('nav.knowledgeResources'), id: "knowledge", isPage: true, path: "/knowledge" },
    { label: t('nav.tools'), id: "tools", isDropdown: true },
    { label: t('nav.stakeholderEngagement'), id: "stakeholder", isPage: true, path: "/stakeholder" },
  ];

  // Check if a path is active
  const isActivePath = (path: string) => location === path;
  
  // Check if Tools dropdown should be highlighted
  const isToolsActive = ['/simulator', '/evse', '/vehicle-selection'].includes(location);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-foreground leading-tight">{t('common.evAwareness')}</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Advanced EV Analysis Platform</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.isDropdown ? (
                <DropdownMenu key={item.id}>
                  <DropdownMenuTrigger className={`flex items-center gap-1 transition-colors ${isToolsActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}>
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem asChild>
                      <Link href="/simulator" className={`cursor-pointer ${isActivePath('/simulator') ? 'bg-primary/10 text-primary' : ''}`}>
                        {t('nav.simulator')}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/evse" className={`cursor-pointer ${isActivePath('/evse') ? 'bg-primary/10 text-primary' : ''}`}>
                        {t('nav.evse')}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/vehicle-selection" className={`cursor-pointer ${isActivePath('/vehicle-selection') ? 'bg-primary/10 text-primary' : ''}`}>
                        {t('nav.vehicleSelection')}
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : item.isPage ? (
                <Link
                  key={item.id}
                  href={item.path!}
                  className={`transition-colors ${isActivePath(item.path!) ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
                  data-testid={`link-${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-${item.id}`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              item.isDropdown ? (
                <div key={item.id} className="px-4 py-2">
                  <div className={`text-sm font-semibold mb-2 ${isToolsActive ? 'text-primary' : 'text-foreground'}`}>{item.label}</div>
                  <Link
                    href="/simulator"
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${isActivePath('/simulator') ? 'text-primary bg-primary/10 font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.simulator')}
                  </Link>
                  <Link
                    href="/evse"
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${isActivePath('/evse') ? 'text-primary bg-primary/10 font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.evse')}
                  </Link>
                  <Link
                    href="/vehicle-selection"
                    className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${isActivePath('/vehicle-selection') ? 'text-primary bg-primary/10 font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('nav.vehicleSelection')}
                  </Link>
                </div>
              ) : item.isPage ? (
                <Link
                  key={item.id}
                  href={item.path!}
                  className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${isActivePath(item.path!) ? 'text-primary bg-primary/10 font-medium' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                  data-testid={`mobile-link-${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                  data-testid={`mobile-link-${item.id}`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
