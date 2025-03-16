import React from 'react';
import { IconButton, HStack, Link } from '@chakra-ui/react';
import { Leetcode, Hackerrank, Gfg } from './Icons';

export default function SocialMedia() {
  return (
    <>
      <HStack mb={[1, 1, 3]} spacing={[3, 3, 5]}>
        {/* TODO: Add Codeforces & Codechef handle here */}
        {/* <Link href='https://codeforces.com/profile/dinesh' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Codeforces' bg="transparent" fontSize={["20px", "25px"]} icon={<Codeforces />} />
        </Link> */}
        {/* <Link href="https://www.codechef.com/users/arunimabarik" isExternal>
          <IconButton
            _hover={{ bg: 'transparent' }}
            aria-label="Codechef"
            bg="transparent"
            fontSize={['30px', '35px']}
            icon={<Codechef />}
          />
        </Link> */}
        <Link href="https://leetcode.com/u/dinesh_021/" isExternal>
          <IconButton
            _hover={{ bg: 'transparent' }}
            aria-label="Leetcode"
            bg="transparent"
            fontSize={['20px', '25px']}
            icon={<Leetcode />}
          />
        </Link>
        <Link
          href="https://www.geeksforgeeks.org/user/dineshsshinde1/"
          isExternal
        >
          <IconButton
            _hover={{ bg: 'transparent' }}
            aria-label="GeeksforGeeks"
            bg="transparent"
            fontSize={['20px', '25px']}
            icon={<Gfg />}
          />
        </Link>
        <Link
          href="https://www.hackerrank.com/profile/dinesh_s_shinde1"
          isExternal
        >
          <IconButton
            _hover={{ bg: 'transparent' }}
            aria-label="Hackerrank"
            bg="transparent"
            fontSize={['20px', '25px']}
            icon={<Hackerrank />}
          />
        </Link>
      </HStack>
    </>
  );
}
