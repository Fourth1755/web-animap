export type UserInfo ={
    name: string
    profile_image: string
    email: string
    uuid: string
  }

export type RegisterRequest = {
  name: string
  email: string
  password: string
}