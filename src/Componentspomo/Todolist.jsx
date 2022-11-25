import React from 'react';
import './Todo.css';
import done from '../Assets/done.png';


class Todolist extends React.Component {
    constructor() {
        super();
        this.state = {
            tittle: "Todo App",
            todos: ["belajar"],
            todoInput: ""
        };
    }

    handleTodoInput(evt){
        // console.log(evt.target.value);
        this.setState({
            todoInput: evt.target.value,
        });
    }


    handleSave() {
        const newTodos = this.state.todos.concat(this.state.todoInput);
        this.setState({
            todos:newTodos,
            todoInput: "",
        })
    }

    handleDelete(todoDelete){
        const newTodos = this.state.todos.filter((todo) => todo !== todoDelete);
        //  console.log(newTodos);
        this.setState({
            todos:newTodos,
        })
    }

    render(){
        return <> 
                <div style={{ 
                    borderStyle: "solid",
                    width: "400px",
                    height: "390px",
                    left: "800px",
                    top: "200px",  
                    borderRadius:"30px",
                    position:"fixed",
                    borderColor:"none",
                    backdropFilter:"blur(5px)"}}>

                <h1 className="text-todolist">Todo List</h1>
                <input className='input-text' type="text" value={this.state.todoInput} 
                onChange={(evt) => this.handleTodoInput(evt)}/>
                <button className='button-save' onClick={() => this.handleSave()}>
                    <img src={done} alt="tambah" />
                </button>
                <div className='position-list'>
                {this.state.todos.map((todo, idx) => {
                    return (
                    <section>
                    <div className='position-todo' key={idx}>
                        <p className='list'>{todo}</p>
                    </div>
                        <button className='button-delete' onClick={() => this.handleDelete(todo)}>
                            Done
                        </button>
                    </section>
                    )   
                })}
                </div>
            </div>
        </>
    }
}



 
export default Todolist;