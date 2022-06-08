import React, { useContext } from 'react';
import { fabric } from 'fabric';
import { Button, IconButton } from '@chakra-ui/react';
import ContextCanvas from '../../context/ContextCanvas';
import { ImDownload2 } from 'react-icons/im';

const SaveFile = () => {
    const [canvas] = useContext(ContextCanvas);
    const saveCanvasImage = (option = { name: 'New Image', format: 'png', quality: 1 }) => {
        const dataUrl = canvas.toDataURL(option);
        const anchorEl = document.createElement('a');
        anchorEl.href = dataUrl;
        anchorEl.download = `${option.name}.png`;
        return anchorEl.click()

    }
    return (
        <>
            <IconButton
                type="button"
                onClick={() => saveCanvasImage()}
                _hover={{ color: 'white' }}
                _focus={{}}
                _active={{}}
                variant={'ghost'}
                icon={<ImDownload2 />}

            />
        </>
    );
};

export default SaveFile;
