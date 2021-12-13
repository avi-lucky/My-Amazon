import { useHistory } from 'react-router-dom';

import NewProductForm from "../components/shopping/NewProductForm";

function NewProduct() {
  const history = useHistory();

  function addProductHandler(productData) {
    fetch(
      "https://shopping-app-64fa6-default-rtdb.firebaseio.com/shopping.json",
      {
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/');
    });
  }
  return (
    <section>
      <h1>Add New Product</h1>
      <NewProductForm onAddProduct={addProductHandler} />
    </section>
  );
}

export default NewProduct;
