import ShopList from '../components/shopping/ShopList';

const DUMMY_DATA = [
  {
    id: "m1",
    title: "HandCuffs",
    image: "https://m.media-amazon.com/images/I/51sc5vnUdDL.jpg",
    description:
      "This is a first, amazing cap which you definitely should not ignore. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "Clothera",
    image: "https://m.media-amazon.com/images/I/7151VjrBsNS._UX679_.jpg",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function Shop() {
  return (
    <section>
      <h1>Shop</h1>
       <ShopList shopping={DUMMY_DATA} />
    </section>
  );
}

export default Shop;