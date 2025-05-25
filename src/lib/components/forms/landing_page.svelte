<script lang="ts">
    import { goto } from '$app/navigation';
    import type {GiftCardFormData, FormErrors} from '$lib/types';
    import {giftCardFormStore, giftCardSubmitted} from '$lib/stores/formStore';


    let formData: GiftCardFormData = {
        name: '',
        email: ''
    };

    let errors: FormErrors = {};
    let isSubmitting = false;

    function validateForm(): boolean {
        errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        return Object.keys(errors).length === 0;
    }

    async function handleSubmit() {
        if (!validateForm()) return;
        isSubmitting = true;
        try {
            // Eventually we need to call an API here to process the form
            await new Promise(resolve => setTimeout(resolve, 1000)); // simulates API Call

            // Store the form data
            $giftCardFormStore = {...formData};
            $giftCardSubmitted = true;

            // Navigate to the deal page
            goto('/online-offer');

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again.');
        } finally {
            isSubmitting = false;
        }
    }
</script>

<div class="bg-gray-200/30 rounded-lg p-8 md:p-8 max-w-md mx-auto">
  <div class="mb-6">
    <h2 class="text-2xl font-cormorant mb-2">Want your FREE gift card?</h2>
    <p>Let us know where to send your FREE $25 gift card and get exclusive access to our new guest beauty package for a limited time.</p>
  </div>
  
  <form on:submit|preventDefault={handleSubmit} class="flex flex-col">
    <div class="mb-6">
      <label for="name" class="block mb-2 font-medium">Name</label>
      <input 
        type="text" 
        id="name" 
        bind:value={formData.name} 
        placeholder="Your name"
        class="w-full p-3 border border-gray-300 rounded text-base {errors.name ? 'border-red-500' : ''}"
      />
      {#if errors.name}
        <p class="text-red-600 text-sm mt-1">{errors.name}</p>
      {/if}
    </div>
    
    <div class="mb-6">
      <label for="email" class="block mb-2 font-medium">Email Address</label>
      <input 
        type="email" 
        id="email" 
        bind:value={formData.email} 
        placeholder="Your email address"
        class="w-full p-3 border border-gray-300 rounded text-base {errors.email ? 'border-red-500' : ''}"
      />
      {#if errors.email}
        <p class="text-red-600 text-sm mt-1">{errors.email}</p>
      {/if}
    </div>
    
    <button 
      type="submit" 
      class="bg-[#2d91cd] hover:bg-[#1d6d9e] text-white border-none rounded px-4 py-3 text-base font-medium cursor-pointer transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Sending...' : 'Send My Gift Card Now!'}
    </button>
    
    <p class="text-center text-sm mt-4 italic">*** Valid for new guests only ***</p>
  </form>
</div>