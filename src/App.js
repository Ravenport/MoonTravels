import "./styles.css";
import Header from "./components/header/header";
import CardHotel from "./components/cardHotel/cardHotel";
import { useEffect, useState } from "react";
export default function App() {
  const [hoteis, setHoteis] = useState([]);
  const [hoteisShow, setHoteisShow] = useState([]);
  const [inputNome, setInputNome] = useState("");

  useEffect(() => {
    let hoteisLocalStorage = JSON.parse(localStorage.getItem("@hoteis"));
    if (hoteisLocalStorage !== null) {
      setHoteis([...hoteisLocalStorage]);
      setHoteisShow([...hoteisLocalStorage]);
    }
  }, []);

  function exibirHoteis() {
    if (hoteisShow.length > 0) {
      return hoteisShow.map((hotel) => {
        return (
          <div className="mt-4 mb-4">
            <CardHotel key={hotel.id} hotel={hotel} />
          </div>
        );
      });
    } else {
      return (
        <div className="bg-eclipse p-4 text-center color-moon">
          <h3>
            <i className="bi bi-building-add"></i> Nenhum hotel cadastrado!
          </h3>
        </div>
      );
    }
  }

  function filtrarHoteis(nome) {
    let regex = new RegExp(String.raw`${nome}`);
    let hoteisTemp = [...hoteis];
    hoteisTemp = hoteisTemp.filter((item) => regex.test(item.nome) === true);
    setHoteisShow(hoteisTemp);
  }

  function ordenarHoteis(campo) {
    if (campo == "classificacao") {
      setHoteisShow(
        hoteis.sort(function (a, b) {
          return b.classificacao - a.classificacao;
        })
      );
    } else if (campo == "preco") {
      let tempHoteis = [
        ...hoteis.sort(function (a, b) {
          return a.preco - b.preco;
        }),
      ];
      setHoteisShow(tempHoteis);
    }
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-12">
          <Header />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 mt-5">
          <div className="row mt-5">
            <div className="col-md-12 mt-5">
              <div className="row">
                <div className="col-md-5 d-flex flex-column p-4">
                  <label
                    htmlFor="filtroNome"
                    className="form-label text-start color-eclipse fw-bolder"
                  >
                    Filtrar por Nome
                  </label>
                  <input
                    defaultValue={inputNome}
                    onChange={(e) => filtrarHoteis(e.target.value)}
                    type="text"
                    id="filtroNome"
                    className="form-control"
                  />
                </div>
                <div className="col-md-5 d-flex flex-column p-4 justify-content-start">
                  <label
                    htmlFor="inputSelect"
                    className="form-label text-start color-eclipse fw-bolder"
                  >
                    Ordenar Lista
                  </label>
                  <select
                    class="form-select"
                    id="inputSelect"
                    aria-label="Default select example"
                    onChange={(event) => ordenarHoteis(event.target.value)}
                  >
                    <option disabled selected>
                      Open this select menu
                    </option>
                    <option value="classificacao">Classificação</option>
                    <option value="preco">Preço</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <h2 className="color-eclipse text-start ms-4 fw-bolder">
                Hotéis
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className={
                `col-md-12 d-flex flex-wrap p-4` +
                (hoteisShow.length > 0
                  ? " justify-content-between"
                  : " justify-content-center")
              }
            >
              {exibirHoteis()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
