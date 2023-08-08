import React, {useContext} from 'react'
import TypeBar from '../TypeBrand/TypeBar'
import BrandBar from '../BrandBar/BrandBar'
import { Context } from '../..'

        
export const ListFilters = () => {
    const { device } = useContext(Context)
    const fuseSortedBrand = (device) => {
        if (Object.keys(device.selectedBrand).length !== 0) {
          return device.devices.filter(product => product.brandId === device.selectedBrand.id)
        }
        return device.devices
      }
      const fuseFilter = () => {
        const sortedDeviceByBrand = fuseSortedBrand(device)
        if (Object.keys(device.selectedType).length !== 0) {
          return sortedDeviceByBrand.filter(product => product.typeId === device.selectedType.id)
        }
        return sortedDeviceByBrand
      }
  return (

    <div >
        <h5>Межосевое расстояние:</h5>
        <TypeBar fuseFilter={fuseFilter} />
        <h5>Модель:</h5>
          <BrandBar fuseFilter={fuseFilter}  />
    </div>
  )
}
