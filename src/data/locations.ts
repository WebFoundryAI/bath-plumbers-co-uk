export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
}

export const PRIMARY_LOCATION: Location = {
  slug: "bath",
  name: "Bath",
  countyOrRegion: "Somerset",
  latitude: 51.3781,
  longitude: -2.3597,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "bristol",
    name: "Bristol",
    countyOrRegion: "Somerset",
    latitude: 51.4545,
    longitude: -2.5879,
  },
  {
    slug: "keynsham",
    name: "Keynsham",
    countyOrRegion: "Somerset",
    latitude: 51.4174,
    longitude: -2.4990,
  },
  {
    slug: "radstock",
    name: "Radstock",
    countyOrRegion: "Somerset",
    latitude: 51.2975,
    longitude: -2.4481,
  },
  {
    slug: "midsomer-norton",
    name: "Midsomer Norton",
    countyOrRegion: "Somerset",
    latitude: 51.2896,
    longitude: -2.4757,
  },
  {
    slug: "bradford-on-avon",
    name: "Bradford on Avon",
    countyOrRegion: "Wiltshire",
    latitude: 51.3468,
    longitude: -2.2506,
  },
  {
    slug: "chippenham",
    name: "Chippenham",
    countyOrRegion: "Wiltshire",
    latitude: 51.4585,
    longitude: -2.1157,
  },
  {
    slug: "trowbridge",
    name: "Trowbridge",
    countyOrRegion: "Wiltshire",
    latitude: 51.3200,
    longitude: -2.2137,
  },
  {
    slug: "frome",
    name: "Frome",
    countyOrRegion: "Somerset",
    latitude: 51.2295,
    longitude: -2.3211,
  },
  {
    slug: "corsham",
    name: "Corsham",
    countyOrRegion: "Wiltshire",
    latitude: 51.4344,
    longitude: -2.1863,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
