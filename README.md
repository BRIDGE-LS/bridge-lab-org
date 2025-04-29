# BRIDGE Lab Website

Este repositório contém o código-fonte do site do laboratório BRIDGE, construído usando Jekyll e hospedado no GitHub Pages.

## Configuração do Repositório

1. **Crie um novo repositório no GitHub**
   - Nome: `bridge-lab-org`
   - Visibilidade: Público
   - Não inicialize com README

2. **Clone o repositório localmente**
   ```bash
   git clone https://github.com/bridge-ls/bridge-lab-org.git
   cd bridge-lab-org
   ```

3. **Copie todos os arquivos deste template para o repositório**

4. **Inicialize, adicione e faça commit dos arquivos**
   ```bash
   git init
   git add .
   git commit -m "Initial commit with Jekyll template"
   ```

5. **Envie para o GitHub**
   ```bash
   git push -u origin main
   ```

6. **Ative o GitHub Pages**
   - Vá para o seu repositório no GitHub
   - Navegue para "Settings" > "Pages"
   - Em "Source", selecione `main` como branch
   - Clique em "Save"

## Estrutura do Site

- `_config.yml`: Arquivo de configuração do Jekyll
- `_layouts/`: Templates de layout
- `_includes/`: Componentes reutilizáveis (cabeçalho, rodapé, etc.)
- `_sass/`: Arquivos SCSS para estilização
- `assets/`: Arquivos estáticos (CSS, JS, imagens)
- `_data/`: Arquivos de dados para equipe, publicações, etc.
- `index.md`: Página inicial
- `research.md`: Página de pesquisa
- `team.md`: Página da equipe
- `publications.md`: Página de publicações
- `contact.md`: Página de contato

## Personalização

### Modificando o conteúdo

- **Equipe**: Edite o arquivo `_data/team.yml` para adicionar ou modificar membros da equipe
- **Publicações**: Edite o arquivo `_data/publications.yml` para atualizar as publicações
- **Navegação**: Edite o arquivo `_data/navigation.yml` para modificar o menu de navegação

### Modificando o estilo

- Os estilos principais estão em `_sass/main.scss`
- As cores e variáveis podem ser modificadas no início deste arquivo

### Adicionando imagens

- Adicione imagens na pasta `assets/images/`
- Substitua as imagens de placeholder por imagens reais da equipe
- Atualize as referências nos arquivos YAML e Markdown

## Testando localmente

1. **Instale o Jekyll e as dependências**
   ```bash
   gem install jekyll bundler
   bundle install
   ```

2. **Execute o servidor local**
   ```bash
   bundle exec jekyll serve
   ```

3. **Acesse o site**
   - Abra `http://localhost:4000/bridge-lab-org/` no navegador

## Importante

- Certifique-se de que o valor de `baseurl` no arquivo `_config.yml` está definido como `/bridge-lab-org`
- Adicione o arquivo `.nojekyll` na raiz do repositório para garantir que o GitHub Pages não ignore arquivos que começam com underscore

## Desenvolvimento Futuro

- Adicione páginas específicas para cada área de pesquisa
- Implemente um blog para notícias e atualizações
- Adicione funcionalidade ao formulário de contato
- Integre Google Analytics para rastrear visitantes

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.