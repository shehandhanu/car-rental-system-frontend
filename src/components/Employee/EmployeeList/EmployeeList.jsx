import React from 'react'
import axios from 'axios'

const EmployeeList = () => {
    const [emp, setemp] = React.useState([])

    React.useEffect(async() => {
        let data = await axios.get('http://localhost:4000/api/v1/employee/getemployee')
        // console.log(data);
        setemp(data.data.emp)
        
    },[!emp])
    
    console.log(emp);
    return (
        <div>
            <h1>Hi</h1>
           {emp.map((employee) => (
                <h1 key={employee._id}>{employee.fName}</h1>
           ))}
        </div>
    )
}

export default EmployeeList
