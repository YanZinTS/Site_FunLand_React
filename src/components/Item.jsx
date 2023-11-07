import css from "./Item.module.css"

function Item(props){
    return(
        <div className={"col-md-3 col-sm-6 text-center " + css.prodItem}>
            <div>
                <img className={css.curtir} src="/coracao.png"/>
                <img className={css.img} src={props.imagem}/>

                <h4>{props.descricao}</h4>
                <h1>{props.preco}</h1>
            </div>
            <button className={css.botaoComprar}>COMPRAR</button>
        </div>
    )
}

export default Item