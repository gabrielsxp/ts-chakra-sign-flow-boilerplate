import { Container, Box, Heading, Center, Flex, Button } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import * as S from 'templates/HomeTemplate/styles'
import InputField from 'components/InputField'
import axios from 'client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getErrors } from 'utils/helpers'
import HomeTemplate from 'templates/HomeTemplate'
import Link from 'next/link'

type ValuesProps = {
  email: string
  password: string
}

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [fetchErrors, setFetchErrors] = useState<string[]>([])
  const router = useRouter()
  const dispatch = useDispatch()

  const signUp = async (values: ValuesProps) => {
    setLoading(true)
    try {
      const response = await axios.post(
        '/auth/local/register',
        {
          ...values
        },
        { headers: { Authorization: '' } }
      )
      if (response.data) {
        console.log(response.data)
      }
      setLoading(false)
      return { error: false, data: response.data }
    } catch (error) {
      setLoading(false)
      return { error: true, data: error.response.data.message }
    }
  }

  return (
    <HomeTemplate>
      <Container>
        <Flex minH="100vh" alignItems="center" justify="center">
          <Center w="100%">
            <Box
              width="100%"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
            >
              <Heading textAlign="center" my={4} color="gray" size="lg">
                Sign up
              </Heading>
              <Formik
                initialValues={{
                  username: '',
                  email: '',
                  password: '',
                  confirmPassword: ''
                }}
                onSubmit={async (values, { setErrors }) => {
                  const { username, email, password, confirmPassword } = values
                  if (username === '') {
                    return setErrors({ username: 'You must fill this field' })
                  } else if (username.length <= 3) {
                    return setErrors({
                      username:
                        'The players name must have at least 3 characters'
                    })
                  }
                  if (email === '') {
                    return setErrors({ email: 'You must fill this field' })
                  }
                  if (password === '') {
                    return setErrors({ password: 'You must fill this field' })
                  }
                  if (confirmPassword === '') {
                    return setErrors({ password: 'You must fill this field' })
                  }
                  if (password !== confirmPassword) {
                    return setErrors({
                      password: 'Field do not match',
                      confirmPassword: 'Field do not match'
                    })
                  }
                  try {
                    const r = await signUp(values)
                    console.log('r: ', r)
                    if (r.error) {
                      setFetchErrors(getErrors(r.data))
                    } else {
                      localStorage.setItem('user', JSON.stringify(r.data.user))
                      localStorage.setItem('token', JSON.stringify(r.data.jwt))
                      dispatch({
                        type: 'SET_USER',
                        payload: { user: r.data.user }
                      })
                      dispatch({
                        type: 'SET_TOKEN',
                        payload: { token: r.data.jwt }
                      })
                      router.push('/profile')
                    }
                  } catch (error) {
                    console.log('error', error)
                  }
                }}
              >
                <Form>
                  <S.FormContainer>
                    <InputField
                      color="black"
                      name="username"
                      placeholder="Username"
                      label="Username"
                    />
                    <InputField
                      color="black"
                      name="email"
                      type="email"
                      placeholder="E-mail"
                      label="E-mail"
                    />
                    <InputField
                      color="black"
                      name="password"
                      type="password"
                      placeholder="Password"
                      label="Password"
                    />
                    <InputField
                      color="black"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      label="Confirm Password"
                    />
                    <S.LocalErrorsContainer>
                      {fetchErrors.length > 0 &&
                        fetchErrors.map((error, index) => {
                          return (
                            <S.LocalError key={index}>{error}</S.LocalError>
                          )
                        })}
                    </S.LocalErrorsContainer>
                    <Button
                      isLoading={loading}
                      colorScheme="blue"
                      size="lg"
                      mb={4}
                      type="submit"
                    >
                      Create account
                    </Button>
                    <Link href="/signin">
                      <Button colorScheme="green" size="lg">
                        Already have an account ?
                      </Button>
                    </Link>
                  </S.FormContainer>
                </Form>
              </Formik>
            </Box>
          </Center>
        </Flex>
      </Container>
    </HomeTemplate>
  )
}

export default SignIn
