package com.company.production.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.production.entity.ProductMaterial;
import com.company.production.repository.ProductMaterialRepository;

@RestController
@RequestMapping("/product-materials")
public class ProductMaterialController {

    private final ProductMaterialRepository productMaterialRepository;

    public ProductMaterialController(ProductMaterialRepository productMaterialRepository) {
        this.productMaterialRepository = productMaterialRepository;
    }

    // GET /product-materials
    @GetMapping
    public List<ProductMaterial> getAllProductMaterials() {
        return productMaterialRepository.findAll();
    }

    // POST /product-materials
    @PostMapping
    public ProductMaterial createProductMaterial(@RequestBody ProductMaterial productMaterial) {
        return productMaterialRepository.save(productMaterial);
    }
}
