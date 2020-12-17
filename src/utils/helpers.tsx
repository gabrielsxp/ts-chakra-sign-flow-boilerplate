/* eslint-disable @typescript-eslint/no-explicit-any */
export type ErrorProps = {
  id: string
  message: string
}
export type MessagesProps = ErrorProps
export type MessageProps = { messages: MessagesProps[] }

export const getErrors = (errors: MessageProps[]) => {
  console.log('cheguei: ', errors)
  return errors.reduce((acc: string[], error: MessageProps) => {
    const messages: string[] = error.messages.map((m: ErrorProps) => m.message)

    console.log('messages:', messages)

    acc = acc.concat(...messages)
    return acc
  }, [])
}
