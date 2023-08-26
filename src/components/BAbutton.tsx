type BAbutton={
    value:string,
    buttonClick:any,


}

export default function BAbutton(props: BAbutton){
    const {value,buttonClick}=props

return(
   <>
   <button style={{margin:'1em'}} onClick={buttonClick}>{value}</button>
   </>
)
}