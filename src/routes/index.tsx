import React from 'react';
import { Switch, Route } from 'react-router-dom';

 import Cadastro from '../pages/Cliente/Cadastro';
 import All from '../pages/Cliente/All';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={All} />
        <Route path="/cadastro" exact component={Cadastro} />
    </Switch>
)

export default Routes;