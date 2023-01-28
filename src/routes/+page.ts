import { photos } from "./_components/photos";
import { shuffle } from "../lib/util/shuffle";

export function load() {
  const head = photos[0];
  const tail = photos.slice(1);
  return {
    photos: [
      head, // Force a specific picture with a real life person at the start.
      ...shuffle(tail)
    ],
  };
}
