
import React, { useState } from "react";
import { Search as SearchIcon, Filter } from "lucide-react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    language: "",
    stars: "",
    timeframe: ""
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 bg-gradient-to-br from-gradient-mint to-white">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 mb-4">
            🔍 Smart Repository Search
          </h1>
          <p className="text-lg text-brand-600 max-w-2xl mx-auto">
            Use natural language to find exactly what you're looking for. Try "LLM agents trending in Rust" or "calendar automation tools".
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="section-container max-w-4xl">
          <div className="gradient-card p-8 mb-8">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search repositories with natural language..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Filter className="w-4 h-4 text-brand-600 mr-2" />
                  <span className="text-sm font-medium text-brand-700">Filters:</span>
                </div>
                <select 
                  className="px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  value={filters.language}
                  onChange={(e) => setFilters({...filters, language: e.target.value})}
                >
                  <option value="">All Languages</option>
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="python">Python</option>
                  <option value="rust">Rust</option>
                  <option value="go">Go</option>
                </select>
              </div>
              
              <button className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-medium transition-all">
                Search
              </button>
            </div>
          </div>

          <div className="text-center py-12">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-brand-600 mb-4">
              🤖 Powered by Google Vertex AI
            </div>
            <h3 className="text-xl font-semibold text-brand-900 mb-2">Try Natural Language Search</h3>
            <p className="text-brand-600 mb-6">
              Our AI understands context and intent, making repository discovery intuitive.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <button className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors text-left">
                <span className="text-sm font-medium text-brand-900">"Show me LLM agents trending in Rust"</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors text-left">
                <span className="text-sm font-medium text-brand-900">"Calendar automation using GPT agents"</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors text-left">
                <span className="text-sm font-medium text-brand-900">"React components for dashboards"</span>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-colors text-left">
                <span className="text-sm font-medium text-brand-900">"Machine learning tools in Python"</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
