package br.com.photoshooter.models.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;
import org.hibernate.validator.constraints.Length;

public record PessoaDto(

        String id,

        @NotEmpty
        String nome,

        @NotEmpty
        String sobrenome,

        @NotEmpty
        @Length(min = 11, max = 11)
        String cpf,

        @Positive
        Integer idade,

        @Email
        @NotEmpty
        String email,

        @NotEmpty
        String telefone

) {
}
