import React, {useCallback, useEffect, useState} from 'react';
import style from './App.module.scss';
import users from './db/ForTable.json';
import {ThDataComponent} from "./components/ThDataComponent";

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
    const [searchData, setSearchData] = useState('')

    useEffect(() => {
        setUsersState(users.map(el => el))
    }, [])

    //sort functions - need refactor ---------------------------------------------------------------------

    const handlerSortIdUp = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');

                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortIdDown = useCallback(() => {
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
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortUserNameUp = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');

                if (a.username > b.username) {
                    return 1;
                }
                if (a.username < b.username) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortUserNameDown = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');
                if (a.username < b.username) {
                    return 1;
                }
                if (a.username > b.username) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortFirstNameUp = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');

                if (a.first_name > b.first_name) {
                    return 1;
                }
                if (a.first_name < b.first_name) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortFirstNameDown = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');
                if (a.first_name < b.first_name) {
                    return 1;
                }
                if (a.first_name > b.first_name) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortLastNameUp = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');

                if (a.last_name > b.last_name) {
                    return 1;
                }
                if (a.last_name < b.last_name) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortLastNameDown = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');
                if (a.last_name < b.last_name) {
                    return 1;
                }
                if (a.last_name > b.last_name) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortEmailUp = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');

                if (a.email > b.email) {
                    return 1;
                }
                if (a.email < b.email) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortEmailDown = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');
                if (a.email < b.email) {
                    return 1;
                }
                if (a.email > b.email) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortPayStatusUp = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');

                if (a.pay_status > b.pay_status) {
                    return 1;
                }
                if (a.pay_status < b.pay_status) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])

    const handlerSortPayStatusDown = useCallback(() => {
        if (usersState) {
            let sortMap = usersState.sort(function (a, b) {
                console.log('users sort');
                if (a.pay_status < b.pay_status) {
                    return 1;
                }
                if (a.pay_status > b.pay_status) {
                    return -1;
                }
                return 0;
            })
            return setUsersState([...sortMap])
        }
    }, [usersState])


    return (
        <div className={style.wrapper}>
            <h1>Table Users</h1>
            <input type="text" placeholder='Search by user name...'
                   onChange={(event) => setSearchData(event.target.value)}/>
            <table>
                <thead>
                <tr>
                    <ThDataComponent name='Users' callbackUp={handlerSortUserNameUp}
                                     callbackDown={handlerSortUserNameDown}/>
                    <ThDataComponent name='Id' callbackUp={handlerSortIdUp} callbackDown={handlerSortIdDown}/>
                    <ThDataComponent name='First' callbackUp={handlerSortFirstNameUp}
                                     callbackDown={handlerSortFirstNameDown}/>
                    <ThDataComponent name='Last' callbackUp={handlerSortLastNameUp}
                                     callbackDown={handlerSortLastNameDown}/>
                    <ThDataComponent name='Email' callbackUp={handlerSortEmailUp} callbackDown={handlerSortEmailDown}/>
                    <ThDataComponent name='Status' callbackUp={handlerSortPayStatusUp}
                                     callbackDown={handlerSortPayStatusDown}/>
                    <th style={{color: '#cb997e'}}>Link</th>
                </tr>
                </thead>
                <tbody>
                {usersState ? usersState.filter((val) => {
                    if (searchData === '') {
                        return val
                    } else if (val.username.toLowerCase().includes(searchData.toLowerCase())) {
                        return val
                    }
                }).map(el => {
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
