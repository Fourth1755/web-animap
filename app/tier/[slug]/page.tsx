import PageClient from "./components/pageClient/pageClient";

export default async function Page(props:any) {
    const params = await props.params;
    return (
        <div>
            <PageClient id={params.slug}/>
        </div>);
}