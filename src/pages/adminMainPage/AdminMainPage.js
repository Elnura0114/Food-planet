import React from "react";
import AdminMainContent from "./../../components/AdminMainContent/AdminMainContent";
import SideBar from "./../../components/SideBar/SideBar";
import s from "./AdminMainPage.module.css";

const AdminMainPage = () => {
    return (
        <div className={s.container}>
            <SideBar/>
            <AdminMainContent/>
        </div>
    );
};

export default AdminMainPage;