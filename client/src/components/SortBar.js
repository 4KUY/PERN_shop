import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'
import { ToggleButton } from 'react-bootstrap'
import { Context } from '..'


export const SortBar = () => {
  const [checked, setChecked] = useState(false)


  const { product } = useContext(Context)
  const sortProduct = (e) => {
    setChecked(e.currentTarget.checked)
    
    if (!checked) {
      product.setSortByPrice()
    } else {
      product.setBaseProducts(false)
    }
  }
  return (
    <div style={{ margin: '15px 5px 0 0' }}>

      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-secondary"
        checked={checked}
        value="1"
        onChange={(e) =>sortProduct(e) }
        onClick={() => console.log()}
      >
        <FontAwesomeIcon icon={faArrowUpWideShort} rotation={180} />
      </ToggleButton>

    </div>
  )
}
