const form = document.querySelector(".form")
const receipt = document.querySelector(".receipt")
const top_img = document.querySelector(".top_img")

const nValueInput = document.querySelector(".form_nValue")
const nameInput = document.querySelector(".form_name")
const exValueInput = document.querySelector(".form_exValue")
const origemInput = document.querySelector(".form_origem")
const destinoInput = document.querySelector(".form_destino")
const dataInput = document.querySelector(".form_data")
const dNameInput = document.querySelector(".form_dName")
const cpfInput = document.querySelector(".form_cpf")
const carModelInput = document.querySelector(".form_carModel")
const plateInput = document.querySelector(".form_plate")

const formButton = document.querySelector(".form_button")
const image = document.querySelector(".exit")

function generate(event) {
  event.preventDefault()
  // Capturando os valores dos campos do formulário
  document.querySelector(".value").innerText = nValueInput.value
  document.querySelector(".name").innerText = nameInput.value
  document.querySelector(".ex_value").innerText = exValueInput.value
  document.querySelector(".cityA").innerText = origemInput.value
  document.querySelector(".cityB").innerText = destinoInput.value
  document.querySelector(".receipt_date").innerText = dataInput.value
  document.querySelector(".dName").innerText = dNameInput.value
  document.querySelector(".docNumber").innerText = cpfInput.value
  document.querySelector(".cModel").innerText = carModelInput.value
  document.querySelector(".plate").innerText = plateInput.value
}

form.addEventListener("submit", generate)

// Adicione um ouvinte de evento ao botão para chamar a função toggleFormVisibility quando ele for clicado
formButton.addEventListener("click", toggleFormVisibility)

// Adicione um ouvinte de evento à imagem para chamar a função toggleFormVisibility quando ela for clicada
image.addEventListener("click", toggleFormVisibility)

function handleEnter(event, nextInputSelector) {
  if (event.key === "Enter") {
    event.preventDefault()
    const nextInput = document.querySelector(nextInputSelector)
    if (nextInput) {
      nextInput.focus()
    } else {
      console.error("Elemento não encontrado com o seletor:", nextInputSelector)
    }
  }
}

function toggleFormVisibility() {
  if (form.classList.contains("hide")) {
    form.classList.remove("hide")
    receipt.classList.add("hide")
    top_img.classList.add("hide")
  } else {
    form.classList.add("hide")
    receipt.classList.remove("hide")
    top_img.classList.remove("hide")
  }
}

const printerImage = document.querySelector(".printer")

printerImage.addEventListener("click", printReceipt)

function printReceipt() {
  window.print()
}
