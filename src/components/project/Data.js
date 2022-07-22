import get from "../../assests/blog.PNG";
import java1 from "../../assests/java1.PNG";
import web1 from "../../assests/web1.PNG";
import pizza from "../../assests/pizza.PNG";
import React from "react";
const Data = [
  {
    title: "MERN Blog Application",
    github: (
      <a style={{ color: "#444", cursor: "pointer" }}>
        https://github.com/DIILEESHA/BlogApp.git
      </a>
    ),
    name: "I create blog applications using mernstack. Users can register and add their blogs and other users' posts and update their posts. ",
    tec: "MERNSTACK",
    img: get,
  },
  {
    title: "Online Food Ordering System",
    github: (
      <a style={{ color: "#444", cursor: "pointer" }}>
        https://github.com/DIILEESHA/Food-canteen.git
      </a>
    ),
    name: "I develop a food ordering system for the canteen using java. this application help customer find their preferred food items using this site and customer can order food items from their delivery service ",
    tec: "HTML | CSS | JAVA | JSP | Mysql | Bootstrap",
    img: java1,
  },
  {
    title: "Communication Agency Website",
    github: (
      <a style={{ color: "#444", cursor: "pointer" }}>
        https://github.com/DIILEESHA/SPONz.git
      </a>
    ),
    name: "The sponsor website is built for the communication purpose of a client. client purposes and business purposes are more accessible to archive that website and customers can easily connect to argent",
    tec: "ReactJs | HTML | CSS ",
    img: web1,
  },
  {
    title: "Pizza Resturant Application",
    github: (
      <a style={{ color: "#444", cursor: "pointer" }}>
        https://github.com/DIILEESHA/Resturant-application.git
      </a>
    ),
    name: "I develop a restaurant pizza application. Customers can buy pizza online method and order and pay.  I implement online payment and create an admin panel to add restaurant pizza items and control application admin usage",
    tec: "NextJs | CSS | MongoDB",
    img: pizza,
  },
];

export default Data;
