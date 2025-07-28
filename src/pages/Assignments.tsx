import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Calendar, 
  Clock, 
  Upload, 
  Download,
  CheckCircle2,
  AlertCircle,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Send
} from "lucide-react";

const Assignments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const assignments = [
    {
      id: 1,
      title: "React Component Architecture",
      course: "Advanced React Development",
      dueDate: "2024-02-15",
      status: "submitted",
      grade: "A-",
      feedback: "Excellent work on component organization!",
      totalMarks: 100,
      obtainedMarks: 87,
      submissionDate: "2024-02-14",
      description: "Create a comprehensive component architecture for a e-commerce application using React best practices."
    },
    {
      id: 2,
      title: "Data Visualization Dashboard",
      course: "Data Science Fundamentals",
      dueDate: "2024-02-18",
      status: "pending",
      grade: null,
      feedback: null,
      totalMarks: 100,
      obtainedMarks: null,
      submissionDate: null,
      description: "Build an interactive dashboard using D3.js and React to visualize sales data."
    },
    {
      id: 3,
      title: "Mobile App Prototype",
      course: "Mobile App Development",
      dueDate: "2024-02-20",
      status: "in-progress",
      grade: null,
      feedback: null,
      totalMarks: 150,
      obtainedMarks: null,
      submissionDate: null,
      description: "Design and develop a functional prototype of a social media mobile application."
    },
    {
      id: 4,
      title: "Algorithm Optimization",
      course: "Computer Science Fundamentals",
      dueDate: "2024-02-22",
      status: "overdue",
      grade: null,
      feedback: null,
      totalMarks: 100,
      obtainedMarks: null,
      submissionDate: null,
      description: "Optimize the given sorting algorithms and provide performance analysis."
    }
  ];

  const filteredAssignments = assignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted": return "default";
      case "pending": return "secondary";
      case "in-progress": return "outline";
      case "overdue": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted": return CheckCircle2;
      case "overdue": return AlertCircle;
      default: return Clock;
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
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
              Assignments
            </h1>
            <p className="text-muted-foreground text-lg">Manage and track your assignments</p>
          </div>
          <Button className="btn-hero">
            <Plus className="w-4 h-4 mr-2" />
            Create Assignment
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search assignments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredAssignments.map((assignment) => {
                const StatusIcon = getStatusIcon(assignment.status);
                return (
                  <Card key={assignment.id} className="p-6 course-card border-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{assignment.title}</h3>
                          <p className="text-sm text-muted-foreground">{assignment.course}</p>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(assignment.status)} className="flex items-center space-x-1">
                        <StatusIcon className="w-3 h-3" />
                        <span>{assignment.status}</span>
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {assignment.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>Due: {assignment.dueDate}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>Total: {assignment.totalMarks} marks</span>
                      </div>
                    </div>

                    {assignment.status === "submitted" && assignment.grade && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Grade: {assignment.grade}</span>
                          <span className="text-sm">{assignment.obtainedMarks}/{assignment.totalMarks}</span>
                        </div>
                        <Progress 
                          value={(assignment.obtainedMarks! / assignment.totalMarks) * 100} 
                          className="h-2" 
                        />
                        {assignment.feedback && (
                          <p className="text-sm text-muted-foreground mt-2 italic">
                            "{assignment.feedback}"
                          </p>
                        )}
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      {assignment.status === "pending" || assignment.status === "in-progress" ? (
                        <Button size="sm" className="flex-1">
                          <Upload className="w-4 h-4 mr-1" />
                          Submit
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="flex-1">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="pending" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredAssignments
                .filter(a => a.status === "pending" || a.status === "in-progress")
                .map((assignment) => (
                  <Card key={assignment.id} className="p-6 border-0 card-gradient">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold">{assignment.title}</h3>
                      <Badge variant="secondary">Due: {assignment.dueDate}</Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{assignment.course}</p>
                    <p className="text-sm mb-6">{assignment.description}</p>

                    {/* File Upload Section */}
                    <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 mb-4">
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drop your files here or click to browse
                        </p>
                        <input
                          type="file"
                          onChange={handleFileSelect}
                          className="hidden"
                          id={`file-upload-${assignment.id}`}
                          accept=".pdf,.doc,.docx,.zip"
                        />
                        <label htmlFor={`file-upload-${assignment.id}`}>
                          <Button variant="outline" size="sm" className="cursor-pointer">
                            Select File
                          </Button>
                        </label>
                        {selectedFile && (
                          <p className="text-sm text-primary mt-2">
                            Selected: {selectedFile.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <Textarea 
                      placeholder="Add a comment (optional)..."
                      className="mb-4"
                      rows={3}
                    />

                    <Button className="w-full btn-hero">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Assignment
                    </Button>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="submitted">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredAssignments
                .filter(a => a.status === "submitted")
                .map((assignment) => (
                  <Card key={assignment.id} className="p-6 border-0 card-gradient">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold">{assignment.title}</h3>
                      <Badge variant="default">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Submitted
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{assignment.course}</p>
                    <p className="text-sm mb-4">Submitted on: {assignment.submissionDate}</p>

                    {assignment.grade ? (
                      <div className="bg-background/50 p-4 rounded-lg mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">Grade: {assignment.grade}</span>
                          <span>{assignment.obtainedMarks}/{assignment.totalMarks}</span>
                        </div>
                        <Progress 
                          value={(assignment.obtainedMarks! / assignment.totalMarks) * 100} 
                          className="h-2 mb-2" 
                        />
                        {assignment.feedback && (
                          <p className="text-sm text-muted-foreground italic">
                            "{assignment.feedback}"
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="bg-background/50 p-4 rounded-lg mb-4 text-center">
                        <Clock className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">Awaiting grading</p>
                      </div>
                    )}

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-1" />
                        View Submission
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="graded">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredAssignments
                .filter(a => a.status === "submitted" && a.grade)
                .map((assignment) => (
                  <Card key={assignment.id} className="p-6 border-0 card-gradient">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold">{assignment.title}</h3>
                      <Badge variant="default" className="bg-success/10 text-success border-success/20">
                        {assignment.grade}
                      </Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{assignment.course}</p>

                    <div className="bg-background/50 p-4 rounded-lg mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Final Score</span>
                        <span className="text-lg font-bold">{assignment.obtainedMarks}/{assignment.totalMarks}</span>
                      </div>
                      <Progress 
                        value={(assignment.obtainedMarks! / assignment.totalMarks) * 100} 
                        className="h-3 mb-3" 
                      />
                      <div className="text-center text-sm text-muted-foreground">
                        {Math.round((assignment.obtainedMarks! / assignment.totalMarks) * 100)}%
                      </div>
                    </div>

                    {assignment.feedback && (
                      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-sm mb-2">Instructor Feedback</h4>
                        <p className="text-sm">{assignment.feedback}</p>
                      </div>
                    )}

                    <Button variant="outline" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Graded Assignment
                    </Button>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Assignments;