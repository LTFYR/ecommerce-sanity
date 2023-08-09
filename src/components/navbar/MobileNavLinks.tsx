"use client";

import { navLinks } from "@/constants/helpers";
import { Logo } from "@/components/Logo";
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
  Image,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

export const MobileNavLinks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef: any = React.useRef();

  return (
    <>
      <Button bgColor="white" color="white" ref={btnRef} onClick={onOpen}>
        <Image src="hamburger.png" alt="hamburger menu" w="20px" h="20px" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>

          <DrawerBody>
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href}>
                <Box
                  p="0.5rem"
                  _hover={{ bgColor: "brand.light", color: "white" }}
                >
                  {link.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>

          <DrawerFooter display="flex" justifyContent="center">
            Lutfiyar N30
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
