import React from 'react';
import upperWave from '../Assets/SVG/upperHomeWave.svg';
import { BottomTabBar } from '../Components/BottomTabBar'; 
import SearchBar from '../Components/SearchBar';
import '../Assets/Styles/LocalStorage.scss';
import music from '../Assets/Images/music.png';
import video from '../Assets/Images/video.png';
import image from '../Assets/Images/image.png';
import archive from '../Assets/Images/archive.png';
import List from '../Components/List';
import { ListData } from '../Assets/Data/Listdata';

const LocalStoreScreen = () => {
    let data =[];
    console.log(ListData[0].title)
    if(ListData){
         data = ListData;
        console.log(data);
    }else{
        
    }
    
    
    return (
        <div className="Local-Store">
             <div>
                <embed src={upperWave}/>
            </div>
            <h2 className="PageHeader">Local Storage</h2>
            <SearchBar/>
            <div className="tabs">
                <div>
                    <img src={video}/>
                    <p>Video</p>
                </div>
                <div>
                    <img src={image}/>
                    <p>Image</p>
                </div>
                <div>
                    <img src={music}/>
                    <p>Music</p>
                </div>
                <div>
                    <img src={archive}/>
                    <p>Archieve</p>
                </div>
            </div>

            <div className="List-Container">
            {
                data.map((data,index)=>(
                    <List files={data}/>
                ))
            }
               
                
            </div>
            <BottomTabBar/>
        </div>
    )
}

export default LocalStoreScreen
