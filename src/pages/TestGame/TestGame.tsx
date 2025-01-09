import { useState, useRef, useEffect } from "react";
import { Stage, Layer, Image, Rect, Circle } from "react-konva";
import useImage from "../../helpers/useImage";
import imgs from "../../assets/png/image 10.png";

function TestGame() {
  const [image] = useImage(imgs);
  const [scale, setScale] = useState(0.3);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [houses, setHouses] = useState<{x: number, y: number}[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({
    width: 400,
    height: 500,
  });
  const markers = [
    { x: 200, y: 850 },
    { x: 850, y: 850 },
    { x: 500, y: 750 },
    { x: 550, y: 1200 },
    // Добавьте больше маркеров по необходимости
  ];

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, []);

  const handleMarkerClick = (marker: { x: number, y: number }) => {
    setHouses([...houses, { x: marker.x, y: marker.y }]);
  };

  const handleWheel = (e: any) => {
    e.evt.preventDefault();
    const scaleBy = 1.1;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
    setScale(newScale);
    setPosition({
      x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale,
    });
  };

  const dragBoundFunc = (pos: {x: number, y: number}) => {
    if (!image) return pos;

    const containerWidth = containerSize.width;
    const containerHeight = containerSize.height;
    const mapWidth = image.width * scale;
    const mapHeight = image.height * scale;

    let newX = pos.x;
    let newY = pos.y;

    // Ограничение по горизонтали
    if (newX > 0) {
      newX = 0;
    } else if (newX < containerWidth - mapWidth) {
      newX = containerWidth - mapWidth;
    }

    // Ограничение по вертикали
    if (newY > 0) {
      newY = 0;
    } else if (newY < containerHeight - mapHeight) {
      newY = containerHeight - mapHeight;
    }

    return {
      x: newX,
      y: newY,
    };
  };

  const isHouseAtMarker = (marker: {x: number, y: number}) => {
    return houses.some((house) => house.x === marker.x && house.y === marker.y);
  };

  return (
    <div
      ref={containerRef}
      style={{
        width: "400px",
        height: "500px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Stage
        width={containerSize.width}
        height={containerSize.height}
        draggable
        scaleX={scale}
        scaleY={scale}
        x={position.x}
        y={position.y}
        // onWheel={handleWheel}
        dragBoundFunc={dragBoundFunc}
        onDragEnd={() => {}}
        style={{ cursor: "grab" }}
      >
        <Layer>
          <Image image={image} />
          {markers.map(
            (marker, index) =>
              !isHouseAtMarker(marker) && (
                <Circle
                  key={index}
                  x={marker.x}
                  y={marker.y}
                  radius={50}
                  fill="blue"
                  onClick={() => handleMarkerClick(marker)}
                />
              )
          )}
          {houses.map((house, index) => (
            <Rect
              key={index}
              x={house.x}
              y={house.y}
              width={50}
              height={50}
              fill="red"
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
}

export default TestGame;
