//the subfolder models in my src folder is where I describe my data models-
// the types of data I am working with in this project. 

//here I describe how a Todo looks like, I create my Todo type.
//you can do this with type, interface or class

class Todo {
    id: string;
    text: string;

    constructor(todoText: string){
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;