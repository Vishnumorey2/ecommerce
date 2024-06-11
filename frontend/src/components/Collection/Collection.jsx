import React from 'react'
import collection_data from '../Assets/collection-data'
import Item from '../Item/Item'
import '../Collection/Collection.css'

const Collection = () => {
  return (
    <div className="new-collection">
        <h1>NEW COLLECTION</h1>
        <hr/>
        <div className="collection">
            {collection_data.map((item,i) => {
                return <Item  key={i}  Id={item.id} name={item.name} image={item.images} new_price={item.new_price}  old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Collection