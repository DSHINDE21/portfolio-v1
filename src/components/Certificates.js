import React from 'react'
import { HStack, Center, Button, Image, Text, Link, Card, CardHeader, CardBody, CardFooter, Wrap, WrapItem, VStack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import illinois from '../static/images/illinois.png'
import imperial from '../static/images/imperial.png'
import hackerrank from '../static/images/hackerrank.png'

const certificates = [
    {
        image: illinois,
        name: "Accelerated CS Fundamentals",
        author: "University of Illinois",
        link: "https://www.coursera.org/account/accomplishments/specialization/CWURV2Z4KFQY"
    },
    {
        image: imperial,
        name: "Mathematics for Machine Learning",
        author: "Imperial College London",
        link: "https://www.coursera.org/account/accomplishments/specialization/8SJC2KKRZHHN"
    },
    {
        image: hackerrank,
        name: "Problem Solving (Basic)",
        author: "HackerRank",
        link: "https://www.hackerrank.com/certificates/c1d53e933a58"
    }
]

const CertificateComponent = ({ certificate }) => {
    return (
        <WrapItem>
            <Card maxW={['sm', 'sm', 'xs', 'sm']} border="0px" bg="transparent" rounded="xl" shadow="xl">
                <CardHeader align="center">
                    <VStack spacing={8}>
                        <Center w="full" h="100px" justify="center">
                            <Image src={certificate.image} alt={certificate.name} w={["60%", "60%", "90%", "80%"]} h="auto" />
                        </Center>

                        <Center minH={['0px', '0px', '80px', '100px']} direction='column' spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                            <Text align="center" fontWeight="bold" w="100%" fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]}>{certificate.name}</Text>
                        </Center>
                    </VStack>
                </CardHeader>

                <CardBody>
                    <Text align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900">{certificate.author}</Text>
                </CardBody>

                <CardFooter w="100%" justify="center">
                    <Link href={certificate.link} isExternal>
                        <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                            <HStack>
                                <Text>Certificate</Text>
                                <ExternalLinkIcon w={6} h={6} />
                            </HStack>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </WrapItem>
    )
}

export default function Certificates() {
    return (
        <Wrap mt={2} py={3} px={5} justify="center" spacing={[8, 8, 10, 12]}>
            {certificates.map((certificate, index) => (
                <CertificateComponent key={index} certificate={certificate} />
            ))}
        </Wrap>
    )
}
