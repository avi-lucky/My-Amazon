import ShopItem from './ShopItem';
import classes from './ShopList.module.css';

function ShopList(props) {
  return (
    <ul className={classes.list}>
      {props.shopping.map((shopper) => (
        <ShopItem
          key={shopper.id}
          id={shopper.id}
          image={shopper.image}
          title={shopper.title}
          description={shopper.description}
          price={shopper.price}
        />
      ))}
    </ul>
  );
}

export default ShopList;