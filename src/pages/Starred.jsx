import { useStarredShows } from "../lib/useStarredShows";

const Starred = () => {
  const [starredShows, dispatchStarred] = useStarredShows();
  return <div>Starred page {starredShows.length} </div>;
};

export default Starred;
