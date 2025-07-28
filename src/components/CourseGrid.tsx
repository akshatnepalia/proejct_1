import { CourseCard } from "./CourseCard";
import { Button } from "@/components/ui/button";
import { Filter, SlidersHorizontal, Search } from "lucide-react";
import { useState } from "react";

// Import course images
import webDevImage from "@/assets/course-web-dev.jpg";
import dataScienceImage from "@/assets/course-data-science.jpg";
import mobileDevImage from "@/assets/course-mobile-dev.jpg";

export const CourseGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const courses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      description: "Learn HTML, CSS, JavaScript, Node.js, React, MongoDB and more in this comprehensive full-stack web development course.",
      duration: "65 hours",
      students: 45000,
      rating: 4.8,
      price: 89,
      originalPrice: 199,
      image: webDevImage,
      level: "Beginner" as const,
      category: "Web Development",
      lessonsCount: 156,
      isBestseller: true,
    },
    {
      id: "2", 
      title: "Data Science and Machine Learning",
      instructor: "Jose Marcial Portilla",
      description: "Master data science with Python, pandas, matplotlib, seaborn, plotly, scikit-learn, machine learning, tensorflow and more!",
      duration: "42 hours",
      students: 32000,
      rating: 4.9,
      price: 79,
      originalPrice: 179,
      image: dataScienceImage,
      level: "Intermediate" as const,
      category: "Data Science",
      lessonsCount: 127,
      isBestseller: true,
    },
    {
      id: "3",
      title: "React Native Mobile Development",
      instructor: "Stephen Grider",
      description: "Build mobile apps with React Native for both iOS and Android. Learn Redux, Firebase, and deployment strategies.",
      duration: "38 hours",
      students: 28000,
      rating: 4.7,
      price: 94,
      originalPrice: 189,
      image: mobileDevImage,
      level: "Intermediate" as const,
      category: "Mobile Development", 
      lessonsCount: 98,
      isNew: true,
    },
    {
      id: "4",
      title: "Python Programming Masterclass",
      instructor: "Tim Buchalka",
      description: "Learn Python from scratch. Includes Object-Oriented Programming, web scraping, GUI development and more.",
      duration: "52 hours",
      students: 38000,
      rating: 4.6,
      price: 69,
      originalPrice: 149,
      image: webDevImage, // Using as placeholder
      level: "Beginner" as const,
      category: "Programming",
      lessonsCount: 142,
    },
    {
      id: "5",
      title: "AWS Cloud Computing Complete Guide",
      instructor: "Stephane Maarek",
      description: "Master Amazon Web Services with hands-on projects. Prepare for AWS certifications with practical examples.",
      duration: "47 hours",
      students: 35000,
      rating: 4.8,
      price: 99,
      originalPrice: 199,
      image: dataScienceImage, // Using as placeholder
      level: "Advanced" as const,
      category: "Cloud Computing",
      lessonsCount: 156,
      isBestseller: true,
    },
    {
      id: "6",
      title: "Digital Marketing Strategy 2024",
      instructor: "Rob Percival",
      description: "Complete digital marketing course covering SEO, social media, email marketing, PPC advertising and analytics.",
      duration: "35 hours",
      students: 22000,
      rating: 4.5,
      price: 59,
      originalPrice: 139,
      image: mobileDevImage, // Using as placeholder
      level: "Beginner" as const,
      category: "Marketing",
      lessonsCount: 89,
      isNew: true,
    }
  ];

  const categories = ["All", "Web Development", "Data Science", "Mobile Development", "Programming", "Cloud Computing", "Marketing"];

  const filteredCourses = selectedCategory === "All" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured
            <span className="block bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses taught by industry experts and loved by students worldwide.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search and Filter Controls */}
          <div className="flex gap-3 lg:ml-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search courses..."
                className="w-full rounded-lg border border-input bg-background pl-10 pr-4 py-2 text-sm focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
            </div>
            <Button variant="outline" size="sm" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            Load More Courses
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Courses Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50k+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Expert Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Completion Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};