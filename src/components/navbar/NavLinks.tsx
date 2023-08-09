import { Box } from "@chakra-ui/react";
import { navLinks } from "../../constants/helpers";
import React from "react";
import Link from "next/link";

export const NavLinks = () => {
  return (
    <>
      {navLinks.map((navlink) => (
        <Box key={navlink.label}>
          <Link href={navlink.href}>{navlink.label}</Link>
        </Box>
      ))}
    </>
  );
};
