import styled from 'styled-components'

export const Wrapper = styled.main``

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 1rem;
  }
`
export const LocalErrorsContainer = styled.ul`
  width: 100%;
  padding: 0 2rem;
`

export const LocalError = styled.li`
  color: #cf1934;
  font-size: 1rem;
`
