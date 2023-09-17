import './index.scss';
import CardsHero from '../../components/Cards-hero';

const Personagens = () => {
    return (
        <div className='personagens-container'>
            <h1 className='personagens-title'>ESCOLHER PERSONAGEM</h1>
            <p className='personagens-desc'>Escolha e veja sobre os personagens</p>
            <div className='cards-container'>
                <CardsHero />
            </div>
        </div>
    )
}

export default Personagens;