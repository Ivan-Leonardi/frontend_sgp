import { Container } from "./styles";

export function Devs({ title, ...rest }) {
    return (
        <Container {...rest}>
            { title }
        </Container>
    )
}