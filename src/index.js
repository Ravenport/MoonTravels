import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Cadastro from "./pages/cadastro/cadastro";
import Detalhes from "./pages/detalhes/detalhes";
import Edicao from "./pages/edicao/edicao";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cadastro", element: <Cadastro /> },
  { path: "/detalhes/:id", element: <Detalhes /> },
  { path: "/editar/:id", element: <Edicao /> },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
