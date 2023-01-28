<script lang="ts">
	import type { IPhoto } from "./_components/photos";
	import PhotoThumbnail from "./_components/PhotoThumbnail.svelte";
  export let data: { photos: IPhoto[] };
</script>

<div class="max-w-[1600px] mx-auto">
  <div class="
    fixed top-0 left-1/2 -translate-x-1/2
    border-t-0
    p-4 max-w-[1200px] w-full
    shadow-lg border bg-gray-900 text-gray-50 opacity-90
  ">
    <h1 class="text-center text-3xl font-bold">
      Infi Vestaboard Showcase
    </h1>
    <p class="p-4 text-center">
      Een fijn nerdy <a class="anchor" href="https://www.vestaboard.com/" target="_blank" rel="noreferrer">apparaat ↗</a> op kantoor om technische skills op los te laten?
      Yes please!
      Zie hier wat we er zoal mee doen...
    </p>
    <p class="text-center">
      <a class="anchor" href="#about">Meer achtergrond lezen...</a>
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 p-4 pt-12">
    {#each data.photos as photo}
    <PhotoThumbnail
      class="border-2 border-gray-700 aspect-[1790/1220]"
      photo={photo}
    />
    {/each}
  </div>
</div>