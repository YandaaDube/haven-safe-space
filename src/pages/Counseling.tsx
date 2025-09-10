import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Phone, 
  Video,
  MessageCircle,
  Users,
  Heart,
  Clock,
  Shield,
  Star,
  Calendar,
  Headphones,
  Brain,
  CheckCircle
} from "lucide-react";

const counselors = [
  {
    name: "Dr. Sarah Moyo",
    specialization: "Trauma & PTSD",
    languages: ["English", "Shona"],
    experience: "12 years",
    rating: 4.9,
    availability: "Available Today",
    status: "online",
    description: "Specialized in trauma recovery and post-traumatic stress management with cultural sensitivity."
  },
  {
    name: "Counselor James Ncube",
    specialization: "Family & Relationship",
    languages: ["English", "Ndebele"],
    experience: "8 years",
    rating: 4.8,
    availability: "Available Tomorrow",
    status: "busy",
    description: "Expert in family dynamics, relationship counseling, and domestic violence recovery."
  },
  {
    name: "Dr. Grace Mwenda",
    specialization: "Crisis Intervention",
    languages: ["English", "Shona", "Ndebele"],
    experience: "15 years",
    rating: 5.0,
    availability: "Available Now",
    status: "online",
    description: "Crisis intervention specialist with extensive experience in emergency mental health support."
  }
];

const supportGroups = [
  {
    name: "Survivors Circle",
    type: "Peer Support",
    schedule: "Tuesdays & Thursdays, 7:00 PM",
    participants: 12,
    description: "Safe space for survivors to share experiences and support each other.",
    nextSession: "Tonight at 7:00 PM"
  },
  {
    name: "Healing Together",
    type: "Group Therapy",
    schedule: "Mondays, 6:00 PM",
    participants: 8,
    description: "Professional-led group therapy focusing on trauma recovery and healing.",
    nextSession: "Monday at 6:00 PM"
  },
  {
    name: "Strength & Resilience",
    type: "Empowerment",
    schedule: "Saturdays, 10:00 AM",
    participants: 15,
    description: "Building confidence, self-esteem, and resilience after trauma.",
    nextSession: "This Saturday at 10:00 AM"
  }
];

const selfHelpTools = [
  {
    title: "Breathing Exercises",
    duration: "5-10 minutes",
    description: "Guided breathing techniques to manage anxiety and panic attacks.",
    type: "Audio Guide"
  },
  {
    title: "Progressive Muscle Relaxation",
    duration: "15 minutes",
    description: "Full-body relaxation technique to reduce physical tension and stress.",
    type: "Audio Guide"
  },
  {
    title: "Grounding Techniques",
    duration: "3-5 minutes",
    description: "Quick techniques to stay present during flashbacks or dissociation.",
    type: "Interactive Guide"
  },
  {
    title: "Sleep & Rest",
    duration: "20 minutes",
    description: "Sleep meditation and relaxation sounds for better rest and recovery.",
    type: "Audio Collection"
  }
];

