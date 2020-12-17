import * as S from './styles'
import Link from 'next/link'
import {
  Flex,
  Box,
  Center,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReducersProps } from 'redux-local'
import { useRouter } from 'next/router'

const blockedRoutes = ['/profile']

const Navbar = () => {
  const dispatch = useDispatch()
  const user = useSelector(({ userReducer }: ReducersProps) => userReducer.user)
  const router = useRouter()

  console.log('user: ', user)

  useEffect(() => {
    if (!user) {
      const hasUser = localStorage.getItem('user')
      let localUser = null
      if (hasUser) {
        localUser = JSON.parse(hasUser)
        dispatch({
          type: 'SET_USER',
          payload: { user: localUser }
        })
        if (router.asPath.match('/signin')) {
          router.push('/profile')
        }
      } else {
        if (blockedRoutes.includes(router.asPath)) {
          router.push('/')
        }
      }
    }
  }, [dispatch, router, user])

  const logoutUser = () => {
    dispatch({
      type: 'SET_USER',
      payload: { user: null }
    })
    dispatch({
      type: 'SET_TOKEN',
      payload: { token: null }
    })
    localStorage.clear()
    router.push('/')
  }

  return (
    <S.Wrapper>
      <Box
        borderBottom="1px solid tomato"
        width="100%"
        px={12}
        py={4}
        background="white"
      >
        <Flex justify="space-between">
          <Center>
            <Link href="/">
              <Text color="tomato" fontWeight="bold" fontSize="3xl">
                Home
              </Text>
            </Link>
          </Center>
          <Center>
            {user?.username ? (
              <Menu>
                <MenuButton
                  colorScheme="pink"
                  as={Button}
                >{`Hi! ${user.username}`}</MenuButton>
                <MenuList>
                  <Link href="/profile">
                    <MenuItem>Profile</MenuItem>
                  </Link>
                  <MenuItem onClick={() => logoutUser()}>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link href="/signin">
                <Button size="lg" colorScheme="green">
                  Log in
                </Button>
              </Link>
            )}
          </Center>
        </Flex>
      </Box>
    </S.Wrapper>
  )
}

export default Navbar
