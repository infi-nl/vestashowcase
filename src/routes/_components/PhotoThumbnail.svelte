<script lang="ts">
  export let photo: { id: Number, alt: string };
</script>

<div
  class={`
    flex flex-col justify-end
    shadow-lg shadow-black/50
    transition-all delay-500 duration-[2000ms] ease-in-out
    bg-[length:100%] bg-center
    hover:bg-[length:350%] hover:bg-[center_top_22%]
    ${$$props.class}
  `}
  style={`background-image:
    url(photos/${photo.id}.webp),
    linear-gradient(to bottom right, #fb923c, #f97316)`}
>
  <div class="text-center font-bold p-2 bg-gray-50/60 text-gray-800">
    <span class="sr-only">Foto van een oranje muur met Vestabord, en daarop te zien:</span>
    {photo.alt || photo.id}
  </div>
</div>