export default function Counseling() {
  const [selectedCounselor, setSelectedCounselor] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-success";
      case "busy": return "bg-yellow-500";
      case "offline": return "bg-muted";
      default: return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Mental Health & Counseling Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional support for healing and recovery. Connect with licensed counselors, 
            join support groups, and access self-help resources 24/7.
          </p>
        </div>

        <Tabs defaultValue="counselors" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="counselors" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Counselors
            </TabsTrigger>
            <TabsTrigger value="groups" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Support Groups
            </TabsTrigger>
            <TabsTrigger value="tools" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Self-Help
            </TabsTrigger>
            <TabsTrigger value="crisis" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Crisis Support
            </TabsTrigger>
          </TabsList>

          {/* Counselors */}
          <TabsContent value="counselors" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Licensed Counselors</h2>
              <p className="text-muted-foreground">
                Connect with trauma-informed mental health professionals who understand GBV recovery.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {counselors.map((counselor, index) => (
                <Card 
                  key={index} 
                  className={`hover:shadow-soft transition-smooth cursor-pointer ${
                    selectedCounselor === index ? 'ring-2 ring-primary shadow-soft' : ''
                  }`}
                  onClick={() => setSelectedCounselor(
                    selectedCounselor === index ? null : index
                  )}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="flex items-center gap-2">
                          {counselor.name}
                          <div className={`w-3 h-3 rounded-full ${getStatusColor(counselor.status)}`} />
                        </CardTitle>
                        <div className="space-y-1">
                          <Badge variant="secondary">{counselor.specialization}</Badge>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{counselor.rating}</span>
                            <span className="text-sm text-muted-foreground">
                              • {counselor.experience}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription>{counselor.description}</CardDescription>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium text-success">{counselor.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <span>{counselor.languages.join(", ")}</span>
                      </div>
                    </div>

                    {selectedCounselor === index && (
                      <div className="space-y-3 pt-4 border-t">
                        <div className="grid grid-cols-3 gap-2">
                          <Button variant="default" size="sm" className="flex flex-col gap-1 h-auto py-3">
                            <Video className="h-4 w-4" />
                            <span className="text-xs">Video Call</span>
                          </Button>
                          <Button variant="outline" size="sm" className="flex flex-col gap-1 h-auto py-3">
                            <Phone className="h-4 w-4" />
                            <span className="text-xs">Voice Call</span>
                          </Button>
                          <Button variant="outline" size="sm" className="flex flex-col gap-1 h-auto py-3">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-xs">Chat</span>
                          </Button>
                        </div>
                        
                        <Button variant="hero" className="w-full">
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Session
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Support Groups */}
          <TabsContent value="groups" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Support Groups</h2>
              <p className="text-muted-foreground">
                Connect with others who understand your journey. All groups are facilitated and completely confidential.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportGroups.map((group, index) => (
                <Card key={index} className="hover:shadow-soft transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-lg">{group.name}</CardTitle>
                    <Badge variant="outline">{group.type}</Badge>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription>{group.description}</CardDescription>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{group.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{group.participants} active members</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="font-medium text-success">{group.nextSession}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="default" className="flex-1">
                        Join Group
                      </Button>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Self-Help Tools */}
          <TabsContent value="tools" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Self-Help Resources</h2>
              <p className="text-muted-foreground">
                Immediate coping tools and techniques you can use anytime, anywhere.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {selfHelpTools.map((tool, index) => (
                <Card key={index} className="hover:shadow-soft transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{tool.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary">{tool.type}</Badge>
                          <Badge variant="outline">{tool.duration}</Badge>
                        </div>
                      </div>
                      <Headphones className="h-6 w-6 text-primary" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription>{tool.description}</CardDescription>
                    
                    <div className="flex gap-2">
                      <Button variant="default" className="flex-1">
                        <Headphones className="h-4 w-4 mr-2" />
                        Start Session
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Crisis Support */}
          <TabsContent value="crisis" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Crisis Support</h2>
              <p className="text-muted-foreground">
                Immediate help is available 24/7. You don't have to face this alone.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              <Card className="border-emergency bg-emergency/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emergency">
                    <Phone className="h-5 w-5" />
                    Crisis Hotline - Available 24/7
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you're having thoughts of self-harm or are in immediate emotional crisis, 
                    trained counselors are standing by to help.
                  </p>
                  <Button variant="emergency" size="lg" className="w-full">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Crisis Line: 988
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Text Crisis Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Prefer to text? Our crisis counselors are available via text message 
                    for immediate support and guidance.
                  </p>
                  <Button variant="outline" size="lg" className="w-full">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Text "HELP" to 741741
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    Safety Planning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Create a personalized safety plan with coping strategies, 
                    warning signs, and emergency contacts.
                  </p>
                  <Button variant="safe" size="lg" className="w-full">
                    <Shield className="h-5 w-5 mr-2" />
                    Create Safety Plan
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}