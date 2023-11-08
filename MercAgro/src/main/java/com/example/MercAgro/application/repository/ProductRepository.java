package com.example.MercAgro.application.repository;

import com.example.MercAgro.domain.Product;
import com.example.MercAgro.domain.User;


public interface ProductRepository {
    Iterable<Product> getProducts();
    Iterable<Product> getProductsByUser(User user);
    Product getProductById(Integer id);
    Product saveProduct(Product product);
    void deleteProductById(Integer id);
}
