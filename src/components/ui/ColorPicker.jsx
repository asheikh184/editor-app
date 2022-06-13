import React, { useContext, useState } from 'react';
import { Stack, Input } from '@chakra-ui/react';
import { CirclePicker, HuePicker, CustomPicker } from 'react-color';
import ContextCanvas from '../../context/ContextCanvas'

const ColorPicker = ({ hex, hsl, hsv }) => {
    const [canvas] = useContext(ContextCanvas)
    var { Saturation } = require('react-color/lib/components/common');
    const [color, setColor] = useState();
    const styles = {
        saturation: {
            width: 220,
            height: 100,
            position: 'relative',
        },
    };


    const colorPicker = (updatedColor) => {
        setColor(updatedColor.hex)
        canvas.getActiveObject().set("fill", updatedColor.hex);
        canvas.renderAll();


    }

    return (
        <Stack spacing={4} pt={'2'}>
            <div style={styles.saturation}>
                <Saturation hsl={hsl} hsv={hsv} />
            </div>

            <HuePicker
                height="10px"
                width="220px"
                color={color}
                onChange={colorPicker}
            />

            <CirclePicker
                width="220px"
                color={color}
                onChangeComplete={colorPicker}
            />

            <Input size={'sm'} value={color} />
        </Stack>
    );
};

export default CustomPicker(ColorPicker)
