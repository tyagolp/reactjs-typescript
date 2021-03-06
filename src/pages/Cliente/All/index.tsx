import React, {useCallback, useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom'
import { FiPlusCircle } from 'react-icons/fi'

import api from '../../../services/api'
import { Container, ContentAlignRigth } from './styles';
import { useToast } from '../../../hook/toast'

import Table from '../../../components/Table'

export interface cliente {
    id: string;
    nome: string;
    cpf: string;
    rg: string;
    email: string;
    telefone: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    complemento: string;
}

const All: React.FC = () => {

    const [clientes, setClientes] = useState<cliente[]>([]);
    const history = useHistory();
    const { addToast } = useToast()

    useEffect(()=> {
        async function loadData() {
            const {data} = await api.get('cliente');
            if(data.length > 0){
                setClientes(data);
            } 
          }
          loadData();
    }, []);
      
    const handleRemoveCliente = useCallback(async(id:string)=>{

        try {
            await api.post('deleteCliente', {id});
            setClientes(state=> state.filter(cliente => cliente.id !== id ))           ;
            
            addToast({
                type:'success',
                title: 'Cliente removido com sucesso!'
            }); 
        } catch (error) {
            addToast({
                type:'error',
                title: 'Falha ao remover o cliente!',
                description: error.message
            });             
        }
    },[addToast]);
    const handleEditCliente = useCallback((id:string)=>{
        history.push(`/cadastro?id=${id}`)
    },[history]);
    
  return (
    <Container >
        <div>
            <h1>Lista de Cliente</h1>
            <ContentAlignRigth>
                <Link to="/cadastro">
                    <FiPlusCircle size={20} />
                    Novo
                </Link>
            </ContentAlignRigth>
            <Table args={clientes} handleRemoveCliente={handleRemoveCliente} handleEditCliente={handleEditCliente}>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>CPF</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Opçoes</th>
                    </tr>
                </thead>
            </Table>
        </div>
    </Container>
  )
}

export default All;