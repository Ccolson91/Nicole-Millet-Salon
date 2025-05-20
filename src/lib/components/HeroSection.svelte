<script lang="ts">
    import dealPageImage from '$lib/images/nms_inside.webp';
    import LandingPage from './forms/landing_page.svelte';
</script>

<section class="hero">
    <div class="hero-showcase text-center bold">
        <div class="deal-page-headline">
            <h1>Get a Free $25 Gift Card<br>Towards Your First Service!</h1>
        <div class="hero-layout">
            <div class="hero-image">
                <img src={dealPageImage} alt="Nicole Millet Salon interior" class="deal-page-image" />
                <div class="salon-description">
                    <p>A premier salon in Baton Rouge, Nicole Millet Salon has a passion for great products and beautiful, healthy hair.</p>
                    <p>We're confident if we get you in the door, you'll fall in love with us and come back forever...but we all need a little nudge sometimes.</p>
                    <p>That's why we're giving you a free $25 gift card for your first service just to check us out.</p>
                    <p>...and that's not it.</p>
                    <p>Request your free gift today and get access to a special online deal we don't advertise anywhere else, just for you.</p>
                </div>
            </div>
            <div class="hero-form">
                <LandingPage />
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        background-color: var(--secondary-gray);
        padding: 2rem 0;
        margin-bottom: 2rem;
    }
    .hero-showcase {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 1rem;
    }
    .hero-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: center;
    }
    .hero-image {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .hero-image img {
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .salon-description {
        font-size: 1.1rem;
        line-height: 1.6;
    }
    @media (max-width: 992px) {
        .hero-layout {
            grid-template-columns: 1fr;
        }
        .hero h1 {
            font-size: 2rem;
        }
    }
    @media (max-width: 576px) {
        .hero h1 {
            font-size: 1.75rem;
        }
    }
</style>