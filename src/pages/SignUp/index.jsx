import { useState } from "react";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { api } from "../../services/api";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
           return alert("Preencha todos os campos!");
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar")
            }
        }); 
    }

    return (
        <Container>
            <h1>
                Sistema de Gerenciamento de Projetos - <span>SGP</span>
            </h1>
            <h2>
                Gerencie seus projetos com uma aplicação simples e eficiente feita para Desenvolvedores
            </h2>         
             <Form>         
                <p>Crie sua conta</p>
                <Input
                    placeholder="Nome de usuário"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
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
                title="Cadastrar"
                onClick={handleSignUp} 
                />

                <span>
                    Já possui uma conta? 
                    <Link to="/">
                        Fazer login
                    </Link>
                </span>
                
            </Form>
        </Container>
    );
}