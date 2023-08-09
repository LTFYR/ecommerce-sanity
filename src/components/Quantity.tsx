import { IQuantityProps } from "@/interfaces/index";
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
export const Quantity = ({
  step = 1,
  defaultValue = 1,
  min = 1,
  max = 20,
  disabled = false,
}: //   setQuantity,
IQuantityProps) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step,
      defaultValue,
      min,
      max,
      //   onChange(valueAsString, valueAsNumber) {
      //     setQuantity(valueAsString, valueAsNumber);
      //   },
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="140px" my="0.5rem">
      <Button {...dec} disabled={disabled}>
        -
      </Button>
      <Input {...input} readOnly={true} minW="52px" />
      <Button {...inc} disabled={disabled}>
        +
      </Button>
    </HStack>
  );
};
