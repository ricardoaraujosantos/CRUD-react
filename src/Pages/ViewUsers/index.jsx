import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

const ViewUsers = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const loadUsuarios = async () => {
            const response = await api.get('/list/user')
            const data = response.data
            setUsuarios(data)
            
        }
        loadUsuarios();
    }, [])

    return (
        <div className="container">
            <Link className="btn btn-primary my-4" to='/adicionar/usuario'>Cadastrar um Novo Usuario</Link>
            <h4 className="text-center mb-4">Lista de usuarios</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                        <tr key={u.id_usuario}>
                            <th scope="row">{u.id_usuario}</th>
                            <td>{u.nome}</td>
                            <td>{u.endereco}</td>
                            <td>{u.email}</td>
                            <td><Link className="btn btn-success" to={`/editar/usuario/${u.id_usuario}`}>Editar</Link></td>
                            <td><Link className="btn btn-danger" to={`/listar/usuario/${u.id_usuario}`}>Remover</Link></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}

export default ViewUsers;