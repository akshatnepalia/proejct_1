import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause,
  Volume2,
  Maximize,
  Clock, 
  Users, 
  Star, 
  BookOpen,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const Demo = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample course data - in real app, fetch by courseId
  const course = {
    id: courseId || "1",
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    image: "/src/assets/course-web-dev.jpg",
    price: 79.99,
    originalPrice: 199.99,
    duration: "52 hours",
    students: 45234,
    rating: 4.7,
    lessonsCount: 124,
    description: "Learn web development from scratch with HTML, CSS, JavaScript, React, Node.js, and more!"
  };

  const demoLessons = [
    { id: 1, title: "Introduction to Web Development", duration: "5:24", isPreview: true },
    { id: 2, title: "Setting Up Your Development Environment", duration: "8:15", isPreview: true },
    { id: 3, title: "HTML Fundamentals", duration: "12:30", isPreview: true },
    { id: 4, title: "CSS Basics and Styling", duration: "15:45", isPreview: false },
    { id: 5, title: "JavaScript Introduction", duration: "18:22", isPreview: false }
  ];

  const handleEnrollNow = () => {
    navigate(`/payment/${course.id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Player and Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <Card>
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="rounded-full w-16 h-16"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? (
                        <Pause className="h-8 w-8" />
                      ) : (
                        <Play className="h-8 w-8 ml-1" />
                      )}
                    </Button>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white hover:bg-white/20"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <span className="text-sm">2:15 / 5:24</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                          <Volume2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                          <Maximize className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-full bg-white/30 rounded-full h-1 mt-2">
                      <div className="bg-primary h-1 rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
                  <p className="text-muted-foreground mb-4">by {course.instructor}</p>
                  
                  {/* Course Stats */}
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.lessonsCount} lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground">{course.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Course Content Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Course Content Preview</CardTitle>
                <CardDescription>
                  Get a taste of what you'll learn in this course
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {demoLessons.map((lesson, index) => (
                    <div 
                      key={lesson.id}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                        lesson.isPreview ? 'hover:bg-accent cursor-pointer' : 'opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                          <span className="text-sm font-medium">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-medium">{lesson.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{lesson.duration}</span>
                            {lesson.isPreview && (
                              <Badge variant="outline" className="text-xs">
                                Preview
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {lesson.isPreview ? (
                        <Button variant="ghost" size="sm">
                          <Play className="h-4 w-4" />
                        </Button>
                      ) : (
                        <div className="text-sm text-muted-foreground">
                          Unlock with enrollment
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">
                      ${course.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      ${course.originalPrice}
                    </span>
                  </div>
                  <Badge variant="destructive" className="bg-red-500">
                    60% OFF Limited Time
                  </Badge>
                </div>
                
                <Button 
                  className="w-full h-12 text-lg mb-4"
                  onClick={handleEnrollNow}
                >
                  Enroll Now
                </Button>
                
                <Button variant="outline" className="w-full">
                  Add to Wishlist
                </Button>
                
                <div className="text-center mt-4 text-sm text-muted-foreground">
                  30-day money-back guarantee
                </div>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Master HTML, CSS, and JavaScript fundamentals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Build responsive websites with modern frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Create full-stack applications with React and Node.js</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Deploy your projects to production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Portfolio projects for your resume</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Instructor */}
            <Card>
              <CardHeader>
                <CardTitle>About the Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-semibold">DA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{course.instructor}</h4>
                    <p className="text-sm text-muted-foreground">Senior Developer & Instructor</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  With 10+ years of experience in web development and 5+ years teaching, 
                  Dr. Yu has helped thousands of students launch their tech careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;