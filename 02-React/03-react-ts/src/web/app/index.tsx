import * as React from 'react';

import Watch, { Time } from 'web/components/watch';

import './styles.css';

function App() {
    const users = [
        { name: 'John1', age: 30 },
        { name: 'John', age: 30 }
    ];

    return (
        <div className='App'>
            <h1 className={'Title'}>TeamCamp 2022</h1>
            <div className={'Body'}>
                <div>{new Date().toLocaleDateString()}</div>
                <Watch timeZone={'Europe/London'} />
                <Watch timeZone={'Europe/Madrid'} />
                <Watch timeZone={'America/New_York'} />
            </div>
            <div className={'Body'}>
                <Time time={'700 ZULU'} timeZone={'NoWhere'} />
            </div>
            {users.map((user, index) => {
                return (
                    <div>
                        <div>Name: {user.name}</div>
                        <div>Age: {user.age}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
