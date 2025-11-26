# 🍰 Doce Vitrine - Protótipo Mobile

Protótipo simplificado em Angular para demonstração visual do sistema Doce Vitrine.

## 📱 Sobre o Projeto

Este é um protótipo mobile-first desenvolvido em Angular para apresentação ao cliente. O foco é exclusivamente visual, sem integração com servidores ou backend real.

### Funcionalidades Implementadas

- ✅ **Página Inicial (Home)** - Banner, busca, categorias e produtos em destaque
- ✅ **Catálogo de Produtos** - Lista completa com filtros e busca
- ✅ **Detalhes do Produto** - Imagens, descrição e seletor de quantidade
- ✅ **Carrinho de Compras** - Gerenciamento de itens e cálculo de totais
- ✅ **Navegação Mobile** - Bottom navigation bar fixo

## 🎨 Design

Paleta de cores moderna e temática de confeitaria:

- **Primary**: Rosa vibrante (#FF6B9D)
- **Secondary**: Rosa claro (#FFA8C5)
- **Accent**: Amarelo (#FFD93D)

## 🚀 Como Executar

### Instalação

```bash
cd doce-vitrine-app
npm install
ng serve
```

Acesse: `http://localhost:4200`

### Visualização Mobile

1. Abra DevTools (F12)
2. Ative modo dispositivo móvel (Ctrl+Shift+M)
3. Selecione um dispositivo móvel

## 📦 Estrutura

```
src/app/
├── models/           # Interfaces TypeScript
├── services/         # Dados mockados
├── pages/            # Componentes de páginas
│   ├── home/
│   ├── produtos/
│   ├── detalhe-produto/
│   └── carrinho/
└── app.routes.ts     # Rotas
```

## 🛠️ Tecnologias

- Angular 19 (standalone components)
- TypeScript
- SCSS
- Signals API

---

**Desenvolvido para apresentação - Projeto Doce Vitrine 2025**
