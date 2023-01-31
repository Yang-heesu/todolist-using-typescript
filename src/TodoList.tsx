import React, { useState } from "react";

import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [itemData, setItemData] = useState([
    {
      id: 1,
      itemText: '할일 1',
      itemCompleted: false,
    },
    {
      id: 2,
      itemText: '할일 2',
      itemCompleted: false,
    },
    {
      id: 3,
      itemText: '완료한일 1',
      itemCompleted: true,
    }
  ]);

  const handleClickTodoListItemCheckBox = (id: number) => {
    setItemData(itemData.map(item => 
      item.id === id ? {...item, itemCompleted: !item.itemCompleted} : item
    ));
  }
  
  return (
    <div>
      {itemData.map(item => 
        <TodoListItem 
          id={item.id}
          itemText = {item.itemText}
          itemCompleted={item.itemCompleted}
          onClickTodoListItemCheckBox={handleClickTodoListItemCheckBox}
        />
      )}
    </div>
  );
}

export default TodoList;