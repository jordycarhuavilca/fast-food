# fast-food
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Food</title>

    <!-- link of bootstrap -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    />
    <!-- link for icons -->
    <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
    <!-- stylies -->
    <link rel="stylesheet" href="./css/estilos.css" />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      defer
    ></script>
    <script src="js/main.js" defer></script>
  </head>

  <body>
    <div class="container-fluid">
      <header>
        <div class="row d-flex flex-nowrap">
          <div class="col">
            <div class="row d-flex flex-nowrap align-items-center">
              <div class="col-auto d-flex align-items-center">
                <svg
                  class="logo-hamburger"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="20"
                  viewBox="0 0 24 24"
                  style="fill: rgba(0, 0, 0, 1)"
                >
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                </svg>
                <div class="col d-flex d-none d-xl-block">
                  <a class="logo-tittle" href="inicio.html">FastFood</a>
                </div>
              </div>

              <div
                class="style-container-location col-auto col-xl-1 d-flex flex-nowrap align-items-center d-none d-xl-block"
              >
                <a href="#" class="d-flex flex-nowrap align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="26"
                    viewBox="0 0 24 24"
                    style="fill: rgba(0, 0, 0, 1)"
                  >
                    <path
                      d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
                    ></path>
                  </svg>
                  <span class="container-location_lima txt_font2_menuDespleagable">Lima</span>
                </a>
              </div>
              <!-- Search-bar -->
              <div class="col">
                <form
                  action=""
                  method="dialog"
                  class="search-bar d-flex align-items-center align-self-center"
                >
                  <img
                    class="logo-img"
                    src="./img/flame-110.png"
                    alt=""
                    width="12em"
                    height="12em"
                  />
                  <input type="text" placeholder="Buscar en Fast Food" class="search" />
                  <svg
                    class="search-bar-icon-bar"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="18"
                    viewBox="0 0 24 24"
                    style="fill: #787878"
                  >
                    <path
                      d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                    ></path>
                  </svg>
                </form>
              </div>
            </div>
          </div>
          <!--User-->
          <div class="container-user-carrito col-auto d-flex align-items-center">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="26"
                viewBox="0 0 24 24"
                style="fill: #464646"
              >
                <path
                  d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"
                ></path>
                <path
                  d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"
                ></path>
              </svg>
            </a>
            <a
              class="container-user-carrito_txt_usuario d-none d-xl-block txt_font2_menuDespleagable"
              href=""
              >Usuario</a
            >
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="26"
                viewBox="0 0 24 24"
                style="fill: #464646"
              >
                <path
                  d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"
                ></path>
                <circle cx="10.5" cy="19.5" r="1.5"></circle>
                <circle cx="17.5" cy="19.5" r="1.5"></circle>
              </svg>
            </a>
          </div>
        </div>
      </header>
      <!-- 2 Nav--bar -->
      <!--  -->
      <!--  -->
      <nav class="navbar navbar-dark bg-gray fixed-top disactive" id="nav_bar_desplegable">
        <div class="container-fluid">
          <a class="navbar-brand txt_font1" href="#">FastFood</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <a href="#" class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                <img class="logo-img" src="./img/flame-110.png" alt="" width="20em" height="30em" />
              </a>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active txt_font_menuDespleagable" aria-current="page" href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link txt_font_menuDespleagable" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle txt_font_menuDespleagable"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item txt_font_dropDown" href="#">Action</a></li>
                    <li><a class="dropdown-item txt_font_dropDown" href="#">Another action</a></li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item txt_font_dropDown" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </body>
</html>
