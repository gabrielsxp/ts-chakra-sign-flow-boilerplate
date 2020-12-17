import HomeTemplate from 'templates/HomeTemplate'
import { useEffect, useState } from 'react'
import { Flex, Center, Box } from '@chakra-ui/react'

export default function Home() {
  const [counter, setCounter] = useState<number>(0)

  useEffect(() => {
    if (counter <= 1300) {
      window.setTimeout(() => {
        const c = counter + 10
        if (c === 1300) {
          setCounter(1300)
        } else {
          setCounter(c > 1300 ? 1300 : c)
        }
      }, 10)
    }
  }, [counter])

  return (
    <HomeTemplate>
      <Flex height="100vh" justify="center">
        <Center>
          <Box>
            <div
              style={{
                fontSize: '72px',
                color: 'gray',
                fontWeight: 'bold'
              }}
            >
              {counter}
            </div>
          </Box>
        </Center>
      </Flex>
    </HomeTemplate>
  )
}
