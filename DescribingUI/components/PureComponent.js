//It stops to rerendering of the component
//same INPUT SAME OUTPUT

//React let every component we write is pure function
//it means that react components you write must always return the same JSX given the same inputs

// const Recipe = ({ drinkers }) => {
//   return (
//     <ol>
//       <li>Boil {drinkers} cups of water.</li>
//       <li>
//         Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
//       </li>
//       <li>Add {0.5 * drinkers} cups of milk to boil and sugar to tast</li>
//     </ol>
//   );
// };

// export const RecipeList = () => {
//   return (
//     <section>
//       <h1>Spiced Chai Recipe</h1>
//       <h2>For two</h2>
//       <Recipe drinkers={2} />
//       <h2>For a gathering</h2>
//       <Recipe drinkers={4} />
//     </section>
//   );
// };

const Cup = ({ guest }) => {
  return <h2>Tea cup for guest #{guest}</h2>;
};

export const TeaaGathering = () => {
  let cups = [];
  for (let i = 1; i <= 10; i++) {
    cups.push(<Cup key={i} guest={i} />);
  }
  return cups;
};
