import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Status, Content, ButtonDiv } from "./styles";

import { RiDeleteBin3Line, RiFileAddFill } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Devs } from "../../components/Devs";
import { Button } from "../../components/Button";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente excluir esse projeto?");

    if (confirm) {
      await api.delete(`/projects/${params.id}`);
      navigate(-1);
    }
  }

  function formatDate(dataISO) {
    const data = new Date(dataISO);
    data.setDate(data.getDate() + 1)

    const day = data.getDate().toString().padStart(2, '0');
    const month = (data.getMonth() + 1).toString().padStart(2, '0');
    const year = data.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function calculateDaysRemaining(dataISO) {
    const dateDeadline = new Date(dataISO);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1)

    // Define o horário para o meio-dia para garantir comparações consistentes
    dateDeadline.setHours(12, 0, 0, 0);
    currentDate.setHours(12, 0, 0, 0);

    // Calcula a diferença em milissegundos
    const differenceInMilliseconds = dateDeadline - currentDate;

    // Converte a diferença para dias
    const daysRemaining = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return daysRemaining;
  }

  // Função para finalizar o projeto
  async function handleFinalize() {
    const confirm = window.confirm("Deseja realmente finalizar esse projeto?");

    if (confirm) {
      try {
        // Envia uma requisição para a API para finalizar o projeto
        await api.put(`/projects/${params.id}/updatestatus`);

        // Atualiza os dados do projeto após a finalização
        const response = await api.get(`/projects/${params.id}`);
        setData(response.data);
      } catch (error) {
        console.log("Erro ao finalizar o projeto:", error);
        // Trate o erro conforme necessário
      }
    }
  }


  useEffect(() => {
    async function fetchProject() {
      const response = await api.get(`/projects/${params.id}`);
      setData(response.data);
    }

    fetchProject();

  }, []);

  return (
   
      <Container>
        <Header />

        {
          data &&
          <main>
            <Content>
              <Section title="Nome do Projeto:">
                <Status>
                  {data.title}
                </Status>
              </Section>

              <Section title="Status:">
                <Status>
                  {data.status}
                </Status>
              </Section>

              <Section title="Prazo:">
                <Status>
                  {formatDate(data.expected_date)}
                </Status>
              </Section>

              <Section title="Restam:">
                <Status>

                  {calculateDaysRemaining(data.expected_date) === 0 ? (
                    <p>O prazo encerra hoje</p>
                  ) : (
                    calculateDaysRemaining(data.expected_date) > 0 ? (
                      `${calculateDaysRemaining(data.expected_date)} dias`
                    ) : (
                      <p>O prazo encerrou há {-calculateDaysRemaining(data.expected_date)} dias</p>
                    )
                  )}

                </Status>
              </Section>

              <Section title="Desenvolvedores:">

                {
                  data.developers &&

                  data.developers.map(dev => (
                    <Devs
                      key={String(dev.id)}
                      title={dev.name}
                    />
                  ))
                }

              </Section>

              <ButtonDiv>
                {data.status === "iniciado" && (
                  <ButtonText
                    title="Finalizar Projeto"
                    onClick={handleFinalize}
                  >
                    <RiFileAddFill />
                  </ButtonText>
                )}

                <ButtonText
                  style={{ color: 'red' }}
                  title="Excluir Projeto"
                  onClick={handleRemove}
                >
                  < RiDeleteBin3Line />
                </ButtonText>
              </ButtonDiv>

              <Button
                title="Voltar"
                onClick={handleBack}
              />
            </Content>
          </main>
        }
      </Container>
    );  
}