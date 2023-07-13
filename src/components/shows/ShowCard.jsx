const ShowCard = ({name, image, id, summary}) =>{

    const summaryStripped = summary ? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g, '')
    : 'No description'

    return(
        <div>

            <div>
            <img src={image} alt={name} />
            </div>
            <h1>{name}</h1>
            <p>{summaryStripped}</p>

            <div>
                <a href={`/show/${id}`} target="__blank" rel="noreferror">
                    Read more 
                </a>
                <button type="button">Star me</button>
            </div>
        </div>
    );
};

export default ShowCard; 