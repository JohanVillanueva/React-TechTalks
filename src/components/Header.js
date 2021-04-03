const Header = () => {
    // toda la logica del header
    return (
      <header>
          <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' height='100' alt='netflix logo'></img>
          <nav>
            <ul>
              <li>
                Inicio
              </li>
              <li>
                Películas
              </li>
              <li>
                Anime
              </li>

            </ul>

          </nav>
          <input type='text' placeholder='Buscar una película'></input>
      </header>
    );
}

export default Header;
