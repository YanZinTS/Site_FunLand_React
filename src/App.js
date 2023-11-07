import './App.css';
import Header from "./components/Header";
import Item from "./components/Item";
import Categorias from "./components/Categorias";
import Caixas from "./components/Caixas";
import Sobre from "./components/Sobre";
import Rodape from "./components/Rodape";

function App() {
  return (
    <div className="container-fluid">
        <Header></Header>
        <div className="row ">
            <div className="col-md-12 divTitulo ">
                <h1 className="titulo">EM OFERTAS</h1>
                <hr/>
            </div>

            <Item imagem="/bonecoHomemAranha.png" descricao="LEGO Homem Aranha" preco="R$ 89,90"></Item>
            <Item imagem="/nerf.png" descricao="Pistola NERF" preco="R$ 109,90"></Item>
            <Item imagem="/Frame 1.png" descricao="Boneca Barbie" preco="R$ 67,90"></Item>
            <Item imagem="/carrinhoHotwheels.png" descricao="HotWheels GTR-R35" preco="R$ 15,90"></Item>
        </div>

        <div className="row text-center fundoCategoria">
            <div className="col-md-12 tituloCate">
                <h1>NAVEGUE POR NOSSAS CATEGORIAS</h1>
            </div>

            <Categorias imagem="/cate1.png" descricao="1 a 3 anos"></Categorias>
            <Categorias imagem="/cate2.png" descricao="4 a 6 anos"></Categorias>
            <Categorias imagem="/cate3.png" descricao="6 anos ou mais"></Categorias>
        </div>

        <div className="row ">
            <div className="col-md-12 divTitulo">
                <h1 className="titulo">1 a 3 anos</h1>
                <hr/>
            </div>

            <Item imagem="/bonecoTecido.jpg" descricao="Boneco de Tecido" preco="R$ 50,90"></Item>
            <Item imagem="/xilofone.png" descricao="Xilofone Infantil" preco="R$ 78,90"></Item>
            <Item imagem="/cavalinho.png" descricao="Cavalinho Pocotó" preco="R$ 99,90"></Item>
            <Item imagem="/bola.jpg" descricao="Bola Maluca" preco="R$ 21,90"></Item>
        </div>

        <div className="row ">
            <div className="col-md-12 divTitulo">
                <h1 className="titulo">4 a 6 anos</h1>
                <hr/>
            </div>

            <Item imagem="/trenzinho.jpg" descricao="Trenzinho" preco="R$ 60,90"></Item>
            <Item imagem="/quebraCabeca.jpg" descricao="Quebra Cabeça" preco="R$ 25,90"></Item>
            <Item imagem="/viola.webp" descricao="Viola Infantil" preco="R$ 33,90"></Item>
            <Item imagem="/animais.webp" descricao="Animais Fazenda" preco="R$ 19,90"></Item>
        </div>

        <div className="row ">
            <div className="col-md-12 divTitulo">
                <h1 className="titulo">6 anos ou mais</h1>
                <hr/>
            </div>

            <Item imagem="/pipa.jpg" descricao="Pipa" preco="R$ 6,90"></Item>
            <Item imagem="/skate.jpg" descricao="Skate" preco="R$ 105,90"></Item>
            <Item imagem="/nintendo.webp" descricao="Nintendo Switch" preco="R$ 1099,90"></Item>
            <Item imagem="/euSou.jpg" descricao="Jogo de adivinha “EU SOU”" preco="R$ 79,90"></Item>
        </div>

        <div className="row fundoCaixas">
            <div className="col-md-12 divTitulo">
                <h1 className="titulo2">PACOTES PARA PRESENTES</h1>
                <hr/>
            </div>

            <Caixas imagem="/caixa1.png" descricao="Pacote Misterioso GAMER" preco="R$ 230,90"></Caixas>
            <Caixas imagem="/caixa2.png" descricao="Pacote Misterioso MARVEL" preco="R$ 189,90"></Caixas>
            <Caixas imagem="/caixa3.png" descricao="Pacote Misterioso Inédito" preco="R$ 300,90"></Caixas>
        </div>

        <Sobre></Sobre>
        <Rodape></Rodape>
    </div>
  );
}

export default App;