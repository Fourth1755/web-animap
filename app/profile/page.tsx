import { getSession } from '@auth0/nextjs-auth0';

type user = {
    name: string
    email:string
    picture:string
}

export default async function Profile() {
  const session = await getSession();
    const user = session?.user
  return (
      user && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
}