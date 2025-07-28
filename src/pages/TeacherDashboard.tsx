import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  BookOpen, 
  FileText, 
  MessageSquare,
  Plus,
  Calendar,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Clock,
  Star,
  BarChart3,
  PieChart,
  Edit,
  Eye
} from "lucide-react";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const courses = [
    {
      id: 1,
      title: "Advanced React Development",
      students: 124,
      completion: 78,
      rating: 4.8,
      status: "active",
      pendingAssignments: 15,
      newQuestions: 3
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      students: 89,
      completion: 92,
      rating: 4.9,
      status: "active",
      pendingAssignments: 8,
      newQuestions: 1
    },
    {
      id: 3,
      title: "Web Design Principles",
      students: 67,
      completion: 85,
      rating: 4.7,
      status: "completed",
      pendingAssignments: 0,
      newQuestions: 0
    }
  ];

  const pendingAssignments = [
    {
      id: 1,
      title: "Component Architecture Project",
      course: "Advanced React Development",
      submissions: 18,
      total: 24,
      dueDate: "2024-02-15",
      urgent: true
    },
    {
      id: 2,
      title: "DOM Manipulation Exercise",
      course: "JavaScript Fundamentals",
      submissions: 25,
      total: 28,
      dueDate: "2024-02-18",
      urgent: false
    },
    {
      id: 3,
      title: "Responsive Design Challenge",
      course: "Web Design Principles",
      submissions: 12,
      total: 15,
      dueDate: "2024-02-20",
      urgent: false
    }
  ];

  const recentQuestions = [
    {
      id: 1,
      student: "Alice Johnson",
      course: "Advanced React Development",
      question: "How to implement custom hooks effectively?",
      time: "2 hours ago",
      answered: false
    },
    {
      id: 2,
      student: "Bob Smith",
      course: "JavaScript Fundamentals",
      question: "Difference between let and const?",
      time: "4 hours ago",
      answered: true
    },
    {
      id: 3,
      student: "Carol Davis",
      course: "Advanced React Development",
      question: "Best practices for state management?",
      time: "6 hours ago",
      answered: false
    }
  ];

  const upcomingClasses = [
    {
      id: 1,
      title: "React Hooks Deep Dive",
      course: "Advanced React Development",
      time: "10:00 AM",
      date: "Today",
      students: 24
    },
    {
      id: 2,
      title: "Async/Await Patterns",
      course: "JavaScript Fundamentals",
      time: "2:00 PM",
      date: "Today",
      students: 28
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      course: "Web Design Principles",
      time: "11:00 AM",
      date: "Tomorrow",
      students: 15
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Teacher Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">Manage your courses and students</p>
          </div>
          <div className="flex space-x-3">
            <Button className="btn-hero">
              <Plus className="w-4 h-4 mr-2" />
              Create Course
            </Button>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              New Assignment
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Students</p>
                <p className="text-2xl font-bold text-primary">280</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Courses</p>
                <p className="text-2xl font-bold text-success">8</p>
              </div>
              <BookOpen className="h-8 w-8 text-success" />
            </div>
          </Card>
          
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg. Rating</p>
                <p className="text-2xl font-bold text-warning">4.8</p>
              </div>
              <Star className="h-8 w-8 text-warning" />
            </div>
          </Card>
          
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pending Reviews</p>
                <p className="text-2xl font-bold text-destructive">23</p>
              </div>
              <FileText className="h-8 w-8 text-destructive" />
            </div>
          </Card>
          
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Questions</p>
                <p className="text-2xl font-bold text-info">12</p>
              </div>
              <MessageSquare className="h-8 w-8 text-info" />
            </div>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg w-fit">
          {["overview", "courses", "assignments", "students", "analytics"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              onClick={() => setActiveTab(tab)}
              className="capitalize"
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Content based on active tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upcoming Classes */}
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Upcoming Classes
                </h3>
                <div className="space-y-4">
                  {upcomingClasses.map((class_) => (
                    <div key={class_.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{class_.title}</h4>
                        <p className="text-sm text-muted-foreground">{class_.course}</p>
                        <div className="flex items-center mt-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {class_.time} • {class_.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{class_.students} students</Badge>
                        <div className="mt-2">
                          <Button size="sm" variant="outline">Join Class</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Course Performance */}
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Course Performance
                </h3>
                <div className="space-y-4">
                  {courses.slice(0, 2).map((course) => (
                    <div key={course.id} className="p-4 bg-background/50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{course.title}</h4>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm">{course.rating}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Students</p>
                          <p className="font-semibold">{course.students}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Completion</p>
                          <p className="font-semibold">{course.completion}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Status</p>
                          <Badge variant={course.status === "active" ? "default" : "secondary"}>
                            {course.status}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={course.completion} className="mt-3 h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pending Assignments */}
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Pending Reviews
                </h3>
                <div className="space-y-3">
                  {pendingAssignments.slice(0, 3).map((assignment) => (
                    <div key={assignment.id} className="p-3 bg-background/50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{assignment.title}</h4>
                        {assignment.urgent && (
                          <AlertCircle className="w-4 h-4 text-destructive" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{assignment.course}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs">
                          {assignment.submissions}/{assignment.total} submitted
                        </span>
                        <Badge variant="outline" className="text-xs">
                          Due {assignment.dueDate}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All
                </Button>
              </Card>

              {/* Recent Questions */}
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Student Questions
                </h3>
                <div className="space-y-3">
                  {recentQuestions.slice(0, 3).map((question) => (
                    <div key={question.id} className="p-3 bg-background/50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-medium text-sm">{question.student}</p>
                        <Badge variant={question.answered ? "default" : "destructive"}>
                          {question.answered ? "Answered" : "New"}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{question.course}</p>
                      <p className="text-sm">{question.question}</p>
                      <p className="text-xs text-muted-foreground mt-2">{question.time}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Answer Questions
                </Button>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "courses" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="p-6 course-card border-0">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <Badge variant={course.status === "active" ? "default" : "secondary"}>
                    {course.status}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Students</p>
                    <p className="font-semibold">{course.students}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Rating</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Completion Rate</span>
                    <span>{course.completion}%</span>
                  </div>
                  <Progress value={course.completion} className="h-2" />
                </div>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="text-muted-foreground">
                    {course.pendingAssignments} pending reviews
                  </span>
                  <span className="text-muted-foreground">
                    {course.newQuestions} new questions
                  </span>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Edit className="w-4 h-4 mr-1" />
                    Manage
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Course Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Student Engagement
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Daily Active Users</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Assignment Completion</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Video Watch Time</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-3" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <PieChart className="w-5 h-5 mr-2" />
                  Performance Distribution
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Excellent (A)</span>
                    <span className="text-sm font-semibold">35%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Good (B)</span>
                    <span className="text-sm font-semibold">40%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average (C)</span>
                    <span className="text-sm font-semibold">20%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Needs Improvement</span>
                    <span className="text-sm font-semibold">5%</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherDashboard;