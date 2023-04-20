import { Fragment, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserList from "./components/UserList";
import { Accordion } from "./components/Accordion";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const path = window.location.pathname;

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                setUsers(response?.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    if (loading) {
        return <h1>loading</h1>;
    }

    if (path === "/userlist") {
        return <UserList users={users} />;
    } else if (path === "/accordion") return <Accordion />;

    return (
        <Fragment>
            <div className="button-container">
                <button
                    onClick={(e) => location.replace("/userlist")}
                    className="userListButton"
                >
                    UserList
                </button>
                <button
                    onClick={(e) => location.replace("/accordion")}
                    className="accordionButton"
                >
                    Accordion
                </button>
            </div>
        </Fragment>
    );
}

export default App;
