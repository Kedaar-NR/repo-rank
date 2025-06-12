
import React from "react";
import { Code, Key, Book } from "lucide-react";

const API = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 bg-gradient-to-br from-gradient-yellow to-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            🛠️ RepoRank API
          </h1>
          <p className="text-lg text-brand-600 max-w-2xl mx-auto">
            Integrate RepoRank's powerful repository analysis into your own applications with our comprehensive API.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="section-container max-w-4xl">
          {/* Authentication */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Key className="w-8 h-8 text-brand-600 mr-3" />
              <h2 className="text-2xl font-bold text-brand-900">Authentication</h2>
            </div>
            
            <div className="gradient-card p-8 text-left">
              <p className="text-brand-600 mb-4">
                All API requests require authentication using an API key. Include your key in the Authorization header:
              </p>
              
              <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm">
                <code>Authorization: Bearer YOUR_API_KEY</code>
              </div>
            </div>
          </div>

          {/* Endpoints */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Book className="w-8 h-8 text-brand-600 mr-3" />
              <h2 className="text-2xl font-bold text-brand-900">Endpoints</h2>
            </div>
            
            <div className="space-y-8">
              <div className="gradient-card p-8 text-left">
                <h3 className="text-xl font-semibold text-brand-900 mb-4">GET /api/trends</h3>
                <p className="text-brand-600 mb-4">Get trending repositories for a specific time range.</p>
                
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <code className="text-sm">
                    GET https://api.reporank.com/v1/trends?timeframe=weekly&limit=30
                  </code>
                </div>
                
                <h4 className="font-semibold text-brand-900 mb-2">Parameters:</h4>
                <ul className="text-sm text-brand-600 space-y-1">
                  <li>• <code>timeframe</code> - daily, weekly, monthly, yearly, alltime</li>
                  <li>• <code>limit</code> - Number of results (max 100)</li>
                  <li>• <code>language</code> - Filter by programming language</li>
                </ul>
              </div>

              <div className="gradient-card p-8 text-left">
                <h3 className="text-xl font-semibold text-brand-900 mb-4">POST /api/search</h3>
                <p className="text-brand-600 mb-4">Search repositories using natural language queries.</p>
                
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <code className="text-sm">
                    POST https://api.reporank.com/v1/search
                  </code>
                </div>
                
                <h4 className="font-semibold text-brand-900 mb-2">Request Body:</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <pre className="text-sm">
{`{
  "query": "LLM agents trending in Rust",
  "limit": 20
}`}
                  </pre>
                </div>
              </div>

              <div className="gradient-card p-8 text-left">
                <h3 className="text-xl font-semibold text-brand-900 mb-4">POST /api/mvp-analyze</h3>
                <p className="text-brand-600 mb-4">Analyze an MVP idea and get component suggestions.</p>
                
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <code className="text-sm">
                    POST https://api.reporank.com/v1/mvp-analyze
                  </code>
                </div>
                
                <h4 className="font-semibold text-brand-900 mb-2">Request Body:</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <pre className="text-sm">
{`{
  "idea": "I want to build a journaling app",
  "preferences": {
    "framework": "react",
    "language": "typescript"
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Code */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Code className="w-8 h-8 text-brand-600 mr-3" />
              <h2 className="text-2xl font-bold text-brand-900">Sample Code</h2>
            </div>
            
            <div className="gradient-card p-8 text-left">
              <h3 className="text-lg font-semibold text-brand-900 mb-4">JavaScript/Node.js</h3>
              
              <div className="bg-gray-100 rounded-lg p-4">
                <pre className="text-sm">
{`const response = await fetch('https://api.reporank.com/v1/trends?timeframe=weekly', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data.repositories);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default API;
