<script lang="ts">
    import Checkmark from '$lib/images/checkmark.svg';
</script>

<div class="max-w-3xl mx-auto">
  <div class="bg-white p-10 md:p-12 mb-12 text-center">
    <h1 class="text-4xl md:text-5xl font-cormorant mb-6">Thank you!</h1>
    
    <div class="w-20 h-20 mx-auto my-6">
      <img src={Checkmark} alt="Success Checkmark" class="w-full h-full" />
    </div>
    
    <p class="text-lg leading-relaxed mb-10">
      Your Beauty Bonus voucher is on its way to the email address you used to place your order. 
      It can take up to 5 minutes for your voucher to get to your inbox. 
      If you don't see it, remember to check your promotions tab!
    </p>
    
    <h2 class="text-2xl font-cormorant mb-8">Here's what you do next!</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div class="flex flex-col items-center text-center shadow-lg rounded">
        <span class="font-semibold text-lg mb-3 text-[#2d91cd]">Step #1</span>
        <p><strong>Save</strong> or <strong>print</strong> the email that contains your voucher.</p>
      </div>
      
      <div class="flex flex-col items-center text-center shadow-lg rounded">
        <span class="font-semibold text-lg mb-3 text-[#2d91cd]">Step #2</span>
        <p><strong>Call Us</strong> to book your appointment at</p>
        <p class="font-semibold text-lg mt-2">(225) 421-1206</p>
      </div>
      
      <div class="flex flex-col items-center text-center shadow-lg rounded">
        <span class="font-semibold text-lg mb-3 text-[#2d91cd]">Step #3</span>
        <p><strong>Present</strong> the email on your phone or show us the printed version to redeem your voucher</p>
      </div>
    </div>
    
    <div class="my-8">
      <a 
        href="https://www.facebook.com/nicolemilletsalon/" 
        class="inline-block bg-[#4267B2] hover:bg-[#365899] text-white rounded px-6 py-3 font-medium transition-colors duration-300" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Return to Facebook
      </a>
    </div>
    
    <p class="text-sm text-gray-600">
      You may contact us at <strong>info@nicolemilletsalon.com</strong> if you have additional questions
    </p>
  </div>
  </div>
