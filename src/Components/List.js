import React,{useState} from 'react';
import '../Assets/Styles/List.scss';
import music from '../Assets/Images/music.png';
import video from '../Assets/Images/video.png';
import image from '../Assets/Images/image.png';
import archive from '../Assets/Images/archive.png';
import option from '../Assets/Images/option.png';

const List = (props) => {
    const renderSwitch = () =>{
        switch(props.files.url){
            case 'music':
                return <img className="icon" src={music}/>;
            case 'image':
                return <img className="icon" src={image}/>;
            case 'video':
                return <img className="icon" src={video}/>;
            case 'archive':
                return <img className="icon" src={archive}/>; 
        }
    }
    return (
        <div className="List">
            {
                renderSwitch()
            }
            
            <div>
                <p><span className="title">{props.files.title}</span> <br/> {props.files.size}</p>
            </div>
            <img className="optionIcon" src={option}/>
        </div>
    )
}

export default List
