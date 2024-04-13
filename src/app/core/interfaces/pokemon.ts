export interface Pokemon {
  id: string;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  weight: number;
  abilities: Ability[];
  forms: PokemonCommonData[];
  game_indices: GameIndice[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Movement[];
  species: PokemonCommonData;
  sprites: Sprites;
  order: number;
  cries: {
    latest: string;
    legacy: string;
  };
  stats: Stats[];
  types: Type[];
  past_types: PastType[];
}

export interface PokemonCommonData {
  name: string;
  url: string;
}

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: PokemonCommonData;
  move_learn_method: PokemonCommonData;
}

interface Movement {
  move: PokemonCommonData;
  version_group_details: VersionGroupDetail[]
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface VersionDetail {
  rarity: number;
  version: PokemonCommonData;
}

interface HeldItem {
  item: PokemonCommonData;
  version_details: VersionDetail[];
}

interface GameIndice {
  game_index: number;
  version: PokemonCommonData;
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: PokemonCommonData;
}
interface PastType {
  generation: PokemonCommonData;
  types: Type[];
}

interface Type {
  slot: number;
  type: PokemonCommonData;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: PokemonCommonData
}
