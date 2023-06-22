import './theme-card.module.css'

const ThemeCard = (props) => {

    return (
        <article className="card__wrapper">
            <h2 className='card__title'>{props.title}</h2>

            <span className='card__color-span' style={{backgroundColor: props.color}}></span>

            <div className='card__icon'>
                <img src={props.img} alt="" />
            </div>
        </article>
    )
}

export default ThemeCard