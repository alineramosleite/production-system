package com.company.production.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.company.production.dto.ProductionResultDTO;
import com.company.production.service.ProductionService;

@RestController
@RequestMapping("/production")
public class ProductionController {

    private final ProductionService productionService;

    public ProductionController(ProductionService productionService) {
        this.productionService = productionService;
    }

    // GET /production
    @GetMapping
    public List<ProductionResultDTO> getProductionPlan() {
        return productionService.calculateProduction();
    }
}
