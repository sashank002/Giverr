import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import {useQuery} from "@tanstack/react-query"
import newRequest from "../../../utils/newRequest";

const GigCard = ({ item }) => {
;

  const { isLoading, error, data,refetch } = useQuery({
    queryKey: ["userId"],
    queryFn: () =>
    newRequest
      .get(
        `users/${item.userId}`
      )
      .then((res) => {
        return res.data;
      }),
  })
  console.log("data",data);
 console.log("error",error);

 console.log("id",item.userId)
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigcard">
      <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "/img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <div className="desc">{item.desc}</div>
          <div className="hide">{item.desc}</div>
          <div className="star">
            <img src="/img/star.png" alt="" />
            <span>{!isNaN(item.totalStars/item.starNumber)&& Math.round(item.totalStars/item.starNumber)}</span>
          </div>
        </div>
        <hr />
        <div className="details">
          <img src="/img/heart.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
