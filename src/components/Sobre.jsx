import css from "./Sobre.module.css"

function Sobre(){
    return(
        <div className={"row " + css.linhaSobre}>
            <div className={"col-md-4 " + css.sobreEmpresa}>
                <h1 className={css.sobre}>SOBRE NÓS</h1>
            </div>
            <div className={"col-md-8"}>
                <h2 className={css.sobreDes}>A FunLand, uma empresa dedicada a brinquedos infantis e para adolescentes, foi fundada com uma visão simples: proporcionar diversão e aprendizado por meio de brinquedos de alta qualidade. Ao longo dos últimos 10 anos, a empresa percorreu uma trajetória notável, crescendo de uma pequena loja local para uma marca reconhecida nacionalmente.
                    A FunLand conquistou o coração de crianças e adolescentes, tornando-se sinônimo de alegria e criatividade. Com uma ampla gama de produtos inovadores, desde jogos educativos até brinquedos de entretenimento, a empresa inspirou gerações a explorar, aprender e se divertir.
                    O sucesso da FunLand é uma celebração do compromisso com a qualidade, inovação e, acima de tudo, a missão de tornar a infância uma época mágica. A jornada de 10 anos é apenas o começo, e a FunLand continua a oferecer um mundo de possibilidades para as próximas décadas, mantendo o espírito de diversão e aprendizado sempre em primeiro lugar.</h2>
            </div>
        </div>

    )
}

export default Sobre