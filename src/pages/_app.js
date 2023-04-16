import Layout from '@/components/Layout';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': 'bc22006f38msh59176890a02f924p174fd3jsncef6d512b981',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const movies = response.data;
    return { props: { movies } };
  } catch (error) {
    console.error(error);
    return { props: { movies: [] } };
  }
}