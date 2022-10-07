

export const VideoSearch = ({setterFunction}) => {

    return (

       <div>
           <input className="search" 
           onChange={
               (changeEvent) => {
                   setterFunction(changeEvent.target.value)
               }
           }
            type="text" placeholder="&nbsp;&nbsp;&nbsp;Search for Video..." />
       </div>
        
    )
}