<script lang="ts">
    import type {GalleryImage} from '$lib/types';

    // sample gallery images using pre-fetched photos
    const galleryImages: GalleryImage[] = [
        {
            id: 1,
            src: "https://images.clickfunnels.com/d9/8aa7c489bb4b6784580fac5ef255be/Screenshot-2025-03-06-104102.png",
            alt: "Platinum blonde female client"
        },
        {
            id: 2,
            src: "https://images.clickfunnels.com/0b/bd4f9152f54de58eda2d193445f7e1/Screenshot-2025-03-06-111553.png",
            alt: "Dark Curls female client"
        },
        {
            id: 3,
            src: "https://images.clickfunnels.com/69/51043310ab4213a37f8965adae9b50/Screenshot-2025-03-06-103831.png",
            alt: "Red curls female client"
        },
        {
            id: 4,
            src: "https://images.clickfunnels.com/99/ad5e3e741c4f53adaac8d6e7afd1c2/58372885_2636890323051295_1487412956323905536_n.jpg",
            alt: "Dark to light balayage female client"
        }
    ]
</script>

<div class="my-12">
  <h3 class="text-3xl font-cormorant text-center mb-8">Recent Works</h3>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-10">
    {#each galleryImages as image}
      <div class="rounded-lg overflow-hidden shadow-md aspect-square">
        <img 
          src={image.src} 
          alt={image.alt} 
          class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
    {/each}
  </div>
</div>