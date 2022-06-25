import React from "react";
import Carousel from "react-material-ui-carousel";

function DesktopMultiCarousel(props) {
  var items = [
    {
      data: [
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
      ],
    },
    {
      data: [
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
      ],
    },
    {
      data: [
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
        {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!",
          image: "assets/images/iphone-logo.png",
        },
      ],
    },
  ];

  return (
    <Carousel
      navButtonsAlwaysVisible
      indicators={false}
      animation="slide"
      duration={500}
      swipe
      autoPlay={false}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          // backgroundColor: 'cornflowerblue',
          // borderRadius: 0
          width: 20,
          height: 20,
          top: "50%",
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div className="flex justify-around" style={{ height: 50 }}>
      {props.item.data.map((obj) => (
        <div key={obj.name} className="drop-shadow-2xl shadow-black	 rounded-lg px-4">
        <img
          src={obj.image}
          className=""
          style={{ width: "130px", height: 35, objectFit: "contain" }}
          alt=""
        />
        </div>
      ))}
    </div>
  );
}

export default DesktopMultiCarousel;
