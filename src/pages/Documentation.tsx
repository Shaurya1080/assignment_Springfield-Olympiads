
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { Code } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <div className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium mb-6">
                Documentation
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">API Reference</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete documentation for our REST API endpoints with examples.
              </p>
            </div>
            
            <div className="space-y-12">
              <section className="animate-fade-up">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Getting Started
                </h2>
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <p className="mb-4">
                      Our API is accessible at the following base URL:
                    </p>
                    <div className="bg-secondary p-4 rounded-md font-mono mb-6 overflow-x-auto">
                      <code>https://api.example.com/</code>
                    </div>
                    <p className="mb-4">
                      All API requests should include the following headers:
                    </p>
                    <div className="bg-secondary p-4 rounded-md font-mono overflow-x-auto">
                      <code>{`Content-Type: application/json`}</code>
                    </div>
                    <p className="mt-4">
                      For protected endpoints, include the JWT token in the Authorization header:
                    </p>
                    <div className="bg-secondary p-4 rounded-md font-mono overflow-x-auto">
                      <code>{`Authorization: Bearer <your_jwt_token>`}</code>
                    </div>
                  </CardContent>
                </Card>
              </section>
              
              <section className="animate-fade-up" style={{animationDelay: "0.1s"}}>
                <h2 className="text-2xl font-semibold mb-6">
                  <span className="inline-flex items-center justify-center rounded-md h-8 w-8 bg-primary/10 text-primary mr-2">
                    <span className="font-semibold">1</span>
                  </span>
                  User Registration
                </h2>
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium dark:bg-green-900 dark:text-green-200">
                        POST
                      </div>
                      <h3 className="font-mono text-lg">/register</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Creates a new user account.
                    </p>
                    
                    <Tabs defaultValue="request">
                      <TabsList className="mb-4">
                        <TabsTrigger value="request">Request</TabsTrigger>
                        <TabsTrigger value="response">Response</TabsTrigger>
                      </TabsList>
                      <TabsContent value="request">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Request Body</h4>
                            <div className="bg-secondary p-4 rounded-md text-sm font-mono overflow-x-auto">
                              {`{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "secure_password"
}`}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium mb-2">Required Fields</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                              <li><code className="text-foreground">name</code> - User's full name</li>
                              <li><code className="text-foreground">email</code> - Valid email address</li>
                              <li><code className="text-foreground">password</code> - Minimum 6 characters</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="response">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Success Response (201 Created)</h4>
                            <div className="bg-secondary p-4 rounded-md text-sm font-mono overflow-x-auto">
                              {`{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}`}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium mb-2">Error Response (400 Bad Request)</h4>
                            <div className="bg-secondary p-4 rounded-md text-sm font-mono overflow-x-auto">
                              {`{
  "success": false,
  "message": "Validation error",
  "errors": [
    "Email already in use",
    "Password must be at least 6 characters"
  ]
}`}
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </section>
              
              <section className="animate-fade-up" style={{animationDelay: "0.2s"}}>
                <h2 className="text-2xl font-semibold mb-6">
                  <span className="inline-flex items-center justify-center rounded-md h-8 w-8 bg-primary/10 text-primary mr-2">
                    <span className="font-semibold">2</span>
                  </span>
                  User Login
                </h2>
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium dark:bg-blue-900 dark:text-blue-200">
                        POST
                      </div>
                      <h3 className="font-mono text-lg">/login</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Authenticates a user and returns a JWT token.
                    </p>
                    
                    <Tabs defaultValue="request">
                      <TabsList className="mb-4">
                        <TabsTrigger value="request">Request</TabsTrigger>
                        <TabsTrigger value="response">Response</TabsTrigger>
                      </TabsList>
                      <TabsContent value="request">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Request Body</h4>
                            <div className="bg-secondary p-4 rounded-md text-sm font-mono overflow-x-auto">
                              {`{
  "email": "john@example.com",
  "password": "secure_password"
}`}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium mb-2">Required Fields</h4>
                            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                              <li><code className="text-foreground">email</code> - Registered email address</li>
                              <li><code className="text-foreground">password</code> - User's password</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="response">
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Success Response (200 OK)</h4>
                            <div className="bg-secondary p-4 rounded-md text-sm font-mono overflow-x-auto">
                              {`{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}`}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium mb-2">Error Response (401 Unauthorized)</h4>
                            <div className="bg-secondary p-4 rounded-md text-sm font-mono overflow-x-auto">
                              {`{
  "success": false,
  "message": "Invalid credentials"
}`}
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </section>
              
              <section className="animate-fade-up" style={{animationDelay: "0.3s"}}>
                <h2 className="text-2xl font-semibold mb-6">
                  Error Handling
                </h2>
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <p className="mb-4">
                      The API uses conventional HTTP response codes to indicate success or failure of a request.
                      In general:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li><span className="text-foreground font-medium">2xx</span> - Success</li>
                      <li><span className="text-foreground font-medium">4xx</span> - Client error (invalid request, authentication, etc.)</li>
                      <li><span className="text-foreground font-medium">5xx</span> - Server error</li>
                    </ul>
                    
                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-2">Error Response Format</h4>
                      <div className="bg-secondary p-4 rounded-md text-sm font-mono overflow-x-auto">
                        {`{
  "success": false,
  "message": "Error description",
  "errors": [
    // Optional array of specific error details
  ]
}`}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;
