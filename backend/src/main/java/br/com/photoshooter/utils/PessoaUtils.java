package br.com.listpeople.utils;

import br.com.listpeople.mappers.PessoaMapper;
import br.com.listpeople.models.dtos.PessoaDto;
import br.com.listpeople.models.entities.PessoaEntity;
import jakarta.validation.ValidationException;
import lombok.experimental.UtilityClass;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@UtilityClass
public class PessoaUtils {

    public static List<PessoaDto> converterListaEntidadeParaListaDto(List<PessoaEntity> listaEntidade) {
        var pessoasDto = new ArrayList<PessoaDto>();

        listaEntidade.forEach(pessoaBanco -> {
            pessoasDto.add(PessoaMapper.converterEntidadeParaDto(pessoaBanco));
        });

        return pessoasDto;
    }

    public static void validarPessoaComAsMesmasCredenciais(Optional<PessoaEntity> pessoasComAsMesmasCredenciais) {
        if (pessoasComAsMesmasCredenciais.isPresent()) {
            throw new ValidationException("Erro: As informações pessoais já foram cadastradas em outra pessoa (cpf, email, telefone)");
        }
    }

}
