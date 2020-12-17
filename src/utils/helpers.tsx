/* eslint-disable @typescript-eslint/no-explicit-any */
export type ErrorProps = {
  id: string
  message: string
}
export type MessagesProps = ErrorProps
export type MessageProps = { messages: MessagesProps[] }

export const getErrors = (errors: MessageProps[]) => {
  return errors.reduce((acc: string[], error: MessageProps) => {
    const messages: string[] = error.messages.map((m: ErrorProps) => m.message)

    acc = acc.concat(...messages)
    return acc
  }, [])
}
