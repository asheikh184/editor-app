import React, { useContext, useState, useEffect } from 'react';
import { Stack, Input } from '@chakra-ui/react';
import { CustomPicker, SketchPicker } from 'react-color';
import ContextCanvas from '../../context/ContextCanvas'

const ColorPicker = () => {
    const [canvas] = useContext(ContextCanvas)
    const [background, setBackground] = useState()

    const handleChangeComplete = (color) => {
        setBackground(color.hex)
        canvas.getActiveObject().set("fill", color.hex)
        canvas.renderAll()
    }
    return (

        <Stack spacing={4} py={'4'}>

            <SketchPicker
                color={background}
                onChangeComplete={handleChangeComplete}
            />

        </Stack >

    );
};

export default CustomPicker(ColorPicker)