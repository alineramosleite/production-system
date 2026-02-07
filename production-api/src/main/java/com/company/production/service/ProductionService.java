package com.company.production.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.company.production.dto.ProductionResultDTO;
import com.company.production.entity.Product;
import com.company.production.entity.ProductMaterial;
import com.company.production.repository.ProductMaterialRepository;
import com.company.production.repository.ProductRepository;

@Service
public class ProductionService {

    private final ProductRepository productRepository;
    private final ProductMaterialRepository productMaterialRepository;

    public ProductionService(
            ProductRepository productRepository,
            ProductMaterialRepository productMaterialRepository) {
        this.productRepository = productRepository;
        this.productMaterialRepository = productMaterialRepository;
    }

    public List<ProductionResultDTO> calculateProduction() {

        List<ProductionResultDTO> results = new ArrayList<>();
        List<Product> products = productRepository.findAll();

        for (Product product : products) {

            List<ProductMaterial> materials = productMaterialRepository.findByProduct(product);

            int maxProduction = Integer.MAX_VALUE;

            for (ProductMaterial pm : materials) {

                int availableStock = pm.getRawMaterial().getStockQuantity();
                int required = pm.getRequiredQuantity();
                int possible = availableStock / required;
                maxProduction = Math.min(maxProduction, possible);
            }

            if (maxProduction > 0) {

                BigDecimal totalValue = product.getPrice()
                        .multiply(BigDecimal.valueOf(maxProduction));

                ProductionResultDTO dto = new ProductionResultDTO(
                        product.getId(),
                        product.getName(),
                        maxProduction,
                        product.getPrice(),
                        totalValue);

                results.add(dto);
            }
        }

        results.sort(
                Comparator.comparing(ProductionResultDTO::getTotalValue)
                        .reversed());

        return results;
    }
}
