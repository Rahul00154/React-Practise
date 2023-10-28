//In jsx {cond && <App/> it means if cond then render <App/>} else nothing

const Item = ({ name, isPacked }) => {
  // this is bad practise to write condition in if else format because code is harder to maintain we see here that if we want to change classname we have change it in two places.
  /*
   *** INSTEAD OF THIS WE USE TERNARY OPERATOR***
   */
  // if (isPacked) {
  //   return <li className="item">{name}✅</li>;
  // }
  // return <li className="item">{name}</li>;
  // return <li className="itema">{isPacked ? name + "☑" : name}</li>;

  // return <li className="item">{isPacked ? <del>{name + "✅"}</del> : name}</li>;

  //*** we use && operator when the condition is true  */

  let itemContent = name;

  // if (isPacked) {
  //   itemContent = name + "✔";
  // }

  if (isPacked) {
    itemContent = <del>{name + "☑"}</del>;
  }

  return (
    <li className="item">
      {/* {name}
      {isPacked && "✔"} */}
      {/* we read it as if isPacked then render the checkMark,else not render anything
       * && expression returns the value of its right side
       * Dont put number on the left side of && operator
       * because to test the condition javascript converts the left side to a boolean automatically
       * if the condition is false then whole expression becomes false
       */}

      {itemContent}
    </li>
  );
};

export const PackingList = () => {
  return (
    <section>
      <h1>Conditional Rendering</h1>
      <ul>
        <Item isPacked={true} name="space suit" />
        <Item isPacked={true} name="Riding Gear" />
        <Item isPacked={false} name="Helmet" />
      </ul>
    </section>
  );
};
