import React from 'react';
import '../Assets/Styles/Cards.scss'
import option from '../Assets/Images/option.png';
import prof1 from '../Assets/Images/prof1.jpg';
import prof2 from '../Assets/Images/prof2.jpg';
import prof3 from '../Assets/Images/prof3.jpg';
import prof4 from '../Assets/Images/prof4.jpg';
import prof5 from '../Assets/Images/prof5.jpg';
import prof6 from '../Assets/Images/prof6.jpg';
import prof7 from '../Assets/Images/prof7.jpg';

const Cards = () => {
    return (
        <div className="cards">
            <div className='cards-flex'>
                <div className="card-size">
                    <p>The next big thing</p>
                    <p>12f. 2.1 gb</p>
                </div>
                <img src={option} />
            </div>
            
            <div class="avatar-group">
                <div class="avatar">
                    <img src={prof1} />
                </div>

                <div class="avatar">
                    <img src={prof2} />
                </div>

                <div class="avatar">
                    <img src={prof3} />
                </div>

                <div class="avatar">
                    <img src={prof4} />
                </div>

                <div class="avatar">
                    <img src={prof5} />
                </div>
                <div class="hidden-avatars">
                    +10
                </div>
            </div>
        </div>
    )
}

export default Cards
