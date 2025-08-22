const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile Q1 sales data into an Excel sheet.",
        date: "2025-08-25",
        category: "Reporting",
        status: {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Client Follow-up",
        description: "Call pending clients for feedback.",
        date: "2025-08-28",
        category: "Communication",
        status: {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      },
      {
        title: "Inventory Check",
        description: "Cross-check warehouse stock levels.",
        date: "2025-09-01",
        category: "Operations",
        status: {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Website Testing",
        description: "Test new landing page for bugs and responsiveness.",
        date: "2025-08-24",
        category: "Development",
        status: {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Write Blog Draft",
        description: "Draft blog article for upcoming product launch.",
        date: "2025-08-27",
        category: "Content",
        status: {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      },
      {
        title: "Fix Login Bug",
        description: "Resolve login API issue reported by QA.",
        date: "2025-08-30",
        category: "Development",
        status: {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Data Cleanup",
        description: "Remove duplicate entries from customer database.",
        date: "2025-08-23",
        category: "Database",
        status: {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Team Presentation",
        description: "Prepare weekly project update presentation.",
        date: "2025-08-29",
        category: "Management",
        status: {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Update API Docs",
        description: "Update internal API documentation for devs.",
        date: "2025-09-02",
        category: "Documentation",
        status: {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Security Audit",
        description: "Check server logs for unusual activity.",
        date: "2025-09-05",
        category: "Security",
        status: {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Poster",
        description: "Create poster for marketing campaign.",
        date: "2025-08-26",
        category: "Design",
        status: {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Video Editing",
        description: "Edit product launch video highlights.",
        date: "2025-08-30",
        category: "Media",
        status: {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Create Social Posts",
        description: "Draft social media posts for LinkedIn campaign.",
        date: "2025-09-03",
        category: "Marketing",
        status: {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Payroll Verification",
        description: "Check and verify August payroll records.",
        date: "2025-08-22",
        category: "Finance",
        status: {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      },
      {
        title: "Vendor Meeting",
        description: "Meet with vendor for contract negotiation.",
        date: "2025-08-27",
        category: "Business",
        status: {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Policy Review",
        description: "Review company HR policies for updates.",
        date: "2025-09-01",
        category: "HR",
        status: {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      },
      {
        title: "Budget Forecast",
        description: "Prepare financial forecast for Q4.",
        date: "2025-09-04",
        category: "Finance",
        status: {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
};
