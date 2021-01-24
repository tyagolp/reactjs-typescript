import React from 'react';
import { FiPlusCircle } from 'react-icons/fi'

import { Container, ContentAlignRigth } from './styles';

import Button from '../../../components/Button'

const All: React.FC = () => {
  return (
    <Container >
        <div>
            <h1>Lista de Cliente</h1>
            <ContentAlignRigth>
                <Button type="button">
                    <FiPlusCircle size={20} />
                    Novo
                </Button>
            </ContentAlignRigth>
        </div>
    </Container>
  )
}

export default All;