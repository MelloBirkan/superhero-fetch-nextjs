import HeroDetails from "@/app/components/HeroDetails";
import LinkButton from "@/app/components/LinkButton";

const ourHero = {
  id: "1",
  name: "Professor Joaquim",
  image: {
    url: "https://www.mackenzie.br/fileadmin/_processed_/b/e/csm_joaquim_pessoa_filho_ca1fd4a888.jpeg"
  },
  work: {
    occupation: "Professor & Mentor Extraordinário"
  },
  appearance: {
    gender: "Male",
    height: ["185 cm", "6'1\""],
    weight: ["80 kg", "176 lbs"],
    "eye-color": "Brown",
    "hair-color": "Black"
  },
  biography: {
    "full-name": "Joaquim Pessoa Filho",
    "place-of-birth": "São Paulo, Brasil",
    alignment: "good"
  },
  powerstats: {
    intelligence: 95,
    strength: 85,
    speed: 75,
    durability: 90,
    power: 88,
    combat: 85
  }
}

const OurHero = () => {
  return (
    <div className="py-24 md:py-32 w-96 mx-auto flex flex-col items-center">
      <LinkButton href="/" modifier="mb-5">Back to Home</LinkButton>
      <HeroDetails hero={ourHero} />
    </div>
  );
};

export default OurHero;
