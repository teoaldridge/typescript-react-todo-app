import { useRef } from "react";

import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            //throw error
            return;
        }
        
        props.onAddTodo(enteredText);
    };

    return <form onSubmit={submitHandler} className={classes.form}>
        <label>Todo text</label>
        <input type='text' id='text' ref={todoTextInputRef} />
        <button>Add Todo</button>
    </form>
};

export default NewTodo;

//the type React.FormEvent is a special type, provided by the React package evn, 
//It is an event object type which we will automatically get when listening to a form submission

//HTMLInputElement is an interface, which is a built-in type. 
//All those DOM elements have a built-in type, 
//and for input it is HTMLInputElement, for button- the HTMLBUttonElement, and so on. 
//We assign an initial value of null in HTMLInputElment because useRef requires to always have an assigned initial value. 

//todoTextInputRef.current?.value; - the ? here was added automatically in react because todoTextInputRef 
//has not assigned a value yet (it is null).
//This ? signals that React will try to access value and if that succeeds, the enteres value will be stored in enteredText,
// but if that fails, null will be stored in enteredText.
//If you know that the connection will be successfully established, you can replace the ? with ! - todoTextInputRef.current!.value;