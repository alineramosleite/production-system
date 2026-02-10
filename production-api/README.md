# 🚀 API para Gestão de Produção

API REST desenvolvida para gerenciar um sistema de produção, permitindo o cadastro de produtos, matérias-primas, associação entre eles e o cálculo de ordens de produção com base na disponibilidade de materiais.

O projeto segue uma arquitetura em camadas, com foco em clareza, organização e boas práticas de desenvolvimento backend.

---

## 🛠️ Tecnologias Utilizadas

- **Java 17**
- **Spring Boot**
- **Spring Web**
- **Spring Data JPA**
- **Hibernate**
- **Banco de Dados H2** (para ambiente de desenvolvimento)
- **Maven**
- **Lombok**

---

## 🔗 Endpoints Principais

### Produtos

- `GET /products`
- `POST /products`
- `PUT /products/{id}`
- `DELETE /products/{id}`

### Matérias-Primas

- `GET /raw-materials`
- `POST /raw-materials`

### Associação Produto x Matéria-Prima

- `GET /product-materials`
- `POST /product-materials`

### Ordens de Produção

- `GET /production`

---

## 📄 Documentação e Referências

- Spring Boot: https://spring.io/projects/spring-boot
- Spring Data JPA: https://spring.io/projects/spring-data-jpa
- Hibernate: https://hibernate.org/
- Maven: https://maven.apache.org/

---
