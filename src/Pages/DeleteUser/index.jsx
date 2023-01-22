import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../../api";

const DeleteUser = () => {
    const { id } = useParams()

    const navegate = useNavigate();

    const [usuario, setUsuario] = useState({
        nome: "",
        endereco: "",
        email: "",
    })

    useEffect(() => {
        const loadUser = async () => {
            const resposta = await api.get(`/listar/user/${id}`)
            const data = resposta.data
            setUsuario(data)
        }
        loadUser();
    }, [])

    const deletarUsuario = async (id) => {
        await api.delete(`/delete/user/${id}`)
        navegate('/')
    }


    return (
        <div className="container">
            <h4 className="bg-warning text-center my-4 py-4">Deseja excluir este usuario?</h4>

            <table className="table">
                <thead>
                    <tr>
                        <th width="20%" scope="col">Id</th>
                        <th width="20%" scope="col">Nome</th>
                        <th width="20%" scope="col">Endereço</th>
                        <th width="20%" scope="col">email</th>
                        <th width="20%" scope="col">Confirma a exclusão?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.endereco}</td>
                        <td>
                            <button className="btn btn-danger mx-2" onClick={() => deletarUsuario(id)}>Excluir</button>
                            <Link className="btn btn-primary" to="/">Voltar</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DeleteUser;