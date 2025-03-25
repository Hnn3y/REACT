const todos = [
    {task: "now the yard", id: crypto.randomUUID()},
    {task: "Work on Odin projects", id: crypto.randomUUID() },
    {task: "feed your pet", id: crypto.randomUUID},
]; 

function TodoList() {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}> {todo.task}</li>
            ))}
        </ul> 
        
    );
} 

export default TodoList;