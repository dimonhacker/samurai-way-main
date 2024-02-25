
export type DialogsArrayProps = Array<DialogProps>
export type DialogProps = {
    id: string
    name: string
}
export type MessagesArrayProps = Array<MessageProps>
export type MessageProps = {
    id: string
    name: string
}
export type DialogsPropsType = {
    dialogs: DialogsArrayProps
    messages: MessagesArrayProps
}

export type PostType = {

    id: string
    message: string
    likesCount: number
}

export type PostArrayWrapper = {
    postArray: Array<PostType>
}
export type AppProps = {
    dialogsProps: DialogsPropsType
    profileProps: ProfilePropsType
}
export type DialogsPropsWrapperType = {
    dialogsProps: DialogsPropsType
}


export type AppPropsWrapperType = {
    appProps: AppProps
}
export type ProfilePropsWrapperType = {
    profileProps: ProfilePropsType
}
export type ProfilePropsType = {
    postArray: Array<PostType>
    profileInfo?: Object

}