import React, { FormEvent, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Lottie from 'react-lottie'
import api from '../../service/api'
import animationData from '../../assets/animation/loading.json'
import {toast} from 'react-toastify'
import { FormSignInContent } from './style'

interface IUserLogin {
    usuario: string;
    senha: string;

}

const FormSignUp: React.FC = () => {
    const [formDataContent, setFormDataContent] = useState<IUserLogin>({} as IUserLogin)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const history = useHistory()

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setIsLoading(true)

            api.post('login', formDataContent).then(
                response => {
                    localStorage.setItem('@tokenAfyaApp', response.data.token)
                    // if ( response.status === 200 ) alert('tudo certo')
                    toast.success('Login realizado com sucesso', {
                        onClose: () => history.push('/dash')
                    })
                }
            ).catch( (e) => toast.error('Algo deu errado')
            ).finally( () => setIsLoading(false))
            // setTimeout(() => {
            //     setIsLoading(false)
            // }, 1000)
            
        }, [formDataContent, history]
    )

    const animationContent = {
        loop: true,
        autoplay: true,
        animationData: animationData
    }

    return (
        <div>
            <FormSignInContent> 
            { isLoading ? (
                <Lottie 
                    options={animationContent} 
                    width={400}
                    height={400} 
                />
            ) : (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Insira seu login" 
                        onChange={(e) => setFormDataContent({...formDataContent, usuario: e.target.value})}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Insira sua senha" 
                        onChange={(e) => setFormDataContent({...formDataContent, senha: e.target.value})}
                    />
                    <input type="submit" value="Login" />
                </form>
            )}
            </FormSignInContent>
        </div>
    )
}

export default FormSignUp