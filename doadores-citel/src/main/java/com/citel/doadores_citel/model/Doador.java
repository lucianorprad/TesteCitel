package com.citel.doadores_citel.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.time.Period;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class Doador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private String cpf;
    private String rg;
    @JsonFormat(pattern = "dd/MM/yyyy")
    @JsonProperty("data_nasc")
    private LocalDate dataNascimento;
    private String sexo;
    private String mae;
    private String pai;
    private String email;
    private String cep;
    private String endereco;
    private String numero;
    private String bairro;
    private String cidade;
    private String estado;
    @JsonProperty("telefone_fixo")
    private String telefoneFixo;
    private String celular;
    private double altura;
    private double peso;
    @JsonProperty("tipo_sanguineo")
    private String tipoSanguineo;



    public int pegarIdade()
    {
        LocalDate dataNasc = this.getDataNascimento();
        return Period.between(dataNasc,LocalDate.now()).getYears();

    }

    public String pegarFaixaEtaria()
    {
        int faixaEtariaInicio = pegarIdade() / 10 * 10;
        return faixaEtariaInicio + "- " + (faixaEtariaInicio + 9);
    }


    public double pegarImc()
    {
        double imc = this.peso / (this.altura * this.altura);
        return imc;
    }



}





