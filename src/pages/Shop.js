import { useState, useEffect } from "react";

import ShopList from "../components/shopping/ShopList";

const DUMMY_DATA = [
    {
      id: "m1",
      title: "HandCuffs",
      image: "https://m.media-amazon.com/images/I/51sc5vnUdDL.jpg",
      price: 150,
      description:
        "This is a first, amazing cap which you definitely should not ignore. It will be a lot of fun!",
    },
    {
      id: "m2",
      title: "Clothera",
      image: "https://m.media-amazon.com/images/I/7151VjrBsNS._UX679_.jpg",
      price: 350,
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    }, 
    {
      id: "m3",
      title: "Hoodies",
      image: "https://m.media-amazon.com/images/I/51hFAXgwMUS._UL1500_.jpg",
      price: 560,
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
  ];
  

function Shop() {
  const [isLoading, setIsLoading] = useState(true);
//   const [setLoadedShopping] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-shopping-app-4c30c-default-rtdb.firebaseio.com/shopping.json",
      {
          method: 'POST',
          body: JSON.stringify(DUMMY_DATA),
          headers: {
              'Content-Type': 'application/json'
          }
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const shopping = [];

        for (const key in data) {
          const shop = {
            id: key,
            ...data[key],
          };

          shopping.push(shop);
        }

        setIsLoading(false);
        // setLoadedShopping(shopping);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Shop</h1>
      <ShopList shopping={DUMMY_DATA} />
    </section>
  );
}

export default Shop;