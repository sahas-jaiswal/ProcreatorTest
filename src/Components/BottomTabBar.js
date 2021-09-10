import React from 'react';
import '../Assets/Styles/TabBar.scss';
import scan from '../Assets/Images/scan.png';
import camera from '../Assets/Images/camera.png';
import upload from '../Assets/Images/uploadFile.png';
import close from '../Assets/Images/close.png';
import { NavLink, Link, useHistory } from 'react-router-dom';


export const BottomTabBar = () => {

    const history = useHistory();

    const showOverlay = () =>{
        return(
            <div className="overlay">
                <img src={scan}/>
                <img src={upload}/>
                <img src={camera}/>
                <img src={close}/>
            </div>
        )
    }
    return (
        <div className="Tab-flex">
            <div>
                <i onClick={()=> history.push('/home')} class="fa fa-cloud" aria-hidden="true"></i>
            </div>
            <div>
                <img onClick={()=> history.push('/local')} className="local"/>
            </div>
            <div>
                <img className="add" onClick={()=>showOverlay()}/>
            </div>
            <div>
                <i class="fa fa-bell" aria-hidden="true"></i>
            </div>
            <div>
                <i class="fa fa-user" aria-hidden="true"></i>
            </div>
        </div>
    )
}
