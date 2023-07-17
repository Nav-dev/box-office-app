import styled from 'styled-components';

const Details = props => {
    const {status, premeired, network} = props;

    return (
        <DetailsWrapper>
            <p>Status: {status}</p>
            <p>
                Premeired {premeired} {!!network && `on ${network.name}`}
            </p>
        </DetailsWrapper>
    )
}

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;