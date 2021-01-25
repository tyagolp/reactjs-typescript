import React, { useCallback, useRef, useEffect, useState } from 'react';
import { FiUser, FiKey, FiItalic, FiMail, FiPhone, FiMap, FiCheckCircle, FiArrowLeftCircle } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { Link, useHistory, useLocation  } from 'react-router-dom'
import queryString from 'query-string';

import api from '../../../services/api'
import { useToast } from '../../../hook/toast'
import getValidationsErrors from '../../../utils/getValidationsErrors'

 import { Content, ContentAlignBetween } from './styles';

 import {cliente} from '../All'
 import Input from '../../../components/Input'
 import Button from '../../../components/Button'

const ClienteCadastro: React.FC = () => {

    const [clientes, setClientes] = useState<cliente>();
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();
    const {search} = useLocation();
    const {id} = queryString.parse(search);

    const { addToast } = useToast()

    useEffect(()=>{   

        async function loadData() {
            if(id){
                const {data} = await api.get(`cliente/${id}`);
                if(data.length > 0){
                    setClientes(data[0]);
                } 
            }
        }
        loadData();        
    }, [id]);


    const handleSubmit = useCallback( async (data: cliente) =>{
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
            if(id){
                data.id = id?.toString()   
                await api.put('cliente', data);   
                
                addToast({
                    type:'success',
                    title: 'Cliente editado com sucesso!'
                });
            }
            else{       
                await api.post('cliente', data);            
                addToast({
                    type:'success',
                    title: 'Cliente cadastrado com sucesso!'
                });    
            }           
            setTimeout(() =>{
                history.push('/');                
            },1000)
        } catch (err) {   
            if(err instanceof Yup.ValidationError){
                const errors = getValidationsErrors(err)         
                formRef.current?.setErrors(errors);
            } 
            else{         
                addToast({
                    type:'error',
                    title: 'Erro ao tentar salvar o cliente!',
                    description: err.response.data.message
                });
            }        
        }
    }, [ addToast, history, id])
    
    return (
        <Content>
            <Form ref={formRef} initialData={clientes} onSubmit={handleSubmit}>
                {id ? <h1>Edição de Cliente</h1> : <h1>Cadastro de Cliente</h1>}

                <Input name="nome" type="text" icon={FiUser} placeholder="Nome*" maxLength={100} />
                <Input name="cpf" type="text" icon={FiKey} placeholder="CPF*" maxLength={14} />
                <Input name="rg" type="text" icon={FiKey} placeholder="RG" maxLength={14} />
                <Input name="email" type="text" icon={FiMail} placeholder="E-mail" maxLength={100} />
                <Input name="telefone" type="text" icon={FiPhone} placeholder="Telefone" maxLength={20} />
                <Input name="logradouro" type="text" icon={FiMap} placeholder="Logradouro*" maxLength={60} />
                <Input name="numero" type="text" icon={FiMap} placeholder="Numero*" maxLength={10} />
                <Input name="bairro" type="text" icon={FiMap} placeholder="Bairro*" maxLength={60} />
                <Input name="cidade" type="text" icon={FiMap} placeholder="Cidade*" maxLength={50} />
                <Input name="estado" type="text" icon={FiMap} placeholder="Estado*" maxLength={2} />
                <Input name="cep" type="text" icon={FiMap} placeholder="Cep*" maxLength={9} />
                <Input name="complemento" type="text" icon={FiItalic} placeholder="Complemento" maxLength={100} />

                <ContentAlignBetween>
                    <Link to="/">
                        <FiArrowLeftCircle size={20} />
                        Voltar
                    </Link>

                    <Button type="submit">
                        <FiCheckCircle size={20} />
                        Salvar
                    </Button>
                </ContentAlignBetween>

            </Form>
        </Content>)
}

export default ClienteCadastro;