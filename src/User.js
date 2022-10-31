import React, { useState, useEffect } from "react";
import Image from "./Image";
import "./Styles/user.css";
import ReactPaginate from "react-paginate";

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  function getData() {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.results);
        console.log(data);
        setLoading(false);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(Array.isArray(users));
  const [page, setPage] = useState(0);
  const dataPerPage = 10;
  const noOfDataVisited = page * dataPerPage;

  const totalNoOfPage = Math.ceil(users.length / dataPerPage);
  const pageChange = ({ selected }) => {
    setPage(selected);
  };

  //slicing out data for pagination
  const userData = users
    .slice(noOfDataVisited, noOfDataVisited + dataPerPage)
    .map((user) => {
      return (
        <div className="user" key={user.login.uuid}>
          <div className="enclose">
            <Image
              src={user.picture.medium}
              alt={user.name.first + " " + user.name.last}
              style={{ borderRadius: "50%" }}
              className="user-img"
            />
            <p>
              {user.name.first} {user.name.last}
            </p>
            <i>{user.email}</i>
          </div>
        </div>
      );
    });

  return (
    <>
      <h1>Check those who your gesture will uplift</h1>
      {loading && <div>loading...</div>}
      <div className="user-container">{userData}</div>
      <div className="route-page">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={totalNoOfPage}
          onPageChange={pageChange}
          containerClassName={"navigationBtn"}
          previousLinkClassName={"prevBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"navDisabled"}
          activeClassName={"navActive"}
        />
      </div>
    </>
  );
}
