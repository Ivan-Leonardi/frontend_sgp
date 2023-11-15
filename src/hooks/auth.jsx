// criação de um Contexto para acessar os dados do usuário
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [data, setData] = useState({});


    //função para login do usuário
    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });

            const { user, token } = response.data;


            //salvando os dados no lacal storage
            localStorage.setItem("@sgp:user", JSON.stringify(user));//convertendo o objeto user em texto
            localStorage.setItem("@sgp:token", token);// o token não precisa pq já é no formato de texto (string)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;//Inserindo o token em todas as requisições que o usuário fizer
             
            setData({ user, token });

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar")
            }
        }
    }

    //função para sair da aplicação
    function signOut() {
        localStorage.removeItem("@sgp:token");
        localStorage.removeItem("@sgp:user");

        setData({}); // Aqui definindo os dados como um objeto vazio para levar o usuário para a rota de login novamente
    }
    
    async function updateProfile({ user, avatarFile }) {
        try {

            if (avatarFile) {
                const fileUploadForm = new FormData(); //criando um form
                fileUploadForm.append("avatar", avatarFile); // inserindo o campo avatar, e o valor avatarFile, pois é isso que o bacjend espera

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@sgp:user", JSON.stringify(user));

            setData({
                user,
                token: data.token
            });

            alert("Perfil atualizado com sucesso!");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar.")
            }
        }
    }

    // usando o useEffect para garantir que quando a página for recarregada os dados do usuário irão persistir
    useEffect(() => {
        const token = localStorage.getItem("@sgp:token");
        const user = localStorage.getItem("@sgp:user");

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ 
            signIn, 
            user: data.user, 
            signOut,
            updateProfile 
        }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };