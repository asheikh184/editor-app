import React, { useContext } from 'react';
import { fabric } from 'fabric';
import { Button } from '@chakra-ui/react';
import ContextCanvas from '../../context/ContextCanvas';

const SaveFile = () => {
    const [canvas] = useContext(ContextCanvas);
    function convertToImagen() {
        canvas.renderAll();
        window.open(canvas.toDataURL('png'));
    }
    return (
        <>
            <Button
                type="button"
                color={'#40505F !important'}
                onClick={(convertToImagen())}
                variant={'ghost'}

                _hover={{ color: 'white' }}
                _focus={{}}
                _active={{}}
                textColor={'white'}
                fontWeight={'light'}

            >
                Save
            </Button>
        </>
    );
};

export default SaveFile;
