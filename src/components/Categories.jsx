import React, {memo} from 'react';


const Categories = memo(function Categories({ items, onClickCategory }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onClickItem = (index) => {
    setActiveItem(index);
    onClickCategory(index)
  };

  return (
      <div className="categories">
        <ul>
          <li className={activeItem === null ? 'active' : ''} onClick={() => onClickItem(null)}>
            Все
          </li>
          {items &&
          items.map((name, index) => (
              <li
                  className={activeItem === index ? 'active' : ''}
                  onClick={() => onClickItem(index)}
                  key={`${name}_${index}`}>
                {name}
              </li>
          ))}
        </ul>
      </div>
  );
}
)
export default Categories;
