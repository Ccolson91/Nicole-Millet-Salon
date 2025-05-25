<script>
    import dealPageImage from '$lib/images/nms_inside.webp';
    import LandingPage from './forms/landing_page.svelte';
</script>

<div class="bg-[#f5f5f5] py-8 mb-8">
  <div class="max-w-7xl mx-auto px-4">
    <h1 class="text-center text-4xl md:text-[2.5rem] font-semibold font-cormorant mb-8">Receive a Free $25 Gift Card towards your first service!</h1>
    <div class="grid grid-cols-1 lg:grid-cols-[2fr_500px] gap-8 items-start">
      <div class="flex flex-col gap-6">
        <img 
          src={dealPageImage} 
          alt="Nicole Millet Salon Interior" 
          class="w-full rounded-lg shadow-md"
        />
        <div class="text-lg leading-relaxed">
          <p>A premier salon in Baton Rouge, Nicole Millet Salon has a passion for great products and beautiful, healthy hair.</p>
          <p>We're confident if we get you in the door, you'll fall in love with us and come back forever...but we all need a little nudge sometimes.</p>
          <p>That's why we're giving you a free $25 gift card for your first service just to check us out.</p>
          <p>...and that's not it.</p>
          <p>Request your free gift today and get access to a special deal we don't advertise anywhere else, just for you.</p>
        </div>
      </div>
      <div>
        <LandingPage />
      </div>
    </div>
  </div>
</div>
