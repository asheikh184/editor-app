import React, { useContext, useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import ContextCanvas from '../../../context/ContextCanvas';



const PolygonComp = () => {
    const [canvas] = useContext(ContextCanvas);
    const prevCordsRef = useRef();
    const line = useRef();
    const isDown = useRef();
    const vertices = useRef([]);
    // const polygon = useRef();

    useEffect(() => {
        if (!canvas) return;
        fabric.Object.prototype = {
            ...fabric.Object.prototype,
            transparentCorners: false,
            cornerStyle: "circle",
            cornerSize: 1
        };
        // return()=>{
        //     canvas.off()
        // }

    }, [canvas]);

    const resetCanvas = () => {                          /*Clear Canvas for the new canvas */
        canvas.off();
        canvas.clear();
    };

    const resetVariables = () => {                       /*Reset Lines for the new canvas */
        line.current = undefined;
        isDown.current = undefined;
        prevCordsRef.current = undefined;
        // polygon.current = undefined;
        vertices.current = [];
    };

    const addVertice = (newPoint) => {                   /*add vertices to the virtix array with positions*/
        if (vertices.current.length > 0) {
            const lastPoint = vertices.current[vertices.current.length - 1];
            if (lastPoint.x !== newPoint.x && lastPoint.y !== newPoint.y) {
                vertices.current.push(newPoint);
            }
        } else {
            vertices.current.push(newPoint);
        }
    };

    const drawPolygon = () => {
        resetVariables();
        // resetCanvas();

        canvas.on("mouse:down", function (o) {
            isDown.current = true;
            const pointer = canvas.getPointer(o.e);
            canvas.selection = false;
            let points = [pointer.x, pointer.y, pointer.x, pointer.y];

            if (prevCordsRef.current && prevCordsRef.current.x2 && prevCordsRef.current.y2) {
                const prevX = prevCordsRef.current.x2;
                const prevY = prevCordsRef.current.y2;
                points = [prevX, prevY, prevX, prevY];
            }

            const newPoint = {
                x: points[0],
                y: points[1]
            };
            addVertice(newPoint);

            line.current = new fabric.Line(points, {
                strokeWidth: 2,
                fill: "black",
                stroke: "blue",
                originX: "center",
                originY: "center"
            });

            canvas.add(line.current);
        });

        canvas.on("mouse:move", function (o) {
            console.log("mousemove fired")
            if (!isDown.current) return;
            canvas.setCursor("crosshair")
            const pointer = canvas.getPointer(o.e);
            const coords = {
                x2: pointer.x,
                y2: pointer.y
            };
            line.current.set(coords);
            prevCordsRef.current = coords;
            canvas.requestRenderAll();
        });

        canvas.on("mouse:up", function (o) {
            // isDown.current = false;
            const pointer = canvas.getPointer(o.e);

            const newPoint = {
                x: pointer.x,
                y: pointer.y
            };
            addVertice(newPoint);
        });

        // canvas.on("object:moving", function (option) {
        //     console.log("object moving fired")
        //     const object = option.target;
        //     canvas.forEachObject(function (obj) {
        //         if (obj.name === "Polygon") {
        //             if (obj.PolygonNumber === object.polygonNo) {
        //                 const points = window["polygon" + object.polygonNo].get("points");
        //                 points[object.circleNo - 1].x = object.left;
        //                 points[object.circleNo - 1].y = object.top;
        //                 window["polygon" + object.polygonNo].set({ points });
        //             }
        //         }
        //     });
        //     canvas.requestRenderAll();
        // });
    };

    const showPolygon = () => {
        resetCanvas();
        const poly = new fabric.Polygon(vertices.current, {
            fill: "red",
            strokeWidth: 2,
            stroke: "black",
            objectCaching: false,
            transparentCorners: false,
            cornerColor: "blue",
            hasBorders: true,
            cornerStyle: "rect"
        });


        poly.controls = fabric.Object.prototype.controls;
        poly.edit = false;
        poly.hasBorders = true;
        poly.cornerColor = "blue";
        poly.cornerStyle = "rect";
        canvas.add(poly);
        // canvas.sendToBack(polygon.current);
        canvas.requestRenderAll();

    };

    // function polygonPositionHandler(dim, finalMatrix, fabricObject) {             /*Polygon Positioning*/
    //     let x = fabricObject.points[this.pointIndex].x - fabricObject.pathOffset.x,
    //         y = fabricObject.points[this.pointIndex].y - fabricObject.pathOffset.y;
    //     return fabric.util.transformPoint(
    //         {
    //             x: x,
    //             y: y
    //         },
    //         fabric.util.multiplyTransformMatrices(
    //             fabricObject.canvas.viewportTransform,
    //             fabricObject.calcTransformMatrix()
    //         )
    //     );
    // }

    // function actionHandler(eventData, transform, x, y) {
    //     let polygon = transform.target,
    //         currentControl = polygon.controls[polygon.__corner],
    //         mouseLocalPosition = polygon.toLocalPoint(
    //             new fabric.Point(x, y),
    //             "center",
    //             "center"
    //         ),
    //         polygonBaseSize = polygon._getNonTransformedDimensions(),
    //         size = polygon._getTransformedDimensions(0, 0),
    //         finalPointPosition = {
    //             x:
    //                 (mouseLocalPosition.x * polygonBaseSize.x) / size.x +
    //                 polygon.pathOffset.x,
    //             y:
    //                 (mouseLocalPosition.y * polygonBaseSize.y) / size.y +
    //                 polygon.pathOffset.y
    //         };
    //     polygon.points[currentControl.pointIndex] = finalPointPosition;
    //     return true;
    // }

    // function anchorWrapper(anchorIndex, fn) {
    //     return function (eventData, transform, x, y) {
    //         let fabricObject = transform.target,
    //             absolutePoint = fabric.util.transformPoint(
    //                 {
    //                     x: fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x,
    //                     y: fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y
    //                 },
    //                 fabricObject.calcTransformMatrix()
    //             ),
    //             actionPerformed = fn(eventData, transform, x, y),
    //             newDim = fabricObject._setPositionDimensions({}),
    //             polygonBaseSize = fabricObject._getNonTransformedDimensions(),
    //             newX =
    //                 (fabricObject.points[anchorIndex].x - fabricObject.pathOffset.x) /
    //                 polygonBaseSize.x,
    //             newY =
    //                 (fabricObject.points[anchorIndex].y - fabricObject.pathOffset.y) /
    //                 polygonBaseSize.y;
    //         fabricObject.setPositionByOrigin(absolutePoint, newX + 0.5, newY + 0.5);
    //         return actionPerformed;
    //     };
    // }

    // function editPolygon() {
    //     canvas.setActiveObject(polygon.current);

    //     polygon.current.edit = true;
    //     polygon.current.hasBorders = false;

    //     let lastControl = polygon.current.points.length - 1;
    //     polygon.current.cornerStyle = "circle";
    //     polygon.current.cornerColor = "rgba(0,0,255,0.5)";
    //     polygon.current.controls = polygon.current.points.reduce(function (
    //         acc,
    //         point,
    //         index
    //     ) {
    //         acc["p" + index] = new fabric.Control({
    //             positionHandler: polygonPositionHandler,
    //             actionHandler: anchorWrapper(
    //                 index > 0 ? index - 1 : lastControl,
    //                 actionHandler
    //             ),
    //             actionName: "modifyPolygon",
    //             pointIndex: index
    //         });
    //         return acc;
    //     },
    //         {});


    // }

    return (
        <>
            <button onClick={drawPolygon}>Draw</button>
            <button onClick={showPolygon}>Show</button>
            {/* <button onClick={editPolygon}>Edit</button> */}

        </>
    )
}

export default PolygonComp