import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, Clock, Trophy } from "lucide-react";

const MyLearning = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      progress: 65,
      totalHours: 52,
      completedHours: 34,
      image: "/src/assets/course-web-dev.jpg",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      instructor: "Jose Portilla",
      progress: 30,
      totalHours: 44,
      completedHours: 13,
      image: "/src/assets/course-data-science.jpg",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Mobile App Development",
      instructor: "Maximilian Schwarzmüller",
      progress: 100,
      totalHours: 40,
      completedHours: 40,
      image: "/src/assets/course-mobile-dev.jpg",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Learning</h1>
          <p className="text-muted-foreground">Track your progress and continue your courses</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button size="lg" className="rounded-full">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Continue
                  </Button>
                </div>
                <Badge 
                  className={`absolute top-2 right-2 ${
                    course.status === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                >
                  {course.status === 'Completed' ? (
                    <><Trophy className="w-3 h-3 mr-1" /> Completed</>
                  ) : (
                    'In Progress'
                  )}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                <CardDescription>{course.instructor}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{course.progress}% Complete</span>
                    <span className="flex items-center text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.completedHours}/{course.totalHours}h
                    </span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                
                <Button 
                  className="w-full" 
                  variant={course.status === 'Completed' ? 'outline' : 'default'}
                >
                  {course.status === 'Completed' ? 'Review Course' : 'Continue Learning'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyLearning;