import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ListaPessoas = () => {
    const [pessoas, setPessoas] = useState([]);

    const fetchPessoas = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/v1/pessoas`);
            setPessoas(response.data);
        } catch (error) {
            console.error('Erro ao buscar pessoas:', error);
            alert('Erro ao carregar a lista de pessoas');
        }
    };

    const handleDelete = async (id) => {
        const confirmar = window.confirm('Tem certeza que deseja remover esta pessoa?');
        if (!confirmar) return;

        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/v1/pessoas/${id}`);
            alert('Pessoa removida com sucesso!');
            fetchPessoas();
        } catch (error) {
            console.error('Erro ao remover pessoa:', error);
            alert('Erro ao remover pessoa');
        }
    };

    useEffect(() => {
        fetchPessoas();
    }, []);

    return (
        <div className="container mt-5">
            <h2>Pessoas Cadastradas</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>CPF</th>
                        <th>Idade</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pessoas.length > 0 ? (
                        pessoas.map((pessoa, index) => (
                            <tr key={index}>
                                <td>{pessoa.nome}</td>
                                <td>{pessoa.sobrenome}</td>
                                <td>{pessoa.cpf}</td>
                                <td>{pessoa.idade}</td>
                                <td>{pessoa.email}</td>
                                <td>{pessoa.telefone}</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(pessoa.id)}
                                        title="Remover"
                                    >
                                        Remover
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">Sem registros</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListaPessoas;
