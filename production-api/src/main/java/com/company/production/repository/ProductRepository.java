package com.company.production.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.company.production.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
