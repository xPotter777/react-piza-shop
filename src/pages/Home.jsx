import React, {useEffect} from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import Loader from "../components/loader/Loader";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
    const dispatch = useDispatch()
    const cartItems = useSelector(({cart}) => cart.items)
    const items = useSelector(({pizzas}) => pizzas.items )
    const loaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filters}) => filters)

    useEffect(() => {

        dispatch(fetchPizzas(sortBy,category))


    },[category,sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);
    const addPizzaToCartt = obj => {
        dispatch(addPizzaToCart(obj))
    }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategoryIndex={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
            onClickSortType={onSelectSortType}
            activeSortType = {sortBy.type}
            items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
          {loaded ?
              items && items.map((obj) => (
                  <PizzaBlock
                      addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                      onAddPizza={addPizzaToCartt}
                      key={obj.id} {...obj} />
              )) : <Loader/>
          }
      </div>
    </div>
  );
}

export default Home;
