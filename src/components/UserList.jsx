import React, { Fragment, useEffect, useState } from "react";

const UserList = ({ users }) => {
    const [allUsers, setAllUsers] = useState(users);

    const deleteUser = (userid) => {
        let users1 = allUsers.filter((user) => user.id !== userid);
        setAllUsers(users1);
    };
    return (
        <Fragment>
            <div
                onClick={() => window.location.replace("/")}
                className="back-button"
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                </svg>
            </div>
            <div className="wrapper">
                <ul>
                    {allUsers?.map((user) => (
                        <li className="children" key={user.id}>
                            <span className="children-id">
                                {user.id}) &nbsp;
                            </span>
                            <span className="children-title">{user.name}</span>
                            <span
                                className="delete-button"
                                onClick={() => deleteUser(user.id)}
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 1024 1024"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
                                </svg>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </Fragment>
    );
};

export default UserList;
