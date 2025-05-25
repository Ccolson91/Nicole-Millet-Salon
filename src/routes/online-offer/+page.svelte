<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { giftCardSubmitted, paymentSubmitted } from "$lib/stores/formStore";
  import { SP_HeroSection } from "$components";
  import Terms from "$components/Terms.svelte";
  import ConnectWithUs from "$components/ConnectWithUs.svelte";
  
  

</script>




<svelte:head>
    <title>Exlusive New Client Offer | Nicole Millet Salon</title>
    <meta name="description" content="Get our exclusive new client deal to save 70% off your first visit at Nicole Millet Salon!" />
</svelte:head>

<SP_HeroSection />
<Terms />
<ConnectWithUs />