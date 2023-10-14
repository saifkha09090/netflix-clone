import { getSession, useSession } from "next-auth/react";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import requests from "../services/requests";


export default function Home({
  moviePosters,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) {
  const { data: session } = useSession();

  if (!session) return <Login />;
  return (
    <>
    <div className="relative bg-gradient-to-b from-gray-900/10 to-[#010511]">
    <Hero moviePosters={moviePosters} />
    </div>
    </>
  )
}



export async function getServerSideProps(context) {
  const session = await getSession(context);
  const [
    moviePosters,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchMoviePosters).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);


  return {
    props:{
      session,
      moviePosters: moviePosters.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    }
  }
}
