import React from "react";
import "./Items.css";
import Checkbox from "../elements/Checkbox";

 function Items(props) {
      const { todos } = props;
      const todoItem=todos.map((todo,index)=>{

        return (
          <div key={todo.id} className="todoComponent d-flex max-auto w-75">
            <div className="todoCompLeft">
              <label>
                <Checkbox
                  className="checkbox"
                  checked={todo.isCompleted}
                  size={20}
                  chekedColor="#2e3238"
                  unchekedColor="#343a40"
                  hoverColor="#343a40"
                  onChange={(event) => props.handleOnChange(event, index)}
                />
              </label>
            </div>
            <div className="todoCompRight d-flex justify-content-between flex-grow-1 px-3">
              <div className="TodoTitle">
                <span
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                  }}
                >
                  {todo.title}
                </span>
              </div>
              <div>
                <i
                  onClick={() => props.handleRemove(index)}
                  className="fa fa-trash mr-3"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        );
      });


  return (
    <div className="todoListItems w-full">
      <hr />
     
      {todos.length > 0 && todoItem}
    </div>
  );
}
export default Items;
