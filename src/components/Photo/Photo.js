import "./Photo.css";
const Photo = (props) => {
    const {title, hdurl, copyright} = props;
    return (
        <div>
            <h2>{title}</h2>
            <img src={hdurl} alt={title}/>
            <h5>{copyright}</h5>
        </div>
    )
}
export default Photo;