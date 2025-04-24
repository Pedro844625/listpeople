package br.com.photoshooter.services;

import br.com.photoshooter.mappers.PessoaMapper;
import br.com.photoshooter.models.dtos.PessoaDto;
import br.com.photoshooter.repositories.PessoaRepository;
import br.com.photoshooter.utils.PessoaUtils;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PessoaService {

    private final PessoaRepository repository;

    public List<PessoaDto> listarPessoas() {
        final var pessoasDoBanco = repository.findAll();
        return PessoaUtils.converterListaEntidadeParaListaDto(pessoasDoBanco);
    }

    @Transactional
    public void criarPessoa(PessoaDto requisicao) {
        PessoaUtils.validarPessoaComAsMesmasCredenciais(repository.findByCpfOrEmailOrTelefone(requisicao.cpf(), requisicao.email(), requisicao.telefone()));
        final var entidade = PessoaMapper.converterDtoParaEntidade(requisicao);
        repository.save(entidade);
    }

    @Transactional
    public void removerPessoa(String id) {
        repository.deleteById(id);
    }

}
