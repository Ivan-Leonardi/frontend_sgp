import { useState } from "react";
import { api } from "../../services/api";

import { Container, DivDate, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { StatusDropdown } from "../../components/StatusDropdown";
import { DevItem } from "../../components/DevItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";

export function New() {
    const [title, setTitle] = useState("");

    const [selectedStatus, setSelectedStatus] = useState('');

    const [expectedDate, setExpectedDate] = useState("");
    const [isDateValid, setIsDateValid] = useState(true);

    const [devs, setDevs] = useState([]);
    const [newDev, setNewDev] = useState("");

    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleStatusChange(newStatus) {
        setSelectedStatus(newStatus);
    }

    function handleDateChange(event) {
        const newDate = event.target.value;
        setExpectedDate(newDate);

        const currentDate = new Date();
        const selectDate = new Date(newDate);

        if (selectDate < currentDate) {
            setIsDateValid(false);
            alert("Data inválida");

        } else {
            setIsDateValid(true);
        }
    }

    function handleAddDev() {
        setDevs(prevState => [...prevState, newDev]);
        setNewDev("");
    }

    function handleRemoveDev(deleted) {
        setDevs(prevState => prevState.filter(dev => dev !== deleted));
    }

    async function handleNewProject() {
        try {

            const currentDate = new Date();

            if (title === "" || selectedStatus === "" || expectedDate === "" || expectedDate < currentDate) {               
                alert("Preencha todos os campos!");
                return;
            }

            if (newDev) {
                return alert("Você deixou um nome no campo Desenvolvedores, mas não clicou em adicionar")
            }

            if (devs.length === 0) {
                return alert("O campo de desenvolvedor está vazio. Insira um nome.");
            }

            await api.post("/projects", {
                title,
                expected_date: expectedDate,
                status: selectedStatus,
                developers: devs
            });

            alert("Projeto adicionado com sucesso!");
            navigate(-1);

        } catch (error) {
            console.log(error);
            return alert(error.message);
        }

    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar novo projeto</h1>
                        <ButtonText
                            title="Voltar"
                            onClick={handleBack}
                        />
                    </header>

                    <Input
                        placeholder="Nome do projeto"
                        type="text"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <StatusDropdown
                        onSelectStatus={handleStatusChange}
                    />

                    {/* <StatusProject
                        value={status}
                        onChange={handleStatusChange}                        
                     /> */}

                    <DivDate>
                        <label>Insira a data prazo</label>
                        <Input
                            placeholder=""
                            type="date"
                            value={expectedDate}
                            onChange={handleDateChange}
                        />
                    </DivDate>
                    <Section title="Insira os desenvolvedores do projeto">
                        <div className="devs">
                            {
                                devs.map((dev, index) => (
                                    <DevItem
                                        key={String(index)}
                                        value={dev}
                                        onClick={() => handleRemoveDev(dev)}

                                    />
                                ))
                            }
                            <DevItem
                                isNew
                                placeholder="Digite aqui o nome"
                                onChange={e => setNewDev(e.target.value)}
                                value={newDev}
                                onClick={handleAddDev}
                            />
                        </div>
                    </Section>

                    <Button
                        title="Salvar"
                        onClick={handleNewProject}
                    />

                </Form>
            </main>
        </Container>
    );
}