import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CourseGrid } from "@/components/CourseGrid";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Explore Courses</h1>
          <p className="text-muted-foreground">Discover your next learning adventure</p>
        </div>
        <CourseGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;