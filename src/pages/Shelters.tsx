import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Bed,
  Users,
  Clock,
  Shield,
  Search,
  Navigation,
  Heart,
  Scale,
  Home,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

const shelters = [
  {
    id: 1,
    name: "Safe Haven Women's Shelter",
    location: "Harare Central",
    distance: "2.3 km",
    capacity: 25,
    available: 8,
    services: ["Emergency Accommodation", "Counseling", "Legal Aid", "Childcare"],
    contact: "+263-4-123-456",
    status: "Available",
    description: "24/7 emergency shelter with comprehensive support services for women and children.",
    features: ["Secure Entry", "Medical Support", "Job Training", "Safe Transportation"]
  },
  {
    id: 2,
    name: "Hope House",
    location: "Bulawayo",
    distance: "1.8 km",
    capacity: 15,
    available: 3,
    services: ["Short-term Housing", "Mental Health", "Financial Support"],
    contact: "+263-9-789-012",
    status: "Limited",
    description: "Specialized support for survivors with mental health and trauma recovery programs.",
    features: ["Therapy Programs", "Support Groups", "Skills Training"]
  },
  {
    id: 3,
    name: "New Beginnings Center",
    location: "Gweru",
    distance: "5.2 km",
    capacity: 20,
    available: 0,
    services: ["Long-term Housing", "Education Support", "Job Placement"],
    contact: "+263-54-345-678",
    status: "Full",
    description: "Long-term transitional housing with educational and employment programs.",
    features: ["Education Programs", "Job Placement", "Independent Living Training"]
  }
];

const ngos = [
  {
    name: "Women's Coalition of Zimbabwe",
    type: "Legal Support",
    services: ["Legal Representation", "Court Support", "Rights Education"],
    contact: "+263-4-555-0101",
    description: "Comprehensive legal support and advocacy for GBV survivors.",
  },
  {
    name: "Counseling Services Trust",
    type: "Mental Health",
    services: ["Individual Therapy", "Group Counseling", "Trauma Recovery"],
    contact: "+263-4-555-0202",
    description: "Professional mental health services and trauma-informed care.",
  },
  {
    name: "Community Outreach Program",
    type: "Community Support",
    services: ["Food Assistance", "Transportation", "Emergency Relief"],
    contact: "+263-4-555-0303",
    description: "Emergency assistance and community support services.",
  },
  {
    name: "Economic Empowerment Initiative",
    type: "Financial Support",
    services: ["Microfinance", "Skills Training", "Business Support"],
    contact: "+263-4-555-0404",
    description: "Financial independence and economic empowerment programs.",
  }
];

export default function Shelters() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedShelter, setSelectedShelter] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-success text-success-foreground";
      case "Limited": return "bg-yellow-500 text-white";
      case "Full": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Available": return CheckCircle;
      case "Limited": return AlertTriangle;
      case "Full": return AlertTriangle;
      default: return Shield;
    }
  };

  const filteredShelters = shelters.filter(shelter =>
    shelter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shelter.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Shelters & NGO Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find safe accommodation and support services near you. 
            All locations are verified and provide secure, confidential assistance.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Navigation className="h-4 w-4" />
              Use My Location
            </Button>
          </div>
        </div>

        {/* Shelters Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Home className="h-6 w-6" />
            Emergency Shelters
          </h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredShelters.map((shelter) => {
              const StatusIcon = getStatusIcon(shelter.status);
              return (
                <Card 
                  key={shelter.id} 
                  className={`hover:shadow-soft transition-smooth cursor-pointer ${
                    selectedShelter === shelter.id ? 'ring-2 ring-primary shadow-soft' : ''
                  }`}
                  onClick={() => setSelectedShelter(
                    selectedShelter === shelter.id ? null : shelter.id
                  )}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-lg">{shelter.name}</CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{shelter.location}</span>
                          <span className="text-sm">• {shelter.distance}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(shelter.status)}>
                        <StatusIcon className="h-3 w-3 mr-1" />
                        {shelter.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription>{shelter.description}</CardDescription>
                    
                    {/* Capacity */}
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 text-primary" />
                        <span className="font-medium">Availability</span>
                      </div>
                      <span className={`font-medium ${
                        shelter.available > 5 ? 'text-success' : 
                        shelter.available > 0 ? 'text-yellow-600' : 'text-destructive'
                      }`}>
                        {shelter.available}/{shelter.capacity} beds
                      </span>
                    </div>

                    {/* Services */}
                    <div>
                      <h4 className="font-medium mb-2">Services Provided:</h4>
                      <div className="flex flex-wrap gap-1">
                        {shelter.services.map((service, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {selectedShelter === shelter.id && (
                      <div className="space-y-4 pt-4 border-t">
                        <div>
                          <h4 className="font-medium mb-2">Additional Features:</h4>
                          <div className="space-y-1">
                            {shelter.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-3 w-3 text-success" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="default" className="flex-1" asChild>
                            <a href={`tel:${shelter.contact}`}>
                              <Phone className="h-4 w-4 mr-2" />
                              Call Now
                            </a>
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <MapPin className="h-4 w-4 mr-2" />
                            Directions
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* NGO Support Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Users className="h-6 w-6" />
            NGO Support Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {ngos.map((ngo, index) => (
              <Card key={index} className="hover:shadow-soft transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{ngo.name}</CardTitle>
                      <Badge variant="outline" className="mt-2">
                        {ngo.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription>{ngo.description}</CardDescription>
                  
                  <div>
                    <h4 className="font-medium mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {ngo.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="default" className="flex-1" asChild>
                      <a href={`tel:${ngo.contact}`}>
                        <Phone className="h-4 w-4 mr-2" />
                        Contact
                      </a>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Heart className="h-4 w-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Notice */}
        <Card className="mt-8 border-emergency bg-emergency/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-emergency mt-1" />
              <div>
                <h3 className="font-medium text-emergency mb-2">
                  Emergency Assistance Available 24/7
                </h3>
                <p className="text-sm text-muted-foreground">
                  If you're in immediate danger, don't wait. Call emergency services or use our 
                  SOS feature. All shelter and NGO contacts are monitored around the clock 
                  for urgent situations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}