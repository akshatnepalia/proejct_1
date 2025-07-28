import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  Target,
  Calendar,
  MessageSquare,
  FileText,
  PlayCircle,
  CheckCircle2,
  Star,
  TrendingUp,
  Award
} from "lucide-react";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      nextLesson: "State Management with Redux",
      instructor: "John Smith",
      dueAssignment: "Component Architecture",
      grade: "A-"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      nextLesson: "Machine Learning Basics",
      instructor: "Dr. Sarah Johnson",
      dueAssignment: "Data Analysis Project",
      grade: "B+"
    },
    {
      id: 3,
      title: "Mobile App Development",
      progress: 90,
      totalLessons: 20,
      completedLessons: 18,
      nextLesson: "App Store Deployment",
      instructor: "Mike Chen",
      dueAssignment: "Final Project",
      grade: "A"
    }
  ];

  const upcomingAssignments = [
    {
      id: 1,
      title: "Component Architecture Design",
      course: "Advanced React Development",
      dueDate: "2024-02-15",
      priority: "high",
      status: "pending"
    },
    {
      id: 2,
      title: "Data Analysis Report",
      course: "Data Science Fundamentals",
      dueDate: "2024-02-18",
      priority: "medium",
      status: "in-progress"
    },
    {
      id: 3,
      title: "Mobile App Prototype",
      course: "Mobile App Development",
      dueDate: "2024-02-20",
      priority: "low",
      status: "completed"
    }
  ];

  const recentAchievements = [
    { title: "Course Completion", description: "Completed JavaScript Fundamentals", icon: Trophy, color: "text-yellow-500" },
    { title: "Perfect Score", description: "100% on React Quiz", icon: Star, color: "text-blue-500" },
    { title: "Streak Master", description: "7 days learning streak", icon: Target, color: "text-green-500" },
    { title: "Top Performer", description: "Top 10% in Data Science", icon: Award, color: "text-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Welcome back, Alex!
          </h1>
          <p className="text-muted-foreground text-lg">Continue your learning journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Courses Enrolled</p>
                <p className="text-2xl font-bold text-primary">12</p>
              </div>
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Completed</p>
                <p className="text-2xl font-bold text-success">8</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-success" />
            </div>
          </Card>
          
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Avg. Grade</p>
                <p className="text-2xl font-bold text-warning">A-</p>
              </div>
              <Trophy className="h-8 w-8 text-warning" />
            </div>
          </Card>
          
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Study Hours</p>
                <p className="text-2xl font-bold text-info">142</p>
              </div>
              <Clock className="h-8 w-8 text-info" />
            </div>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-muted p-1 rounded-lg w-fit">
          {["overview", "courses", "assignments", "performance"].map((tab) => (
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
            {/* Continue Learning */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Continue Learning</h2>
              <div className="space-y-6">
                {enrolledCourses.slice(0, 2).map((course) => (
                  <Card key={course.id} className="p-6 course-card border-0">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="text-muted-foreground">Instructor: {course.instructor}</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {course.grade}
                      </Badge>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      </div>
                      <Button size="sm" className="btn-hero">
                        <PlayCircle className="w-4 h-4 mr-2" />
                        Continue
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Assignments */}
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Upcoming Assignments
                </h3>
                <div className="space-y-3">
                  {upcomingAssignments.slice(0, 3).map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                      <div>
                        <p className="font-medium text-sm">{assignment.title}</p>
                        <p className="text-xs text-muted-foreground">{assignment.course}</p>
                      </div>
                      <Badge 
                        variant={assignment.priority === "high" ? "destructive" : assignment.priority === "medium" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {assignment.dueDate}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Achievements */}
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Recent Achievements
                </h3>
                <div className="space-y-3">
                  {recentAchievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                      <div>
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "courses" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <Card key={course.id} className="p-6 course-card border-0">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {course.grade}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Instructor: {course.instructor}
                </p>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {course.completedLessons}/{course.totalLessons} lessons
                  </div>
                  <div className="flex items-center">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Next: {course.nextLesson}
                  </div>
                </div>
                
                <Button className="w-full btn-hero">
                  Continue Learning
                </Button>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "assignments" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Assignments</h2>
              <Button variant="outline">Filter</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingAssignments.map((assignment) => (
                <Card key={assignment.id} className="p-6 border-0 card-gradient">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold">{assignment.title}</h3>
                    <Badge 
                      variant={assignment.status === "completed" ? "default" : assignment.status === "in-progress" ? "secondary" : "outline"}
                    >
                      {assignment.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{assignment.course}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Due: {assignment.dueDate}
                    </div>
                    <Badge 
                      variant={assignment.priority === "high" ? "destructive" : assignment.priority === "medium" ? "default" : "secondary"}
                    >
                      {assignment.priority}
                    </Badge>
                  </div>
                  
                  <Button className="w-full" variant={assignment.status === "completed" ? "outline" : "default"}>
                    {assignment.status === "completed" ? "View Submission" : "Start Assignment"}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "performance" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Performance Analytics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Learning Progress
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Overall Progress</span>
                      <span>70%</span>
                    </div>
                    <Progress value={70} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Assignment Score</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Quiz Average</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-3" />
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-lg font-semibold mb-4">Study Streak</h3>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15</div>
                  <p className="text-muted-foreground">Days in a row</p>
                  <div className="mt-4 flex justify-center space-x-2">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full ${
                          i < 5 ? 'bg-primary' : 'bg-muted'
                        }`}
                      />
                    ))}
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

export default StudentDashboard;