import TaskList from '@/components/TaskList';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
     <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
     <TaskList />
    </main>

     
  );
}
