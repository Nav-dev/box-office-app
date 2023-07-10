import { useState } from "react";

const Home = ()=> {
    const [ searchStr, setSearchStr ] = useState("");

    const onSearchOnInputChange = (ev) => {
        setSearchStr(ev.target.value);
    };

    const onSearch =  async(ev) => {
        ev.preventDefault();

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`
        );
        const body = await response.json();
        console.log(body);
    };

    //https://api.tvmaze.com/search/shows?q=boys

    return (
         <div>
            <form onSubmit={onSearch}>
              <input type="text" value={searchStr} onChange={onSearchOnInputChange} />
              <button type="sumbit">Search</button>
              </form>
              </div>
    );
};
              

export default Home;