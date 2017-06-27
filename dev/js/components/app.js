import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from  '../containers/user-detail'
import AddProject from  '../containers/add-user'
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Lista Pracownikow</h2>
        <UserList />
        <hr />
        <h2>detale pracownika:</h2>
        <UserDetail />
        <AddProject />
    </div>
);

export default App;
