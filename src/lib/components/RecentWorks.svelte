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

<div class="gallery">
    <h2>Recent Works</h2>
    <div class="gallery-grid">
        {#each galleryImages as image}
        <div class="gallery-item">
            <img src={image.src} alt={image.alt} />
        </div>
        {/each}
    </div>
</div>

<style>
    .gallery {
        margin: 3rem 0;
        padding-left: 100px;
        padding-right: 100px;
    }
    .gallery h2 {
        text-align: center;
        margin-bottom: 2rem;
    }
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }
    .gallery-item {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        aspect-ratio: 1 / 1;
    }
    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    .gallery-item:hover img {
        transform: scale(1.05);
    }
    
    @media (min-width: 768px) {
        .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    @media (max-width: 576px) {
        .gallery-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
