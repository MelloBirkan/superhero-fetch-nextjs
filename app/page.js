import ProgressBar from "@/app/clientComponents/ProgressBar";

async function fetchHero(id = Math.floor(Math.random() * (731) + 1)) {
  const apiToken = "1783ce1d5a619ad9a70829c9f95c3c0d";
  const apiUrl = `https://superheroapi.com/api/${apiToken}/${id}`;

  return await fetch(apiUrl, { cache: 'no-store' })
    .then(res => res.json());
}

function HeroDetails({hero}) {
  const heroAppearance = hero.appearance
  const heroBiography = hero.biography
  const heroPowerstats = hero.powerstats
  return (
    <li key={hero.id} className={"flex flex-col"}>
      <img src={hero.image.url}
           className="w-full h-[600px] rounded-2xl object-cover"/>
      <div className={"flex flex-col"}>
        <h3
          className="mt-6 text-lg/8 font-semibold text-gray-900">{hero.name}</h3>
        <p className="text-base/7 text-gray-600">{hero.work.occupation}</p>
        <p
          className="mt-4 text-base/7 text-gray-600">{`${heroBiography["full-name"]}, born in ${heroBiography["place-of-birth"]}, is a ${heroAppearance.gender.toLowerCase()} hero with a height of ${heroAppearance.height[1]} and a weight of ${heroAppearance.weight[1]}. They have ${heroAppearance["eye-color"].toLowerCase()} eyes and ${heroAppearance["hair-color"].toLowerCase()} hair. Their alignment is ${heroBiography.alignment}.`}</p>
      </div>

      <ul className={"mt-6"}>
        {Object.entries(heroPowerstats).map(([stat, value], index) => (
          <li key={stat} className={"flex gap-4 items-center"}>
            <p className={"w-28"}>{stat}</p>
            <ProgressBar progress={value} color={index}/>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default async function Home() {
  const heroPromises = Array.from({length: 4}, () => fetchHero());
  const heroes = await Promise.all(heroPromises);

  return (
    <div className="bg-white py-24 md:py-32 lg:py-40">
      <div
        className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Heroes Team</h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            you can assemble teams of 4 different heroes
            that change every time you reload the page.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
        >
          {heroes.map(hero => (
            <HeroDetails key={hero.id} hero={hero}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

