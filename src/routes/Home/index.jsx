import Button from '../../components/UI/Button';
import './index.scss';

const Home = () => {
    return (
        <div className='home-container'>
            <h1 className='home-title'>MARVEL UNIVERSE</h1>
            <p className='home-desc'>Explore o emocionante universo Marvel com seus heróis e vilões incríveis em histórias épicas e cativantes que agradam a todos os gostos. Junte-se a essa jornada emocionante!</p>
            <div className='button-container'>
                <Button buttonType='normal'>VER PERSONAGENS</Button>
            </div>
        </div>
    )
}

export default Home;