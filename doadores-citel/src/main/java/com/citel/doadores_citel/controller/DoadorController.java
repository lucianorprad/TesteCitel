package com.citel.doadores_citel.controller;


import com.citel.doadores_citel.model.Doador;
import com.citel.doadores_citel.repository.DoadorRepository;
import com.citel.doadores_citel.service.DoadorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/doadores")
@CrossOrigin(origins = "http://localhost:4200") //

public class DoadorController {

    @Autowired
    private DoadorRepository doadorRepository;

    @Autowired
    private DoadorServices doadorServices;



    @PostMapping

    public List<Doador> CadastrarDoador(@RequestBody List<Doador> doadores)
    {
        return doadorRepository.saveAll(doadores);
    }


    @GetMapping("/porestado")
    public Map<String,Integer> getDoadoresPorEstado()
    {
        return doadorServices.quantidadeDoadoresPorEstado();
    }


    @GetMapping("/imcFaixa")
    public Map<String,Double> getImcPorFaixa()
    {
        return doadorServices.imcMedioPorIdade();
    }

    @GetMapping("/perobesos")

    public Map<String,Double> getPerObesosPorSexo()
    {
        return doadorServices.percentualObsesosPorSexo();
    }


    @GetMapping("/idadetiposang")

    public Map<String,Integer> getMediaIdadeTipoSanguineo()
    {
        return doadorServices.mediaIdadeTipoSanguineo();
    }


    @GetMapping("/doadoresPorTipoSanguineo")

    public Map<String,Integer> getDoadoresPorTipoSanguineo()
    {
        return doadorServices.qtdPossiveisDoadoresPorTipo();
    }


}
