import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Shield, 
  Clock, 
  Users, 
  Star, 
  BookOpen,
  CheckCircle,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";

const Payment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');

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
    features: [
      "Lifetime access to course content",
      "Certificate of completion",
      "Direct instructor support",
      "Mobile and desktop access",
      "30-day money-back guarantee"
    ]
  };

  const discountPercentage = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  const handlePayment = () => {
    // Here you would integrate with your payment processor (Stripe, PayPal, etc.)
    alert("Payment integration would go here!");
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
          Back to Course
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Information
                </CardTitle>
                <CardDescription>
                  Complete your purchase securely
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Method Selection */}
                <div>
                  <h3 className="font-semibold mb-3">Payment Method</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={paymentMethod === 'card' ? 'default' : 'outline'}
                      className="h-12"
                      onClick={() => setPaymentMethod('card')}
                    >
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit Card
                    </Button>
                    <Button
                      variant={paymentMethod === 'paypal' ? 'default' : 'outline'}
                      className="h-12"
                      onClick={() => setPaymentMethod('paypal')}
                    >
                      PayPal
                    </Button>
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Card Number</label>
                      <Input placeholder="1234 5678 9012 3456" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Expiry Date</label>
                        <Input placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">CVV</label>
                        <Input placeholder="123" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Cardholder Name</label>
                      <Input placeholder="Full name on card" />
                    </div>
                  </>
                )}

                <Separator />

                {/* Billing Information */}
                <div>
                  <h3 className="font-semibold mb-3">Billing Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Address</label>
                      <Input placeholder="123 Main Street" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">City</label>
                        <Input placeholder="New York" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Zip Code</label>
                        <Input placeholder="10001" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full h-12 text-lg"
                  onClick={handlePayment}
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Complete Purchase - ${course.price}
                </Button>

                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <Shield className="mr-2 h-4 w-4" />
                  Secured by 256-bit SSL encryption
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm leading-tight mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      by {course.instructor}
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Course Stats */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Duration
                    </span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      Lessons
                    </span>
                    <span>{course.lessonsCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Rating
                    </span>
                    <span>{course.rating} ★</span>
                  </div>
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Original Price</span>
                    <span className="line-through text-muted-foreground">
                      ${course.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-green-600">
                    <span>Discount ({discountPercentage}% off)</span>
                    <span>-${(course.originalPrice - course.price).toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${course.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;