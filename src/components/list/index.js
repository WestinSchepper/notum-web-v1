import React, { PropTypes } from 'react'
import isEmpty from 'lodash/isEmpty'

const List = ({items, listComponent = 'ul', itemComponent = 'li', configureEmptyComponent, configureItem}) => {
  const ListComponent = listComponent
  const ItemComponent = itemComponent

  if (!configureEmptyComponent) {
    configureEmptyComponent = () => (<p>No members we're found</p>)
  }

  return (
    <ListComponent>
      {(!isEmpty(items))
        ? Object.keys(items).map((item) => (
          <ItemComponent key={items[item].id}>
            {configureItem(items[item])}
          </ItemComponent>
        ))
        : configureEmptyComponent()
      }
    </ListComponent>
  )
}

List.propTypes = {
  items: PropTypes.object.isRequired,
  listComponent: PropTypes.string,
  itemComponent: PropTypes.string,
  configureItem: PropTypes.func
}

export default List
