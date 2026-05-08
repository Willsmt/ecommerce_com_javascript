

```markdown
# 🛒 E-commerce com JavaScript (BEM)

Este projeto é um **mini e-commerce** desenvolvido em **HTML, CSS e JavaScript puro**, utilizando o padrão de nomenclatura **BEM (Block Element Modifier)** para manter o código organizado e escalável.

## 🚀 Funcionalidades

- Catálogo de produtos renderizado dinamicamente via JavaScript
- Carrinho de compras com:
  - Adição de produtos
  - Quantidade dinâmica (mesmo produto aumenta a quantidade)
  - Subtotal e total calculados automaticamente
  - Botão de remover item
- Checkout simples (alerta de confirmação e limpeza do carrinho)
- Layout responsivo e estilizado com CSS moderno
- Estrutura organizada em blocos BEM (`products__grid`, `cart__body`, `cart__checkout`, etc.)

## 📂 Estrutura do projeto

```
ecommerce/
│── index.html        # Estrutura principal da página
│── styles.css        # Estilos com padrão BEM
│── script.js         # Lógica do catálogo e carrinho
│── img/              # Imagens dos produtos
```

## 🖼️ Exemplo de produto

```javascript
let products = [
  { id: 1, name: "Curso 1", price: 10.9, image: "img/product1.jpg" },
  { id: 2, name: "Curso 2", price: 15.5, image: "img/product2.jpg" },
  ...
];
```

## ⚙️ Como rodar

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em qualquer navegador
3. Os produtos serão carregados dinamicamente e você poderá testar o carrinho

## 🎨 Estilo

- **Header**: menu de navegação escuro com links claros
- **Hero**: seção de destaque com gradiente e botão chamativo
- **Products**: grid responsivo com cards animados
- **Cart**: tabela estilizada com botão verde de checkout e botão vermelho de remover
- **Footer**: rodapé simples e escuro

## 💡 Ideias futuras

- Filtro de produtos por nome ou preço
- Lista de desejos/favoritos
- Checkout com formulário de pagamento
- Integração com backend (Node.js, Express, banco de dados)

---

👨‍💻 Desenvolvido por **Willians**.
```
