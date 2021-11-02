import ShopItem from './ShopItem';
import classes from './ShopList.module.css';

function ShopList(props) {
  return (
    <ul className={classes.list}>
      {props.shopping.map((shopping) => (
        <ShopItem
          key={shopping.id}
          id={shopping.id}
          image={shopping.image}
          title={shopping.title}
          description={shopping.description}
        />
      ))}
    </ul>
  );
}

export default ShopList;