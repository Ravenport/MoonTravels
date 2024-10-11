import styles from "./detalhes.module.css";
import Header from "../../components/header/header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Detalhes(props) {
  let { id } = useParams();
  let navigate = useNavigate();
  const [hotel, setHotel] = useState([]);
  const [imgAtual, setImgAtual] = useState("");
  useEffect(() => {
    document.querySelector("body").classList.add("bg-eclipse");
    let hoteisString = JSON.parse(localStorage.getItem("@hoteis"));
    let hotelTemp = hoteisString.filter((item) => item.id == id);
    setHotel(hotelTemp[0]);
    setImgAtual(hotelTemp[0].imgMain);
  }, []);

  function excluirHotel() {
    let hoteisString = JSON.parse(localStorage.getItem("@hoteis"));
    hoteisString = hoteisString.filter((item) => item.id !== hotel.id);
    hoteisString = JSON.stringify(hoteisString);
    localStorage.setItem("@hoteis", hoteisString);
    navigate("/");
  }

  function renderImgs() {
    if (hotel.length !== 0) {
      return hotel.imgs.map((img) => {
        return (
          <div className="bg-white mt-2">
            <img
              onClick={() => {
                setImgAtual(img);
              }}
              className="img-fluid w-100"
              src={img}
              alt="foto-do-hotel"
            />
          </div>
        );
      });
    }
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 mt-5 mb-5">
            <Header />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12">
            <div className="row d-flex justify-content-between">
              <div className="col-sm-4 d-flex align-items-center">
                <h3 className="ms-5 fs-1 color-moon fw-bolder">{hotel.nome}</h3>
              </div>
              <div className="col-sm-4 d-flex align-items-center justify-content-end">
                <button className="btn btn-danger" onClick={excluirHotel}>
                  <i class="bi bi-trash-fill"></i> Excluir
                </button>
                <a
                  href={"/editar/" + hotel.id}
                  className="btn btn-success ms-2"
                >
                  <i class="bi bi-pencil"></i> Editar
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="row mt-5">
                  <div className="col-sm-12 mt-5 d-flex justify-content-center">
                    <div className="w-75">
                      <img
                        src={imgAtual}
                        alt={hotel.nome}
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3 mb-5">
                  <div className="col-sm-12 d-flex flex-wrap justify-content-around">
                    <div className="bg-white mt-2">
                      <img
                        onClick={() => {
                          setImgAtual(hotel.imgMain);
                        }}
                        className="img-fluid w-100"
                        src={hotel.imgMain}
                        alt="foto-do-hotel"
                      />
                    </div>
                    {renderImgs()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12">
            <h3 className="color-moon fs-2">Descricao</h3>
            <div className="row">
              <div className="col-sm-12">
                <p className="color-moon">{hotel.descricao}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12">
            <h3 className="color-moon fs-2">Servicos</h3>
            <div className="row">
              <div className="col-sm-12">
                <p className="color-moon">{hotel.servicos}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
