<script lang="ts">
  import { onMount  } from 'svelte';
  import { photos, type IPhoto } from "./_components/photos";
  import { shuffle } from "../lib/util/shuffle";

  import Footer from "./_components/Footer.svelte";
  import HeaderBar from "./_components/HeaderBar.svelte";
  import PhotoThumbnail from "./_components/PhotoThumbnail.svelte";
  import ThumbnailIntermezzo from "./_components/ThumbnailIntermezzo.svelte";
  
  export let data: { photos: IPhoto[] };
  let shuffledPhotos: IPhoto[] = data.photos;

  onMount (() => {
    console.log("onMount");
    const head = photos[0];
    const tail = photos.slice(1);
    shuffledPhotos = [
        head, // Force a specific picture with a real life person at the start.
        ...shuffle(tail)
      ];
  });
</script>

<header class="max-w-[1600px] mx-auto">

  <HeaderBar />

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-8 p-4 md:px-8">
    {#each shuffledPhotos as photo, index}

      {#if index === 2}
        <ThumbnailIntermezzo class="aspect-[1790/1220]">
          <h2 class="text-xl xl:text-3xl font-bold mb-2">"Dad Jokes"</h2>
          <p>
            Met een druk op de knop (van het "knoppenbordje" dat bij de hackathon is gemaakt)
            is het eenvoudig om een verse tergende grap op het scherm te toveren.
          </p>
        </ThumbnailIntermezzo>
      {/if}

      {#if index === 6}
        <ThumbnailIntermezzo class="aspect-[1790/1220]">
          <h2 class="text-xl xl:text-3xl font-bold mb-2">Pixel Art</h2>
          <p>
            Vijf minuutjes tijd tussendoor? Een (kleine) subset van collega's grijpt dat aan
            om een stukje "Pixel Art" voor het Vestaboard te maken.
          </p>
        </ThumbnailIntermezzo>
      {/if}

      {#if index === 13}
        <ThumbnailIntermezzo class="aspect-[1790/1220]">
          <h2 class="text-xl xl:text-3xl font-bold mb-2">Weerbericht</h2>
          <p>
            Benieuwd naar het weerbericht in één van de Infi-steden? Met een druk op de knop
            toont het Vestaboard een weersvoorspelling van een van de steden.
          </p>
        </ThumbnailIntermezzo>
      {/if}

      {#if index === 23}
        <ThumbnailIntermezzo class="aspect-[1790/1220]">
          <h2 class="text-xl xl:text-3xl font-bold mb-2">LOLLED!?</h2>
          <p>
            Met een knipoog houden we elkaar scherp op het netjes locken van je laptop als je
            er van wegloopt. Vergeet je dat? Reken dan maar op
            <code class="font-mono text-white bg-black/50 px-2 inline-block">/lol</code>
            in Slack en niet lang erna een reminder op het Vestaboard.
          </p>
        </ThumbnailIntermezzo>
      {/if}

      {#if index === 30}
        <ThumbnailIntermezzo class="aspect-[1790/1220]">
          <h2 class="text-xl xl:text-3xl font-bold mb-2">Slackbot</h2>
          <p>
            Typ je bij Infi
            <code class="font-mono text-white bg-black/50 px-2 inline-block">/vestabot</code>
            in een Slack channel? Dan krijg je te zien wat het Vestaboard momenteel toont! Handig
            voor remote werken en andere vestigingen!
          </p>
        </ThumbnailIntermezzo>
      {/if}

      {#if index === 48}
        <ThumbnailIntermezzo class="aspect-[1790/1220]">
          <h2 class="text-xl xl:text-3xl font-bold mb-2">Kudos!</h2>
          <p>
            Het "knoppenbordje" heeft ook een optie om de "Medewerker van de dag" op
            het Vestaboard te toveren. Altijd weer een verrassing wie het vandaag weer is!
          </p>
        </ThumbnailIntermezzo>
      {/if}

      <PhotoThumbnail {photo} class="aspect-[1790/1220]" />
    {/each}

    <ThumbnailIntermezzo class="lg:col-span-3">
      <h2 class="text-xl xl:text-3xl font-bold mb-2">Wat jij!?</h2>
      <p>
        Heb jij nog een idee wat je voor geinige integratie wilt maken? Of wil je
        bij een volgende andere Infinithon meehacken?! Schroom niet en kijk dan
        vooral op:
        <a class="anchor" href="https://werkenbij.infi.nl">werkenbij.infi.nl</a>
      </p>
    </ThumbnailIntermezzo>
  </div>

  <Footer />

</header>