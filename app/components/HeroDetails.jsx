import ProgressBar from "@/app/clientComponents/ProgressBar";

export default function HeroDetails({ hero }) {
  const heroAppearance = hero.appearance
  const heroBiography = hero.biography
  const heroPowerstats = hero.powerstats
  return (
    <li key={hero.id} className={"flex flex-col"}>
      <img src={hero.image.url}
        className="w-full h-[600px] rounded-2xl object-cover" />
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
            <ProgressBar progress={value} color={index} />
          </li>
        ))}
      </ul>
    </li>
  );
}