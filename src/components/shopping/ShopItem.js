import classes from './ShopItem.module.css';

function ShopItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>Add To Cart</button>
      </div>
    </li>
  );
}

export default ShopItem;