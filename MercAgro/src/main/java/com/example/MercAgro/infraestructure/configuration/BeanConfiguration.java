package com.example.MercAgro.infraestructure.configuration;

import com.example.MercAgro.application.repository.ProductRepository;
import com.example.MercAgro.application.service.ProductService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {
    @Bean
    public ProductService productService(ProductRepository productRepository){
        return new ProductService(productRepository);
    }
}
