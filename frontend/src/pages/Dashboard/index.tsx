import React from 'react';
import { Flex, SimpleGrid , Text, Box, theme} from '@chakra-ui/react'
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import Chart from 'react-apexcharts';
const options = {
  chart: {
    toolbar: {
      show:false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  }
};
const series = [
  { name: 'inscritos', data: [31,150, 250, 10, 8 , 20]}
]

const Dashboard: React.FC = () => {
  return (
    <Flex direction="column"  h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />
        <SimpleGrid flex={1} gap="4" minChildWidth="320px" align="flex-start" >
          <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">Usuários cadastrados</Text>
              <Chart options={options} series={series} type="area" height={160}/>
          </Box>
          <Box p={["6","8"]} bg="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" mb="4">Imoveis cadastrados</Text>
              <Chart options={options} series={series} type="area" height={160}/>

          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
};

export default Dashboard;