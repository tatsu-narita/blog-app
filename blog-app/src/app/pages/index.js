import { client } from "../../../libs/client";

//SSG
export const getStaticProps = async() => {
  const data = await client.get({ endpoint: 'blogs' });
  return {
    props: {
      blogs: data.contents,
    },
  }
};

export default function Home( blogs ) {
  return (<div>
    {blogs.map((blogs) => (
      <li key={blogs.id}>
        <a href="">{blogs.title}</a>
      </li>
    ))}
  </div>
  );
}