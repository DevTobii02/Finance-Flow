import { useState } from "react";
import { Send, Sparkles, MessageCircle } from "lucide-react";

const starterPrompts = [
  "Can I spend ₦10,000 today?",
  "Why am I overspending?",
  "How can I reach my goal faster?",
  "What should I cut back on?",
];

const mockMessages = [
  {
    id: 1,
    role: "assistant",
    content: "Hi John! I'm your AI financial coach. I can help you understand your spending, plan your budget, and reach your savings goals. What would you like to know?",
  },
];

export function AIAssistant() {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: textToSend,
    };
    setMessages([...messages, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateResponse(textToSend);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          role: "assistant",
          content: aiResponse,
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  const generateResponse = (prompt: string): string => {
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes("spend") || lowerPrompt.includes("afford")) {
      return "Based on your current balance of ₦45,200 and your daily spending average of ₦4,100, you can safely spend ₦4,500 today and still stay on track with your budget. Just make sure to log the expense!";
    }
    
    if (lowerPrompt.includes("overspending")) {
      return "Looking at your spending patterns, you're spending 18% more on food than your budget allows. This is mainly from takeout orders. Try cooking at home 3 more times per week to save around ₦8,000 monthly.";
    }
    
    if (lowerPrompt.includes("goal") || lowerPrompt.includes("faster")) {
      return "To reach your New Laptop goal faster, I recommend: 1) Reduce dining out by 30% (saves ₦6,000/month), 2) Review your subscriptions and cancel unused ones (saves ₦2,900/month). This could help you reach your goal 6 weeks earlier!";
    }
    
    if (lowerPrompt.includes("cut back")) {
      return "Your biggest opportunity to save is in your food spending (₦19,000 this month). Consider: meal prepping on Sundays, using a grocery list, and limiting takeout to weekends only. This could save you ₦7,000-₦9,000 per month.";
    }
    
    return "That's a great question! Based on your spending data, I can see you're doing well overall. Your savings rate is 31%, which is excellent. Keep tracking your expenses daily and you'll reach your goals on time. Is there anything specific about your finances you'd like me to analyze?";
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Financial Coach</h1>
        <p className="text-gray-600">Ask anything about your money</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2 bg-white rounded-2xl border shadow-sm flex flex-col" style={{ height: "calc(100vh - 250px)" }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0 text-gray-600 font-medium">
                    JD
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about your finances..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Starter Prompts */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">Try asking:</h3>
            <div className="space-y-2">
              {starterPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-indigo-50 rounded-xl text-sm text-gray-700 hover:text-indigo-700 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-200">
            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">How it works</h3>
            <p className="text-sm text-gray-700">
              Your AI coach analyzes your income, expenses, and savings goals to give you personalized advice. All conversations are private and secure.
            </p>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-2xl p-6 border shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">What I can help with:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Budget planning and advice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Spending pattern analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Savings goal strategies</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Financial forecasting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
