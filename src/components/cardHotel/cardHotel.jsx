import "./cardHotel.css";
export default function CardHotel(props) {
  return (
    <>
      <div className="card">
        <img
          className="card-img-top"
          src={props.hotel.imgs[0]}
          alt="Card image cap"
        />
        <div className="card-body mt-2">
          <h4 className="card-title fw-bolder text-start">
            {props.hotel.nome}
          </h4>
          <div className="d-flex justify-content-start">
            <p>
              {props.hotel.classificacao} <i className="bi bi-star-fill"></i>
            </p>
            <p className="ms-3">
              <i className="bi bi-compass"></i> {props.hotel.localizacao}
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="text-start mb-0">
              {new Intl.NumberFormat("pt-Br", {
                style: "currency",
                currency: "BRL",
              }).format(props.hotel.preco)}
            </h5>
            <a
              className="bg-eclipse rounded p-1 pt-0 pb-0"
              href={"/detalhes/" + props.hotel.id}
            >
              <i className="bi bi-list fs-4 color-moon"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
