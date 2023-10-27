//here person and size is props
export const getImageUrl = (person, size = "s") => {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
};
