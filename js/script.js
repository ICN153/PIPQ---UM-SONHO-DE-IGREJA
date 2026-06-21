const form = document.getElementById("formCadastro");
const successScreen = document.getElementById("successScreen");
const closeBtn = document.getElementById("closeSuccess");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    const nome = form.querySelector('input[name="nome"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const telefone = form.querySelector('input[name="telefone"]').value;

    const opiniaoEl = form.querySelector('textarea[name="comentario"]');
    const opiniao = opiniaoEl ? opiniaoEl.value : "";

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

    // 🔥 abre WhatsApp primeiro (mais importante)
    window.open(urlWhatsApp, "_blank");

    // 🔥 depois email
    setTimeout(() => {
      window.location.href = emailLink;
    }, 1000);

    // sucesso
    successScreen.style.display = "flex";

    // limpar form
    form.reset();
  } catch (error) {
    console.error("Erro no envio:", error);
    alert("Erro ao enviar formulário. Veja o console (F12).");
  }
});

closeBtn.addEventListener("click", function () {
  successScreen.style.display = "none";
});
