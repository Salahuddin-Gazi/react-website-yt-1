import React from "react";
import CardItem from "./CardItem";
import IMG_9 from "./images/img-9.jpg";
import IMG_2 from "./images/img-2.jpg";
import IMG_3 from "./images/img-3.jpg";
import IMG_4 from "./images/img-4.jpg";
import IMG_5 from "./images/img-5.jpg";
import IMG_6 from "./images/img-6.jpg";
import IMG_7 from "./images/img-7.jpg";
import IMG_8 from "./images/img-8.jpg";
import IMG_1 from "./images/img-1.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check Out This Epic Destinations!</h1>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
            <CardItem
              src={IMG_9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={IMG_2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={IMG_3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={IMG_4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={IMG_8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
