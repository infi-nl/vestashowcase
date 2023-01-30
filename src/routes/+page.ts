import { photos } from "./_components/photos";

export function load() {
  // Ensure the Server-Side Rendered page has the correct number
  // of empty photo objects. Leave it up to the client page to
  // shuffle the list per each client's session every time, and
  // have Svelte replace the empty placeholders with the actual
  // photo's in a shuffled order.
  const emptyPhotoObject = { };
  return { photos: photos.map(() => emptyPhotoObject) };
}