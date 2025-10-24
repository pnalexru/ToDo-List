import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components'

// <a
//       className={ `${classes.link} ${todo.isDone ? classes.done : classes.notDone}` }
// target = "_blank"
// href = {`/list/${todo.id}`} rel = "noreferrer"
//   > { todo.text } </a>


export const ListItemLink = styled(Link) <{ $isDone: boolean }>`
  text-decoration: none;
  padding: 10px;
  ${(p) =>
    p.$isDone
      ? css`
          color: green;
        `
      : css`
          color: red;
        `}
`