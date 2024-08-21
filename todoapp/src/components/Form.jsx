import { useState } from "react";
import styles from './form.module.css';


export default function Form({todos, setTodos}){
    const [todo, setTodo] = useState({
        name:"",
        done: false
    });
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({
            name:"",
            done: false
    });
       
    }
    return(
        <div>
             <form className={styles.todoform} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                <input 
                className={styles.modernInput}
                placeholder="Enter todo item"
                type="text" 
                value={todo.name} 
                onChange={(e)=> setTodo({name:e.target.value, done: false})}
                />
                <button className={styles.modernButton} type="submit">Add</button>
                </div>
              
            </form> 
        </div>
    )
}