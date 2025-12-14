const quizzes = [
  // Full Stack Development (MERN)
  { id: 1, course: "MERN", question: "Which of these is NOT part of the MERN stack?", options: ["MongoDB", "Express", "React", "Python"], answer: "Python" },
  { id: 2, course: "MERN", question: "Which library is used for building UI in MERN?", options: ["Node.js", "Express", "React", "MongoDB"], answer: "React" },
  { id: 3, course: "MERN", question: "Which database does MERN commonly use?", options: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"], answer: "MongoDB" },
  { id: 4, course: "MERN", question: "Node.js is used for?", options: ["Frontend", "Backend", "Database", "CSS Styling"], answer: "Backend" },
  { id: 5, course: "MERN", question: "Which command creates a React app?", options: ["npm create-react-app", "npx create-react-app", "yarn create-react", "node create-app"], answer: "npx create-react-app" },

  // Full Stack Development (Python)
  { id: 6, course: "Python Full Stack", question: "Which Python framework is used for backend development?", options: ["Flask", "React", "Angular", "Vue"], answer: "Flask" },
  { id: 7, course: "Python Full Stack", question: "Django uses which database by default?", options: ["MySQL", "SQLite", "MongoDB", "PostgreSQL"], answer: "SQLite" },
  { id: 8, course: "Python Full Stack", question: "Which language is used for frontend in Python full stack?", options: ["Python", "JavaScript", "C++", "Java"], answer: "JavaScript" },
  { id: 9, course: "Python Full Stack", question: "Which method handles HTTP requests in Flask?", options: ["route()", "render()", "get()", "post()"], answer: "route()" },
  { id: 10, course: "Python Full Stack", question: "Which template engine is used with Flask?", options: ["Jinja2", "React", "EJS", "Angular"], answer: "Jinja2" },

  // JavaScript
  { id: 11, course: "JavaScript", question: "Which method adds an element at the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
  { id: 12, course: "JavaScript", question: "Which symbol is used for single-line comments?", options: ["//", "/* */", "#", "<!-- -->"], answer: "//" },
  { id: 13, course: "JavaScript", question: "Which of these is NOT a JS data type?", options: ["String", "Boolean", "Number", "Character"], answer: "Character" },
  { id: 14, course: "JavaScript", question: "Which keyword declares a block-scoped variable?", options: ["var", "let", "const", "all"], answer: "let" },
  { id: 15, course: "JavaScript", question: "Which function converts JSON string to JS object?", options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "stringifyJSON()"], answer: "JSON.parse()" },

  // AI Generalist
  { id: 16, course: "AI Generalist", question: "What does AI stand for?", options: ["Artificial Intelligence", "Automated Input", "Advanced Integration", "Algorithmic Interface"], answer: "Artificial Intelligence" },
  { id: 17, course: "AI Generalist", question: "Which AI mimics human brain neurons?", options: ["Neural Networks", "Decision Trees", "SVM", "Regression"], answer: "Neural Networks" },
  { id: 18, course: "AI Generalist", question: "Which is NOT an AI type?", options: ["Narrow AI", "General AI", "Super AI", "Random AI"], answer: "Random AI" },
  { id: 19, course: "AI Generalist", question: "Which technique is used for pattern recognition?", options: ["Machine Learning", "HTML", "CSS", "SQL"], answer: "Machine Learning" },
  { id: 20, course: "AI Generalist", question: "Which library is popular for AI in Python?", options: ["TensorFlow", "React", "Angular", "Bootstrap"], answer: "TensorFlow" },

  // Generative AI
  { id: 21, course: "Generative AI", question: "Generative AI is mainly used for?", options: ["Creating new content", "Sorting data", "Managing database", "Networking"], answer: "Creating new content" },
  { id: 22, course: "Generative AI", question: "Which model is widely used for text generation?", options: ["GPT", "CNN", "RNN", "SVM"], answer: "GPT" },
  { id: 23, course: "Generative AI", question: "Generative AI can create?", options: ["Images", "Text", "Music", "All of the above"], answer: "All of the above" },
  { id: 24, course: "Generative AI", question: "Prompt engineering is used for?", options: ["Controlling AI outputs", "Styling HTML", "Database queries", "Networking"], answer: "Controlling AI outputs" },
  { id: 25, course: "Generative AI", question: "Which AI type generates new content?", options: ["Generative AI", "Analytical AI", "Predictive AI", "Reactive AI"], answer: "Generative AI" },

  // Data Analytics
  { id: 26, course: "Data Analytics", question: "Which tool is used for data visualization?", options: ["Excel", "Tableau", "Python", "All of the above"], answer: "All of the above" },
  { id: 27, course: "Data Analytics", question: "SQL is used for?", options: ["Styling websites", "Managing databases", "Machine learning", "Networking"], answer: "Managing databases" },
  { id: 28, course: "Data Analytics", question: "Which chart is best for trends?", options: ["Line chart", "Pie chart", "Bar chart", "Scatter plot"], answer: "Line chart" },
  { id: 29, course: "Data Analytics", question: "Pivot tables are used in?", options: ["Excel", "React", "CSS", "Node.js"], answer: "Excel" },
  { id: 30, course: "Data Analytics", question: "Which Python library is used for analytics?", options: ["Pandas", "React", "Bootstrap", "Express"], answer: "Pandas" },

  // Data Science
  { id: 31, course: "Data Science", question: "Which language is most used in data science?", options: ["Python", "JavaScript", "HTML", "CSS"], answer: "Python" },
  { id: 32, course: "Data Science", question: "Which library is used for data manipulation?", options: ["Pandas", "React", "Express", "Flask"], answer: "Pandas" },
  { id: 33, course: "Data Science", question: "Machine learning is a part of?", options: ["AI", "CSS", "HTML", "SQL"], answer: "AI" },
  { id: 34, course: "Data Science", question: "Which Python library is used for ML?", options: ["Scikit-learn", "Bootstrap", "React", "Node.js"], answer: "Scikit-learn" },
  { id: 35, course: "Data Science", question: "Which chart type is used for data visualization?", options: ["Bar chart", "React component", "HTML table", "Node.js script"], answer: "Bar chart" },

  // Digital Marketing
  { id: 36, course: "Digital Marketing", question: "SEO stands for?", options: ["Search Engine Optimization", "Social Engagement Online", "Systematic Email Outreach", "Secure Email Operations"], answer: "Search Engine Optimization" },
  { id: 37, course: "Digital Marketing", question: "Which platform is used for paid ads?", options: ["Google Ads", "YouTube", "GitHub", "Slack"], answer: "Google Ads" },
  { id: 38, course: "Digital Marketing", question: "Which is a social media marketing platform?", options: ["Facebook", "Python", "React", "SQL"], answer: "Facebook" },
  { id: 39, course: "Digital Marketing", question: "Email marketing is used for?", options: ["Customer outreach", "Data analysis", "Programming", "Networking"], answer: "Customer outreach" },
  { id: 40, course: "Digital Marketing", question: "Which metric measures website traffic?", options: ["Analytics", "HTML", "CSS", "Bootstrap"], answer: "Analytics" },
];

export default quizzes;
