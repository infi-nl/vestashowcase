<script lang="ts">
  import type { IPhoto } from './photos';

  export let photo: IPhoto;

  $: style = photo?.id
    ? `background-image: url(photos/${photo.id}.webp), linear-gradient(to bottom right, #fb923c, #f97316)`
    : `background-image: linear-gradient(to bottom right, #fb923c, #f97316)`;

  $: alt = photo?.id ? photo.alt || String(photo.id) : '\u00a0';
</script>

<div
  class={`
    flex flex-col
    justify-end border-2 border-gray-700
    bg-[length:100%] bg-center
    shadow-lg shadow-black/50 transition-all delay-500
    duration-[2000ms] ease-in-out
    hover:bg-[length:350%] hover:bg-[center_top_22%]
    ${$$props.class}
  `}
  {style}
>
  <div class="bg-gray-50/60 p-2 text-center font-bold text-gray-800">
    <span class="sr-only">Foto van een oranje muur met Vestabord, en daarop te zien:</span>
    {alt}
  </div>
</div>
