import databiz from './images/client-databiz.svg';
import audophile from './images/client-audiophile.svg';
import meet from './images/client-meet.svg';
import maker from './images/client-maker.svg';


function Footer(){

    return (    
        <div className='footer'>
           <img src={databiz}></img>
           <img src={audophile}></img>
           <img src={meet}></img>
           <img src={maker}></img>
        </div>
    );
}

export default Footer;