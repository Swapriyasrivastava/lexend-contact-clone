
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ArticleInsights = () => {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Strategy",
      categoryColor: "bg-teal-600",
      title: "Top 5 reasons to invest in marketing",
      author: "David",
      date: "Apr 3, 2024",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      category: "Marketing",
      categoryColor: "bg-teal-600",
      title: "How can marketing help your business?",
      author: "Allen",
      date: "Apr 3, 2024",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
    },
    {
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop",
      category: "Business",
      categoryColor: "bg-teal-600",
      title: "The ultimate guide to marketing success",
      author: "Kevin",
      date: "Apr 1, 2024",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Gain valuable insights</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <span className={`absolute top-4 left-4 ${article.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {article.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
                  {article.title}
                </h3>
                
                <div className="flex items-center">
                  <img 
                    src={article.avatar}
                    alt={article.author}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-lg"
          >
            View more articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ArticleInsights;
