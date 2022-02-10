import React from 'react';
import './App.css';

function App() {
    const names = ["Alex", "Alice", "Tanya", "Stacy"];
    const users = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Alice"},
        {id: 3, name: "Tanya"},
        {id: 4, name: "Stacy"}]
    const liElements = users.map( u => <li key={u.id}>{u.name}</li>);

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
