import { ChangeEvent } from "react"
import { DataType } from "./Form"


type IProps = {
    name: string,
    age: number,
    email: string,
    setData: (val: string, dataType: DataType) => void,
}

const Profile = (props: IProps) => {
    return (
        <>
        <div className="profile-container">
            <span>Profile</span>
            <div>
                <span>Name: </span>
                <input type="text" value={props.name} onChange={(e: ChangeEvent<HTMLInputElement>) => props.setData(e.target.value, DataType.Name)}/>
            </div>
            <div>
                <span>Age: </span>
                <input type='number' value={props.age} onChange={(e: ChangeEvent<HTMLInputElement>) => props.setData(e.target.value, DataType.Age)}/>
            </div>
            <div>
                <span>Email: </span>
                <input type='email' value={props.email} onChange={(e: ChangeEvent<HTMLInputElement>) => props.setData(e.target.value, DataType.Email)}/>
            </div>
        </div>
        </>
    )
}

export default Profile