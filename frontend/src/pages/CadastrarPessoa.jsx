import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

const CadastrarPessoa = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        idade: '',
        email: '',
        telefone: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/v1/pessoas`, formData)
            .then(() => {
                alert('Cadastro realizado com sucesso');
                navigate('/');
            })
            .catch(() => {
                alert('Erro ao realizar cadastro. Revise os dados enviados')
            });
    };

    return (
        <div className="container mt-5">
            <h2>Cadastro de Pessoa</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="sobrenome"
                        name="sobrenome"
                        value={formData.sobrenome}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="cpf" className="form-label">CPF</label>
                    <input
                        type="number"
                        className="form-control"
                        id="cpf"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="idade" className="form-label">Idade</label>
                    <input
                        type="number"
                        className="form-control"
                        id="idade"
                        name="idade"
                        value={formData.idade}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastrarPessoa;
