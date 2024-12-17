type Task = {
    id: number;
    title: string;
    completed: boolean;
  };

  const tasks: Task[] = [
    { id: 1, title: 'Learn Next.js', completed: false },
    { id: 2, title: 'Set up MongoDB', completed: false },
    { id: 3, title: 'Build CRUD APIs', completed: false },
  ];

  export default function TaskList() {
    return (
      <ul className="w-full max-w-md bg-white rounded-md shadow-md p-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <span className={`text-lg ${task.completed ? 'line-through' : ''}`}>
              {task.title}
            </span>
            <input type="checkbox" checked={task.completed} readOnly />
          </li>
        ))}
      </ul>
    );
  }