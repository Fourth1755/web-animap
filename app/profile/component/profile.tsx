
type PropProfile ={
    user: PropProfileUser
}

type PropProfileUser ={
    name: string
    picture: string
    email: string
    sid: string
}
  

export default async function Profile(props:PropProfile) {
    const user = props.user

    return (
        user && (
            <div>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
        )
    )
}