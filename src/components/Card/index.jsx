import './index.scss';

const Card = ({ card }) => {
    const { name, imageUrl, originalName } = card
    return (
        <div className='card'>
            <div>
                <img src={imageUrl} alt={name} />
            </div>
            <div>
                <h1 className='card-name'>{name}</h1>
                <span className='card-originalName'>({originalName})</span>
            </div>
        </div>
    )
}

export default Card;