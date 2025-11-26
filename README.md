# 🍰 Doce Vitrine - Protótipo Mobile

Protótipo simplificado em Angular para demonstração visual do sistema Doce Vitrine.

## Sobre o Projeto

Este é um protótipo mobile-first desenvolvido em Angular para apresentação ao cliente. O sistema implementa dois perfis de usuário (Cliente e Confeiteiro) com funcionalidades específicas para cada perfil e suporte a múltiplas vitrines de confeiteiros.

### Funcionalidades Implementadas

#### Para Clientes

- ✅ **Seleção de Confeiteiro** - Escolha entre confeiteiros cadastrados antes de navegar
- ✅ **Página Inicial (Home)** - Banner, busca, categorias e produtos em destaque
- ✅ **Catálogo de Produtos** - Lista completa com filtros e busca por confeiteiro
- ✅ **Detalhes do Produto** - Imagens, descrição e seletor de quantidade
- ✅ **Carrinho de Compras** - Gerenciamento de itens e cálculo de totais
- ✅ **Trocar Confeiteiro** - Botão para alternar entre vitrines diferentes

#### Para Confeiteiros

- ✅ **Painel Administrativo** - Gerenciamento completo dos próprios produtos
- ✅ **Adicionar Produtos** - Formulário completo com validação e upload de imagens
- ✅ **Editar Produtos** - Atualização de produtos existentes
- ✅ **Excluir Produtos** - Remoção de produtos do catálogo
- ✅ **Gerenciar Destaques** - Controle de produtos em destaque
- ✅ **Upload de Imagens** - Sistema dual: URL externa ou upload local (Base64)

#### Sistema de Usuários e Vitrines

- ✅ **Múltiplos Confeiteiros** - Cada confeiteiro tem sua própria vitrine independente
- ✅ **Alternância de Perfil** - Interface para trocar entre Cliente e Confeiteiro
- ✅ **Persistência de Dados** - LocalStorage para produtos, preferências e seleções
- ✅ **Navegação Adaptativa** - Menu muda conforme o tipo de usuário
- ✅ **Navegação Mobile** - Bottom navigation bar fixo e responsivo
- ✅ **Imagens Locais** - Suporte a imagens na pasta `public/images/produtos/`

## Design

Paleta de cores moderna e temática de confeitaria:

- **Primary**: Rosa vibrante (#FF6B9D)
- **Secondary**: Rosa claro (#FFA8C5)
- **Accent**: Amarelo (#FFD93D)

## Como Executar

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

## Estrutura

```
src/app/
├── models/           # Interfaces TypeScript
│   ├── product.model.ts    # Modelo de produto com confectionerId
│   └── user.model.ts       # Modelos de usuário e confeiteiro
├── services/         # Serviços da aplicação
│   ├── products.service.ts      # CRUD de produtos com filtros
│   ├── cart.service.ts          # Gerenciamento do carrinho
│   ├── auth.service.ts          # Autenticação de usuários
│   └── confectioner.service.ts  # Gerenciamento de confeiteiros
├── pages/            # Componentes de páginas
│   ├── confectioner-selector/   # Seleção de confeiteiro
│   ├── home/                    # Página inicial
│   ├── products/                # Catálogo de produtos
│   ├── product-detail/          # Detalhes do produto
│   ├── cart/                    # Carrinho de compras
│   ├── admin/                   # Painel administrativo (confeiteiro)
│   └── user-switcher/           # Alternância de perfil
└── app.routes.ts     # Configuração de rotas
```

## Rotas Disponíveis

- `/` - Redireciona para seleção de confeiteiro
- `/selecionar-confeiteiro` - Escolha do confeiteiro
- `/home` - Página inicial (requer confeiteiro selecionado)
- `/produtos` - Catálogo de produtos filtrado por confeiteiro
- `/produto/:id` - Detalhes de um produto
- `/carrinho` - Carrinho de compras (apenas clientes)
- `/admin` - Painel administrativo (apenas confeiteiros)
- `/alternar-usuario` - Alternância entre perfis

## Fluxo de Uso

### Como Cliente:

1. Acesse o sistema → Tela de seleção de confeiteiro
2. Escolha um confeiteiro (Doces da Maria ou Confeitaria Estrela)
3. Navegue pela vitrine do confeiteiro selecionado
4. Adicione produtos ao carrinho
5. Use o botão "🔄 Trocar Confeiteiro" para ver outra vitrine

### Como Confeiteiro:

1. Selecione seu confeiteiro na tela inicial
2. Clique no botão 🔄 no cabeçalho → Alternar para perfil "Confeiteiro"
3. Acesse o menu "Gerenciar" (⚙️) no bottom nav
4. Adicione/edite/remova produtos da sua vitrine
5. Faça upload de imagens (URL ou arquivo local)

## Imagens dos Produtos

As imagens estão armazenadas localmente em:

```
public/images/produtos/
```

**Para adicionar novas imagens:**

1. Coloque o arquivo na pasta `public/images/produtos/`
2. No admin, use o caminho: `/images/produtos/nome-arquivo.jpg`
3. Ou faça upload direto (converte para Base64)

**Formatos suportados:** JPG, JPEG, PNG, GIF, Webp (máximo 2MB por upload)

## Perfis de Usuário

### 🛒 Cliente

- Seleciona confeiteiro antes de navegar
- Visualiza produtos da vitrine escolhida
- Adiciona produtos ao carrinho
- Pode trocar de confeiteiro a qualquer momento

### 👨‍🍳 Confeiteiro

- Gerencia apenas seus próprios produtos
- Adiciona/edita/remove produtos
- Controla produtos em destaque
- Upload de imagens (URL ou arquivo)

> **Dica**: Use o botão 🔄 no cabeçalho para alternar entre perfis ou trocar de confeiteiro!

## Tecnologias

- Angular 19 (standalone components)
- TypeScript
- SCSS
- LocalStorage para persistência
- Sistema de rotas lazy-loaded

## Recursos Especiais

- 📱 **Mobile-first** - Design otimizado para dispositivos móveis
- 🎨 **Upload de Imagens** - Suporte a URL externa ou upload local (Base64)
- 🏪 **Multi-Vitrine** - Sistema de múltiplos confeiteiros independentes
- 💾 **Persistência** - Dados salvos no navegador (localStorage)
- 🔄 **Navegação Inteligente** - Redirecionamentos automáticos e validações
- 🎯 **Filtros Avançados** - Busca e filtros por categoria e confeiteiro

---

**Desenvolvido para apresentação - Projeto Doce Vitrine 2025**
