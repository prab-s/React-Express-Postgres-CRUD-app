import { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("")

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            
            const body = {description};
            const response = await fetch(`http://${window.location.hostname}:5000/todos/`, {
                method: "POST", 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify(body)
            })
            // window.location = "/crud";
            document.location.reload()
            // document.dispatchEvent(new Event('LOL'))

        } catch (err) {
            // if err === crossOriginIsolated
            console.error("Error: " + err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-2">Todo List</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <input type="text" className="form-control text-bg-secondary" value={description} onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-success" style={{"border": "1px dotted white"}}>Add</button>
            </form>
        </Fragment>
        
    );
};

export default InputTodo;