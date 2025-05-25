




<div class="max-w-7xl mx-auto px-4">
  <div class="my-12">
    <h2 class="text-center text-3xl font-cormorant mb-8">Have questions?</h2>
    <div class="grid grid-cols-1 text-center gap-4 px-50">
      {#each [
        '#1. Valid to new guests only.',
        '#2. Offer valid for 3 months. Amount paid never expires.',
        '#3. New guest beauty package cannot be combined with any other offers',
        '#4. Additional new guest beauty packages may be purchased as gifts ONLY.',
      ] as faq, i}
        <div class="bg-white rounded-lg p-1 shadow-sm">
          <h4 class="text-lg font-medium">{faq}</h4>
        </div>
      {/each}
    </div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
    <div class="flex gap-4 items-center bg-white rounded-lg p-6 shadow-md md:flex-row flex-col text-center md:text-left">
      <div class="text-4xl">🔄</div>
      <div>
        <h3 class="text-xl font-cormorant mb-2">Money Back Guarantee</h3>
        <p class="text-sm">No question asked 14 day refund guarantee if you are unhappy for any reason and have not used any of your services.</p>
      </div>
    </div>
    
    <div class="flex gap-4 items-center bg-white rounded-lg p-6 shadow-md md:flex-row flex-col text-center md:text-left">
      <div class="text-4xl">🔒</div>
      <div>
        <h3 class="text-xl font-cormorant mb-2">Secure Payment</h3>
        <p class="text-sm">All orders are through a very secure network. Your credit card information is never stored in any way. We respect your privacy.</p>
      </div>
    </div>
  </div>
  </div>