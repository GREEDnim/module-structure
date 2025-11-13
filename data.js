// All data for the DSA Roadmap application
const GROUPS_DATA = 
{
  "groups": {
    "FRESHER (6-12 LPA)": {
      "id": "fresher",
      "modules": [1, 2],
      "bonus": 1
    },
    "MAANG SDE1 (12-24 LPA)": {
      "id": "sde1",
      "modules": [1, 2, 3, 4],
      "bonus": 2
    },
    "MAANG SDE2 (24+ LPA)": {
      "id": "sde2",
      "modules": [1, 2, 3, 4, 5],
      "bonus": 3
    }
  }
}
;

const MODULES_DATA = {
  "modules": [
    {
      "id": 1,
      "title": "Module 1: Beginner DSA",
      "highLevelGoal": {
        "sde1": "Develop into a self-sufficient problem solver capable of building production-ready software systems. Strengthen understanding of core data structures and algorithms to solve medium to hard-level problems efficiently. Gain confidence in analyzing time and space complexity and applying foundational patterns like sliding window and two-pointer approaches.",
        "sde2": "Transition into a system-oriented engineer capable of designing and optimizing solutions at scale. Demonstrate mastery in core algorithmic thinking and complexity analysis while applying efficient problem-solving patterns. Build the ability to optimize code performance and scalability in foundational modules."
      },
      "chapters": [
        {
          "id": 1,
          "title": "Chapter 1: Arrays & Complexity Analysis",
          "lessons": [
            {
              "title": "Arrays Part 1",
              "minRequirement": {
                "fresher": "Implement basic array operations and solve simple traversal problems",
                "sde1": "Master array manipulation techniques and optimize brute force solutions",
                "sde2": "Design efficient array algorithms with optimal space-time complexity"
              }
            },
            {
              "title": "Time Complexity Introduction & Logarithmic Analysis",
              "minRequirement": {
                "fresher": "Understand basic time complexity analysis and identify common complexity classes",
                "sde1": "Analyze and optimize algorithms for better time-space complexity trade-offs",
                "sde2": "Master advanced complexity analysis and algorithm optimization techniques"
              }
            },
            {
              "title": "Arrays Part 2",
              "minRequirement": {
                "fresher": "Solve basic matrix problems and implement 2D array operations",
                "sde1": "Design efficient solutions for medium-level matrix manipulation problems",
                "sde2": "Optimize complex matrix algorithms and implement advanced traversal patterns"
              }
            }
          ],
          "goal": {
            "fresher": "Build strong foundation in array operations and basic complexity analysis",
            "sde1": "Master array manipulation techniques and develop optimization strategies",
            "sde2": "Design and implement highly optimized array-based solutions for complex problems"
          }
        },
        {
          "id": 2,
          "title": "Chapter 2: String Manipulation",
          "lessons": [
            {
              "title": "Strings Part 1",
              "minRequirement": {
                "fresher": "Implement basic string operations and solve simple string manipulation problems",
                "sde1": "Master string traversal techniques and implement efficient string processing algorithms",
                "sde2": "Design optimized solutions for complex string manipulation scenarios"
              }
            },
            {
              "title": "Strings Part 2",
              "minRequirement": {
                "fresher": "Solve basic pattern matching problems and implement string search algorithms",
                "sde1": "Master medium-level string algorithms and implement efficient pattern matching solutions",
                "sde2": "Design advanced string algorithms with optimal performance characteristics"
              }
            }
          ],
          "goal": {
            "fresher": "Build strong foundation in string manipulation and basic pattern matching",
            "sde1": "Master string processing algorithms and pattern matching techniques",
            "sde2": "Design and implement highly optimized solutions for complex string problems"
          }
        },
        {
          "id": 3,
          "title": "Chapter 3: Master Hashing",
          "lessons": [
            {
              "title": "Hashing Fundamentals",
              "minRequirement": {
                "fresher": "Understand how hashing works and when to use frequency array and hash maps",
                "sde1": "Master hash table implementations and handle collisions efficiently",
                "sde2": "Design advanced hashing schemes for large-scale systems"
              }
            },
            {
              "title": "Mastering HashSet and HashMap",
              "minRequirement": {
                "fresher": "To be able to solve easy to medium questions using HashSet and HashMap",
                "sde1": "Master advanced hashing techniques and optimize hash-based solutions",
                "sde2": "Design scalable hash-based data structures for complex system requirements"
              }
            }
          ],
          "goal": {
            "fresher": "Build strong foundation in hashing techniques and data structures",
            "sde1": "Master advanced hashing algorithms and collision resolution strategies",
            "sde2": "Design optimal hash-based solutions for large-scale system requirements"
          }
        },
        {
          "id": 4,
          "title": "Chapter 4: Mastering Sub Patterns - Part 1",
          "lessons": [
            {
              "title": "Pattern Recognition & Problem-Solving Strategy",
              "minRequirement": {
                "fresher": "Recognize the importance of identifying algorithmic patterns and develop a systematic approach to problem-solving",
                "sde1": "Develop advanced pattern recognition skills and create reusable problem-solving frameworks",
                "sde2": "Master high-level pattern recognition and create optimization strategies for complex algorithmic problems"
              }
            },
            {
              "title": "Sliding Window Technique",
              "minRequirement": {
                "fresher": "Apply sliding window technique to basic subarray problems with fixed window size",
                "sde1": "Implement variable-size sliding window solutions for medium-level problems with optimized space complexity",
                "sde2": "Master complex sliding window patterns with multiple pointers and conditional window modifications"
              }
            },
            {
              "title": "Two-Pointer Pattern (Left-Right Approach)",
              "minRequirement": {
                "fresher": "Identify and implement basic two-pointer solutions for array problems",
                "sde1": "Apply two-pointer patterns to solve medium-level problems involving sorting and searching",
                "sde2": "Master advanced two-pointer techniques for complex array manipulation and optimization problems"
              }
            }
          ],
          "goal": {
            "fresher": "Master fundamental algorithmic patterns and develop systematic problem-solving approaches for arrays and strings",
            "sde1": "Achieve proficiency in implementing optimized solutions using sliding window and two-pointer patterns",
            "sde2": "Master advanced pattern recognition and optimization techniques for complex algorithmic problems"
          }
        },
        {
          "id": 5,
          "title": "Chapter 5: Mastering Patterns - Part 2",
          "lessons": [
            {
              "title": "Advanced Two-Pointer Techniques (Dutch National Flag, Intervals)",
              "minRequirement": {
                "fresher": "Implement Dutch National Flag algorithm for basic array partitioning problems",
                "sde1": "Master interval merging and advanced array partitioning techniques using two-pointer patterns",
                "sde2": "Optimize complex partitioning problems and implement efficient interval-based algorithms"
              }
            },
            {
              "title": "String Pattern Matching (Z Algorithm)",
              "minRequirement": {
                "fresher": "Understand and implement basic Z algorithm for pattern matching",
                "sde1": "Apply Z algorithm efficiently for medium-complexity string matching problems",
                "sde2": "Master advanced string pattern matching optimizations and implement variations of Z algorithm"
              }
            }
          ],
          "goal": {
            "fresher": "Master fundamental pattern matching algorithms and basic array partitioning techniques",
            "sde1": "Achieve proficiency in implementing advanced two-pointer patterns and efficient string matching algorithms",
            "sde2": "Demonstrate expertise in optimizing complex pattern matching and partitioning problems"
          }
        },
        {
          "id": 6,
          "title": "Drill",
          "lessons": [
            {
              "title": "Comprehensive Problem Drill",
              "minRequirement": {
                "fresher": "Solve basic to medium difficulty problems across arrays, strings, and patterns",
                "sde1": "Solve medium to hard problems with optimized solutions and proper complexity analysis",
                "sde2": "Master complex algorithmic problems with optimal solutions and system design considerations"
              }
            }
          ],
          "goal": {
            "fresher": "Consolidate understanding of fundamental DSA concepts through practical problem-solving",
            "sde1": "Master implementation of efficient solutions for complex algorithmic problems",
            "sde2": "Achieve expertise in designing optimal solutions for advanced algorithmic challenges"
          }
        }
      ]
    },
    {
      "id": 2,
      "title": "Module 2: Intermediate DSA & OOP",
      "highLevelGoal": {
        "sde1": "Apply strong OOP and SOLID design principles to build maintainable and modular software systems. Gain hands-on proficiency in linked lists, stacks, queues, and databases. Understand end-to-end workflows using Spring Boot and integrate algorithms effectively in real-world system design scenarios.",
        "sde2": "Demonstrate architectural thinking by applying design principles to build scalable and efficient systems. Optimize data structure implementations and system workflows. Exhibit readiness to handle complex backend logic, integrate databases seamlessly, and reason about software scalability."
      },
      "chapters": [
        {
          "id": 1,
          "title": "Chapter 1: Mastering Linked Lists",
          "lessons": [
            {
              "title": "Dynamic Arrays vs Linked Lists",
              "minRequirement": {
                "fresher": "Implement basic linked list operations and understand differences from arrays",
                "sde1": "Master advanced linked list techniques including two-pointer algorithms",
                "sde2": "Design optimal solutions for complex linked list problems and system implementations"
              }
            },
            {
              "title": "Linked List Parts 1 & 2",
              "minRequirement": {
                "fresher": "Implement fundamental linked list operations (insert, delete, traverse)",
                "sde1": "Master complex operations like merging, reversing, and cycle detection",
                "sde2": "Design advanced linked list algorithms for system-level implementations"
              }
            }
          ],
          "goal": {
            "fresher": "Build strong foundation in linked list implementations and basic operations",
            "sde1": "Master advanced linked list algorithms and optimization techniques",
            "sde2": "Design scalable linked list solutions for complex system requirements"
          }
        },
        {
          "id": 2,
          "title": "Chapter 2: Object-Oriented Programming",
          "lessons": [
            {
              "title": "OOP Principles & SOLID Design",
              "minRequirement": {
                "fresher": "Understand core OOP concepts and implement basic class hierarchies",
                "sde1": "Apply SOLID principles in designing medium-scale applications",
                "sde2": "Architect complex systems using advanced OOP patterns and principles"
              }
            },
            {
              "title": "Class and Database Schema Design",
              "minRequirement": {
                "fresher": "Design simple class structures and basic database schemas",
                "sde1": "Implement efficient database designs and optimize class relationships",
                "sde2": "Design scalable system architectures with optimal database patterns"
              }
            }
          ],
          "goal": {
            "fresher": "Strong understanding of OOP concepts and basic system design principles",
            "sde1": "Design efficient applications using advanced OOP patterns and database concepts",
            "sde2": "Architect scalable systems with optimal OOP and database design patterns"
          }
        },
        {
          "id": 3,
          "title": "Chapter 3: Databases & Techstack Workflows",
          "lessons": [
            {
              "title": "Database Management Systems (DBMS), Binary Search & Greedy Algorithms",
              "minRequirement": {
                "fresher": "Implement basic database operations and understand fundamental algorithms",
                "sde1": "Design efficient database queries and optimize algorithmic solutions",
                "sde2": "Architect complex database systems with advanced optimization strategies"
              }
            },
            {
              "title": "Technology Stack Workflow Parts 1 & 2",
              "minRequirement": {
                "fresher": "Understand basic tech stack components and simple integrations",
                "sde1": "Implement end-to-end solutions with multiple tech stack components",
                "sde2": "Design and optimize complex system architectures across tech stacks"
              }
            }
          ],
          "goal": {
            "fresher": "Master fundamental database concepts and basic tech stack integration",
            "sde1": "Design efficient database solutions and implement complex tech stack workflows",
            "sde2": "Architect scalable database systems and optimize multi-stack architectures"
          }
        },
        {
          "id": 4,
          "title": "Chapter 4: Mastering Stacks & Queues",
          "lessons": [
            {
              "title": "Stack Implementation & Applications Parts 1 & 2",
              "minRequirement": {
                "fresher": "Implement basic stack operations and solve simple stack-based problems",
                "sde1": "Master advanced stack applications including expression evaluation and monotonic stacks",
                "sde2": "Design and optimize complex stack-based algorithms for system-level applications"
              }
            },
            {
              "title": "Queue Implementation & Applications Parts 1 & 2",
              "minRequirement": {
                "fresher": "Implement basic queue operations and understand FIFO applications",
                "sde1": "Master circular queues, priority queues, and queue-based algorithms",
                "sde2": "Design scalable queue-based systems and optimize complex queue operations"
              }
            }
          ],
          "goal": {
            "fresher": "Develop strong foundation in stack and queue implementations and their basic applications",
            "sde1": "Master advanced stack and queue patterns for solving complex algorithmic problems",
            "sde2": "Design and optimize system-level solutions using advanced stack and queue architectures"
          }
        },
        {
          "id": 5,
          "title": "Chapter 5: Math Tricks",
          "lessons": [
            {
              "title": "Mathematical Techniques & Prime Number Algorithms",
              "minRequirement": {
                "fresher": "Implement basic prime number checks and solve simple mathematical problems",
                "sde1": "Master efficient prime number algorithms and advanced mathematical computations",
                "sde2": "Optimize mathematical algorithms for large-scale computations and system design"
              }
            }
          ], 
          "goal": {
            "fresher": "Build strong foundation in mathematical problem-solving techniques",
            "sde1": "Master advanced mathematical algorithms and optimization techniques",
            "sde2": "Design scalable solutions for complex mathematical computations in system design"
          }
        },
        {
          "id": 6,
          "title": "End Game",
          "lessons": [
            {
              "title": "Resume Optimization Techniques Parts 1 & 2",
              "minRequirement": {
                "fresher": "Create an effective technical resume highlighting core skills and projects",
                "sde1": "Develop comprehensive resume showcasing technical expertise and system design experience",
                "sde2": "Craft leadership-focused resume emphasizing architectural contributions and team impact"
              }
            },
            {
              "title": "Machine Coding Training",
              "minRequirement": {
                "fresher": "Implement basic software design patterns and clean code practices",
                "sde1": "Design and implement scalable software systems using advanced design patterns",
                "sde2": "Architect complex systems with emphasis on scalability and maintainability"
              }
            }
          ],
          "goal": {
            "fresher": "Prepare for technical interviews with focus on coding fundamentals",
            "sde1": "Master system design principles and advanced coding patterns",
            "sde2": "Demonstrate architectural expertise and leadership in technical discussions"
          }
        }
      ]
    },
    {
      "id": 3,
      "title": "Module 3: Advanced Algorithms",
      "highLevelGoal": {
        "sde1": "Achieve confidence in solving medium to hard-level algorithmic problems using recursion, dynamic programming, and tree-based approaches. Learn to identify overlapping subproblems, apply memoization, and implement efficient DP and graph solutions.",
        "sde2": "Master advanced algorithm design, including complex dynamic programming, graph theory, and tree algorithms. Demonstrate strong analytical reasoning, implement optimized solutions, and build algorithmic intuition required for designing scalable and efficient backend systems."
      },
      "chapters": [
        {
          "id": 1,
          "title": "Recursion & Combinatorics",
          "lessons": [
            {
              "title": "Mastering Recursion Parts 1 & 2 (Basic Tree Problems)",
              "minRequirement": {
                "fresher": "Demonstrate confidence in recursive problem-solving approaches",
                "sde1": "Demonstrate confidence in recursive problem-solving approaches",
                "sde2": "Demonstrate confidence in recursive problem-solving approaches"
              }
            },
            {
              "title": "Permutations and Combinations",
              "minRequirement": {
                "fresher": "Generate all combinations efficiently using recursion",
                "sde1": "Generate all combinations efficiently using recursion",
                "sde2": "Generate all combinations efficiently using recursion"
              }
            }
          ]
        },
        {
          "id": 2,
          "title": "Dynamic Programming & Trees",
          "lessons": [
            {
              "title": "Introduction to Dynamic Programming",
              "minRequirement": {
                "fresher": "Solve basic dynamic programming problems independently",
                "sde1": "Solve basic dynamic programming problems independently",
                "sde2": "Solve basic dynamic programming problems independently"
              }
            },
            {
              "title": "Binary Search Tree (Lowest Common Ancestor) & Advanced Tree Problems",
              "minRequirement": {
                "fresher": "Master complex tree problem-solving techniques including BST operations",
                "sde1": "Master complex tree problem-solving techniques including BST operations",
                "sde2": "Master complex tree problem-solving techniques including BST operations"
              }
            },
            {
              "title": "Segment Trees",
              "minRequirement": {
                "fresher": "Understand and implement segment trees for range query problems",
                "sde1": "Understand and implement segment trees for range query problems",
                "sde2": "Understand and implement segment trees for range query problems"
              }
            }
          ]
        },
        {
          "id": 3,
          "title": "Advanced Data Structures",
          "lessons": [
            {
              "title": "Trie Data Structures"
            },
            {
              "title": "Heap Implementation & Applications Parts 1 & 2"
            }
          ]
        },
        {
          "id": 4,
          "title": "Advanced Dynamic Programming",
          "lessons": [
            {
              "title": "Comprehensive Dynamic Programming (4-part series)"
            }
          ]
        },
        {
          "id": 5,
          "title": "Graph Algorithms",
          "lessons": [
            {
              "title": "Graph Theory & Algorithms"
            }
          ]
        },
        {
          "id": 6,
          "title": "Practice & Reinforcement",
          "lessons": [
            {
              "title": "Comprehensive Problem Drill"
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "title": "Module 4: Design Patterns & System Architecture",
      "highLevelGoal": {
        "sde1": "Apply design patterns and architectural concepts to create clean, modular, and production-grade systems. Build a solid understanding of Spring Boot components, dependency injection, and modern backend workflows. Gain exposure to real-world case studies like IRCTC and payment systems.",
        "sde2": "Design, optimize, and evaluate complex system architectures. Apply creational, structural, and behavioral design patterns effectively in scalable systems. Gain deep understanding of concurrency, caching, and microservice design with Dockerization and high-level design principles."
      },
      "chapters": [
        {
          "id": 1,
          "title": "Foundational Design Patterns",
          "lessons": [
            {
              "title": "Creational Design Patterns"
            },
            {
              "title": "Structural Design Patterns"
            }
          ]
        },
        {
          "id": 2,
          "title": "Behavioral Patterns",
          "lessons": [
            {
              "title": "Behavioral Design Patterns"
            },
            {
              "title": "Factory Design Pattern (Real-world Implementation)"
            }
          ]
        },
        {
          "id": 3,
          "title": "Advanced Java Concepts",
          "lessons": [
            {
              "title": "Advanced Concurrency & Multi-threading"
            },
            {
              "title": "Advanced Concurrency & Reflection API"
            }
          ]
        },
        {
          "id": 4,
          "title": "High-Level Design Fundamentals",
          "lessons": [
            {
              "title": "High-Level Design Principles & Consistent Hashing"
            },
            {
              "title": "Caching Part 1"
            }
          ]
        },
        {
          "id": 5,
          "title": "Modern Architecture",
          "lessons": [
            {
              "title": "Microservices Architecture & Containerization"
            },
            {
              "title": "Spring Boot Essentials (Controllers, Services, Dependency Injection, Error Handling, Models, Entities, Repositories, Dockerization)"
            }
          ]
        },
        {
          "id": 6,
          "title": "System Design Case Studies",
          "lessons": [
            {
              "title": "Railway Reservation System Design (IRCTC Case Study)"
            },
            {
              "title": "Payment Gateway System Design"
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "title": "Module 5: Distributed Systems & Scale",
      "highLevelGoal": {
        "sde1": "Understand distributed system fundamentals including replication, consistency, and basic caching. Develop the ability to design scalable, fault-tolerant systems and reason about database trade-offs.",
        "sde2": "Master distributed systems and scaling strategies. Design large-scale architectures leveraging caching layers, replication, event queues, and distributed storage systems. Demonstrate system-level thinking by optimizing for fault tolerance, availability, and latency across services."
      },
      "chapters": [
        {
          "id": 1,
          "title": "Distributed Systems Fundamentals",
          "lessons": [
            {
              "title": "Caching Part 2"
            },
            {
              "title": "CAP Theorem , Master Slave and Replication Master-Slave"
            }
          ]
        },
        {
          "id": 2,
          "title": "Data Storage At Scale",
          "lessons": [
            {
              "title": "SQL vs NoSQL Databases"
            },
            {
              "title": "Mastering NoSQL Databases)"
            }
          ]
        },
        {
          "id": 3,
          "title": "Multi-Region & Multi-Master Systems",
          "lessons": [
            {
              "title": "Case Study 1 - Multi Master"
            }
          ]
        },
         {
          "id": 4,
          "title": "Zookeeper & Kafka",
          "lessons": [
            {
              "title": "Case Study 2 - Zookeeper & Kafka"
            },
          ]
        },
         {
          "id": 5,
          "title": "Elastic Search & Real-Time Systems",
          "lessons": [
            {
              "title": "Case Study 3 - Elastic Search "
            },
          ]
        },
        {
          "id": 6,
          "title": "Geospatial Systems Design",
          "lessons": [
            {
              "title": "S3 + Quad Trees (nearest neighbours)"
            },
            {
              "title": "Hotstar Case Study"
            }
          ]
        },
      ]
    }
  ]
};

const BONUS_DATA = 
{
  "bonusModules": [
    {
      "id": 1,
      "title": "Bonus",
      "chapters": [
        {
          "id": 1,
          "title": "Core Concepts",
          "lessons": [
            {
              "title": "Multi-threading & API Design Principles",
              "minRequirement": {
                "fresher": "Understand fundamental multi-threading concepts including concurrency, synchronization, and basic API design principles",
                "sde1": "Understand fundamental multi-threading concepts including concurrency, synchronization, and basic API design principles",
                "sde2": "Understand fundamental multi-threading concepts including concurrency, synchronization, and basic API design principles"
              }
            },
            {
              "title": "Basic Recursion Permutation Techniques & Introduction to Dynamic Programming",
              "minRequirement": {
                "fresher": "Master basic recursion patterns, permutation generation techniques, and solve introductory dynamic programming problems confidently",
                "sde1": "Master basic recursion patterns, permutation generation techniques, and solve introductory dynamic programming problems confidently",
                "sde2": "Master basic recursion patterns, permutation generation techniques, and solve introductory dynamic programming problems confidently"
              }
            }
          ],
          "goal": {
            "fresher": "Develop proficiency in multi-threading fundamentals and recursive problem-solving techniques",
            "sde1": "Develop proficiency in multi-threading fundamentals and recursive problem-solving techniques",
            "sde2": "Develop proficiency in multi-threading fundamentals and recursive problem-solving techniques"
          }
        }
      ]
    },
    {
      "id": 2,
      "title": "Bonus",
      "chapters": [
        {
          "id": 1,
          "title": "Distributed Systems Fundamentals",
          "lessons": [
            {
              "title": "Caching Part 2"
            },
            {
              "title": "CAP Theorem , Master Slave and Replication Master-Slave"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "Bonus",
      "chapters": [
        {
          "id": 1,
          "title": "Product Management for Engineers",
          "lessons": [
            {
              "title": "Product Management for Software Engineers (Discovery, Stakeholder Management & Leadership)",
              "minRequirement": {
                "fresher": "Understand fundamental product management concepts including product discovery, user research, and basic stakeholder communication",
                "sde1": "Master product management skills including roadmap planning, effective stakeholder communication, and cross-functional collaboration",
                "sde2": "Demonstrate expert-level product leadership, strategic thinking, stakeholder influence, and executive-level product decision-making"
              }
            }
          ],
          "goal": {
            "fresher": "Build foundational understanding of product management principles and stakeholder engagement",
            "sde1": "Master product management competencies and stakeholder management techniques",
            "sde2": "Achieve expert-level product leadership and strategic stakeholder management capabilities"
          }
        }
      ]
    }
  ]
};
