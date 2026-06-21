document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.querySelector('input[name="nome"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const telefone = document.querySelector('input[name="telefone"]').value;
  const opiniao = document.querySelector('textarea[name="comentario"]').value;

  const mensagem = `*Novo Cadastro - PIPQ*

Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Opinião: ${opiniao}`;

  const numeroWhatsApp = "5521974866272";
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  const assunto = "Cadastro de Membro - PIPQ";

  const corpoEmail = `Novo Cadastro - PIPQ

Nome: ${nome}
Email: ${email}
Telefone: ${telefone}
Opinião: ${opiniao}`;

  const emailLink = `mailto:isaiascarlos91@outlook.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;


  window.open(urlWhatsApp, "_blank");


  setTimeout(() => {
    window.location.href = emailLink;
  }, 800);


  const successScreen = document.getElementById("successScreen");
  successScreen.style.display = "flex";


  this.reset();
});


document.getElementById("closeSuccess").addEventListener("click", function () {
  document.getElementById("successScreen").style.display = "none";
});
