import css from "./Caixas.module.css"

function Caixas(props){
    return(
        <div className={"col-md-4 col-sm-12 text-center "+ css.prodCaixa}>
            <div>
                <img className={css.curtir} src="/coracao%20(1).png"/>
                <img className={css.img} src={props.imagem}/>

                <h4>{props.descricao}</h4>
                <h1>{props.preco}</h1>
            </div>
            <button className={css.botaoComprar}>COMPRAR</button>
        </div>
    )
}

export default Caixas