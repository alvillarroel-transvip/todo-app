
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { TodoButton } from "../components/TodoButton";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { useSelector } from "react-redux";


export const Navigation = () => {
    
    const {tasks} = useSelector(state => state.task);

    return (
        <BrowserRouter>
         <Routes>
             {
                 tasks.length > 0 
                 ? <Route path="home" element={<TodoList/>} />
                 : <Route path="home" element={<TodoButton/>} />
             }
          <Route path="form" element={<TodoForm />} />
          <Route path="/*" element={ <Navigate to="/home" replace/> } />
         </Routes>
        </BrowserRouter>
    )
}
