import {
  Stack,
  Box,
  Center,
  Text,
  Image,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPencil } from '@fortawesome/free-solid-svg-icons';
import infosys from '../static/images/infosys1.png';
import google from '../static/images/ldc.png';

const works = {
  Internship: [
    {
      image: infosys,
      name: 'Infosys Springboard',
      duration: 'Feb 2022 - May 2022',
      position: 'Web Developer Intern',
      location: 'Remote',
      description: [
        'Developed a comprehensive full-stack project using TypeScript, React.js, Node.js, and MongoDB, encompassing both front-end and back-end development.',
        'Collaborated with a diverse team, demonstrating strong teamwork skills to drive the project to successful completion.',
        'Implemented a user-friendly interface for the web application, enhancing the user experience.',
        'Thrived in a dynamic, remote work environment, effectively communicating and coordinating with team members.',
      ],
      certificate: {
        title: 'View Certificate',
        url: 'https://drive.google.com/file/d/1BB0Jv29RQxRXcxwSZM2bsP9MkLa77kfe/view?usp=sharing', // Add certificate URL here
      },
    },
  ],
  'Full Time': [
    {
      image: google,
      name: 'LenDenClub',
      duration: 'July 2023 - Present',
      position: 'Software Developer',
      location: 'Mumbai, Maharashtra',
      description: [
        'LenDenClub is India’s No.1 Peer-to-Peer (P2P) Lending platform which is RBI registered NBFC - P2P.',
        'Innovative Development: Spearheaded the development of the Retail website, Internal staff dashboards and Channel Partner dashboards (Investor/Lending side).',
        'New Product Development: InstaMoney SPOT Borrower Web app, integrated with Google Pay a loan product with new LOS journey.',
        'Unified Codebase Engineering: Designed and implemented a cohesive codebase for Retail Borrower and Partner platforms (e.g. Gpay,PhonePe and other future partners), enhancing operational efficiency and user experience.',
        'Performance Optimization: Achieved a 35% reduction in server requests by implementing advanced caching strategies, resulting in enhanced performance for the retail lending website.',
        'Robust Security Implementation: Integrated JWT security measures with encryption logic on the client side to safeguard user data and enhance application integrity',
      ],
      certificate: {
        title: 'SPOT Award',
        url: 'https://drive.google.com/file/d/1w4toq2-4vwdQEPHnRGSE9xOk-MAzRIv7/view?usp=drive_link',
      },
    },
  ],
};

const WorkComponent = ({ work }) => {
  return (
    <Box w="100%" px={2} py={5}>
      <Stack
        shadow="xl"
        rounded="xl"
        p={4}
        direction={['column', 'column', 'row']}
        spacing={5}
        w="100%"
      >
        <Center w={['100%', '100%', '40%', '30%']}>
          <Image
            src={work.image}
            alt={work.name}
            w={['60%', '60%', '90%', '80%']}
            h="auto"
          />
        </Center>

        <Stack spacing={4} w={['100%', '100%', '60%', '70%']}>
          <Stack
            direction={['column', 'column', 'column', 'row']}
            spacing={2}
            bg="blue.900"
            textColor="white"
            w="100%"
            px={5}
            py={2}
            rounded="lg"
          >
            <Stack w={['100%', '100%', '100%', '50%']} direction="column">
              <Text
                fontFamily="paytone"
                fontSize={['lg', 'lg', 'xl', '2xl']}
                align={['center', 'center', 'center', 'left']}
              >
                {work.name}
              </Text>

              <Text
                fontWeight="bold"
                fontFamily="workSans"
                fontSize={['lg', 'lg', 'xl', '2xl']}
                align={['center', 'center', 'center', 'left']}
              >
                {work.position}
              </Text>
            </Stack>

            <Stack w={['100%', '100%', '100%', '50%']} direction="column">
              <Text
                fontFamily="paytone"
                fontSize={['lg', 'lg', 'xl', '2xl']}
                align={['center', 'center', 'center', 'right']}
              >
                {work.duration}
              </Text>

              <Text
                fontWeight="bold"
                fontFamily="workSans"
                fontSize={['lg', 'lg', 'xl', '2xl']}
                align={['center', 'center', 'center', 'right']}
              >
                {work.location}
              </Text>
            </Stack>
          </Stack>

          <List
            fontFamily="workSans"
            fontSize={['lg', 'lg', 'xl', '2xl']}
            color="blue.900"
            spacing={2}
          >
            {work.description.map(desc => (
              <ListItem key={desc}>
                <ListIcon as={FontAwesomeIcon} icon={faPencil} />
                {desc}
              </ListItem>
            ))}
            {work.certificate && (
              <ListItem>
                <Link
                  href={work.certificate.url}
                  isExternal
                  display="flex"
                  alignItems="center"
                  color="blue.600"
                  _hover={{ textDecoration: 'underline', color: 'blue.800' }}
                >
                  <ListIcon
                    as={FontAwesomeIcon}
                    icon={faFileAlt}
                    color="blue.600"
                  />
                  {work.certificate.title}
                </Link>
              </ListItem>
            )}
          </List>
        </Stack>
      </Stack>
    </Box>
  );
};

const WorkAccordion = ({ workType, work, defaultIndex }) => {
  return (
    <Accordion allowToggle mb={8} defaultIndex={defaultIndex}>
      <AccordionItem rounded="xl">
        <AccordionButton
          rounded="xl"
          p={5}
          border="2px"
          borderColor="blue.900"
          color="blue.900"
          _hover={{ bg: 'blue.900', color: 'white' }}
          _expanded={{ bg: 'blue.900', color: 'white', roundedBottom: '0px' }}
        >
          <Box as="span" flex="1" textAlign="left">
            <Text
              fontFamily="paytone"
              fontSize={['lg', 'lg', 'xl', '2xl']}
              align={['center', 'center', 'left']}
            >
              {workType}
            </Text>
          </Box>
          <AccordionIcon w={8} h={8} />
        </AccordionButton>
        <AccordionPanel roundedBottom="xl" border="2px" borderColor="blue.900">
          {work.map((w, index) => (
            <WorkComponent key={index} work={w} />
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default function Works() {
  return (
    <Box py={4} px={[5, 5, 8, 10]}>
      {Object.keys(works).map((workType, index) => (
        <WorkAccordion
          key={index}
          workType={workType}
          work={works[workType]}
          defaultIndex={workType === 'Full Time' ? [0] : []}
        />
      ))}
    </Box>
  );
}
