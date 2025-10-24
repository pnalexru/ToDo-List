import { ToDo } from "../../models/todo-item"
import classes from './ListItem.module.scss'
import { ListItemLink } from "./ListItem.styled"
export const ListItem = ({ todo }: { todo: ToDo }) => {
  return (
    <ListItemLink
      // className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}

      target="_blank"
      to={`/list/${todo.id}`} rel="noreferrer"
      $isDone={todo.isDone}
    >{todo.text}</ListItemLink>
  )
}