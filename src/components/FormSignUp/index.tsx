import React, { FormEvent, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../service/api'
import {toast} from 'react-toastify'

interface IUserRegister {
    cpf: string;
    nome: string;
    login: string;
    senha: string;

}

const FormSignUp: React.FC = () => {
    const [formDataContent, setFormDataContent] = useState<IUserRegister>({} as IUserRegister)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const history = useHistory()

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setIsLoading(true)

            api.post('usuarios', formDataContent).then(
                response => {
                    // if ( response.status === 200 ) alert('tudo certo')
                    toast.success('Cadastro realizado com sucesso', {
                        onClose: () => history.push('/login')
                    })
                }
            ).catch( (e) => toast.error('Algo deu errado')
            ).finally( () => setIsLoading(false))
            // setTimeout(() => {
            //     setIsLoading(false)
            // }, 1000)
            
        }, [formDataContent, history]
    )

    return (
        <div>
            { isLoading ? (
                <p>Carregando...</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="digite seu nome" 
                        onChange={(e) => setFormDataContent({...formDataContent, nome: e.target.value})}
                    />
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Insira seu login" 
                        onChange={(e) => setFormDataContent({...formDataContent, login: e.target.value})}
                    />
                    <input 
                        type="text" 
                        name="cpf" 
                        placeholder="Insira seu CPF" 
                        onChange={(e) => setFormDataContent({...formDataContent, cpf: e.target.value})}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Insira sua senha" 
                        onChange={(e) => setFormDataContent({...formDataContent, senha: e.target.value})}
                    />
                    <input type="submit" value="Criar conta" />
                </form>
            )}
        </div>
    )
}

export default FormSignUp