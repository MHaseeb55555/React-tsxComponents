type BACrad = {
    id: number,
    name: string,
    city: string


}
export default function BACard(props: BACrad) {
    const { id, name, city } = props
    return (
        <>


            <div style={{ display: 'flex', width: '9em', boxShadow:'4px 4px 7px grey', padding: '2em', height: '7em', margin: '2em', }}>
                <div>
                    <p> ID :{id}</p>
                    <p>NAME :{name}</p>
                    <p>CITY :{city}</p>
                </div>
            </div>

        </>
    )
}