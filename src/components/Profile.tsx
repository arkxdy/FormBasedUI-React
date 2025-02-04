import { ChangeEvent } from "react"


type IProps = {
    name: string,
    age: number,
    email: string,
    setData: (val: string, dataType: string) => void,
}

const Profile = (props: IProps) => {
    return (
        <>
        <div className="profile-container">
            <span>Profile</span>
            <div>
                <span>Name: </span>
                <input type="text" value={props.name} onChange={(e: ChangeEvent<HTMLInputElement>) => props.setData(e.target.value, "Name")}/>
            </div>
            <div>
                <span>Age: </span>
                <input type='number' value={props.age} onChange={(e: ChangeEvent<HTMLInputElement>) => props.setData(e.target.value, "Age")}/>
            </div>
            <div>
                <span>Email: </span>
                <input type='email' value={props.email} onChange={(e: ChangeEvent<HTMLInputElement>) => props.setData(e.target.value, "Email")}/>
            </div>
        </div>
        </>
    )
}

export default Profile