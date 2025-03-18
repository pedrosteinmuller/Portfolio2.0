# 📌 Meu Portfólio

Este é o repositório do meu portfólio profissional, desenvolvido utilizando **Next.js** com **TypeScript** e estilização com **Tailwind**, seguindo boas práticas de desenvolvimento, tipagem adequada e organização modular de componentes.

## 🔗 Acesse o Portfólio

Você pode visualizar o portfólio publicado na Vercel clicando no link abaixo:

🔗 [Meu Portfólio - Deploy na Vercel](https://seu-portfolio.vercel.app)

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Next.js** – Framework React para aplicações modernas.
- **TypeScript** – Superset do JavaScript que adiciona tipagem estática, melhorando segurança e manutenção do código.
- **Tailwind CSS** – Framework de estilização para criar uma UI responsiva e moderna.
- **Framer Motion** – Biblioteca para animações fluidas e interativas.
- **React Icons** – Ícones personalizáveis para enriquecer a interface.
- **Formspree** – Serviço para captura e envio de mensagens via formulário de contato.

---

## 🎨 Estrutura do Projeto

O portfólio é dividido nas seguintes seções:

- **Página Inicial** – Introdução rápida sobre mim e meus principais projetos.
- **Sobre Mim** – Seção com um resumo da minha trajetória profissional e habilidades.
- **Projetos** – Lista dos meus projetos com descrições e links para os repositórios no GitHub.
- **Experiências e Habilidades** – Desmonstro minhas experiências e habilidades na área de análise dados.
- **Conhecimentos Adicionais** – Lista meus conhecimentos em Front End e Stacks adicionais adquiridos durante minha jornada na escola Trybe.
- **Contato** – Página com meus links de contato e um formulário para envio de mensagens diretamente para o meu e-mail.

O projeto segue uma estrutura organizada e modular:

```
📂 meu-portfolio
│-- 📂 components   # Componentes reutilizáveis (arquivos .tsx)
│-- 📂 pages        # Páginas principais do site
│-- 📂 public       # Imagens e assets estáticos
│-- 📂 styles       # Configuração de estilos globais
│-- 📄 tailwind.config.js  # Configuração do Tailwind CSS
│-- 📄 tsconfig.json  # Configuração do TypeScript
│-- 📄 next.config.js  # Configuração do Next.js
```

---

## ✉️ Formulário de Contato

O portfólio possui um formulário de contato funcional, que utiliza o **Formspree** para enviar mensagens diretamente para meu e-mail.

### Como Funciona?
- O usuário preenche nome, e-mail, assunto e mensagem.
- A mensagem é enviada diretamente para minha caixa de entrada.
- O usuário recebe um feedback visual após o envio.

**Código de integração com Formspree:**

```tsx
<form action="https://formspree.io/f/meoaobao" method="POST">
  <input type="text" name="name" placeholder="Seu Nome" required />
  <input type="email" name="email" placeholder="Seu Email" required />
  <textarea name="message" placeholder="Sua Mensagem" required></textarea>
  <button type="submit">Enviar</button>
</form>
```

Quando um usuário preenche o formulário e clica em "Enviar", a mensagem será enviada diretamente para minha caixa de entrada cadastrada no Formspree.

---

## 📦 Como Rodar o Projeto Localmente

Caso queira rodar o portfólio no seu ambiente local, siga os passos abaixo:

1. **Clone este repositório:**
   ```sh
   git clone https://github.com/pedrosteinmuller/Portfolio2.0.git
   ```

2. **Acesse a pasta do projeto:**
   ```sh
   cd portfolio
   ```

3. **Instale as dependências:**
   ```sh
   npm install
   ```

4. **Inicie o servidor local:**
   ```sh
   npm run dev
   ```

5. Acesse `http://localhost:3000/` no seu navegador.

---

## 🌍 Deploy

O projeto está hospedado na **Vercel** para facilitar o acesso e garantir alta performance. O deploy é feito automaticamente a partir do repositório do GitHub, garantindo que toda atualização no código seja refletida no site publicado.

🔗 **[Visualizar Portfólio](https://seu-portfolio.vercel.app/)**

---

## 📌 Melhorias Futuras

- Adicionar modo escuro (dark mode);
- Melhorar acessibilidade (a11y);
- Técnicas eficazes de design responsivo para adaptar o conteúdo em dispositivos móveis.

## 📞 Contato

Se quiser falar comigo, entre em contato pelos canais abaixo:

- **LinkedIn:** [linkedin.com/in/seu-perfil](https://www.linkedin.com/in/pedrosteinmuller)
- **GitHub:** [github.com/seu-usuario](https://github.com/pedrosteinmuller)
- **E-mail:** pedrosteinmuller10105@hotmail.com

---

Se gostou do projeto, ⭐ deixe um star no repositório! 😊
