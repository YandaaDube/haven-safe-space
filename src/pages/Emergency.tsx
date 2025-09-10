import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Shield,
  Volume2,
  Mic,
  Clock,
  Users
} from "lucide-react";

export default function Emergency() {
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [lastSOSTime, setLastSOSTime] = useState<Date | null>(null);

  const handleSOS = () => {
    setIsSOSActive(true);
    setLastSOSTime(new Date());
    
    // In a real app, this would:
    // 1. Get user's GPS location
    // 2. Send alerts to emergency contacts
    // 3. Notify nearby authorities and shelters
    // 4. Start continuous location tracking
    
    setTimeout(() => {
      setIsSOSActive(false);
    }, 10000); // Demo timeout
  };

  const emergencyContacts = [
    { name: "Police Emergency", number: "999", type: "Police" },
    { name: "Women's Shelter Hotline", number: "+263-4-123-4567", type: "Shelter" },
    { name: "Crisis Counseling", number: "+263-4-765-4321", type: "Counseling" },
    { name: "Legal Aid Society", number: "+263-4-555-0123", type: "Legal" },
  ];

  const quickActions = [
    {
      icon: Volume2,
      title: "Silent SOS",
      description: "Send alert without sound or visible notification",
      action: "Activate Silent Mode",
    },
    {
      icon: Mic,
      title: "Voice Detection",
      description: "AI monitors for distress signals automatically",
      action: "Enable AI Monitoring",
    },
    {
      icon: MapPin,
      title: "Location Sharing",
      description: "Share live GPS location with trusted contacts",
      action: "Start Location Sharing",
    },
    {
      icon: Users,
      title: "Emergency Contacts",
      description: "Manage and update your emergency contact list",
      action: "Manage Contacts",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Response Center
          </h1>
          <p className="text-lg text-muted-foreground">
            Immediate help is available 24/7. Your safety is our priority.
          </p>
        </div>

        {/* SOS Alert Status */}
        {isSOSActive && (
          <Alert className="mb-8 border-emergency bg-emergency/10">
            <AlertTriangle className="h-4 w-4 text-emergency" />
            <AlertDescription className="text-emergency font-medium">
              SOS ACTIVATED - Emergency services have been notified. 
              Location tracking is active. Help is on the way.
              {lastSOSTime && (
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <Clock className="h-3 w-3" />
                  Activated at {lastSOSTime.toLocaleTimeString()}
                </div>
              )}
            </AlertDescription>
          </Alert>
        )}

        {/* Main SOS Button */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Button
              variant="emergency"
              size="lg"
              onClick={handleSOS}
              disabled={isSOSActive}
              className="h-32 w-32 rounded-full text-2xl font-bold shadow-emergency hover:scale-105 transition-all duration-200"
            >
              {isSOSActive ? (
                <div className="flex flex-col items-center">
                  <Shield className="h-8 w-8 mb-2" />
                  <span className="text-sm">ACTIVE</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <AlertTriangle className="h-8 w-8 mb-2" />
                  <span>SOS</span>
                </div>
              )}
            </Button>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Press the SOS button to immediately alert emergency services, 
            trusted contacts, and nearby shelters with your current location.
          </p>
        </div>

        {/* Emergency Contacts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Emergency Contacts
            </CardTitle>
            <CardDescription>
              Direct lines to immediate help and support services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {emergencyContacts.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-accent transition-smooth"
                >
                  <div>
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">{contact.type}</div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`tel:${contact.number}`}>
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card key={index} className="hover:shadow-soft transition-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {action.title}
                  </CardTitle>
                  <CardDescription>{action.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Safety Notice */}
        <Alert className="mt-8">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>Privacy & Security:</strong> All emergency communications are encrypted 
            and secure. Your location data is only shared with emergency services and 
            trusted contacts you've specified. You can disable location sharing at any time.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}