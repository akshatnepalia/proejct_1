import { useState } from "react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  Target, 
  Award, 
  Calendar,
  BookOpen,
  Clock,
  Star,
  Trophy,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  CheckCircle2,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

const PerformanceTracker = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month");

  const overallStats = {
    totalCourses: 12,
    completedCourses: 8,
    averageGrade: "A-",
    studyHours: 142,
    streak: 15,
    achievements: 23,
    rank: 5,
    totalStudents: 280
  };

  const coursePerformance = [
    {
      id: 1,
      title: "Advanced React Development",
      progress: 90,
      grade: "A",
      timeSpent: 24,
      lastActivity: "2 hours ago",
      trend: "up",
      quizAverage: 92,
      assignmentAverage: 88
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      progress: 75,
      grade: "B+",
      timeSpent: 18,
      lastActivity: "1 day ago",
      trend: "up",
      quizAverage: 85,
      assignmentAverage: 82
    },
    {
      id: 3,
      title: "Mobile App Development",
      progress: 65,
      grade: "B",
      timeSpent: 15,
      lastActivity: "3 days ago",
      trend: "down",
      quizAverage: 78,
      assignmentAverage: 80
    },
    {
      id: 4,
      title: "JavaScript Fundamentals",
      progress: 100,
      grade: "A+",
      timeSpent: 32,
      lastActivity: "Completed",
      trend: "stable",
      quizAverage: 96,
      assignmentAverage: 94
    }
  ];

  const weeklyData = [
    { day: "Mon", hours: 3.5, quizzes: 2, assignments: 1 },
    { day: "Tue", hours: 2.8, quizzes: 1, assignments: 0 },
    { day: "Wed", hours: 4.2, quizzes: 3, assignments: 2 },
    { day: "Thu", hours: 3.1, quizzes: 1, assignments: 1 },
    { day: "Fri", hours: 2.5, quizzes: 2, assignments: 0 },
    { day: "Sat", hours: 5.8, quizzes: 4, assignments: 3 },
    { day: "Sun", hours: 4.0, quizzes: 2, assignments: 1 }
  ];

  const achievements = [
    {
      id: 1,
      title: "First Course Complete",
      description: "Completed your first course",
      icon: Trophy,
      color: "text-yellow-500",
      date: "2024-01-15",
      rarity: "common"
    },
    {
      id: 2,
      title: "Quiz Master",
      description: "Scored 100% on 5 consecutive quizzes",
      icon: Star,
      color: "text-blue-500",
      date: "2024-01-20",
      rarity: "rare"
    },
    {
      id: 3,
      title: "Speed Learner",
      description: "Completed a course in record time",
      icon: Zap,
      color: "text-purple-500",
      date: "2024-01-25",
      rarity: "epic"
    },
    {
      id: 4,
      title: "Consistency King",
      description: "Maintained a 30-day learning streak",
      icon: Target,
      color: "text-green-500",
      date: "2024-02-01",
      rarity: "legendary"
    }
  ];

  const goals = [
    {
      id: 1,
      title: "Complete React Course",
      target: 100,
      current: 90,
      deadline: "2024-02-15",
      status: "on-track"
    },
    {
      id: 2,
      title: "Study 20 hours this week",
      target: 20,
      current: 16.5,
      deadline: "2024-02-11",
      status: "on-track"
    },
    {
      id: 3,
      title: "Maintain A grade average",
      target: 90,
      current: 87,
      deadline: "2024-02-28",
      status: "at-risk"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return ArrowUp;
      case "down": return ArrowDown;
      default: return Minus;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up": return "text-green-500";
      case "down": return "text-red-500";
      default: return "text-muted-foreground";
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "bg-gray-100 text-gray-800";
      case "rare": return "bg-blue-100 text-blue-800";
      case "epic": return "bg-purple-100 text-purple-800";
      case "legendary": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
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
              Performance Tracker
            </h1>
            <p className="text-muted-foreground text-lg">Track your learning progress and achievements</p>
          </div>
          <div className="flex space-x-2">
            {["week", "month", "year"].map((timeframe) => (
              <Button
                key={timeframe}
                variant={selectedTimeframe === timeframe ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTimeframe(timeframe)}
                className="capitalize"
              >
                {timeframe}
              </Button>
            ))}
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Overall Progress</p>
                <p className="text-2xl font-bold text-primary">
                  {Math.round((overallStats.completedCourses / overallStats.totalCourses) * 100)}%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <Progress 
              value={(overallStats.completedCourses / overallStats.totalCourses) * 100} 
              className="mt-3 h-2" 
            />
          </Card>
          
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Average Grade</p>
                <p className="text-2xl font-bold text-success">{overallStats.averageGrade}</p>
              </div>
              <Star className="h-8 w-8 text-success" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Top {Math.round((overallStats.rank / overallStats.totalStudents) * 100)}% of students
            </p>
          </Card>
          
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Study Streak</p>
                <p className="text-2xl font-bold text-warning">{overallStats.streak}</p>
              </div>
              <Target className="h-8 w-8 text-warning" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Days in a row</p>
          </Card>
          
          <Card className="p-6 card-gradient border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Hours</p>
                <p className="text-2xl font-bold text-info">{overallStats.studyHours}</p>
              </div>
              <Clock className="h-8 w-8 text-info" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Learning time</p>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full max-w-lg grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Activity Chart */}
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Weekly Activity
                </h3>
                <div className="space-y-4">
                  {weeklyData.map((day) => (
                    <div key={day.day} className="flex items-center space-x-4">
                      <div className="w-12 text-sm font-medium">{day.day}</div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span>{day.hours}h</span>
                          <span>{day.quizzes} quizzes, {day.assignments} assignments</span>
                        </div>
                        <Progress value={(day.hours / 6) * 100} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Performance Breakdown */}
              <Card className="p-6 border-0 card-gradient">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <PieChart className="w-5 h-5 mr-2" />
                  Performance Breakdown
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Quiz Performance</span>
                      <span>88%</span>
                    </div>
                    <Progress value={88} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Assignment Quality</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Participation</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-3" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Consistency</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-3" />
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="p-6 border-0 card-gradient">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {[
                  { action: "Completed", item: "React Hooks Quiz", score: "95%", time: "2 hours ago" },
                  { action: "Submitted", item: "Component Architecture Assignment", score: "Pending", time: "1 day ago" },
                  { action: "Watched", item: "State Management Video", score: "100%", time: "2 days ago" },
                  { action: "Completed", item: "JavaScript Arrays Quiz", score: "88%", time: "3 days ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">
                        {activity.action} {activity.item}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge variant={activity.score === "Pending" ? "secondary" : "default"}>
                      {activity.score}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {coursePerformance.map((course) => {
                const TrendIcon = getTrendIcon(course.trend);
                return (
                  <Card key={course.id} className="p-6 course-card border-0">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {course.grade}
                        </Badge>
                        <TrendIcon className={`w-4 h-4 ${getTrendColor(course.trend)}`} />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Time Spent</p>
                        <p className="font-semibold">{course.timeSpent}h</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Last Activity</p>
                        <p className="font-semibold">{course.lastActivity}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Quiz Avg</p>
                        <p className="font-semibold">{course.quizAverage}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Assignment Avg</p>
                        <p className="font-semibold">{course.assignmentAverage}%</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className="p-6 border-0 card-gradient">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <Badge className={`text-xs ${getRarityColor(achievement.rarity)}`}>
                          {achievement.rarity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Earned on {achievement.date}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {goals.map((goal) => (
                <Card key={goal.id} className="p-6 border-0 card-gradient">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold">{goal.title}</h3>
                    <Badge variant={goal.status === "on-track" ? "default" : "destructive"}>
                      {goal.status === "on-track" ? "On Track" : "At Risk"}
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{goal.current}/{goal.target}</span>
                    </div>
                    <Progress value={(goal.current / goal.target) * 100} className="h-3" />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      Due: {goal.deadline}
                    </div>
                    <span className="font-semibold">
                      {Math.round((goal.current / goal.target) * 100)}% Complete
                    </span>
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="p-6 border-0 card-gradient">
              <h3 className="text-lg font-semibold mb-4">Set New Goal</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <BookOpen className="w-6 h-6 mb-2" />
                  Course Goal
                </Button>
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <Clock className="w-6 h-6 mb-2" />
                  Study Time Goal
                </Button>
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <Star className="w-6 h-6 mb-2" />
                  Grade Goal
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PerformanceTracker;