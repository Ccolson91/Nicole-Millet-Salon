<script lang="ts">
    import SalonBuilding from '$lib/images/nms outside cropped 750x826.jpg';
    // contact information component
</script>

<section class="bg-black py-12 px-4">
  <h2 class="text-center text-white text-4xl font-cormorant mb-8 text-salon-dark">Connect With Us</h2>
  
  <div class="max-w-6xl mx-auto">
    <!-- Grid with image on left, business info on right -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <!-- Left column with salon image -->
      <div class="flex justify-center items-start">
        <img 
          src={SalonBuilding}
          alt="Nicole Millet Salon" 
          class="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
      
      <!-- Right column with business information -->
      <secti class="flex flex-col text-white text-center">
        <!-- Business address and contact -->
        <div class="text-lg leading-relaxed mb-8">
          <p>17650 Highland Rd. Suite G</p>
          <p>Baton Rouge, LA 70810</p>
          <p class="my-4 text-xl font-medium">(225) 421-1206</p>
          
          <a 
            href="https://www.facebook.com/nicolemilletsalon/" 
            class="bg-[#2d91cd] inline-block mt-2 bg-salon-accent hover:bg-[#1d6d9e] text-white py-2.5 px-5 rounded font-medium transition-colors duration-300"
          >
            Get Social with Us
          </a>
        </div>

        <!-- Salon hours -->
        <div class="mb-8">
          <h3 class="text-2xl font-cormorant mb-4">Salon Hours</h3>
          <table class="w-full border-collapse">
            <tbody>
              <tr>
                <td class="py-2 text-base w-2/5">Sunday</td>
                <td class="py-2 text-base text-right font-medium">CLOSED</td>
              </tr>
              <tr>
                <td class="py-2 text-base">Monday</td>
                <td class="py-2 text-base text-right font-medium">CLOSED</td>
              </tr>
              <tr>
                <td class="py-2 text-base">Tuesday</td>
                <td class="py-2 text-base text-right font-medium">9:00 am - 4:30 pm</td>
              </tr>
              <tr>
                <td class="py-2 text-base">Wednesday</td>
                <td class="py-2 text-base text-right font-medium">9:00 am - 4:30 pm</td>
              </tr>
              <tr>
                <td class="py-2 text-base">Thursday</td>
                <td class="py-2 text-base text-right font-medium">9:00 am - 4:30 pm</td>
              </tr>
              <tr>
                <td class="py-2 text-base">Friday</td>
                <td class="py-2 text-base text-right font-medium">9:00 am - 4:30 pm</td>
              </tr>
              <tr>
                <td class="py-2 text-base">Saturday</td>
                <td class="py-2 text-base text-right font-medium">9:00 am - 4:30 pm</td>
              </tr>
            </tbody>
          </table>
        </div>
    </section>