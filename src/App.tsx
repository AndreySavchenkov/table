import React, {useEffect, useState} from 'react';
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
    const [searchData, setSearchData] = useState('')

    useEffect(() => {
        setUsersState(users.map(el => el))
    }, [])

    //sort functions - need refactor ---------------------------------------------------------------------

    const handlerSortIdUp = () => {
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
    }

    const handlerSortIdDown = () => {
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
    }

    const handlerSortUserNameUp = () => {
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
    }

    const handlerSortUserNameDown = () => {
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
    }

    const handlerSortFirstNameUp = () => {
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
    }

    const handlerSortFirstNameDown = () => {
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
    }

    const handlerSortLastNameUp = () => {
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
    }

    const handlerSortLastNameDown = () => {
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
    }

    const handlerSortEmailUp = () => {
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
    }

    const handlerSortEmailDown = () => {
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
    }

    const handlerSortPayStatusUp = () => {
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
    }

    const handlerSortPayStatusDown = () => {
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
    }


    return (
        <div className={style.wrapper}>
            <h1>Table Users</h1>
            <input  type="text" placeholder='Search by user name...' onChange={(event)=>setSearchData(event.target.value)}/>
            <table>
                <thead>
                <tr>
                    <th className={style.th}>
                        <div className={style.sortArrayWrapper}>
                            <div className={style.sortArray} onClick={handlerSortUserNameUp}>&#5169;</div>
                        </div>
                        <div className={style.textThead}>User</div>
                        <div className={style.sortArrayWrapper}>
                            <div className={style.sortArray} onClick={handlerSortUserNameDown}>&#5167;</div>
                        </div>
                    </th>
                    <th>
                        <div className={style.sortArrayWrapper}>
                            <div className={style.sortArray} onClick={handlerSortIdUp}>&#5169;</div>
                        </div>
                        <div className={style.textThead}>Id</div>
                        <div className={style.sortArrayWrapper}>
                            <div className={style.sortArray} onClick={handlerSortIdDown}>&#5167;</div>
                        </div>
                    </th>
                    <th>
                        <div className={style.sortArrayWrapper}>
                            <div className={style.sortArray} onClick={handlerSortFirstNameUp}>&#5169;</div>
                        </div>
                        <div className={style.textThead}>First</div>
                        <div className={style.sortArrayWrapper}>
                            <div className={style.sortArray} onClick={handlerSortFirstNameDown}>&#5167;</div>
                        </div>
                    </th>
                    <th>
                        <div className={style.sortArrayWrapper}>
                            <div className={style.sortArray} onClick={handlerSortLastNameUp}>&#5169;</div>
                        </div>
                        <div className={style.textThead}>Last</div>
                        <div className={style.sortArrayWrapper}>
                            <div className={style.sortArray} onClick={handlerSortLastNameDown}>&#5167;</div>
                        </div>
                    </th>
                    <th>
                        <div className={style.sortArrayWrapper}>
                            <div className={style.sortArray} onClick={handlerSortEmailUp}>&#5169;</div>
                        </div>
                        <div className={style.textThead}>Email</div>
                        <div className={style.sortArrayWrapper}>
                            <div className={style.sortArray} onClick={handlerSortEmailDown}>&#5167;</div>
                        </div>
                    </th>
                    <th>
                        <div>
                            <div className={style.sortArrayWrapper}>
                                <div className={style.sortArray} onClick={handlerSortPayStatusUp}>&#5169;</div>
                            </div>
                            <div className={style.textThead}>Status</div>
                            <div className={style.sortArrayWrapper}>
                                <div className={style.sortArray} onClick={handlerSortPayStatusDown}>&#5167;</div>
                            </div>
                        </div>
                    </th>
                    <th style={{color: '#cb997e'}}>Link</th>
                </tr>
                </thead>
                <tbody>
                {usersState ? usersState.filter((val)=>{
                    if(searchData === ''){
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
