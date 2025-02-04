import { ChangeEvent } from "react"
import { DataType } from "./Form"

type IProps = {
    interest1: boolean,
    interest2: string,
    setData: (val: string, dataType: DataType) => void,
}

const Interest = (props: IProps) => {
    return (
        <>
        <div className="interest-container">
            <span>Interest</span>
            <div>
                <span>Interest1</span>
                <input type="radio" value="true" checked={props.interest1} onChange={(e: ChangeEvent<HTMLInputElement>) => props.setData(e.target.value, DataType.Int1)} className="type1"/>A
                <input type="radio" value="false" checked={!props.interest1} onChange={(e: ChangeEvent<HTMLInputElement>) => props.setData(e.target.value, DataType.Int1)} className="type1"/>B
            </div>
            <div>
                <span>Interest2</span>
                <select value={props.interest2} onChange={(e: ChangeEvent<HTMLSelectElement>) => props.setData(e.target.value, DataType.Int2)}>
                    <option>Select</option>
                    <option value="opt1">Opt1</option>
                    <option value="opt2">Opt2</option>
                    <option value="opt3">Opt3</option>
                </select>
            </div>
        </div>
        </>
    )
}

export default Interest