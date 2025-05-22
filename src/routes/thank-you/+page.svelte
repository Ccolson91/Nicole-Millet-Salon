
<script>
    import {giftCardSubmitted, paymentSubmitted} from '$lib/stores/formStore';
    import {goto} from '$app/navigation';
    import {onMount} from 'svelte';
  import { ThankYou } from '$components';

  // Check if user completed the flow
  /*
  onMount(() => {
    if (!$giftCardSubmitted || !$paymentSubmitted) {
      goto('/');
    }
  });
  */
</script>

<svelte:head>
    <title>Thank You | Nicole Millet Salon</title>
    <meta name="description" content="Thank you for your purchase at Nicole Millet Salon!" />
</svelte:head>

<ThankYou />