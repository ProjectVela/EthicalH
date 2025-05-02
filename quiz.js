// quiz.js

export const quizzes = {
  basic: [
    {
      question: "What is the most basic form of cyber attack?",
      options: ["Phishing", "DDoS", "SQL Injection", "XSS"],
      correctIndex: 0
    },
    {
      question: "What does IP stand for?",
      options: ["Internet Protocol", "Internal Provider", "Information Port", "Input Port"],
      correctIndex: 0
    },
    {
      question: "Which port is used for HTTPS?",
      options: ["80", "22", "443", "21"],
      correctIndex: 2
    },
    // Add ~30+ more here
  ],
  intermediate: [
    {
      question: "What is the purpose of a reverse shell?",
      options: [
        "To secure traffic",
        "To download files",
        "To give attacker access to a machine",
        "To protect system files"
      ],
      correctIndex: 2
    },
    {
      question: "Which tool is commonly used for network scanning?",
      options: ["Nmap", "Metasploit", "Hydra", "Wireshark"],
      correctIndex: 0
    },
    // Add more
  ],
  advanced: [
    {
      question: "What does CVE stand for?",
      options: [
        "Common Vulnerability Enumeration",
        "Common Vulnerabilities and Exposures",
        "Code Validation Engine",
        "Certified Vulnerability Expert"
      ],
      correctIndex: 1
    },
    {
      question: "ROP chains are used in which type of exploit?",
      options: ["Web exploit", "Buffer overflow", "SQLi", "XSS"],
      correctIndex: 1
    },
    // Add more
  ]
};
