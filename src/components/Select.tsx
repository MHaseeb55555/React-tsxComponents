import { getValue } from "@testing-library/user-event/dist/utils"

type selectProps = {
    label: string,
    options: any[],
    getValue: any


}

export default function Select(props: selectProps) {

    const { label, options, getValue } = props

    // let selectChange = (a) => {

    //     console.log(a)
    //     getValue(a)

    // }
    function abc(a: string) {
        getValue(a)
    }

    return (
        <>
            <p>{label}</p>
            <select onChange={(e) => abc(e.target.value)} >
                {options && Array.isArray(options) && options.map((x, i) => (
                    <option key={i} value={x.value}>{x.displayName}</option>

                ))}

            </select>



        </>
    )

}