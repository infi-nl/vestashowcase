<script lang="ts">
	import Footer from "./_components/Footer.svelte";
import HeaderBar from "./_components/HeaderBar.svelte";
import type { IPhoto } from "./_components/photos";
	import PhotoThumbnail from "./_components/PhotoThumbnail.svelte";
  export let data: { photos: IPhoto[] };
</script>

<header class="max-w-[1600px] mx-auto">
  <HeaderBar />

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 p-4 md:px-8">
    {#each data.photos as photo}
    <PhotoThumbnail
      class="border-2 border-gray-700 aspect-[1790/1220]"
      photo={photo}
    />
    {/each}
  </div>

  <Footer />
</header>