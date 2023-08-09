import React, { ReactNode } from "react";
import {
  Box,
  Container,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
} from "@chakra-ui/react";
import { BiMailSend } from "react-icons/bi";
import { Logo } from "@/components/Logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const SocialMediaIcons = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg="blackAlpha.100"
      w={8}
      h={8}
      as="a"
      cursor="pointer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      rounded="full"
      transition="background 0.3s ease"
      _hover={{ bg: "blackAlpha.200" }}
      href={href}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const List = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb="2">
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box bg="black" color="gray.500" mt="2rem">
      <Container as={Stack} maxW="6xl" py="10">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize="sm">2023 EShop. All rights reserved</Text>
            <Stack direction="row" spacing={6}>
              <SocialMediaIcons label="Facebook" href="#">
                <FaFacebook />
              </SocialMediaIcons>
              <SocialMediaIcons label="Twitter" href="#">
                <FaTwitter />
              </SocialMediaIcons>
              <SocialMediaIcons label="Instagram" href="#">
                <FaInstagram />
              </SocialMediaIcons>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <List>Company</List>
            <Link href="/">Contact Us</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Testimonials</Link>
          </Stack>
          <Stack align="flex-start">
            <List>Support</List>
            <Link href="/">Help Center</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy and Polic</Link>
          </Stack>
          <Stack align="flex-start">
            <List>Get The Best Deals</List>
            <Stack direction={"row"}>
              <Input
                bg="blackAlpha.100"
                border="1px solid gainsboro"
                _focus={{ bg: "brand.dark" }}
                placeholder="Email adress"
              />
              <IconButton
                bg="brand.primary"
                color="white"
                aria-label="Subscribe"
                _hover={{ bg: "brand.dark" }}
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
