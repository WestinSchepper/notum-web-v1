import React, { PropTypes } from 'react'

const List = ({items, listComponent = 'ul', itemComponent = 'li', configureItem}) => {
  const ListComponent = listComponent
  const ItemComponent = itemComponent

  return (
    <ListComponent>
      {(items.length > 0)
        ? items.map((item) => (
          <ItemComponent key={item.id}>
            {configureItem(item)}
          </ItemComponent>
        ))
        : <p>No items we're found</p>
      }
    </ListComponent>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  listComponent: PropTypes.string,
  itemComponent: PropTypes.string,
  configureItem: PropTypes.func
}

export default List
