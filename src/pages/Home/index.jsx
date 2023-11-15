import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Box, Content, NewProject } from './styles';

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { ProjectDev } from "../../components/ProjectDev";

import { api } from "../../services/api";

export function Home() {
    const [projectsWithDevelopers, setProjectsWithDevelopers] = useState([]);
    const [search, setSearch] = useState("");
    const [devs, setDevs] = useState([]);
    const [devsSelected, setDevsSelected] = useState([]);

    const navigate = useNavigate();

    function handleDevSelected(devName) {
        if (devName === "all") {
            return setDevsSelected([]);
        }

        const alreadySelected = devsSelected.includes(devName);

        if (alreadySelected) {
            const filteredDevs = devsSelected.filter(dev => dev !== devName);
            setDevsSelected(filteredDevs);

        } else {
            setDevsSelected(prevState => [...prevState, devName]);
        }
    }

    function handleDetails(id) {
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchDevs() {
            const response = await api.get("/developers");
            setDevs(response.data);
        }

        fetchDevs();
    }, []);   

    useEffect(() => {
        async function fetchProjects() {
            const response = await api.get(`/projects?title=${search}&developers=${devsSelected.join(",")}`);
    
            setProjectsWithDevelopers(response.data.projectsWithDevelopers);            
        }       

        fetchProjects();
    }, [devsSelected, search]);      

    return (
        <>
            <Header />
            <Brand>
                <h1>Gerencie seus projetos</h1>
            </Brand>

            <Container>

                <Search>
                    <Input
                        type="text"
                        placeholder="Pesquise pelo projeto"
                        icon={FiSearch}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Search>

                <NewProject to="/new">
                    <FiPlus />
                    Novo Projeto
                </NewProject>

            </Container>

            <Box>
                <Menu>
                    <p>Buscar por Devs</p>
                    <li>
                        <ButtonText
                            title="Todos"
                            isActive={devsSelected.length === 0}
                            onClick={() => handleDevSelected("all")}
                        />
                    </li>
                    {
                        devs && devs.map(dev => (
                            <li
                                key={String(dev.id)}
                            >
                                <ButtonText
                                    title={dev.name}
                                    isActive={devsSelected.includes(dev.name)}
                                    onClick={() => handleDevSelected(dev.name)}
                                />
                            </li>
                        ))
                    }
                </Menu>

                <Content>

                    <Section title="Meus projetos">
                        
                        {                       

                            projectsWithDevelopers ?  (projectsWithDevelopers.map((project) => (
                                <ProjectDev
                                    key={String(project.id)}
                                    data={project}
                                    onClick={() => handleDetails(project.id)}
                                />
                            ))
                            
                                )  : (
                                    <p>Nenhum projeto encontrado</p>
                                )
                        }
                    </Section>

                </Content>
            </Box>
        </>
    );
}