export const recentEvents = [
  {
    title: "Game of Code 3.0",
    description: "An exciting and competitive event designed to nurture coding skills, teamwork, and problem-solving abilities.",
    image: "/events/event1-banner.png",
  },
  {
    title: "Roadmap To Data Structures And Algorithms",
    description: "Where logic meets opportunity - Your journey to mastering DSA starts here!",
    image: "/events/event2-banner.png",
  },
]

export const allEvents = [
  {
    id: 1,
    title: "Game of Code 3.0",
    shortDescription: "A dynamic event focused on teamwork and problem-solving through code.",
    image: "/events/event1-banner.png",
    date: "October 8, 2025",
    location: "B402, BVCOE Campus",
    category: "Completed",
    participants: "Registered: 550+ | Participated: 300+",
  },
  {
    id: 2,
    title: "Roadmap To Data Structures And Algorithms",
    shortDescription: "Master DSA: Your Path to Coding Excellence",
    image: "/events/event2-banner.png",
    date: "October 30, 2025",
    location: "B404, BVCOE Campus",
    category: "Completed",
    participants: "50+",
  },
]

export const eventsData: Record<number, any> = {
  1: {
    id: 1,
    title: "Game of Code 3.0",
    description: "An exciting and competitive event designed to nurture coding skills, teamwork, and problem-solving abilities.",
    image: "/hackathon-coding-event.jpg",
    date: "October 8, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "B402, BVCOE Campus",
    category: "Competition",
    participants: "300+",
    fullDetails:
      "This is a coding and logic-based competition designed to test problem-solving, programming skills, and logical reasoning. Participants will navigate through challenging rounds involving scavenger hunts, code puzzles, and jumbled code reconstruction.",
    agenda: [
      "Round 1: Scavenger Hunt (Eliminatory)",
      "Round 2: Code Puzzle"
    ],
    winners: ["1st Year Winners: Tech Titans (Dhruv Sharma, Nikhil Kumar, Aditya Tyagi, Vishwas Pratap)", "2nd Year Winners: Girlie POP (Niyati Kapoor, Mitali Jain, Adyasha Behuri, Avika Garg)", "3rd Year Winners: Meme Mandli (Satvik Rajput, Rishabh Goyal, Hardik Kumar, Pratham Nahata)"],
    registrationUrl: "#",
    status: "Completed",
    images: ["/event1-1.png", "/event1-2.png","/event1-3.png", "/event1-winner1.png", "/event1-winner2.png", "/event1-winner3.png"],
  },
  2: {
    id: 2,
    title: "Roadmap To Data Structures And Algorithms",
    description: "Where logic meets opportunity - Your journey to mastering DSA starts here!",
    image: "/ai-machine-learning-workshop.jpg",
    date: "October 30, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "B404, BVCOE Campus",
    category: "Workshop",
    participants: "50+",
    fullDetails:
      "A session to provide students with a clear understanding of the importance and application of DSA in computer science. It aimed to help participants build a strong foundation in problem-solving skills, algorithmic thinking, and efficient coding practices.",
    agenda: [
      "Introduction to the Interview Process",
      "How to Prepare Effectively",
      "Effect of AI/ML in Job Market",
      "Quiz and Interactive Q&A Session",
    ],
    prerequisites: ["No prior experience required"],
    speakers: ["Abhishek Srivastava (Senior Instructor and Product Engineer, Coding Blocks)"],
    capacity: "200",
    registrationUrl: "#",
    status: "Completed",
    images: ["/event2-1.png", "/event2-2.png","/event2-3.png", "/event2-4.png" ],
  },
}
