
/*const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags.slice(0, 1).join("");
  const lastTag = apartment.tags.slice(-1);

  console.log(numberOfTags);
  console.log(firstTag);
  console.log(lastTag);
  */
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  const aptRating = apartment[price];
  const aptDescr = apartment[descr];
  const aptPrice = apartment[price];
  const aptTags = apartment[tags];
  console.log(aptTags);
  