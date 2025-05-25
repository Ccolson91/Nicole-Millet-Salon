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

<div class="bg-[#f5f5f5] py-8 mb-8">
  <div class="max-w-7xl mx-auto px-4">
    <h1 class="text-center text-3xl md:text-4xl font-semibold font-cormorant mb-4">Get our exclusive new client deal to save 70% off your first visit!</h1>
    <h2 class="text-center text-xl md:text-2xl font-normal mb-8">Check below for details and reserve your spot today!</h2>
    
    <div class="grid grid-cols-1 lg:grid-cols-[2fr__500px] gap-8 items-start">
      <div class="flex flex-col gap-6">
        <img 
          src={SP_Image} 
          alt="Hairstylist at work" 
          class="w-full rounded-lg shadow-md"
        />
        
        <div class="bg-white rounded-lg p-6 shadow-md">
          <h3 class="text-xl mb-4 font-cormorant">New guests get <em>ALL</em> of the following services on your first visit:</h3>
          
          <ul class="mb-6">
            {#each [
              '<strong>Haircut:</strong> Shampoo, blow dry, style, & scalp massage (reg. $45+)',
              '<strong>Color:</strong> All over color -OR- Partial Highlights (reg. $130+)',
              '<strong>Bonus:</strong> Healthy hydration treatment -OR- Eyebrow waxing (reg. $30)'
            ] as service}
              <li class="mb-3 pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-600 before:font-bold">
                {@html service}
              </li>
            {/each}
          </ul>
          
          <div class="mt-6 text-base">
            <p class="mb-2">We're confident once you step in the salon, you'll fall in love with us and come back to see us!</p>
            <p class="mb-2">That's why we're inviting you to get our EXCLUSIVE new guest offer for a one time...</p>
            <p class="text-2xl font-semibold text-center my-4 text-[#ca1010]">$67.00!</p>
            <p class="mb-2">Simply fill out the secure order form to reserve your spot and you'll get an e-mail with your prepaid voucher to use at your convenience!</p>
          </div>
        </div>
      </div>
            <div class="hero-form">
                <SP_form />
            </div>
        </div>
    </div>
</div>
