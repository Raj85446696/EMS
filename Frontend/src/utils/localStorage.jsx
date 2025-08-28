const employees = [
  {
    id: 1,
    name: "Ritu Raj Verma 1",
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
    name: "Raj Verma",
    email: "employee2@example.com",
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
          completed: true,
          failed: false,
        },
      },
      {
        title: "Client Follow-up",
        description: "Call pending clients for feedback.",
        date: "2025-08-28",
        category: "Communication",
        status: {
          active: true,
          newTask: false,
          completed: true,
          failed: true,
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
          failed: true,
        },
      },
    ],
  },

  {
    id: 3,
    name: "Prashant Kumar",
    email: "prashant@example.com",
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
          completed: true,
          failed: false,
        },
      },
      {
        title: "Client Follow-up",
        description: "Call pending clients for feedback.",
        date: "2025-08-28",
        category: "Communication",
        status: {
          active: true,
          newTask: false,
          completed: true,
          failed: true,
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

// 🔹 Function to add tasksCount to each employee
const addTasksCount = (employees) => {
  return employees.map((employee) => {
    const counts = { active: 0, newTasks: 0, completed: 0, failed: 0 };

    employee.tasks.forEach((task) => {
      if (task.status.active) counts.active++;
      if (task.status.newTask) counts.newTasks++;
      if (task.status.completed) counts.completed++;
      if (task.status.failed) counts.failed++;
    });

    return { ...employee, tasksCount: counts };
  });
};

export const setLocalStorage = () => {
  const updatedEmployees = addTasksCount(employees);
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
