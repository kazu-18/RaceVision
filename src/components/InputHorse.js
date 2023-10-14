import { useSelector,useDispatch } from "react-redux";
import {
  VStack,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Switch,
} from "@chakra-ui/react";
import { getBracketColor, getTextColor } from "../utils/colors";
import { setHorse,toggleVisiblity } from "../store/modules/horseSlice";

const InputHorse = () => {
  const horses = useSelector(state => state.horses.horses);
  const dispatch = useDispatch();
  console.log(horses);

  return (
    <>
      <VStack>
        {/* <Textarea
          val={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="netkeibaの馬柱をコピーして貼り付けてください"
        />
        <Button colorScheme="blue" onClick={(e) => setInputVal(e.target.value)}>
          生成
        </Button> */}

        <TableContainer>
          <Table size="lg">
            <Thead>
              <Tr>
                <Th px={0} py={2}>
                  枠番
                </Th>
                <Th px={0} py={2}>
                  馬番
                </Th>
                <Th px={14} py={2}>
                  馬名
                </Th>
                <Th px={2} py={2}>
                  表示
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {horses.map((horse) => {
                return (
                  <Tr key={horse.horseNum}>
                    <Td
                      px={0}
                      py={0}
                      textAlign={"center"}
                      bgColor={getBracketColor(horse.bracketNum)}
                      textColor={getTextColor(horse.bracketNum)}
                    >
                      {horse.bracketNum}
                    </Td>
                    <Td px={0} py={0} textAlign={"center"}>
                      {horse.horseNum}
                    </Td>
                    <Td px={0} py={0}>
                      <Input
                        px={1}
                        placeholder="馬名"
                        fontSize={14}
                        value={horse.name}
                        onChange={(e) => {
                          // setHorses((prevState) => {
                          //   let newState = [...prevState];
                          //   newState[horse.horseNum - 1].name = e.target.value;
                          //   return newState;
                          // });
                          dispatch(setHorse({name:e.target.value,horseNum:horse.horseNum}));
                          console.log(horse);
                        }}
                      />
                    </Td>
                    <Td px={0} py={0} textAlign={"center"}>
                      <Switch
                        isChecked={horse.visible}
                        onChange={() => {
                          // setHorses((prevState) => {
                          //   let newState = [...prevState];
                          //   newState[horse.horseNum - 1].visible =
                          //     !prevState[horse.horseNum - 1].visible;
                          //   return newState;
                          // });
                          dispatch(toggleVisiblity({horseNum:horse.horseNum}))
                          console.log(horse)
                        }}
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </>
  );
};

export default InputHorse;
