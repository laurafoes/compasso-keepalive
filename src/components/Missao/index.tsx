import { Container, Destaque, DestaqueGrande, Traducao } from "./MissaoElements"

export const Missao = () => {
    return(
        <Container>
            <Destaque>Our mission is</Destaque>
            <Traducao>Nossa missão é</Traducao>
            <DestaqueGrande>to transform the world</DestaqueGrande>
            <Traducao>transformar o mundo</Traducao>
            <DestaqueGrande>building digital experiences</DestaqueGrande>
            <Traducao>construindo experiências digitais</Traducao>
            <DestaqueGrande>that enable our client's growth</DestaqueGrande>
            <Traducao>que permitam o crescimento dos nossos clientes</Traducao>
        </Container>
    )
}