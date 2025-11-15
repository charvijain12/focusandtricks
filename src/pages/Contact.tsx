import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    riddle: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || (!formData.riddle && !formData.message)) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to a backend
    toast({
      title: "Thanks for reaching out!",
      description: "We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", riddle: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground text-lg">
            Have a riddle to share or questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Submit a Riddle</h3>
                    <p className="text-muted-foreground text-sm">
                      Got an awesome riddle? Share it with our community! We review all submissions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">General Inquiries</h3>
                    <p className="text-muted-foreground text-sm">
                      Questions, feedback, or collaboration ideas? Drop us a message!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                <p className="text-sm opacity-90 mb-4">
                  Connect with us on Instagram for daily content and quick responses.
                </p>
                <Button asChild variant="secondary" size="sm">
                  <a
                    href="https://instagram.com/focus.and.tricks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @focus.and.tricks
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="riddle">Your Riddle (Optional)</Label>
                  <Textarea
                    id="riddle"
                    value={formData.riddle}
                    onChange={(e) => setFormData({ ...formData, riddle: e.target.value })}
                    placeholder="Share your riddle here..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full gradient-primary">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
