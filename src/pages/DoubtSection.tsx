import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Search, 
  Filter,
  Plus,
  ThumbsUp,
  ThumbsDown,
  Reply,
  Tag,
  Clock,
  CheckCircle2,
  AlertCircle,
  Book,
  User,
  Send,
  Bookmark,
  Share2
} from "lucide-react";

const DoubtSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const questions = [
    {
      id: 1,
      title: "How to implement custom hooks in React?",
      description: "I'm struggling to understand how to create and use custom hooks effectively. Can someone explain with examples?",
      author: "Alice Johnson",
      authorRole: "Student",
      course: "Advanced React Development",
      category: "React",
      tags: ["hooks", "custom", "react"],
      timestamp: "2 hours ago",
      status: "answered",
      upvotes: 15,
      downvotes: 2,
      replies: 8,
      isBookmarked: false,
      answers: [
        {
          id: 1,
          author: "Dr. Sarah Smith",
          authorRole: "Instructor",
          content: "Custom hooks are a great way to extract component logic into reusable functions. Here's a simple example...",
          timestamp: "1 hour ago",
          upvotes: 12,
          isAccepted: true
        },
        {
          id: 2,
          author: "Mike Chen",
          authorRole: "Student",
          content: "I found this article helpful for understanding custom hooks...",
          timestamp: "45 minutes ago",
          upvotes: 5,
          isAccepted: false
        }
      ]
    },
    {
      id: 2,
      title: "Best practices for state management in large React apps?",
      description: "What are the recommended patterns for managing state in complex React applications? Should I use Redux, Context, or something else?",
      author: "Bob Wilson",
      authorRole: "Student",
      course: "Advanced React Development",
      category: "React",
      tags: ["state-management", "redux", "context"],
      timestamp: "4 hours ago",
      status: "pending",
      upvotes: 8,
      downvotes: 0,
      replies: 3,
      isBookmarked: true,
      answers: []
    },
    {
      id: 3,
      title: "Understanding machine learning algorithms",
      description: "Can someone explain the difference between supervised and unsupervised learning with practical examples?",
      author: "Carol Davis",
      authorRole: "Student",
      course: "Data Science Fundamentals",
      category: "Data Science",
      tags: ["machine-learning", "algorithms", "supervised"],
      timestamp: "6 hours ago",
      status: "answered",
      upvotes: 20,
      downvotes: 1,
      replies: 12,
      isBookmarked: false,
      answers: [
        {
          id: 3,
          author: "Dr. John Martinez",
          authorRole: "Instructor",
          content: "Great question! Supervised learning uses labeled data to train models...",
          timestamp: "3 hours ago",
          upvotes: 18,
          isAccepted: true
        }
      ]
    },
    {
      id: 4,
      title: "Mobile app optimization techniques",
      description: "What are the best ways to optimize mobile app performance? My React Native app is running slowly on older devices.",
      author: "David Kim",
      authorRole: "Student",
      course: "Mobile App Development",
      category: "Mobile",
      tags: ["performance", "react-native", "optimization"],
      timestamp: "1 day ago",
      status: "answered",
      upvotes: 12,
      downvotes: 0,
      replies: 6,
      isBookmarked: true,
      answers: []
    }
  ];

  const categories = ["all", "React", "Data Science", "Mobile", "JavaScript", "CSS"];

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || question.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "answered": return "default";
      case "pending": return "secondary";
      default: return "outline";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "answered": return CheckCircle2;
      case "pending": return AlertCircle;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Doubt & Discussion
            </h1>
            <p className="text-muted-foreground text-lg">Get help from instructors and peers</p>
          </div>
          <Button className="btn-hero">
            <Plus className="w-4 h-4 mr-2" />
            Ask Question
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search questions, topics, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                <TabsTrigger value="answered">Answered</TabsTrigger>
                <TabsTrigger value="my-questions">My Questions</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {filteredQuestions.map((question) => {
                  const StatusIcon = getStatusIcon(question.status);
                  return (
                    <Card key={question.id} className="p-6 course-card border-0">
                      <div className="flex items-start space-x-4">
                        {/* Vote Section */}
                        <div className="flex flex-col items-center space-y-2 min-w-[60px]">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ThumbsUp className="w-4 h-4" />
                          </Button>
                          <span className="font-semibold">{question.upvotes - question.downvotes}</span>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ThumbsDown className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Question Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
                              {question.title}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <Badge variant={getStatusColor(question.status)} className="flex items-center space-x-1">
                                <StatusIcon className="w-3 h-3" />
                                <span>{question.status}</span>
                              </Badge>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Bookmark className={`w-4 h-4 ${question.isBookmarked ? 'fill-current text-primary' : ''}`} />
                              </Button>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {question.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {question.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Meta Information */}
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <Avatar className="h-6 w-6">
                                  <div className="bg-primary/10 w-full h-full flex items-center justify-center">
                                    <User className="w-3 h-3 text-primary" />
                                  </div>
                                </Avatar>
                                <span className="text-muted-foreground">
                                  {question.author} • {question.authorRole}
                                </span>
                              </div>
                              <div className="flex items-center text-muted-foreground">
                                <Book className="w-4 h-4 mr-1" />
                                {question.course}
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-muted-foreground">
                              <div className="flex items-center">
                                <Reply className="w-4 h-4 mr-1" />
                                {question.replies} replies
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {question.timestamp}
                              </div>
                            </div>
                          </div>

                          {/* Accepted Answer Preview */}
                          {question.answers.some(answer => answer.isAccepted) && (
                            <div className="mt-4 p-3 bg-success/5 border border-success/20 rounded-lg">
                              <div className="flex items-center space-x-2 mb-2">
                                <CheckCircle2 className="w-4 h-4 text-success" />
                                <span className="text-sm font-medium text-success">Accepted Answer</span>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {question.answers.find(answer => answer.isAccepted)?.content}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="unanswered">
                <div className="space-y-6">
                  {filteredQuestions
                    .filter(q => q.status === "pending")
                    .map((question) => (
                      <Card key={question.id} className="p-6 border-0 card-gradient">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-semibold">{question.title}</h3>
                          <Badge variant="secondary">
                            <AlertCircle className="w-3 h-3 mr-1" />
                            Needs Answer
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{question.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            {question.author} • {question.timestamp}
                          </div>
                          <Button size="sm" className="btn-hero">
                            <Reply className="w-4 h-4 mr-1" />
                            Answer
                          </Button>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ask Question Form */}
            <Card className="p-6 border-0 card-gradient">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Ask a Question
              </h3>
              <div className="space-y-4">
                <Input placeholder="Question title..." />
                <Textarea 
                  placeholder="Describe your question in detail..."
                  rows={4}
                />
                <Input placeholder="Tags (comma separated)" />
                <Button className="w-full btn-hero">
                  <Send className="w-4 h-4 mr-2" />
                  Post Question
                </Button>
              </div>
            </Card>

            {/* Popular Tags */}
            <Card className="p-6 border-0 card-gradient">
              <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["react", "javascript", "hooks", "state-management", "css", "responsive", "api", "async"].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Top Contributors */}
            <Card className="p-6 border-0 card-gradient">
              <h3 className="text-lg font-semibold mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {[
                  { name: "Dr. Sarah Smith", answers: 127, reputation: 1240 },
                  { name: "Mike Chen", answers: 89, reputation: 890 },
                  { name: "Dr. John Martinez", answers: 76, reputation: 760 }
                ].map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <div className="bg-primary/10 w-full h-full flex items-center justify-center">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{contributor.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {contributor.answers} answers
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">{contributor.reputation}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtSection;