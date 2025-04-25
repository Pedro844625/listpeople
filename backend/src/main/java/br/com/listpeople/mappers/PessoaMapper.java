package br.com.listpeople.mappers;

import br.com.listpeople.models.dtos.PessoaDto;
import br.com.listpeople.models.entities.PessoaEntity;
import lombok.experimental.UtilityClass;

@UtilityClass
public class PessoaMapper {

    public static PessoaEntity converterDtoParaEntidade(PessoaDto dto) {
        return PessoaEntity.builder()
                .nome(dto.nome())
                .sobrenome(dto.sobrenome())
                .cpf(dto.cpf())
                .idade(dto.idade())
                .email(dto.email())
                .telefone(dto.telefone())
                .build();
    }

    public static PessoaDto converterEntidadeParaDto(PessoaEntity entidade) {
        return new PessoaDto(
                entidade.getId(),
                entidade.getNome(),
                entidade.getSobrenome(),
                entidade.getCpf(), entidade.getIdade(),
                entidade.getEmail(),
                entidade.getTelefone()
        );
    }

}
