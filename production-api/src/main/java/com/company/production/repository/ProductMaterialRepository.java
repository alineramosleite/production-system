package com.company.production.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.company.production.entity.Product;
import com.company.production.entity.ProductMaterial;

@Repository
public interface ProductMaterialRepository extends JpaRepository<ProductMaterial, Long> {
    List<ProductMaterial> findByProduct(Product product);
}
