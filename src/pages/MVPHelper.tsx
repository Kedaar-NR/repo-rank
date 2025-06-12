
import React, { useState } from "react";
import { Lightbulb, Download, Code, Layers } from "lucide-react";

const MVPHelper = () => {
  const [idea, setIdea] = useState("");

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 bg-gradient-to-br from-gradient-coral to-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            🧩 MVP Helper
          </h1>
          <p className="text-lg text-brand-600 max-w-2xl mx-auto">
            Transform your idea into actionable code. Get component breakdowns, architecture suggestions, and starter templates.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="section-container max-w-4xl">
          {/* Input Section */}
          <div className="gradient-card p-8 mb-8 text-center">
            <div className="mb-6">
              <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-brand-900 mb-2">Describe Your Idea</h2>
              <p className="text-brand-600">Tell us what you want to build and we'll help you get started.</p>
            </div>
            
            <textarea
              placeholder="I want to build a journaling app..."
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            />
            
            <button className="mt-4 px-8 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-medium transition-all">
              Analyze Idea
            </button>
          </div>

          {/* Results Section */}
          <div className="space-y-8">
            {/* Templates */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-brand-600 mr-3" />
                <h3 className="text-2xl font-bold text-brand-900">Suggested Templates</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="gradient-card p-6 text-center">
                  <h4 className="font-semibold text-brand-900 mb-2">React + TypeScript</h4>
                  <p className="text-sm text-brand-600 mb-4">Modern web app with type safety</p>
                  <button className="w-full px-4 py-2 bg-gray-100 text-brand-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Use Template
                  </button>
                </div>
                
                <div className="gradient-card p-6 text-center">
                  <h4 className="font-semibold text-brand-900 mb-2">Next.js Full-Stack</h4>
                  <p className="text-sm text-brand-600 mb-4">Complete web application</p>
                  <button className="w-full px-4 py-2 bg-gray-100 text-brand-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Use Template
                  </button>
                </div>
                
                <div className="gradient-card p-6 text-center">
                  <h4 className="font-semibold text-brand-900 mb-2">Express API</h4>
                  <p className="text-sm text-brand-600 mb-4">RESTful backend service</p>
                  <button className="w-full px-4 py-2 bg-gray-100 text-brand-700 rounded-lg hover:bg-gray-200 transition-colors">
                    Use Template
                  </button>
                </div>
              </div>
            </div>

            {/* Component Breakdown */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-brand-600 mr-3" />
                <h3 className="text-2xl font-bold text-brand-900">Component Breakdown</h3>
              </div>
              
              <div className="gradient-card p-8">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-3">Core Components</h4>
                    <ul className="space-y-2 text-sm text-brand-600">
                      <li>• Authentication System</li>
                      <li>• User Dashboard</li>
                      <li>• Data Entry Forms</li>
                      <li>• Navigation Layout</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-brand-900 mb-3">Recommended Stack</h4>
                    <ul className="space-y-2 text-sm text-brand-600">
                      <li>• React with TypeScript</li>
                      <li>• Tailwind CSS for styling</li>
                      <li>• Supabase for backend</li>
                      <li>• Vercel for deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Export Options */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-brand-600 mr-3" />
                <h3 className="text-2xl font-bold text-brand-900">Export Options</h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button className="flex items-center px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-medium transition-all">
                  <Download className="w-4 h-4 mr-2" />
                  Export to Cursor
                </button>
                <button className="flex items-center px-6 py-3 bg-gray-100 text-brand-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Export to Replit
                </button>
                <button className="flex items-center px-6 py-3 bg-gray-100 text-brand-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Download ZIP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MVPHelper;
