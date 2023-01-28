import { photos } from "./_components/photos";
import { shuffle } from "../lib/util/shuffle";

export function load() {
  return {
    photos: shuffle(photos),
  };
}
