import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  AlertTriangle, 
  BookOpen, 
  Heart, 
  MapPin, 
  Phone,
  Users,
  Lock,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";
import communityImage from "@/assets/community-support.jpg";

const features = [
  {
    icon: AlertTriangle,
    title: "Emergency Response",
    description: "Instant SOS alerts with GPS tracking and AI distress detection for immediate help.",
    href: "/emergency",
    variant: "emergency" as const,
  },
  {
    icon: BookOpen,
    title: "Education & Awareness",
    description: "Comprehensive resources about GBV, rights, and prevention in multiple languages.",
    href: "/education",
    variant: "default" as const,
  },
  {
    icon: MapPin,
    title: "Shelters & NGOs",
    description: "Find nearby safe houses, shelters, and NGO support with real-time availability.",
    href: "/shelters",
    variant: "safe" as const,
  },
  {
    icon: Phone,
    title: "Mental Health Support",
    description: "24/7 access to licensed counselors and peer support groups for healing.",
    href: "/counseling",
    variant: "default" as const,
  },
];

const stats = [
  { icon: Users, number: "24/7", label: "Support Available" },
  { icon: Lock, number: "100%", label: "Secure & Private" },
  { icon: Globe, number: "3", label: "Languages Supported" },
  { icon: Shield, number: "Safe", label: "Community Focused" },
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Your Safe{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    Haven
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Comprehensive support for survivors of gender-based violence. 
                  Find safety, resources, and healing in a secure, culturally-inclusive environment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/emergency">
                  <Button variant="emergency" size="lg" className="w-full sm:w-auto">
                    <AlertTriangle className="h-5 w-5" />
                    Emergency SOS
                  </Button>
                </Link>
                <Link to="/education">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    <BookOpen className="h-5 w-5" />
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="text-center">
                      <div className="flex justify-center mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Empowered woman representing strength and hope"
                className="w-full h-[500px] object-cover rounded-2xl shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Support Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Haven provides a complete ecosystem of tools and resources designed 
              to support survivors and prevent gender-based violence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="group hover:shadow-soft transition-smooth">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                    <Link to={feature.href}>
                      <Button variant={feature.variant} className="w-full">
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={communityImage}
                alt="Community support and solidarity among women"
                className="w-full h-[400px] object-cover rounded-2xl shadow-soft"
              />
              <div className="absolute inset-0 bg-gradient-safe opacity-20 rounded-2xl" />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Building Stronger{" "}
                <span className="bg-gradient-safe bg-clip-text text-transparent">
                  Communities
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Haven connects survivors with a network of support including NGOs, 
                licensed counselors, legal professionals, and peer communities. 
                Together, we create safe spaces for healing and empowerment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20">
                    <Shield className="h-4 w-4 text-success" />
                  </div>
                  <span>Anonymous and secure reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20">
                    <Globe className="h-4 w-4 text-success" />
                  </div>
                  <span>Multi-language support (English, Shona, Ndebele)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20">
                    <Heart className="h-4 w-4 text-success" />
                  </div>
                  <span>24/7 emotional and crisis support</span>
                </div>
              </div>

              <Link to="/support">
                <Button variant="safe" size="lg">
                  <Heart className="h-5 w-5" />
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              You Are Not Alone
            </h2>
            <p className="text-xl text-primary-foreground/90">
              If you or someone you know needs immediate help, don't hesitate to reach out. 
              Our emergency services are available 24/7, and all communications are secure and confidential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/emergency">
                <Button variant="emergency" size="lg" className="w-full sm:w-auto">
                  <AlertTriangle className="h-5 w-5" />
                  Get Emergency Help
                </Button>
              </Link>
              <Link to="/counseling">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" />
                  Talk to a Counselor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}