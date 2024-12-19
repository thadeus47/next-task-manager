type Props = {
    params: {
      id: string;
    };
  };

const EditTask = ({ params}: Props) => {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold mb-4">Edit Task {params.id}</h1>
            <form className="w-full max-w-md">
              <input
                type="text"
                placeholder="Task Title"
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Update Task
              </button>
            </form>
       </main>
    ) 
}

export default EditTask;