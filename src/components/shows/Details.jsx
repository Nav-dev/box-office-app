const Details = props => {
    const {status, premeired, network} = props;

    return (
        <div>
            <p>Status: {status}</p>
            <p>
                Premeired {premeired} {!!network && `on ${network.name}`}
            </p>
        </div>
    )
}

export default Details;