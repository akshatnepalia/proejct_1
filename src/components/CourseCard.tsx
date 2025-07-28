import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Users, 
  Star, 
  PlayCircle, 
  BookOpen,
  Award
} from "lucide-react";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    instructor: string;
    description: string;
    duration: string;
    students: number;
    rating: number;
    price: number;
    originalPrice?: number;
    image: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    category: string;
    lessonsCount: number;
    isBestseller?: boolean;
    isNew?: boolean;
  };
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const discountPercentage = course.originalPrice 
    ? Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)
    : 0;

  return (
    <div className="course-card group bg-white rounded-xl overflow-hidden border border-border">
      {/* Course Image */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay with play button */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <PlayCircle className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {course.isBestseller && (
            <Badge variant="secondary" className="bg-orange-500 text-white">
              Bestseller
            </Badge>
          )}
          {course.isNew && (
            <Badge variant="secondary" className="bg-green-500 text-white">
              New
            </Badge>
          )}
        </div>

        {/* Discount */}
        {discountPercentage > 0 && (
          <div className="absolute top-3 right-3">
            <Badge variant="destructive" className="bg-red-500 text-white">
              -{discountPercentage}%
            </Badge>
          </div>
        )}
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Category and Level */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs">
            {course.category}
          </Badge>
          <Badge 
            variant="outline" 
            className={`text-xs ${
              course.level === 'Beginner' ? 'text-green-600 border-green-200' :
              course.level === 'Intermediate' ? 'text-yellow-600 border-yellow-200' :
              'text-red-600 border-red-200'
            }`}
          >
            {course.level}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-muted-foreground mb-3">
          by {course.instructor}
        </p>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Course Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
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
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{course.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({course.students.toLocaleString()} students)
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              ${course.price}
            </span>
            {course.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          
          <Button variant="gradient" size="sm" className="shadow-md">
            <Award className="h-4 w-4 mr-1" />
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};