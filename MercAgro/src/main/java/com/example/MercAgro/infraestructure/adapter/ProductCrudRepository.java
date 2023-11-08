package com.example.MercAgro.infraestructure.adapter;

import com.example.MercAgro.domain.Product;
import com.example.MercAgro.infraestructure.entity.ProductEntity;
import com.example.MercAgro.infraestructure.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;

public interface ProductCrudRepository  extends CrudRepository<ProductEntity, Integer> {
    Iterable<ProductEntity> findByUserEntity (UserEntity userEntity);
}
