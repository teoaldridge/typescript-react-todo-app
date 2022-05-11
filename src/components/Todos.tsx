import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id:string) => void}> = (
    props
) => {
    return (
        <ul className={classes.todos}>
           {props.items.map((item) => (
                <TodoItem 
                    key={item.id} 
                    text={item.text} 
                    onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} 
                />
            ))}
        </ul>
    );
}

export default Todos;

//FC is a typed-in definition in the react package
//What Reacy.FC does is that it defines that
//Todos is a function that acts as a functional component. 

//React.FC<{}> -here you use generic types 
//and explicitly set the concrete type that should be used for this usage of this generic FC type. 

//Here I am saying 'This FC type is generic and the concrete value
//I am plugging in now is my own props object where I describe my own props for this specific functional component.'
//And it is generic because different fucntional components have different props definitions. 

//const Todos: React.FC<{items: Todo[]}> -Basically here you define that:
//Todos is of type FC (functional component)
//and it receives props, called items, whose type is an array of strings.

//here we make it clear that items will be an array of Todos

//onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} 
//.bind is a default method in JavaScript which allows us to pre-configure a function for future execution
//null here is what the 'this' keyword will refer to when onremoveTodo is called. Because we don't care about that in this case, we set it to null. 
//item.id here is the first argument onRemoveTodo will receive later.