import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  MessageCircle,
  Globe,
  Heart,
  Shield,
  AlertCircle,
  CheckCircle,
  Brain
} from "lucide-react";

const educationModules = [
  {
    title: "Understanding GBV",
    description: "Learn about different types of gender-based violence and their impacts",
    duration: "15 min",
    difficulty: "Beginner",
    topics: ["Physical Violence", "Emotional Abuse", "Sexual Violence", "Economic Abuse"],
    completed: false,
  },
  {
    title: "Recognizing Warning Signs",
    description: "Identify red flags in relationships and dangerous situations",
    duration: "20 min",
    difficulty: "Beginner",
    topics: ["Behavioral Patterns", "Control Tactics", "Isolation Signs", "Escalation"],
    completed: true,
  },
  {
    title: "Know Your Rights",
    description: "Understanding legal protections and rights available to survivors",
    duration: "25 min",
    difficulty: "Intermediate",
    topics: ["Legal Framework", "Protection Orders", "Reporting Process", "Court Support"],
    completed: false,
  },
  {
    title: "Safety Planning",
    description: "Creating personal safety strategies and emergency plans",
    duration: "30 min",
    difficulty: "Intermediate",
    topics: ["Exit Strategies", "Emergency Kits", "Safe Communication", "Document Safety"],
    completed: false,
  },
];

const survivorStories = [
  {
    title: "Finding Strength",
    author: "Anonymous Survivor",
    preview: "My journey from fear to empowerment through community support...",
    category: "Recovery",
    readTime: "8 min",
  },
  {
    title: "Breaking the Silence",
    author: "Community Advocate",
    preview: "How speaking up helped me heal and help others...",
    category: "Advocacy",
    readTime: "12 min",
  },
  {
    title: "Rebuilding Life",
    author: "Support Group Member",
    preview: "The path to independence and self-confidence after abuse...",
    category: "Recovery",
    readTime: "10 min",
  },
];

const quizQuestions = [
  {
    question: "Which of the following is NOT a form of gender-based violence?",
    options: [
      "Economic control and financial abuse",
      "Mutual disagreement in a relationship",
      "Threats and intimidation",
      "Isolation from friends and family"
    ],
    correct: 1,
  },
  {
    question: "What should be your first priority when planning for safety?",
    options: [
      "Confronting the abuser",
      "Keeping your plans secret and secure",
      "Waiting for the situation to improve",
      "Trying to fix the relationship"
    ],
    correct: 1,
  },
];

export default function Education() {
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});

  const handleQuizAnswer = (questionIndex: number, answerIndex: number) => {
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Awareness Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empower yourself with knowledge about GBV prevention, rights, and support resources. 
            Available in English, Shona, and Ndebele.
          </p>
        </div>

        <Tabs defaultValue="modules" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="modules" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Modules
            </TabsTrigger>
            <TabsTrigger value="stories" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Stories
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Quiz
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              AI Assistant
            </TabsTrigger>
          </TabsList>

          {/* Learning Modules */}
          <TabsContent value="modules" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Learning Modules</h2>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Available in: English • Shona • Ndebele
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {educationModules.map((module, index) => (
                <Card key={index} className="hover:shadow-soft transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="flex items-center gap-2">
                          {module.completed ? (
                            <CheckCircle className="h-5 w-5 text-success" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-primary" />
                          )}
                          {module.title}
                        </CardTitle>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{module.duration}</Badge>
                          <Badge variant="outline">{module.difficulty}</Badge>
                        </div>
                      </div>
                      {module.completed && (
                        <Badge variant="default" className="bg-success text-success-foreground">
                          Completed
                        </Badge>
                      )}
                    </div>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-1">
                        {module.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button 
                      className="w-full" 
                      variant={module.completed ? "outline" : "default"}
                    >
                      {module.completed ? "Review Module" : "Start Learning"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Survivor Stories */}
          <TabsContent value="stories" className="space-y-6">
            <h2 className="text-2xl font-bold">Survivor Stories & Experiences</h2>
            <p className="text-muted-foreground">
              Real stories of strength, resilience, and recovery from community members.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {survivorStories.map((story, index) => (
                <Card key={index} className="hover:shadow-soft transition-smooth">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{story.category}</Badge>
                      <span className="text-sm text-muted-foreground">{story.readTime}</span>
                    </div>
                    <CardTitle className="text-lg">{story.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      by {story.author}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">{story.preview}</p>
                    <Button variant="outline" className="w-full">
                      Read Full Story
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Interactive Quiz */}
          <TabsContent value="quiz" className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Knowledge Assessment</h2>
              <p className="text-muted-foreground">
                Test your understanding of GBV awareness and safety concepts.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              {quizQuestions.map((question, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Question {index + 1}: {question.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => handleQuizAnswer(index, optionIndex)}
                        className={`w-full p-3 text-left rounded-lg border transition-smooth ${
                          quizAnswers[index] === optionIndex
                            ? quizAnswers[index] === question.correct
                              ? "border-success bg-success/10 text-success"
                              : "border-destructive bg-destructive/10 text-destructive"
                            : "border-border hover:bg-accent"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                    {quizAnswers[index] !== undefined && (
                      <div className={`mt-3 p-3 rounded-lg flex items-center gap-2 ${
                        quizAnswers[index] === question.correct
                          ? "bg-success/10 text-success"
                          : "bg-destructive/10 text-destructive"
                      }`}>
                        {quizAnswers[index] === question.correct ? (
                          <>
                            <CheckCircle className="h-4 w-4" />
                            Correct! Well done.
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-4 w-4" />
                            The correct answer is: {question.options[question.correct]}
                          </>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* AI Chat Assistant */}
          <TabsContent value="chat" className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">AI Support Assistant</h2>
              <p className="text-muted-foreground">
                Get instant guidance and support from our AI assistant trained on GBV resources.
              </p>
            </div>

            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Chat with Haven Assistant
                </CardTitle>
                <CardDescription>
                  Ask questions about GBV, safety planning, resources, or get emotional support.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-64 border rounded-lg p-4 bg-muted/30 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MessageCircle className="h-8 w-8 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">
                      AI Chat Assistant will be available here
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Coming soon with multilingual support
                    </p>
                  </div>
                </div>
                <Button className="w-full" variant="outline" disabled>
                  Start Conversation (Coming Soon)
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}