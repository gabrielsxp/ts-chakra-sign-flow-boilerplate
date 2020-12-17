import { useSelector } from 'react-redux'
import HomeTemplate from 'templates/HomeTemplate'
import { ReducersProps } from 'redux-local'
import { Heading } from '@chakra-ui/react'

const Profile = () => {
  const user = useSelector(({ userReducer }: ReducersProps) => userReducer.user)

  return (
    <HomeTemplate>
      {user && <Heading>My name is {user.username}</Heading>}
    </HomeTemplate>
  )
}

export default Profile
