import './App.css'
const Card = (props) => {

    return (
        <div className="card__container">
            <div className="card_img">
                <img src={props.img} alt="" class="img_card"/>
            </div>
            <div className="card__content">
            <h2>{props.heading}</h2>
            <p>{props.subtitle}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quia asperiores dolorem</p>
            <button>Click</button>
            </div>
        </div>
    )
}

export default Card;
