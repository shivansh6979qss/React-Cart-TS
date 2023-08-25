import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItems,
  removeAllItems,
  removeItems,
} from '../redux/features/CartSlice';

type StoreItemProp = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
type stateProps = {
  Cart: object;
  Snackbar: object;
};

const StoreItem = ({ id, imgUrl, name, price }: StoreItemProp) => {
  const dispatch = useDispatch();
  const dataItems = useSelector((state: stateProps) => state.Cart);

  const { items, noOfItems } = dataItems;
  console.log(noOfItems);
  console.log('items', dataItems.items);

  const particularItemQuantity = dataItems.items.find((x: any) => x.id == id);
  console.log('particularrr', particularItemQuantity);
  const decrementHandler = (id: number) => {
    dispatch(removeItems({ id }));
  };
  const incrementHandler = (id: number, price: number) => {
    dispatch(addItems({ id, price }));
  };
  const removeHandler = (id: number) => {
    dispatch(removeAllItems({ id }));
  };

  return (
    <div className="card" key={id}>
      <div className="image-container">
        <img src={imgUrl} />
      </div>
      <div className="item-details">
        <h2>{name}</h2>
        <h4>${price}</h4>
      </div>
      <div>
        {noOfItems > 0 ? (
          <>
            <div className="btn-cart">
              <button onClick={() => decrementHandler(id)}>
                <AiOutlineMinus
                  style={{
                    background: ' rgb(153, 241, 153)',
                    borderRadius: '1pc',
                  }}
                  color={'white'}
                  size={26}
                />
              </button>
              <h3 style={{ marginRight: '7px', marginLeft: '7px' }}>
                {noOfItems} in cart
              </h3>
              <button onClick={() => incrementHandler(id, price)}>
                <AiOutlinePlus
                  style={{
                    background: ' rgb(153, 241, 153)',
                    borderRadius: '1pc',
                  }}
                  color={'white'}
                  size={26}
                />
              </button>
            </div>
            <button className="remove" onClick={() => removeHandler(id)}>
              Remove
            </button>
          </>
        ) : (
          <button
            className="addtocart"
            onClick={() => incrementHandler(id, price)}
          >
            + Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default StoreItem;
