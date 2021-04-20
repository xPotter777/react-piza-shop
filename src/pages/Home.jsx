import React from 'react';
import { Categories, SortPopup, PizzaBlock } from '../components';
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import Loader from "../components/loader/Loader";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortIems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items )

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);
  return (

    <div className="container">
        <hr/>
        <Loader/>
        <hr/>
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup items={sortIems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
