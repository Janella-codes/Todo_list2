import { PrismaClient } from '@prisma/client';

export default async function TodosPage() {
    const prisma = new PrismaClient();
    const todos = await prisma.todo.findMany();

    return (
        <main className='flex min-h-screen flex-col items-center w-full p-24'>
            <h1 className='text-4xl font-bold'>Todos</h1>

            <form className='flex flex-col w-[300px] m-16'>

            </form>

            <ul className='flex flex-col gap-2 w-[300px] m-16'>
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
