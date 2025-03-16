import React from 'react';
import {
  Stack,
  HStack,
  Box,
  Button,
  Text,
  Link,
  List,
  ListItem,
  ListIcon,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    name: 'Crypto Dashboard',
    skills: 'React, Redux, Chart.js',
    description: [
      'Built a cryptocurrency tracking platform with React.js (v19), TypeScript, and Material-UI, delivering a seamless user experience.',
      'Implemented interactive charts using Chart.js and dynamic time range selection for in-depth price trend analysis.',
      //   'Optimized performance with lazy loading, Redux for state management, and React Query for efficient data fetching.',
    ],
    website: 'https://github.com/DSHINDE21/crypto-dashboard',
    liveLink: 'https://crypto-dashboard-five-tau.vercel.app/',
  },

  {
    name: 'Movies Web App',
    skills: 'ReactJs',
    description: [
      'Created a responsive web application for browsing and displaying detailed movie information, offering a modern and user-friendly interface.',
      'Utilized React.js for building the front-end and OMDb API for fetching real-time movie data, ensuring accurate and up-to-date information.',
    ],
    website: 'https://github.com/DSHINDE21/MovieApp',
  },
  {
    name: 'ShortLinker',
    skills: 'NodeJs, Express, MongoDB',
    description: [
      'Developed a full-fledged service for efficiently shortening and managing URLs, providing seamless user experience for sharing links',
      'Implemented using Node.js, Express.js, and MongoDB to create a scalable, production-ready URL shortening solution.',
      //   'Integrated comprehensive error handling and unique short URL generation to ensure reliability and performance.',
    ],
    website: 'https://github.com/DSHINDE21/ShortLinker-Service',
  },
  {
    name: 'UXEventLogger (In Progress)',
    skills: 'NodeJs',
    description: [
      'A lightweight package to track user experience events (UI interactions, behaviors, etc.) across web applications.',
    ],
    website: 'https://github.com/DSHINDE21/UXEventLogger',
    liveLink: 'https://www.npmjs.com/package/uxeventlogger',
  },
];

const ProjectComponent = ({ project }) => {
  return (
    <WrapItem>
      <Card
        maxW={['sm', 'sm', 'xs', 'sm']}
        minH={['0px', '0px', '650px', '780px']}
        border="0px"
        bg="transparent"
        rounded="xl"
        shadow="xl"
      >
        <CardHeader align="center">
          <Stack
            justify="center"
            minH={['0px', '0px', '150px', '200px']}
            direction="column"
            spacing={2}
            bg="blue.900"
            textColor="white"
            w="100%"
            px={5}
            py={2}
            rounded="lg"
          >
            <Text
              fontWeight="bold"
              w="100%"
              align="center"
              fontFamily="paytone"
              fontSize={['lg', 'lg', 'xl', '2xl']}
            >
              {project.name}
            </Text>

            <Text
              fontWeight="bold"
              w="100%"
              align="center"
              fontFamily="workSans"
              fontSize={['lg', 'lg', 'xl', '2xl']}
            >
              {project.skills}
            </Text>
          </Stack>
        </CardHeader>

        <CardBody>
          <List
            fontFamily="workSans"
            fontSize={['lg', 'lg', 'xl', '2xl']}
            color="blue.900"
            spacing={4}
          >
            {project.description.map(project => (
              <ListItem key={project}>
                <ListIcon as={FontAwesomeIcon} icon={faPencil} />
                {project}
              </ListItem>
            ))}
          </List>
        </CardBody>

        <CardFooter w="100%" justify="right" p={2}>
          {project.liveLink && (
            <Link href={project.liveLink} isExternal>
              <Button
                p={[3, 3, 5, 6]}
                bg="blue.900"
                border="2px"
                borderRadius="lg"
                _hover={{
                  bg: 'transparent',
                  borderColor: 'blue.900',
                  textColor: 'blue.900',
                }}
                fontFamily="workSans"
                fontSize={['lg', 'lg', 'xl']}
                textColor="white"
                mr={2}
              >
                <HStack>
                  <Text>Preview</Text>
                  <ExternalLinkIcon w={6} h={6} />
                </HStack>
              </Button>
            </Link>
          )}
          <Link href={project.website} isExternal>
            <Button
              p={[3, 3, 5, 6]}
              bg="blue.900"
              border="2px"
              borderRadius="lg"
              _hover={{
                bg: 'transparent',
                borderColor: 'blue.900',
                textColor: 'blue.900',
              }}
              fontFamily="workSans"
              fontSize={['lg', 'lg', 'xl']}
              textColor="white"
            >
              <HStack>
                <Text>Github Link</Text>
                <ExternalLinkIcon w={6} h={6} />
              </HStack>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </WrapItem>
  );
};

export default function ProjectCards() {
  return (
    <>
      <Wrap py={3} px={4} justify="center" spacing={[8, 8, 10, 12]}>
        {projects.map((project, index) => (
          <ProjectComponent key={index} project={project} />
        ))}
      </Wrap>

      <Box pt={10} align="center">
        <Link href="https://github.com/DSHINDE21?tab=repositories" isExternal>
          <Button
            p={[3, 3, 5, 6]}
            bg="blue.900"
            border="2px"
            borderRadius="lg"
            _hover={{
              bg: 'transparent',
              borderColor: 'blue.900',
              textColor: 'blue.900',
            }}
            fontFamily="workSans"
            fontSize={['lg', 'lg', 'xl']}
            textColor="white"
          >
            <HStack>
              <Text>See All Projects</Text>
              <ExternalLinkIcon w={6} h={6} />
            </HStack>
          </Button>
        </Link>
      </Box>
    </>
  );
}
