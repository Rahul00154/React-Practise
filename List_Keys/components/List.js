import { Fragment } from "react";
import { people } from "./data";
import { getImageUrl } from "./utils";

// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

//In List we always use use keys to specify which array items each component correspond to

//it is important bcz when we perform som operation on array like sorting inserting and deleting in this key helps react to guess what exactly has happened and make correct updates to the DOM.

//Rules of Key :- it must be unique among each other.
//key must not change

export default function List() {
  // const chemist = people.filter((person) => person.profession === "chemist");
  const listItems = people.map(
    (person) => (
      <Fragment key={person.id}>
        <h1>{person.name}</h1>
        <p>{person.bio}</p>
      </Fragment>
    )
    // <li key={person.id}>
    //   <img src={getImageUrl(person)} alt={person.name} />
    //   <p>
    //     <b>{person.name}:</b>
    //     {" " + person.profession + " "}
    //     known for {person.accomplishment}
    //   </p>
    // </li>
  ); // return <ul>{listItems}</ul>;
}
