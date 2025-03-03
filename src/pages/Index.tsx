
import React from 'react';
import { ArrowRight, Server, Users, Shield, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-6">
              Simple REST API
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Elegant Authentication API
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
              A beautifully designed REST API with user registration and authentication, 
              delivering JWT tokens with a clean, minimalist approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/documentation">
                <Button size="lg" className="shadow-md">
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">API Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our REST API is designed with simplicity and functionality in mind, providing 
              everything you need for user authentication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm animate-fade-up" style={{animationDelay: "0.1s"}}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">User Registration</h3>
                <p className="text-muted-foreground">
                  Securely register new users with name, email, and password. Data is stored with proper encryption.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm animate-fade-up" style={{animationDelay: "0.2s"}}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">JWT Authentication</h3>
                <p className="text-muted-foreground">
                  Generate secure JWT tokens upon successful authentication for protected resource access.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm animate-fade-up" style={{animationDelay: "0.3s"}}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">MySQL Storage</h3>
                <p className="text-muted-foreground">
                  Reliable MySQL database integration for storing user details securely and efficiently.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm animate-fade-up" style={{animationDelay: "0.4s"}}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                <p className="text-muted-foreground">
                  Optimized for speed with quick response times and efficient error handling.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm animate-fade-up" style={{animationDelay: "0.5s"}}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clean Documentation</h3>
                <p className="text-muted-foreground">
                  Comprehensive documentation with examples to help you integrate the API seamlessly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm animate-fade-up" style={{animationDelay: "0.6s"}}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
                <p className="text-muted-foreground">
                  Beautiful, intuitive frontend interface for interacting with the API endpoints.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* API Endpoints Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">API Endpoints</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple and straightforward endpoints for user management and authentication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden border border-border bg-card/80 backdrop-blur-sm animate-fade-up">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium dark:bg-green-900 dark:text-green-200">
                    POST
                  </div>
                  <h3 className="font-mono text-lg">/register</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Register a new user with name, email and password.
                </p>
                <div className="bg-secondary p-4 rounded-md text-sm font-mono overflow-x-auto">
                  {`{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password"
}`}
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border border-border bg-card/80 backdrop-blur-sm animate-fade-up" style={{animationDelay: "0.1s"}}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium dark:bg-blue-900 dark:text-blue-200">
                    POST
                  </div>
                  <h3 className="font-mono text-lg">/login</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Authenticate user and receive a JWT token.
                </p>
                <div className="bg-secondary p-4 rounded-md text-sm font-mono overflow-x-auto">
                  {`{
  "email": "john@example.com",
  "password": "secure_password"
}`}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto rounded-2xl bg-card p-8 md:p-12 border border-border/50 shadow-sm animate-fade-up">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our API documentation or create an account to start using our services right away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/documentation">
                  <Button size="lg" variant="outline">
                    View Documentation
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg">
                    Create Account
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
