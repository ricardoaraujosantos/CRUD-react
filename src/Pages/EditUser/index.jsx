import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../../api";

const EditUser = () => {

    const { id } = useParams();

    const navegate = useNavigate()

    const [usuario, setUsuario] = useState({
        nome: '',
        endereco: '',
        email: '',
    })

    const { nome, email, endereco } = usuario;

    const changeOnFild = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        const loadUser = async () => {
            const response = await api.get(`/listar/user/${id}`)
            const data = response.data
            setUsuario(data)
        }
        loadUser()
    }, [])

    const updateUsuario = async (e) => {
        e.preventDefault()
        await api.put(`/user/update/${id}`, usuario)
        navegate('/')
    }

    return (
        <div className="container my-4 p-4 border border-dark">
            <h4 className="text-center mb-4">Editar usuario</h4>

            <form onSubmit={(e) => updateUsuario(e)}>
                <div className="mb-2">
                    <label htmlFor="inputName" className="form-label">Nome</label>
                    <input
                        className="form-control"
                        id="id_usuario"
                        type='text'
                        name="nome"
                        value={nome}
                        onChange={(e) => changeOnFild(e)}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input
                        className="form-control"
                        id="email_usuario"
                        type='email'
                        name="email"
                        value={email}
                        onChange={(e) => changeOnFild(e)}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor="inputEndereco" className="form-label">Endereço</label>
                    <input
                        className="form-control"
                        id="endereco_usuario"
                        type='text'
                        name="endereco"
                        value={endereco}
                        onChange={(e) => changeOnFild(e)}
                    />
                </div>

                <button className="btn btn-primary mx-2" type="submit">Atualizar</button>
                <Link className="btn btn-danger" to='/'>Cancelar</Link>
            </form>
        </div>
    )
}

export default EditUser;