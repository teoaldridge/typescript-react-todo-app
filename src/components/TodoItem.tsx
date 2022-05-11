import React from 'react';

import classes from './TodoItem.module.css';

const TodoItem: React.FC <{ text: string; onRemoveTodo: (event:React.MouseEvent) => void }> = (props) => {
    return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
};

export default TodoItem;

//(event:React.MouseEvent) can also be omitted and this would be:
//onRemoveTodo: () => void