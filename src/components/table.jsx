import { useState } from 'react'
import './table.css'

const data = [
  {
    employeeId: '01',
    name: '',
    qty: '',
    price: '',
    total:''
   
  },
  {
    employeeId: '02',
    name: '',
    qty: '',
    price: '',
    total:''
    
  },
  {
    employeeId: '03',
    name: '',
    qty: '',
    price: '',
    total:''
   
  },
  {
    employeeId: '04',
    name: '',
    qty: '',
    price: '',
    total:''
    
  },
  

  
]

const EditableTable = () => {
  const [employeeData, setEmployeeData] = useState(data)

  const onChangeInput = (e, employeeId) => {
    const { name, value } = e.target

    const editData = employeeData.map((item) =>
      item.employeeId === employeeId && name ? { ...item, [name]: value } : item
    )

    setEmployeeData(editData)
  }

  return (
    
  <div className='container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map(({ employeeId, name, Quantity, price, total }) => (
              <tr key={employeeId}>
                <td>
                  <input
                    name="name"
                    value={name}
                    type="text"
                    onChange={(e) => onChangeInput(e, employeeId)}
                    placeholder="Type Name" />
                </td>
                <td>
                  <input
                    name="Qty"
                    value={Quantity}
                    type="number"

                    onChange={(e) => onChangeInput(e, employeeId)}
                    placeholder="Enter Quantity" />
                </td>
                <td>
                  <input
                    name="price"
                    type="number"
                    value={price}
                    onChange={(e) => onChangeInput(e, employeeId)}
                    placeholder="Enter price" />
                </td>
                <td>
                  <input
                    name="total"
                    type="numeric"
                    value={total}
                    onChange={(e) => onChangeInput(e, employeeId)}
                    placeholder="Enter total" />

                </td>




              </tr>
            ))}
          </tbody>
        </table>
        </div>
  )
}

export default EditableTable
