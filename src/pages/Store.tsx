import StoreItem from '../components/StoreItem';
import StoreItems from '../data/items.json';
import '../styles/Store.css';
const Store = () => {
  return (
    <div className="main">
      {StoreItems.map((item, index) => {
        return <StoreItem {...item} key={index} />;
      })}
    </div>
  );
};

export default Store;
