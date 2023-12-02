import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Handlerio(props){
    const {Component} = props;
    const navigate = useNavigate();
    useEffect( ()=>{
        let main = localStorage.getItem('Main');
        // let login = localStorage.getItem('Main')
        if (!main){
            navigate('/Main')
        }
    });
    return(
        <div>
            <Component/>
        </div>
    );
}

export default Handlerio;