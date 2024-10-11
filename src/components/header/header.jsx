import "./header.css";
export default function Header() {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid row">
          <a className="navbar-brand col-md-2" href="/">
            <img
              id="logoHeader"
              src="..\images\moontravel-logo-png-fundo-transparente.png"
              alt="Logo"
              className="d-inline-block align-text-top w-75"
            />
          </a>
          <div className="col-md-9">
            <div
              id="containerHeaderOffcanvas"
              className="d-flex justify-content-end"
            >
              <button
                className="navbar-toggler p-1 btnHeader"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <i className="bi bi-list fs-3"></i>
              </button>
            </div>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <span className="offcanvas-title" id="offcanvasNavbarLabel">
                  <img
                    src="..\images\moontravel-logo-png-fundo-transparente.png"
                    alt="Logo"
                    className="d-inline-block align-text-top logoOffCanvas"
                  />
                </span>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-target="#offcanvasNavbar"
                  data-bs-toggle="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body d-flex flex-column align-items-start ps-4">
                <a className="nav-link fs-5 active me-2" href="/">
                  <i className="bi bi-house"></i> Início
                </a>
                <a className="nav-link fs-5 active me-4" href="/cadastro">
                  <i className="bi bi-pencil-square"></i> Cadastro
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
