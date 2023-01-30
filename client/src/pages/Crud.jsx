import { Fragment } from "react";

import InputTodo from '../components/InputTodo';
import ListTodos from '../components/ListTodos';

const Crud = () => {

    return (
        <Fragment>
        <div className='container'>
            <InputTodo />
            <ListTodos />
        </div>
        </Fragment>
    );
};

export default Crud;