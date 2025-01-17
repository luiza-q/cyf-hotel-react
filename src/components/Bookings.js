import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import fakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(fakeBookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
