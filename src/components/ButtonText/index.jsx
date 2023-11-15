import { Container } from "./styles";

export function ButtonText({ title, children, isActive = false, ...rest }) {
    return (
        <Container 
        type="button"
        isActive={isActive}
        {...rest}
        >
            { title }
            { children }
        </Container>
    );
}