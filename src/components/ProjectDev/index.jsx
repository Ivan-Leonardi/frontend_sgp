import { Devs } from "../Devs";
import { Container } from "./styles";

export function ProjectDev({ data, ...rest }) {   
    
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>            

            {
                data.developers &&
                <footer>
                    <p>Devs:</p>
                    {
                        data.developers.map(dev =>
                            <Devs key={dev.id} title={dev.name} />
                        )
                    }
                    
                </footer>
            }           
        </Container>
    );
}