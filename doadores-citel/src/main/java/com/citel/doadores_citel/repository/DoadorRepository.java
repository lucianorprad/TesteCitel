package com.citel.doadores_citel.repository;

import com.citel.doadores_citel.model.Doador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoadorRepository extends JpaRepository<Doador,Long> { }
