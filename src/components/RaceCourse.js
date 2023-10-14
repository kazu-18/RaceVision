import { useState, useRef } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { useSelector, useDispatch } from "react-redux";

import { setDuration } from "../store/modules/animConfigSlice";

import Horses from "./Horses";
import InputHorse from "./InputHorse";
import { HStack, Input, VStack } from "@chakra-ui/react";
import Menu from "./Menu";

const RaceCourse = () => {
  const animDuration = useSelector((state) => state.animConfig.duration);
  const dispatch = useDispatch();

  const stageRef = useRef(null);
  const horsesRef = useRef(null);

  return (
    <HStack>
      <VStack>
        {/* <h2>AnimDuration:{animDuration}</h2>
        <Input
          type="number"
          value={animDuration}
          onChange={(e) => {
            dispatch(setDuration(e.target.value));
            console.log("duration",animDuration);
          }}
        /> */}
      </VStack>
      <InputHorse />
      <Menu stageRef={stageRef} horsesRef={horsesRef} />
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
      >
        <Layer>
          <Rect
            width={window.innerWidth}
            height={window.innerHeight}
            fill="#34C754"
          />
          <Horses horsesRef={horsesRef} />
        </Layer>
      </Stage>
    </HStack>
  );
};

export default RaceCourse;
