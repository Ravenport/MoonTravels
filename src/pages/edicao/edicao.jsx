import Header from "../../components/header/header";
import Validador from "../cadastro/componentes/validador";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./edicao.css";
import { useNavigate } from "react-router-dom";

export default function Edicao() {
  let { id } = useParams();
  const [hotel, setHotel] = useState();
  let navigate = useNavigate();
  const [erroValidacao, setErroValidacao] = useState(false);
  const [mensagemValidacao, setMensagemValidacao] = useState("");

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [servicos, setServicos] = useState("");
  const [imgMain, setImgMain] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    let hoteisString = JSON.parse(localStorage.getItem("@hoteis"));
    let hotelTemp = hoteisString.filter((item) => item.id == id);
    setHotel(hotelTemp[0]);
    setNome(hotelTemp[0].nome);
    setDescricao(hotelTemp[0].descricao);
    setServicos(hotelTemp[0].servicos);
    setImgMain(hotelTemp[0].imgMain.replace('"', "").replace('"', ""));
    setClassificacao(hotelTemp[0].classificacao);
    setLocalizacao(hotelTemp[0].localizacao);
    setPreco(hotelTemp[0].preco);
  }, []);

  function editarHotel(event) {
    event.preventDefault();
    let hoteis = JSON.parse(localStorage.getItem("@hoteis"));
    let hotelTemp = {
      id: hotel.id,
      nome: nome,
      imgMain: imgMain,
      imgs: hotel.imgs,
      descricao: descricao,
      servicos: servicos,
      classificacao: classificacao,
      localizacao: localizacao,
      preco: preco,
    };
    validador = Validador(hotelTemp);
    if (validador.indicador !== false) {
      setMensagemValidacao("");
      setErroValidacao(false);

      hoteis.map((hotelMap, index) => {
        if (hotelMap.id === hotelTemp.id) {
          hoteis[index] = hotelTemp;
        }
      });
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
              <form onSubmit={editarHotel}>
                <div className="row">
                  <div className="col-sm-12">
                    <label
                      htmlFor="inputNome"
                      className="form-label mt-3 color-eclipse fw-bolder"
                    >
                      Nome do Hotel
                    </label>
                    <input
                      defaultValue={nome}
                      id="inputNome"
                      type="text"
                      onChange={(e) => setNome(e.target.value)}
                      onBlur={(e) => setNome(e.target.value)}
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
                      defaultValue={imgMain}
                      id="inputImgPrincipal"
                      type="text"
                      onChange={(e) => setImgMain(e.target.value)}
                      onBlur={(e) => setImgMain(e.target.value)}
                      className="form-control"
                    />
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
                      defaultValue={classificacao}
                      id="inputClassificacao"
                      type="text"
                      onChange={(e) => setClassificacao(e.target.value)}
                      onBlur={(e) => setClassificacao(e.target.value)}
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
                      defaultValue={localizacao}
                      id="inputLocal"
                      type="text"
                      onChange={(e) => setLocalizacao(e.target.value)}
                      onBlur={(e) => setLocalizacao(e.target.value)}
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
                        defaultValue={preco}
                        id="inputPreco"
                        type="number"
                        min={0}
                        onChange={(e) => setPreco(e.target.value)}
                        onBlur={(e) => setPreco(e.target.value)}
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
                      defaultValue={descricao}
                      name="inputDesc"
                      className="form-control"
                      id="inputDescricao"
                      onChange={(e) => setDescricao(e.target.value)}
                      onBlur={(e) => setDescricao(e.target.value)}
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
                      defaultValue={servicos}
                      name="inputServico"
                      className="form-control"
                      id="inputServico"
                      onChange={(e) => setServicos(e.target.value)}
                      onBlur={(e) => setServicos(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-4 d-flex justify-content-end">
                  <div className="col-sm-2 d-flex justify-content-end">
                    <button className="btn btn-success" type="submit">
                      Editar
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
