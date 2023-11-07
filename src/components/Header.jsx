import css from "./Header.module.css"

function Header(){
    return(
        <header className={"row text-center " + css.header}>
            <div className="col-md-4 ">
                <button className={css.botao}><img className={css.img} src="/whatsapp%20(1).png"/>Fale Conosco</button>
            </div>
            <div className="col-md-4">
                <div className={css.divLogo}>
                    <img src="/NomeEmpresaFundoRemov.png"/>
                    <img src="/HomemAranhaFundoRemov.png" className={css.miranha} />
                </div>
            </div>

            <div className="col-md-4">
                <nav>
                    <a>Categorias &#9660;</a>
                </nav>
            </div>
        </header>
    )
}

export default Header