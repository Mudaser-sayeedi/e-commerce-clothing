import "./MenuItem.css";

const MenuItem = ({ title, imageUrl, size, classN }) => { 
    return (
        <div
            className={`${classN} ${size} menu-item`}>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className="background-image"></div>
            <div
                className="label">
                <h2>{title}</h2>
                <span>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;