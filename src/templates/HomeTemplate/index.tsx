import * as S from './styles'
import Navbar from 'components/Navbar'

type HomeTemplateProps = {
  children?: React.ReactNodeArray | React.ReactNode
}

const HomeTemplate = ({ children }: HomeTemplateProps) => (
  <S.Wrapper>
    <Navbar />
    {children}
  </S.Wrapper>
)

export default HomeTemplate
