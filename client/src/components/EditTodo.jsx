import { Fragment, useState } from 'react'

const EditTodo = ({todo}) => {

    const [description, newDescription] = useState(todo.description)

    const editDescription = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://${window.location.hostname}:5000/todos/${todo.todo_id}`, {
                method: "PUT", 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify(body)
            });
            // window.location = "/crud";
            // window.location.reload()
            document.location.reload()
            // document.dispatchEvent(new Event('LOL'))

        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>Edit</button>

            <div className="modal fade" id={`id${todo.todo_id}`} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit to-do list item #{todo.todo_id}</h1>
                            <button type="button" className="btn-close bg-secondary" data-bs-dismiss="modal" aria-label="Close" onClick={() => newDescription(todo.description)}></button>
                        </div>
                        <div className="modal-body">
                        <input type="text" className="form-control text-bg-secondary" value={description} onChange={e => newDescription(e.target.value)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => newDescription(todo.description)}>Cancel</button>
                            <button type="button" className="btn btn-warning" data-bs-toggle="modal" onClick={e => editDescription(e)}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>



        </Fragment>
    )
}

export default EditTodo