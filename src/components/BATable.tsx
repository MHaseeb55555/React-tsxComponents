type BATable = {
    sourceData: any[],
    cols: any[]
}

export default function BATable(props: BATable) {

    const { sourceData, cols } = props

    return (
        <>
            <table border={2}>
                <thead>
                    <tr>
                        {cols.map((x, i) => (<>
                            <th key={i}>{x.heading}</th></>))}
                    </tr>
                </thead>

                <tbody>
                    {sourceData.map((row, i) => (
                        <>
                            <tr>{cols.map((col, i) => (
                            <td >{row[col.key]}</td>
                            ))}</tr>
                        </>
                    ))}
                </tbody>
            </table>
        </>
    )
}