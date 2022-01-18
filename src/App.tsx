import React, {useState} from 'react';
import style from './App.module.scss';
import users from './db/ForTable.json';

function App() {

    type usersType = Array<userType>

    type userType = {
        id: number,
        email: string,
        first_name: string,
        pay_status: boolean,
        last_name: string,
        username: string,
        profile_link: string,
    }

    const [usersState, setUsersState] = useState<usersType>([])

    const getState = () => setUsersState(users.map(el => el));

    let handlerSort = () => {
        console.log('handle sort');
        console.log(usersState);
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');
                if (a.id < b.id) {
                    return 1;
                }
                if (a.id > b.id) {
                    return -1;
                }
                return 0;
            })
            return setUsersState(sortMap)
        }
    }


    return (
        <div className={style.wrapper}>
            <h1>Table Users</h1>
            <button onClick={getState}>Get State</button>
            <table>
                <thead>
                <tr>
                    <td>User Name</td>
                    <td onClick={handlerSort}>Id</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td>Pay Status</td>
                    <td>Link</td>
                </tr>
                </thead>
                <tbody>
                {usersState ? usersState.map(el => {
                    console.log('map');
                    return <tr key={el.id}>
                        <td>{el.username}</td>
                        <td>{el.id}</td>
                        <td>{el.first_name}</td>
                        <td>{el.last_name}</td>
                        <td>{el.email}</td>
                        <td>{el.pay_status.toString()}</td>
                        <td>{el.profile_link}</td>
                    </tr>
                }) : ''}
                </tbody>
            </table>
        </div>
    );
}

export default App;
