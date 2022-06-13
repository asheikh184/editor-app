import React, { useContext } from 'react'
import { Select } from '@chakra-ui/react'
import ContextCanvas from '../../context/ContextCanvas'

const ChangeFonts = () => {

    const [canvas] = useContext(ContextCanvas)


    const change = (e) => {

        const value = e.target.value
        if (value !== 'Times New Roman') {
            canvas.getActiveObject().set("fontFamily", value);
            canvas.requestRenderAll();
        }
    }


    return (
        <>
            <Select onChange={change} px={'2'}>
                <option style={{ backgroundColor: 'white', color: 'black' }} value="">Select Font</option>
                <option style={{ backgroundColor: 'white', color: 'black' }} value="Helvetica">Helvetica</option>
                <option style={{ backgroundColor: 'white', color: 'black' }} value="Courier New">Courier New</option>
                <option style={{ backgroundColor: 'white', color: 'black' }} value="Verdana">Verdana</option>
                <option style={{ backgroundColor: 'white', color: 'black' }} value="Georgia">Georgia</option>
                <option style={{ backgroundColor: 'white', color: 'black' }} value="Comic Sans MS">Comic Sans MS</option>
                <option style={{ backgroundColor: 'white', color: 'black' }} value="monospace" >Monospace</option>
            </Select>



        </>
    )
}

export default ChangeFonts