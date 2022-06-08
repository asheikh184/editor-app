import React, { useContext, useEffect } from 'react'
import ContextCanvas from '../../../context/ContextCanvas';
import { fabric } from 'fabric';



let buttonPressed = false;
const toggleHandler = () => {
    buttonPressed = !buttonPressed
}
const Pen = () => {
    const [canvas] = useContext(ContextCanvas)
    useEffect(() => {
        if (!canvas) {
            return
        }
        canvas.on('mouse:down', (event) => {
            if (buttonPressed) {
                canvas.isDrawingMode = true
                canvas.setCursor('crosshair')
                canvas.requestRenderAll()
                console.log(buttonPressed)
            } else {
                canvas.isDrawingMode = false
                canvas.setCursor('default')
                canvas.requestRenderAll()
            }
        })
        //mouse:up

        canvas.on('mouse:up', (event) => {
            canvas.setCursor('default')
            canvas.requestRenderAll()
        })

        return () => {
            // canvas.off("mouse:up")
            // canvas.off("mouse:down")
        }
    }, [canvas])

    return (
        <>
            <button onClick={() => toggleHandler()}>
                Pen
            </button>
        </>
    )
}

export default Pen