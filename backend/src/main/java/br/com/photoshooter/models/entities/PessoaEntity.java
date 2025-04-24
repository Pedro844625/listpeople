package br.com.photoshooter.models.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "pessoa")
public class PessoaEntity {

    @Id
    @Column(name = "id", length = 38, nullable = false)
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    //----- informações pessoais -----

    @Column(name = "nome", length = 50, nullable = false)
    private String nome;

    @Column(name = "sobrenome", length = 50, nullable = false)
    private String sobrenome;

    @Column(name = "cpf", length = 11, nullable = false, unique = true)
    private String cpf;

    @Column(name = "idade", nullable = false)
    private Integer idade;

    //----- informações de contato -----

    @Column(name = "email", length = 200, nullable = false, unique = true)
    private String email;

    @Column(name = "telefone", length = 11, nullable = false, unique = true)
    private String telefone;

}