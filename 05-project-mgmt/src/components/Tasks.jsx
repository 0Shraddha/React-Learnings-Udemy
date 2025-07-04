import NewTask from "./NewTask";

export default function Tasks(){
    return (
        <section>
            <h2 className="tetx-2l font-bold text-stone-600 mb-2">Tasks</h2>
            <NewTask />
            <p className="text-stone-700 my-4">This project doesnt have a task</p>
            <ul></ul>
        </section>
    )
}