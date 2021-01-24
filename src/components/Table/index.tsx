import React, {TableHTMLAttributes} from 'react';
import { FiEdit, FiDelete} from 'react-icons/fi'
import { cliente } from '../../pages/Cliente/All'

import { Container } from './styles';

interface TableProps extends  TableHTMLAttributes<HTMLTableElement> {
      args? : Array<cliente>;
      handleRemoveCliente(id: string): void;
      handleEditCliente(id:string):void
}


const Table: React.FC<TableProps> = ({args, handleRemoveCliente, handleEditCliente, children, ...rest}) => {

     return (<Container {...rest}>
            {children}
            <tbody>
                  {args && args.map(item => 
                        <tr key={item.id}>
                              <td>{item.nome}</td>
                              <td>{item.cpf}</td>
                              <td>{item.bairro}</td>
                              <td>{item.cidade}</td> 
                              <td> 
                                    <button type="button" title="Editar" onClick={handleEditCliente.bind(this, item.id)} ><FiEdit size={16} /></button>
                                    <button type="button" onClick={handleRemoveCliente.bind(this, item.id)} title="Deletar"><FiDelete size={16} /></button>
                              </td>
                        </tr>)
                  }
            </tbody>
      </Container>
)}

export default Table;