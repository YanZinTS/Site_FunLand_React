import css from "./Rodape.module.css"

function Rodape(){
    return(
        <div className={"row " + css.linha}>
            <div className={"col-md-10 " + css.finalSobreEmpresa}>
                <p className={css.sobre}>2013 - 2023 ©FunLandService - Todos os direitos reservados.Termos e condições. Políticas de privacidade.</p>
            </div>

            <div className={"col-md-2"}>
                <a className={css.botao1} href="https://www.instagram.com/tntsportsbr/" target="_blank" rel="noopener noreferrer"> <img className={css.img} src="/iconInstagram.png"/> </a>
                <a className={css.botao2} href="https://api.whatsapp.com/send?phone=18996489916" target="_blank" rel="noopener noreferrer"> <img className={css.img} src="/iconWhatsapp.png"/> </a>
            </div>

            <div>
                <p className={css.finalSite}>FunLand Comércio de Brinquedos e Eletrônicos Ltda - CNPJ: 33.656.691/0001-35</p>
            </div>
        </div>

    )
}

export default Rodape