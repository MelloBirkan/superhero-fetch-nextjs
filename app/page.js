import HeroDetails from "./components/HeroDetails";
import LinkButton from "./components/LinkButton";

async function fetchHero(id = Math.floor(Math.random() * (731) + 1)) {
  const apiToken = "1783ce1d5a619ad9a70829c9f95c3c0d";
  const apiUrl = `https://superheroapi.com/api/${apiToken}/${id}`;

  return await fetch(apiUrl, { cache: 'no-store' })
    .then(res => res.json());
}



export default async function Home() {
  const heroPromises = Array.from({ length: 4 }, () => fetchHero());
  const heroes = await Promise.all(heroPromises);

  return (
    <div className="py-24 md:py-32 lg:py-40">
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Heroes Team</h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            you can assemble teams of 4 different heroes
            that change every time you reload the page.
          </p>
          <LinkButton href="/ourHero" modifier="mt-5">Our (true) Hero</LinkButton>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {heroes.map(hero => (
            <HeroDetails key={hero.id} hero={hero} />
          ))}
        </ul>
      </div>
    </div>
  )
}

