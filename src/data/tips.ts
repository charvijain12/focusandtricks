export interface Tip {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
}

export const tips: Tip[] = [
  {
    id: 1,
    title: "The Pomodoro Technique: Work Smarter, Not Harder",
    excerpt: "Learn how 25-minute focused work sessions can transform your productivity.",
    content: "The Pomodoro Technique is a time management method that uses a timer to break work into intervals. Work for 25 minutes, then take a 5-minute break. After four pomodoros, take a longer 15-30 minute break. This technique helps maintain focus and prevents burnout.",
    category: "Time Management",
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "5 Morning Habits That Boost Mental Clarity",
    excerpt: "Start your day right with these science-backed morning rituals.",
    content: "1. Wake up at the same time daily. 2. Hydrate immediately. 3. Practice 10 minutes of meditation. 4. Exercise for 20 minutes. 5. Plan your top 3 priorities. These habits create a strong foundation for a productive day.",
    category: "Habits",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Digital Detox: Reclaim Your Attention",
    excerpt: "Strategies to reduce screen time and improve focus in a connected world.",
    content: "Set boundaries with technology. Use app timers, create phone-free zones, and schedule 'offline hours'. Replace scrolling with reading, journaling, or creative hobbies. Your brain will thank you with improved concentration and reduced anxiety.",
    category: "Focus",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "The Power of Single-Tasking",
    excerpt: "Why doing one thing at a time is the ultimate productivity hack.",
    content: "Multitasking is a myth. Our brains can't truly focus on multiple complex tasks simultaneously. Instead, practice single-tasking: dedicate full attention to one task, eliminate distractions, and complete it before moving on. You'll work faster and produce better results.",
    category: "Productivity",
    readTime: "3 min read"
  },
  {
    id: 5,
    title: "Create Your Perfect Study Environment",
    excerpt: "Design a space that maximizes concentration and learning.",
    content: "Your environment shapes your focus. Choose a quiet space with good lighting. Keep your desk organized and minimal. Use noise-canceling headphones or ambient sounds. Add plants for better air quality. Temperature matters too - aim for 68-72°F (20-22°C).",
    category: "Environment",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Brain Food: What to Eat for Peak Performance",
    excerpt: "Fuel your mind with these cognitive-boosting foods.",
    content: "Omega-3 fatty acids (fish, walnuts), blueberries, dark chocolate, green tea, and eggs support brain health. Stay hydrated - even mild dehydration affects concentration. Avoid sugar crashes by eating balanced meals with protein, healthy fats, and complex carbs.",
    category: "Wellness",
    readTime: "4 min read"
  }
];
