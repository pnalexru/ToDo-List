import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'


const rootReducer = combineReducers({
  todoList: todoReducer,
})
export type RootState = ReturnType<typeof rootReducer>



export const store = configureStore({
  reducer: {
    todoList: todoReducer,
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type AppState = ReturnType<typeof store.getState>
// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch