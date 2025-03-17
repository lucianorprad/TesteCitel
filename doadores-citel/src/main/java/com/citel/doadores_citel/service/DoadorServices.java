package com.citel.doadores_citel.service;

import com.citel.doadores_citel.model.Doador;
import com.citel.doadores_citel.repository.DoadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class DoadorServices {


    @Autowired
    private DoadorRepository doadorRepository;


    public Map<String, Integer> quantidadeDoadoresPorEstado()
    {
        List<Doador> doadores = doadorRepository.findAll();
        Map<String, Integer> resultado = new HashMap<>();

        for (Doador doador : doadores)
        {
            String estado = doador.getEstado();
            if (!resultado.containsKey(estado))
            {
                resultado.put(estado, 1);
            }
            else
            {
                resultado.put(estado, resultado.get(estado) + 1);
            }
        }


        return resultado;

    }


    public Map<String, Double> imcMedioPorIdade()
    {
        List<Doador> doadores = doadorRepository.findAll();
        Map<String, List<Double>> imcFaixaEtaria = new HashMap<>();

        for (Doador doador : doadores)
        {
            double imc = doador.pegarImc();
            String faixaEtaria = doador.pegarFaixaEtaria();

            if (!imcFaixaEtaria.containsKey(faixaEtaria))
            {
                imcFaixaEtaria.put(faixaEtaria, new ArrayList<>());
            }
            imcFaixaEtaria.get(faixaEtaria).add(imc);
        }

        Map<String, Double> imcMedioPorFaixa = new HashMap<>();
        for (String faixa : imcFaixaEtaria.keySet())
        {
            List<Double> imcs = imcFaixaEtaria.get(faixa);
            double soma = 0;
            for (double imc : imcs)
            {
                soma += imc;
            }
            double media = imcs.isEmpty() ? 0.0 : soma / imcs.size();
            imcMedioPorFaixa.put(faixa, media);
        }

        return imcMedioPorFaixa;
    }


    public Map<String, Double> percentualObsesosPorSexo()
    {

        Map<String, Double> SexoPercentualObesidade = new HashMap<>();
        List<Doador> doadores = doadorRepository.findAll();

        int totalHomens = 0;
        int totalMulheres = 0;
        int totalHomensObesos = 0;
        int totalMulheresObesas = 0;
        double perHomensObesos;
        double perMulheresObesas;


        for (Doador doador : doadores)
        {
            String sexo = doador.getSexo();
            if (sexo.equals("Feminino") && doador.pegarImc() > 30)
            {
                totalMulheres++;
                totalMulheresObesas++;
            }

            else if (sexo.equals("Feminino"))
            {
                totalMulheres++;
            }

            else if (sexo.equals("Masculino") && doador.pegarImc() > 30)
            {
                totalHomens++;
                totalHomensObesos++;

            }

            else if (sexo.equals("Masculino"))
            {
                totalHomens++;
            }
        }


        if (totalHomens > 0)
        {
            perHomensObesos = (double) totalHomensObesos / totalHomens * 100;
            SexoPercentualObesidade.put("Homens", perHomensObesos);


        }

        if (totalMulheres > 0)
        {
            perMulheresObesas = (double) totalMulheresObesas / totalMulheres * 100;
            SexoPercentualObesidade.put("Mulheres", perMulheresObesas);
        }


        return SexoPercentualObesidade;
    }


    public Map<String, Integer> mediaIdadeTipoSanguineo()
    {
        Map<String, Integer> mediaIdadeTipoSang = new HashMap<>();
        List<Doador> doadores = doadorRepository.findAll();

        Map<String, Integer> somaIdadesTipoSang = new HashMap<>();
        Map<String, Integer> quantidadeDoadores = new HashMap<>();

        for (Doador doador : doadores)
        {
            String tipoSanguineo = doador.getTipoSanguineo();
            int idade = doador.pegarIdade();

            somaIdadesTipoSang.put(tipoSanguineo, somaIdadesTipoSang.getOrDefault(tipoSanguineo, 0) + idade);

            quantidadeDoadores.put(tipoSanguineo, quantidadeDoadores.getOrDefault(tipoSanguineo, 0) + 1);
        }

        for (String tipoSanguineo : somaIdadesTipoSang.keySet())
        {
            int somaIdade = somaIdadesTipoSang.get(tipoSanguineo);
            int quantidade = quantidadeDoadores.get(tipoSanguineo);

            int mediaIdade = somaIdade / quantidade;

            mediaIdadeTipoSang.put(tipoSanguineo, mediaIdade);
        }

        return mediaIdadeTipoSang;
    }


    public Map<String, Integer> qtdPossiveisDoadoresPorTipo()
    {
        List<Doador> doadores = doadorRepository.findAll();
        Map<String, Integer> qtdDoadores = new HashMap<>();

        for (Doador doador : doadores)
        {
            if (doador.pegarIdade() >= 16 && doador.getPeso() >= 50)
            {
                String tipo = doador.getTipoSanguineo();

                switch (tipo)
                {
                    case "O-":
                        adicionar(qtdDoadores, "O-");
                        adicionar(qtdDoadores, "O+");
                        adicionar(qtdDoadores, "A-");
                        adicionar(qtdDoadores, "A+");
                        adicionar(qtdDoadores, "B-");
                        adicionar(qtdDoadores, "B+");
                        adicionar(qtdDoadores, "AB-");
                        adicionar(qtdDoadores, "AB+");
                        break;
                    case "O+":
                        adicionar(qtdDoadores, "O+");
                        adicionar(qtdDoadores, "A+");
                        adicionar(qtdDoadores, "B+");
                        adicionar(qtdDoadores, "AB+");
                        break;
                    case "A-":
                        adicionar(qtdDoadores, "A-");
                        adicionar(qtdDoadores, "A+");
                        adicionar(qtdDoadores, "AB-");
                        adicionar(qtdDoadores, "AB+");
                        break;
                    case "A+":
                        adicionar(qtdDoadores, "A+");
                        adicionar(qtdDoadores, "AB+");
                        break;
                    case "B-":
                        adicionar(qtdDoadores, "B-");
                        adicionar(qtdDoadores, "B+");
                        adicionar(qtdDoadores, "AB-");
                        adicionar(qtdDoadores, "AB+");
                        break;
                    case "B+":
                        adicionar(qtdDoadores, "B+");
                        adicionar(qtdDoadores, "AB+");
                        break;
                    case "AB-":
                        adicionar(qtdDoadores, "AB-");
                        adicionar(qtdDoadores, "AB+");
                        break;
                    case "AB+":
                        adicionar(qtdDoadores, "AB+");
                        break;
                }
            }
        }

        return qtdDoadores;
    }

    private void adicionar(Map<String, Integer> qtdDoador, String tipoSang)
    {
        qtdDoador.put(tipoSang, qtdDoador.getOrDefault(tipoSang, 0) + 1);
    }

}









