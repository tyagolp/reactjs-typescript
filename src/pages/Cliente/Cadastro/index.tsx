import React, { useCallback, useRef } from 'react';
import { FiUser, FiKey, FiItalic, FiMail, FiPhone, FiMap } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import api from '../../../services/api'
import { useToast } from '../../../hook/toast'
import getValidationsErrors from '../../../utils/getValidationsErrors'

 import { Container, Content } from './styles';

 import Input from '../../../components/Input'
 import Button from '../../../components/Button'

const ClienteCadastro: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const { addToast } = useToast()

    const handleSubmit = useCallback( async (data: object) =>{
        try {      
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                nome: Yup.string().required('Nome Obrigatório').min(3, 'No mínimo 3 dígitos'),
                cpf: Yup.string().required('CPF Obrigatório').length(14, 'CPF deve contem 14 dígitos'),
                rg: Yup.string(),
                email: Yup.string().email('Digite um E-mail válido'),
                telefone: Yup.string(),
                logradouro: Yup.string().required('Logradouro Obrigatório').min(3, 'No mínimo 3 dígitos'),
                numero: Yup.string(),
                bairro: Yup.string().required('Bairro Obrigatório').min(3, 'No mínimo 3 dígitos'),
                cidade: Yup.string().required('Cidade Obrigatório').min(3, 'No mínimo 3 dígitos'),
                estado: Yup.string().required('Estado Obrigatório').length(2, 'Estado deve contem 2 dígitos'),
                cep: Yup.string().required('Cep Obrigatório').length(9, 'CEP deve contem 9 dígitos'),
                complemento: Yup.string(),
            });

            await schema.validate(data,{
                abortEarly: false
            });
            

            await api.post('cliente', data);

        } catch (err) {
            if(err instanceof Yup.ValidationError){
                const errors = getValidationsErrors(err)         
                formRef.current?.setErrors(errors);
            }
        }

        addToast({
            type:'error',
            title: 'Erro na authenticação',
            description: 'Ocorreu o erro ao fazer o login'
        });
    }, [])
    
    return (
    <Container>
        <Content>
            <Form ref={formRef} initialData={{}} onSubmit={handleSubmit}>
                <h1>Cadastro de Cliente</h1>

                <Input name="nome" type="text" icon={FiUser} placeholder="Nome*" />
                <Input name="cpf" type="text" icon={FiKey} placeholder="CPF*" />
                <Input name="rg" type="text" icon={FiKey} placeholder="RG" />
                <Input name="email" type="text" icon={FiMail} placeholder="E-mail" />
                <Input name="telefone" type="text" icon={FiPhone} placeholder="Telefone" />
                <Input name="logradouro" type="text" icon={FiMap} placeholder="Logradouro*" />
                <Input name="numero" type="text" icon={FiMap} placeholder="Numero*" />
                <Input name="bairro" type="text" icon={FiMap} placeholder="Bairro*" />
                <Input name="cidade" type="text" icon={FiMap} placeholder="Cidade*" />
                <Input name="estado" type="text" icon={FiMap} placeholder="Estado*" />
                <Input name="cep" type="text" icon={FiMap} placeholder="Cep*" />
                <Input name="complemento" type="text" icon={FiItalic} placeholder="Complemento" />

                <Button type="submit">
                    Salvar
                </Button>
            </Form>
        </Content>
  </Container>)
}

export default ClienteCadastro;