import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";

const PostUser = () => {

    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        nome: '',
        endereco: '',
        email: '',
        senha:'',
    })

    const { nome, endereco, email, senha } = usuario;

    const changeOnFild = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
        console.log(usuario)
    }

    const submit = async (e) => {
        e.preventDefault()
        await api.post('/user/add', usuario)
        navigate('/')
    }


    return (
        <div className="container my-4 p-4 border border-dark">
             <h4 className="text-center mb-4">Cadastrar usuario</h4>

            <form onSubmit={(e) => submit(e)}>
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
                    <label htmlFor="inputSenha" className="form-label">Senha</label>
                    <input
                        className="form-control"
                        id="senha_usuario"
                        type='password'
                        name="senha"
                        value={senha}
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

                <button className="btn btn-primary mx-2" type="submit">Enviar</button>
                <Link className="btn btn-danger" to='/'>Cancelar</Link>

            </form>
        </div>

    )
}

export default PostUser;