export default class CasitaView {
  presenterPath() {
    return `./presenterCasita.js`;
  }

  render() {
    return `<main>
    <div class="features_container">
      <div id = "search_bar"> 
        <form id="search_form"> 
          <p>Buscar</p>
          <input type="text" value="" id="search_box" placeholder="Busca Algo"/>
        </form>
        <form id="search_autor_form"> 
          <p>Buscar por autor</p>
          <input type="text" value="" id="search_autor_box" placeholder="Busca un autor"/>
          <input type="submit" value="Buscar" id="autor_button">
        </form>
        <div>
          <form id="filter_form">
            <label for="Atributos">Ordenar por:</label>
            <select name="Atributos" id="order_attribute">
                <option value="DifficultadAscendente">Dificultad Ascendente</option>
                <option value="CreacionAscendente">fecha creacion ascendente</option>
                <option value="CreacionDescendente">fecha creacion descendente</option>
                <option value="NombreAutorDescendente">Nombre de autor descendente</option>
                <option value="NombreAutorAscendente">Nombre de autor ascendente</option>
            </select>
            <br><br>
            <label for="Atributos">Categoria:</label>
            <select id="category_attribute">
                <option value="" selected disabled hidden>Selecciona una categoria</option>
                <option value="Fundamentos">Fundamentos</option>
                <option value="Algoritmos">Algoritmos</option>
                <option value="Patrones">Patrones de disenio</option>
            </select>
            <input type="submit" value="Buscar" id="filter_button">
          </form>

          <form id="difficulty_form">
            <br><br>
              <label for="Atributos">Dificultad:</label>
              <select id="difficulty_attribute">
                  <option value="" selected disabled hidden>Selecciona una dificultad</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
              </select>
              <input type="submit" value="Buscar" id="filter_difficulty_button">
          </form>

        </div>
        

        <div>
          <input type="submit" value="Mostrar Katas con Solucion" id="filter_with_solution">
        </div>
        <div>
        <input type="submit" value="Mostrar Katas no Resueltas" id="filter_no_solved">
      </div>
      </div>
      <div class="catalog_title_container">
        <h1>
          OUR KATALOG
        </h1>
      </div>
      <div class="show_catalog_container">
        <div id="show_result"></div>
      </div>   
    </div>
  </main>`;
  }
}