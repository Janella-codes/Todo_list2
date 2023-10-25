import { PrismaClient } from '@prisma/client';

export default async function TodosPage() {
    const prisma = new PrismaClient();
    const todos = await prisma.todo.findMany();

    const addTodo = async (formData: FormData) => {
      "use server"

      const name = formData.get('name');
      prisma.todo.create({
        data: {
          name: name as string,
        },
      });
    };
      

    return (
        <main className='flex min-h-screen flex-col items-center w-full p-24'>
            <h1 className='text-4xl font-bold'>Todos</h1>

            <form action={addTodo} className='flex flex-col w-[300px] m-16'>
                <input 
                  type="text"
                  name="name"
                  className='px-4 py-2 mb-3'
                  placeholder='Todo name'
                  required 
                />
                <button className='px-4 py-2 bg-blue-500 text-white rounded-md'>
                    Create
                </button>
            </form>

            <ul className='list-disc'>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type='checkbox' />
                        <p>{todo.name}</p>
                    </li>
                ))}
                </ul>
        </main>
    );

}
