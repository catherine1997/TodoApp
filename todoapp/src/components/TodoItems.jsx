import styles from "./todoitem.module.css";


export default function TodoItem({index, todos, setTodos}){

    const handleDelete =(index) => {
        setTodos(todos.filter((todo) => todo !== index))
      
    }

    const handleClick = (name) => {
       
       setTodos(todos.map((todo)=>todo.name === name ? {...todo, done:!todo.done}:todo))
    }

    const className = index.done ? styles.completed : "";
    return(
        
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={className} onClick={()=>handleClick(index.name)}>
                {index.name}
                </span>
            <span>
                <button onClick={()=>handleDelete(index)} className={styles.deleteButton}>Delete</button>
            </span>
            </div>
            
            <hr className={styles.line} />
        </div>
    )
}