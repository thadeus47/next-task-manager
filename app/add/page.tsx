
const AddTask = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-03xl font-bold mb-4">Add New Task</h1>
        <form action="" className="w-full max-w-md">
        <input
          type="text"
          placeholder="Task Title"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
        </form>
    </main>
  )
}

export default AddTask