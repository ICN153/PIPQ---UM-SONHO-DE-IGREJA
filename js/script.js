
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const telefone = document.querySelector('input[name="telefone"]').value;
  const opiniao = document.querySelector('textarea[name="comentario"]').value;

  const mensagem =
`*Novo Cadastro - PIPQ*
Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Opinião: ${opiniao}`;

  const numeroWhatsApp = "5521974866272"; // 🔴 TROQUE PELO NÚMERO DA IGREJA

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const telefone = document.querySelector('input[name="telefone"]').value;
  const opiniao = document.querySelector('textarea[name="comentario"]').value;

  const assunto = "Cadastro de Membro - PIPQ";

  const corpo =
`Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Opinião: ${opiniao}`;

  const mailtoLink = `isaiascarlos91@ourlook.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

  window.location.href = mailtoLink;
});

