import { React, useContext } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../../context/ContextCanvas';

const Image = () => {
  const [canvas] = useContext(ContextCanvas);

  const name1 = e => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f) {
      var data = f.target.result;
      fabric.Image.fromURL(data, function (img) {
        let scale = 300 / img.width;
        var oImg = img.set({ scaleX: scale, scaleY: scale }).scale(0.9);
        canvas.add(oImg).renderAll();
        // var a = canvas.setActiveObject(oImg);
        // var dataURL = canvas.toDataURL({ format: 'png', quality: 0.8 });
      });
    };
    reader.readAsDataURL(file);
  };

  return <input type="file" placeholder='UploadImage' onChange={name1} />;
};

export default Image;
