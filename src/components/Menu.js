import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { MdOutlineVideoSettings } from "react-icons/md";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  VStack,
  Tooltip,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
  Button,
  useToast,
  useSteps,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleAnim } from "../store/modules/animConfigSlice";

const Menu = ({ stageRef, horsesRef }) => {
  const horses = useSelector((state) => state.horses.horses);
  const isAnimating = useSelector((state) => state.animConfig.isAnimating);
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const toastId = "toast";

  const steps = [
    { title: "First", description: "set animation start position." },
    { title: "Second", description: "set animation end position." },
    { title: "Third", description: "set animation durarion." },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const openToast1st = () => {
    if (!toast.isActive(toastId)) {
      toast({
        id: toastId,
        title: "instruction",
        description: "aaa",
        status: "info",
        duration: null,
        isClosable: true,
        position: "top",
        render: ({ onClose }) => (
          <VStack bgColor="white" borderRadius={10}>
            <Stepper index={activeStep}>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepNumber />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  {/* <StepTitle>{step.title}</StepTitle> */}
                  <StepDescription>{step.description}</StepDescription>
                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
            <Box>馬アイコンをアニメーション開始位置へ移動してください．</Box>
            <Button
              onClick={() => {
                onClose();
                openToast2nd();
              }}
            >
              次へ
            </Button>
          </VStack>
        ),
      });
    }
  };

  const openToast2nd = () => {
    if (!toast.isActive("toast2nd")) {
      toast({
        id: "toast2nd",
        title: "instruction",
        description: "aaa",
        status: "info",
        duration: null,
        isClosable: true,
        position: "top",
        render: ({ onClose }) => (
          <VStack bgColor="white" borderRadius={10}>
            <Stepper index={activeStep}>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepNumber />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  {/* <StepTitle>{step.title}</StepTitle> */}
                  <StepDescription>{step.description}</StepDescription>
                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
            <Box>馬アイコンをアニメーション開始位置へ移動してください．</Box>
            <Button>次へ</Button>
          </VStack>
        ),
      });
    }
  };

  const clickDownload = () => {
    const uri = stageRef.current.toDataURL();

    let link = document.createElement("a");
    link.download = "raceVision.png";
    link.href = uri;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const setAnimStartPos = () => {
    horsesRef.current.children.map((horseRef) => {
      horseRef.attrs.startX = horseRef.attrs.x;
      horseRef.attrs.startY = horseRef.attrs.y;
    });
  };

  const setAnimEndPos = () => {
    horsesRef.current.children.map((horseRef) => {
      horseRef.attrs.endX = horseRef.attrs.x;
      horseRef.attrs.endY = horseRef.attrs.y;
    });
  };

  return (
    <>
      <VStack>
        <Button onClick={onOpen}>開く</Button>
        <Tooltip hasArrow label="download" placement="right">
          <IconButton icon={<BsDownload />} onClick={clickDownload} />
        </Tooltip>
        <Tooltip
          hasArrow
          label="set animation start position"
          placement="right"
        >
          <IconButton
            icon={<MdOutlineVideoSettings />}
            onClick={setAnimStartPos}
          />
        </Tooltip>
        <Tooltip hasArrow label="set animation end position" placement="right">
          <IconButton
            icon={<MdOutlineVideoSettings />}
            onClick={setAnimEndPos}
          />
        </Tooltip>
        <Tooltip hasArrow label="animation start" placement="right">
          <IconButton
            icon={isAnimating ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
            onClick={() => {
              dispatch(toggleAnim());
            }}
          />
        </Tooltip>
        {/* <Tooltip hasArrow label="animation stop" placement="right">
        <IconButton icon={<AiFillPauseCircle />} />
      </Tooltip> */}
        <Tooltip hasArrow label="animation setting">
          <IconButton
            icon={<MdOutlineVideoSettings />}
            onClick={openToast1st}
          />
        </Tooltip>
      </VStack>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <p>アイテム</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
