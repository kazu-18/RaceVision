import { Circle, Group, Text } from "react-konva";
import { getBracketColor, getTextColor } from "../utils/colors";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAnim } from "../store/modules/animConfigSlice";
import { setHorse,setHorsePosition } from "../store/modules/horseSlice";
import Konva from "konva";

const Horses = ({ horsesRef }) => {
  const horses = useSelector(state => state.horses.horses);
  const isAnimating = useSelector(state => state.animConfig.isAnimating);
  const animDuration = useSelector(state => state.animConfig.duration);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAnimating === true) {
      console.log("play");
      startAnim();
    } else {
      console.log("pause");
      if(horsesRef.current.children[0].attrs.anim !== undefined){
        pauseAnim();
        console.log("pauseAnim")
      }
    }
  }, [isAnimating]);

  const startAnim = () => {
    horsesRef.current.children.map((horseRef) => {
      horseRef.attrs.anim = new Konva.Animation((frame) => {
        let time = frame.time,
          timeDiff = frame.timeDiff,
          frameRate = frame.frameRate;

        // Calculate the new position
        let newPos = {
          x:
            horseRef.attrs.startX +
            (horseRef.attrs.endX - horseRef.attrs.startX) * (time / animDuration),
          y:
            horseRef.attrs.startY +
            (horseRef.attrs.endY - horseRef.attrs.startY) * (time / animDuration),
        };

        // Move the group to the new position
        // horsesRef.position(newPos);
        horseRef.x(horseRef.attrs.startX + (horseRef.attrs.endX - horseRef.attrs.startX) * (time / animDuration));
        horseRef.y(horseRef.attrs.startY + (horseRef.attrs.endY - horseRef.attrs.startY) * (time / animDuration));

        // Stop the animation after the specified duration
        if (time > animDuration) {
          horseRef.attrs.anim.stop();
          horseRef.attrs.pauseTime = 0;
          // setIsAnimating(false);
          dispatch(toggleAnim());
        }
      }, horseRef.getLayer());
      
      horseRef.attrs.anim.start();
    });
  };

  const pauseAnim = () => {
    horsesRef.current.children.map((horseRef) => {
      horseRef.attrs.anim.stop();
    });
  }

  return (
    <Group ref={horsesRef}>
      {horses.map((horse) => {
        return (
          <Group
            key={horse.horseNum}
            horseNum={horse.horseNum}
            draggable={true}
            x={100}
            y={horse.horseNum * 50}
            startX={100}
            startY={horse.horseNum * 50}
            endX={100}
            endY={horse.horseNum * 50}
            visible={horse.visible}
            onDragEnd={(e) => {
              // setHorses((prevState) => {
              //   let newState = [...prevState];
              //   newState[horse.horseNum - 1].currentPos.x = e.target.x();
              //   newState[horse.horseNum - 1].currentPos.y = e.target.y();
              //   console.log(newState);
              //   console.log(horsesRef);
              //   return newState;
              // });
              dispatch(setHorsePosition({horseNum:horse.horseNum,x:e.target.x(),y:e.target.y()}))
            }}
          >
            <Circle
              radius={20}
              fill={getBracketColor(horse.bracketNum)}
              stroke="#ffffff"
            />
            <Text
              text={horse.horseNum}
              x={-20}
              y={-10}
              fontSize={25}
              width={40}
              align="center"
              fill={getTextColor(horse.bracketNum)}
            />
            <Text
              text={horse.name.substr(0, 3)}
              x={-35}
              y={25}
              fontSize={16}
              width={70}
              align="center"
              fill="white"
            />
          </Group>
        );
      })}
    </Group>
  );
};

export default Horses;
