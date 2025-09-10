import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  Menu,
  Shield,
  Heart,
  BookOpen,
  MapPin,
  Phone,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Home", href: "/", icon: Shield },
  { name: "Emergency", href: "/emergency", icon: AlertTriangle },
  { name: "Education", href: "/education", icon: BookOpen },
  { name: "Support", href: "/support", icon: Heart },
  { name: "Shelters", href: "/shelters", icon: MapPin },
  { name: "Counseling", href: "/counseling", icon: Phone },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ item, mobile = false }: { item: typeof navigationItems[0], mobile?: boolean }) => {
    const isActive = location.pathname === item.href;
    const Icon = item.icon;
    
    return (
      <Link
        to={item.href}
        onClick={mobile ? () => setIsOpen(false) : undefined}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth",
          isActive 
            ? "bg-primary text-primary-foreground shadow-soft" 
            : "text-muted-foreground hover:text-foreground hover:bg-accent",
          mobile && "text-base py-3"
        )}
      >
        <Icon className="h-4 w-4" />
        {item.name}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-hero">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Haven
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigationItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        {/* Emergency Button - Always Visible */}
        <div className="flex items-center gap-2">
          <Link to="/emergency">
            <Button variant="emergency" size="sm" className="hidden sm:flex">
              <AlertTriangle className="h-4 w-4" />
              SOS
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-hero">
                    <Shield className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    Haven
                  </span>
                </div>
                
                <nav className="flex flex-col gap-2">
                  {navigationItems.map((item) => (
                    <NavLink key={item.href} item={item} mobile />
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t">
                  <Link to="/emergency">
                    <Button variant="emergency" className="w-full" onClick={() => setIsOpen(false)}>
                      <AlertTriangle className="h-4 w-4" />
                      Emergency SOS
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}