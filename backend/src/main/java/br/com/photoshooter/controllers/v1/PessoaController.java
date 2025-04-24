package br.com.photoshooter.controllers.v1;

import br.com.photoshooter.models.dtos.PessoaDto;
import br.com.photoshooter.services.PessoaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/pessoas")
public class PessoaController {

    private final PessoaService service;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<PessoaDto>> listarPessoas() {
        return ResponseEntity.ok(service.listarPessoas());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> criarPessoa(@RequestBody @Valid PessoaDto requisicao) {
        service.criarPessoa(requisicao);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Void> removerPessoa(@PathVariable String id) {
        service.removerPessoa(id);
        return ResponseEntity.ok().build();
    }

}
