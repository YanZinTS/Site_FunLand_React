import css from "./Categorias.module.css"

function Categorias(props){
    return(
        <div className="col-md-4 col-sm-12 text-center">
            <img className={css.img} src={props.imagem}/>

            <h3>{props.descricao}</h3>
        </div>
    )
}

export default Categorias