import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import TopSection from '../components/TopSection';
import SocialMedia from '../components/SocialMedia';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import profile from '../static/images/dinesh_round.png';

const About = () => {
  return (
    <>
      <Text
        fontFamily="paytone"
        fontSize={['2xl', '2xl', '3xl', '4xl']}
        color="blue.900"
      >
        Dinesh Shinde
      </Text>
      <Text
        fontFamily="satisfy"
        fontSize={['2xl', '2xl', '3xl', '4xl']}
        color="blue.900"
      >
        ( DSHINDE21 )
      </Text>
      <Text
        mb={[5, 5, 8]}
        align="center"
        fontFamily="workSans"
        fontSize={['xl', 'xl', '2xl', '3xl']}
        color="blue.900"
      >
        Enthusiastic software developer striving every day to master coding and
        build innovative solutions for real-world challenges
      </Text>
      <SocialMedia />
    </>
  );
};

export default function HomePage() {
  return (
    <Box as="body" bg="blue.50" pt={4}>
      <TopSection content={<About />} image={profile} />
      <Skills />
      <Footer />
      <ScrollToTop />
    </Box>
  );
}
