export type UserInfo ={
    name: string
    profile_image: string
    email: string
    uuid: string
    description: string
  }

export type RegisterRequest = {
  name: string
  email: string
  password: string
}

export type UpdateUserInfoRequest = {
    name: string
    profile_image: File
    description: string
}