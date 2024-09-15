import './App.css';
import Topo from './componentes/Topo';
import Banner from './componentes/Conteudo/Banner';
import Produtos from './componentes/Conteudo/Produtos';
import Sobre from './componentes/Conteudo/Sobre';
import Contatos from './componentes/Conteudo/Contatos';
import Roda from './componentes/Conteudo/Rodape';

function App() {
  return (
    <div className="App">
      <Topo/>
      <Banner/>
      <Produtos/>
      <Sobre/>
      <Contatos/>
      <Roda/>
    </div>
  );
}

export default App;
