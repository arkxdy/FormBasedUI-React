import { useState } from "react"
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";

type IForm = {
    name: string,
    age: number, 
    email: string,
    interest1: boolean,
    interest2: string
}
const initalFormData: IForm = {
    name: "",
    age: 0,
    email: "",
    interest1: false,
    interest2: ""
}

export enum DataType {
    Name,
    Age,
    Email,
    Int1,
    Int2

}

const Form = () => {
    const [active, setActive] = useState<string>("Profile");
    const [formData, setFormData] = useState<IForm>(initalFormData)

    const handleForm = (val: string, dataType: DataType) => {
        switch (dataType) { //have proper type than string
            case DataType.Name:
                setFormData(prev => ({...prev, name: val}))
                break
            case DataType.Age:
                setFormData(prev => ({...prev, age: parseInt(val)}))
                break
            case DataType.Email:
                setFormData(prev => ({...prev, email: val}))
                break
            case DataType.Int1:
                const v = val == "true"? true : false
                setFormData(prev => ({...prev, interest1: v}))
                break
            case DataType.Int2:
                setFormData(prev => ({...prev, interest2: val}))
                break
        }
    }

    const validateFormData = () => {
        //do validation
        console.log(formData)
    }
    return (
        <>
            <div className="tab-container">
                <input type="button" value="Profile" onClick={(e)=>setActive((e.target as HTMLInputElement).value)}></input>
                <input type="button" value="Interest" onClick={(e)=>setActive((e.target as HTMLInputElement).value)}></input>
                <input type="button" value="Setting" onClick={(e)=>setActive((e.target as HTMLInputElement).value)}></input>

            </div>
            {active =="Profile" && 
            <Profile
                name={formData.name}
                email={formData.email}
                age={formData.age}
                setData={handleForm}
            />
            }
            {active =="Interest" && 
            <Interest
                interest1={formData.interest1}
                interest2={formData.interest2}
                setData={handleForm}
            />
            }
            {active =="Setting" && <Setting validate={validateFormData}/>}
        </>
    )
}

export default Form