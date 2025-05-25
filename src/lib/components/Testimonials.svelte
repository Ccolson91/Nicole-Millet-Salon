<script lang="ts">
    import type {Testimonial} from '$lib/types';

    //sample testimonials from original content
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Mariah Winegeart",
            quote: "Hands down, best salon experience. From the team paying attention to every sall detail to making each customer feel as if they're the only person in the room, I couldn't have been more pleased with my experience.",
            rating: 5
        },
        {
            id: 2,
            name: "Kelsey Cheramie",
            quote: "This is the only Salon I will go to since I've moved into town. Such friendly people and great energy! The salon is reasonably priced, the owner Nicole is very friendly and professional. I highly recommend everyone looking for a new salon to come here.",
            rating: 5
        },
        {
            id: 3,
            name: "Sarah Escobar",
            quote: "This salon is fantastic! The owner & staff are always so friendly each and every time I'm in there. It has a great vibe! They are very knowledgeable about the latest cuts & colors, maintenance, etc. Definitely give it an A+!!!",
            rating: 5
        }
    ];

    // svg for star rating
    const starSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="#FFD700">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>`;
</script>

<div class="my-12">
  <h3 class="text-3xl font-cormorant text-center mb-8">What Our Clients Say</h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
    {#each testimonials as testimonial}
      <div class="bg-white rounded-lg shadow-md p-8 flex flex-col gap-4">
        <div class="flex gap-1 mb-2">
          {#each Array(testimonial.rating) as _, i}
            <span>{@html starSvg}</span>
          {/each}
        </div>
        <div class="italic leading-relaxed">
          <p>"{testimonial.quote}"</p>
        </div>
        <div class="mt-auto text-right">
          <p class="font-medium">{testimonial.name}</p>
        </div>
      </div>
    {/each}
  </div>
</div>