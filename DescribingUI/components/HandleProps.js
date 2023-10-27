import { getImageUrl } from "./utils";

//props are used to pass data from parent component to child component , It is like we passing params in function in js just like that we can pass params in react component that is knows as props.

//React component accepts a single arguement, a props object

const Avatar = ({ person, size }) => {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
};

export const HandleProps = () => {
  return (
    <div>
      <h1>Handle Props</h1>
      <Avatar
        size={100}
        person={{
          name: "Rahul Anand",
          imageId: "YfeOqp2" /* Here We passing props to our children */,
        }}
      />

      <Avatar
        size={80}
        person={{
          name: "Akilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
};
