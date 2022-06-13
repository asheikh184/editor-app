import { useContext, useState, useEffect } from 'react'
import ContextCanvas from '../../context/ContextCanvas'
import { Select } from '@chakra-ui/react'




const ChangeFontSize = () => {

    const [canvas] = useContext(ContextCanvas)
    const [fontSize, setFontSize] = useState()

    const fontSizeHandler = (e) => {

        setFontSize(e.target.value)
        console.log(e.target.value)
        canvas.getActiveObject().set("fontSize", fontSize);
        canvas.renderAll();


    }

    return (
        <Select onChange={fontSizeHandler} >
            <option value="" disabled selected>Select font Size</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='5'> 5</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='5.5'>5.5</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='6.5'>6.5</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='7.5'>7.5</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='8'>8</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='9'>9</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='10'>10</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='10.5'>10.5</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='11'>11</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='12'>12</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='14'>14</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='16'>16</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='18'>18</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='20'>20</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='22'>22</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='26'>26</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='28'>28</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='36'>36</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='48'>48</option>
            <option style={{ backgroundColor: 'white', color: 'black' }} value='56'>56</option>
        </Select>

    )
}

export default ChangeFontSize