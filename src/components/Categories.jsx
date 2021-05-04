import React, {memo} from 'react';
import PropTypes from 'prop-types'

const Categories = memo(function Categories({ activeCategoryIndex,items, onClickCategory }) {

  return (
      <div className="categories">
        <ul>
          <li className=
                  {
                      activeCategoryIndex === null
                          ? 'active'
                          : ''} onClick={() => onClickCategory(null)}>
            Все
          </li>
          {items &&
          items.map((name, index) => (
              <li
                  className={activeCategoryIndex === index
                      ? 'active'
                      : ''}
                  onClick={() => onClickCategory(index)}
                  key={`${name}_${index}`}>
                {name}
              </li>
          ))}
        </ul>
      </div>
  );
}
)

Categories.propTypes = {
    activeCategoryIndex: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string),
    onClickCategory:PropTypes.func
}

Categories.defaultProps = {activeCategoryIndex:null, items: []}

export default Categories;
