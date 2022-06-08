import React, { useContext } from 'react'
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
            <select onChange={change}>
                <option value="">Select Font</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Courier New">Courier New</option>
                <option value="Verdana">Verdana</option>
                <option value="Georgia">Georgia</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="monospace" >Monospace</option>
            </select>



        </>
    )
}

export default ChangeFonts