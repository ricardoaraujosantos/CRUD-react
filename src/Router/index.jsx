import { Routes, Route } from "react-router-dom";
import DeleteUser from "../Pages/DeleteUser";
import EditUser from "../Pages/EditUser";
import PostUser from "../Pages/PostUser";
import ViewUsers from "../Pages/ViewUsers";

const Router = () => {
    return(
        <Routes>  
            <Route path="/" element={ <ViewUsers/> } />
            <Route path="/listar/usuario/:id" element={ <DeleteUser/> } />
            <Route path="/adicionar/usuario" element={ <PostUser/> } />
            <Route path="/editar/usuario/:id" element={ <EditUser/> } />
        </Routes>
    )
}

export default Router;