// Os links de WhatsApp, Maps e avaliação já estão prontos direto no HTML
// (nos atributos href), então eles funcionam mesmo se este arquivo não carregar.
// Aqui ficam só os recursos que precisam de JavaScript de verdade.

// Tabela de horários (opcional): preencha e ela aparece na seção "Horários"
// Exemplo: { dia: "Segunda a sexta", horas: "06h, 07h, 08h, 12h, 17h, 18h, 19h" }
var SCHEDULE = [];

if (SCHEDULE.length) {
  var t = document.createElement("table");
  t.className = "sched";
  SCHEDULE.forEach(function (r) {
    var tr = document.createElement("tr");
    var a = document.createElement("td"); a.textContent = r.dia;
    var b = document.createElement("td"); b.textContent = r.horas;
    tr.appendChild(a); tr.appendChild(b); t.appendChild(tr);
  });
  var slot = document.getElementById("sched-slot");
  if (slot) {
    slot.appendChild(t);
    document.getElementById("sched-note").textContent = "Dúvidas ou quer confirmar uma vaga? Chame no WhatsApp.";
  }
}

// Botão "Copiar endereço"
var copyBtn = document.getElementById("copy");
if (copyBtn) {
  copyBtn.addEventListener("click", function () {
    var address = "R. Guaporé, 92 - Jardim Guanabara, Goiânia - GO, 74675-610";
    try {
      navigator.clipboard.writeText(address).then(function () {
        copyBtn.textContent = "Endereço copiado";
        setTimeout(function () { copyBtn.textContent = "Copiar endereço"; }, 2000);
      }, function () {});
    } catch (e) {}
  });
}

// Barra fixa de WhatsApp: aparece no celular depois que o botão principal sai da tela
var dock = document.getElementById("dock");
var first = document.querySelector("#top-actions .primary");
if (dock && first) {
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      dock.classList.toggle("show", !entries[0].isIntersecting);
    }).observe(first);
  } else {
    dock.classList.add("show");
  }
}