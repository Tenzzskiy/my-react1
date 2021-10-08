import React from "react";
import s from './Users.module.css';
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let path = "/Dialogs/" + props.id;
    return(

      <div className={s.container}>
          <NavLink to={path}> {props.name}  </NavLink>
      </div>
    );
}

export default Users;