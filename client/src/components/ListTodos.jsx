import { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://${window.location.hostname}:5000/todos/${id}`, { method: "DELETE" });
            setTodos(todos.filter(todo => todo.todo_id !== id));
            // getTodos();
        } catch (err) {
            console.error(err.message);
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch(`http://${window.location.hostname}:5000/todos/`, { method: "GET" });
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error("Error: " + err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    // document.addEventListener("click", e => {
    //     if (e.target.matches("button")) {
    //         console.log("Clicked")
    //         // document.removeEventListener("click", this)
    //         getTodos()
    //     } 
    // }, {once: true})

    // document.addEventListener('LOL', function () {
    //     getTodos()
    //     console.log("Just ran LOL")
    // });

    return (
        <Fragment>
            <table className="table table-dark table-striped mt-2">
                <thead>
                    <tr>
                        {/* <th scope="col">Id</th> */}
                        <th scope="col">Description</th>
                        <th scope="col">State</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr> */}
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            {/* <td>{todo.todo_id}</td> */}
                            <td>{todo.description}</td>
                            <td></td>
                            <td><EditTodo todo={todo} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>

    );
};

export default ListTodos;