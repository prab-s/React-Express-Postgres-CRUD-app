import React from 'react'

function EmailForm() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control text-bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <span id="emailHelp" className="form-text text-light text-bg-dark bg-opacity-25">We'll never share your email with anyone else.</span>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control text-bg-dark" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input text-bg-dark" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" style={{"border": "1px dotted white"}}>Submit</button>
        </form>
    )
}

export default EmailForm