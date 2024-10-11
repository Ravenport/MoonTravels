import Header from "../../components/header/header";
import "./cadastro.css";
import { useEffect, useState } from "react";
import Validador from "./componentes/validador";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  let navigate = useNavigate();
  const [erroValidacao, setErroValidacao] = useState(false);
  const [mensagemValidacao, setMensagemValidacao] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [servicos, setServicos] = useState("");
  const [imgMain, setImgMain] = useState("");
  const [inputImgSecundaria, setInputImgSecundaria] = useState("");
  const [imgs, setImgs] = useState([]);
  const [classificacao, setClassificacao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [preco, setPreco] = useState("");

  function adicionarImgSecundaria() {
    let tempImgs = [...imgs];
    if (tempImgs.length <= 4) {
      tempImgs.push(inputImgSecundaria);
      setImgs(tempImgs);
      setInputImgSecundaria("");
      document.getElementById("inputImgSecundaria").value = "";
    }
  }

  function cadastrarHotel(event) {
    event.preventDefault();
    let hoteis = JSON.parse(localStorage.getItem("@hoteis"));
    let hotel = {
      id: "",
      nome: nome,
      imgMain: imgMain,
      imgs: imgs,
      descricao: descricao,
      servicos: servicos,
      classificacao: classificacao,
      localizacao: localizacao,
      preco: preco,
    };
    validador = Validador(hotel);
    if (validador.indicador !== false) {
      setMensagemValidacao("");
      setErroValidacao(false);

      console.log(hoteis);
      if (hoteis !== null && hoteis.length !== 0) {
        hotel.id = hoteis[hoteis.length - 1].id + 1;
      } else {
        hoteis = [];
        hotel.id = 1;
      }

      hoteis.push(hotel);
      hoteis = JSON.stringify(hoteis);
      localStorage.setItem("@hoteis", hoteis);
      navigate("/");
    } else {
      setMensagemValidacao(validador.mensagem);
      setErroValidacao(true);
    }
  }

  function mensagemErro() {
    if (erroValidacao === true) {
      return (
        <div className="row">
          <div className="col-sm-12 p-4">
            <div className="bg-danger text-white p-4 rounded">
              <h4 className="text-center fw-bolder">{mensagemValidacao}</h4>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row">
          <div className="col-sm-12">
            <Header />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12">
            <h2 className="color-eclipse ms-4 mt-4 mb-3 fw-bolder">
              Cadastro de Hotel
            </h2>
            <div className="container">
              <form onSubmit={cadastrarHotel}>
                <div className="row">
                  <div className="col-sm-12">
                    <label
                      htmlFor="inputNome"
                      className="form-label mt-3 color-eclipse fw-bolder"
                    >
                      Nome do Hotel
                    </label>
                    <input
                      id="inputNome"
                      type="text"
                      onChange={(e) => setNome(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <label
                      htmlFor="inputImgPrincipal"
                      className="form-label mt-3 color-eclipse fw-bolder"
                    >
                      Imagem Principal
                    </label>
                    <input
                      id="inputImgPrincipal"
                      type="text"
                      onChange={(e) => setImgMain(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label
                      htmlFor="inputImgSecundaria"
                      className="form-label mt-3 color-eclipse fw-bolder"
                    >
                      Imagens Secundárias
                    </label>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="inputImgSecundaria"
                        onChange={(e) => setInputImgSecundaria(e.target.value)}
                        placeholder="Insira uma Url"
                      />
                      <button
                        className="input-group-text ps-4 pe-4 bg-eclipse"
                        type="button"
                        onClick={adicionarImgSecundaria}
                      >
                        <i className="bi bi-folder-plus color-moon"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <label
                      htmlFor="inputClassificacao"
                      className="form-label mt-3 color-eclipse fw-bolder"
                    >
                      Classificação
                    </label>
                    <input
                      id="inputClassificacao"
                      type="text"
                      onChange={(e) => setClassificacao(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-4">
                    <label
                      htmlFor="inputLocal"
                      className="form-label mt-3 color-eclipse fw-bolder"
                    >
                      Localização
                    </label>
                    <input
                      id="inputLocal"
                      type="text"
                      onChange={(e) => setLocalizacao(e.target.value)}
                      className="form-control"
                    />
                  </div>
                  <div className="col-sm-4">
                    <label
                      htmlFor="inputPreco"
                      className="form-label mt-3 color-eclipse fw-bolder"
                    >
                      Preço
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">R$</span>
                      <input
                        min={0}
                        id="inputPreco"
                        type="number"
                        onChange={(e) => setPreco(e.target.value)}
                        step="0.01"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label
                      htmlFor="inputDescricao"
                      className="form-label mt-3 color-eclipse fw-bolder"
                    >
                      Descrição do Hotel
                    </label>
                    <textarea
                      name="inputDesc"
                      className="form-control"
                      id="inputDescricao"
                      onChange={(e) => setDescricao(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label
                      htmlFor="inputServico"
                      className="form-label mt-3 color-eclipse fw-bolder"
                    >
                      Serviços do Hotel
                    </label>
                    <textarea
                      name="inputServico"
                      className="form-control"
                      id="inputServico"
                      onChange={(e) => setServicos(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-4 d-flex justify-content-end">
                  <div className="col-sm-2 d-flex justify-content-end">
                    <button className="btn btn-success" type="submit">
                      Cadastrar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {mensagemErro()}
      </div>
    </>
  );
}
