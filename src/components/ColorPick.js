import {Check} from 'react-feather'

const ColorPick = ({activeColor,setActive})=>{
    const colors=['transparent','#e36d78','#f6dc5a','#76f353','#52c5ec']
    return (
        <div className='color-pick'>
            {colors.map((color,i)=>
                <span key={i}
                      style={{backgroundColor:color}}
                      onClick={()=>setActive(color)}>
                    {color===activeColor && <Check/>}
                </span>
            )}
        </div>
    )
}
export default ColorPick