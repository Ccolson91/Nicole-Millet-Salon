<script lang="ts">
    import SP_form from '$lib/components/forms/SP_form.svelte';
    import {giftCardSubmitted, paymentSubmitted} from '$lib/stores/formStore';
    import {goto} from '$app/navigation';
  import { onMount } from 'svelte';
  import SP_Image from '$lib/images/nms_inside.webp';
    
    // check if a user already submitted the form
    onMount(() => {
        if (!giftCardSubmitted) {
        goto('/');
    } else if ($paymentSubmitted) {
        goto('/thank-you');
    }
});

</script>

<div class="hero">
    <div class="hero-content">
        <h1>Get our exclusiv new client deal to save 70% off your first visit!</h1>
        <h2 class="sub-heading">Check below for details and reserve your spot today!</h2>
        <div class="hero-layout">
            <div class="hero-image">
                <img src={SP_Image} alt="Nicole Millet Salon inside" />
                <div class="services-list">
                    <h3>New guests get <em>ALL</em> of the following services on your first visit:</h3>
                    <ul>
                        <li><strong>Haircut:</strong>Shampoo, blow dry, style, & scalp massage (reg. $45+)</li>
                        <li><strong>Color:</strong>All over color -OR- Partial Highlights (reg. $130+)</li>
                        <li><strong>Bonus:</strong>Healthy hydration treatment -OR- Eyebrow waxing (reg. $30)</li>
                    </ul>
                    <div class="promotional-message">
                        <p>We're confident once you step in the salon, you'll fall in love and come back forever!</p>
                        <p>That's why we're inviting you to get our <strong>EXCLUSIVE</strong> new guest offer for a one time...</p>
                        <p class="price-highlight">$67.00!</p>
                        <p>Simply fill out the secure order form to reserve your spot and you'll get an e-mail with your prepaid voucher to use at your convenience!</p>
                    </div>
                </div>
            </div>
            <div class="hero-form">
                <SP_form />
            </div>
        </div>
    </div>
</div>

<style>
    .hero {
        background-color: var(--secondary-gray);
        padding: 2rem 0;
        margin-bottom: 2rem;
    }
    .hero-content {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 1rem;
    }
    .hero h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: 2.25rem;
        font-weight: 600;
    }
    .sub-heading {
        text-align: center;
        font-size: 1.25rem;
        margin-bottom: 2rem;
        font-weight: 400;
    }
    .hero-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        align-items: start;
    }
    .hero-image {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .hero-image img {
        width: 100%;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .services-list {
        background-color: var(--text-light);
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .services-list h3 {
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }
    .services-list ul {
        list-style-type: none;
        padding-left: 0;
        margin-bottom: 1.5rem;
    }
    .services-list li {
        margin-bottom: 0.75rem;
        padding-left: 1.5rem;
        position: relative;
    }
    .services-list li::before {
        content: "";
        position: absolute;
        left: 0;
        color: var(--success-color);
        font-weight: bold;
    }
    .promotional-message {
        margin-top: 1.5rem;
        font-size: 1rem;
    }
    .promotional-message p {
        margin-bottom: 0.75rem;
    }
    .price-highlight {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--primary-button);
        text-align: center;
        margin: 1rem 0;
    }
</style>