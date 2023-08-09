import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AppContext } from "@/context/appContent";
import { calcTotal } from "@/constants/helpers";
import Link from "next/link";
import { useContext, useRef } from "react";
import { BsCart4 } from "react-icons/bs";
import { Item } from "./Item";

export const Cart = () => {
  const {
    state: { cart },
    reset,
    addToCart,
  } = useContext(AppContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>();

  const handleCheckout = () => {
    reset("checkout");
    cart.forEach((cartItem) => {
      addToCart("checkout", cartItem, cartItem.count);
    });

    onClose();
  };

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="ghost"
        color="brand.primary"
        _hover={{
          bgColor: "transparent",
        }}
        pos="relative"
      >
        <BsCart4 /> <Text mx="1">Cart</Text>
        {cart.length !== 0 && (
          <Flex
            pos="absolute"
            top="0px"
            right="5px"
            bgColor="brand.primaryLight"
            boxSize="15px"
            rounded="full"
            color="white"
            fontSize="0.6rem"
            align="center"
            justify="center"
          >
            {cart.length}
          </Flex>
        )}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="brand.primary">
            Cart ( {cart.length} Items )
          </DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <>Your Cart is Empty</>
            ) : (
              cart.map((item) => <Item key={item.id} item={item} />)
            )}
          </DrawerBody>
          {cart.length !== 0 && (
            <DrawerFooter justifyContent="space-between">
              <Box>
                <Button variant="outline" mr={3} onClick={() => reset("cart")}>
                  Clear Cart
                </Button>
                <Link href="/checkout">
                  <Button
                    bgColor="brand.primary"
                    color="white"
                    _hover={{
                      bgColor: "brand.primaryLight",
                    }}
                    _active={{
                      bgColor: "brand.primaryLight",
                    }}
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                </Link>
              </Box>
              <Box fontWeight="bold">Total: $ {calcTotal(cart)}</Box>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
