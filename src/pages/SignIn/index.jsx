import { useState } from "react";
import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();
    
    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <h1>Sistema de Gerenciamento de Projetos - <span>SGP</span></h1>
            <Form>
                {/* <h2>Gerencie seus projetos com uma aplicação simples e eficiente feita para Desenvolvedores</h2> */}

                <p>Faça seu Login</p>

                <Input
                    placeholder="E-mail"
                    type="email"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                 title="Entrar"
                 onClick={handleSignIn} 
                 />

                <span>
                    Ainda não criou uma conta?
                    <Link to="/register">
                        Criar conta
                    </Link>
                </span>

            </Form>
        </Container>
    );
}