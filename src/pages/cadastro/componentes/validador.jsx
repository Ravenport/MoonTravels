export default function Validador(hotel) {
  let mensagemPadrao = `Preencha com um valor valido o campo: `;
  console.log(hotel.nome === "", hotel.nome);
  if (hotel.nome === "" || hotel.nome === null) {
    return {
      indicador: false,
      campo: "nome",
      mensagem: mensagemPadrao + "Nome",
    };
  } else if (hotel.imgMain === "" || hotel.imgMain === null) {
    return {
      indicador: false,
      campo: "imgMain",
      mensagem: mensagemPadrao + "Imagem Principal",
    };
  } else if (hotel.classificacao === "" || hotel.classificacao === null) {
    return {
      indicador: false,
      campo: "classificacao",
      mensagem: mensagemPadrao + "Classificacao",
    };
  } else if (hotel.localizacao === "" || hotel.localizacao === null) {
    return {
      indicador: false,
      campo: "localizacao",
      mensagem: mensagemPadrao + "Localizacao",
    };
  } else if (hotel.preco === "" || hotel.preco === null) {
    return {
      indicador: false,
      campo: "preco",
      mensagem: mensagemPadrao + "Preco",
    };
  } else if (hotel.imgs.length < 4) {
    return {
      indicador: false,
      campo: "imgs",
      mensagem: "Adicione até 4 imagens para o produto!",
    };
  } else if (hotel.descricao === "" || hotel.descricao === null) {
    return {
      indicador: false,
      campo: "descricao",
      mensagem: mensagemPadrao + "Descricao do Hotel",
    };
  } else if (hotel.servicos === "" || hotel.servicos === null) {
    return {
      indicador: false,
      campo: "servicos",
      mensagem: mensagemPadrao + "Servicos do Hotel",
    };
  } else {
    return {
      indicador: true,
      campo: "",
      mensagem: "Campos validados!",
    };
  }
}
