package br.com.listpeople.repositories;

import br.com.listpeople.models.entities.PessoaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PessoaRepository extends JpaRepository<PessoaEntity, String> {

    @Query(value = "SELECT p FROM PessoaEntity p WHERE p.cpf = ?1 OR p.email = ?2 OR p.telefone = ?3")
    Optional<PessoaEntity> findByCpfOrEmailOrTelefone(String cpf, String email, String telefone);

}
