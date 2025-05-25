<script lang="ts">
    import {paymentFormStore, giftCardFormStore, paymentSubmitted} from '$lib/stores/formStore';
    import {goto} from '$app/navigation';
    import type {PaymentFormData, FormErrors} from '$lib/types';
  

    // initialize form data with the email from the gift card form
    let formData: PaymentFormData = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: $giftCardFormStore.email || '',
        cardNumber: '',
        cvcCode: '',
        expiryMonth: '',
        expiryYear: '',
        giftRecipientName: '',
        giftRecipientEmail: ''
    };

    let errors: FormErrors = {};
    let isSubmitting = false;
    let isGift = false;

    // generate month options 1-12
    const months = Array.from({length: 12}, (_, i) => ({
        value: String(i + 1).padStart(2, '0'),
        label: String(i + 1).padStart(2, '0')
    }));

    // generate year options for the next 20 years
    const currentYear = new Date().getFullYear();
    const years = Array.from({length: 20}, (_, i) => ({
        value: String(currentYear + i),
        label: String(currentYear + 1)
    }));

    function validateForm(): boolean {
        errors = {};
        if (!formData.firstName.trim()) errors.firstName = 'First name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formData.phoneNumber.trim()) {
            errors.phoneNumber = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
            errors.phoneNumber = 'Please enter a valid 10-digit phone number';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Pleaes enter a valid email address';
        }
        if (!formData.cardNumber.trim()) {
            errors.cardNumber = 'Card number is required';
        } else if (!/^\d{15,16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
            errors.cardNumber = 'Please enter a valid 15 or 16-digit card number';
        }
        if (!formData.cvcCode.trim()) {
            errors.cvcCode = 'CVC code is required';
        } else if (!/^\d{3,4}$/.test(formData.cvcCode)) {
            errors.cvcCode = 'CVC must be 3 or 4 digits';
        }
        if (!formData.expiryMonth) errors.expiryMonth = 'Expiry month is required';

        if (!formData.expiryYear) errors.expiryYear = 'Expiry year is required';

        if (isGift && !formData.giftRecipientName?.trim()) {
            errors.giftRecipientName = 'Recipient name is required for gifts';
        }
        if (isGift && !formData.giftRecipientEmail?.trim()) {
            errors.giftRecipientEmail = 'Recipient email is required for gifts';
        } else if (isGift && formData.giftRecipientEmail && !/^\S+@\S+\.\S+$/.test(formData.giftRecipientEmail)) {
            errors.giftRecipientEmail = 'Please enter a valid email address for the recipient';
        }
        return Object.keys(errors).length === 0;
    }

    function formatCardNumber(e: Event) {
        const input = e.target as HTMLInputElement;
        const value = input.value.replace(/\D/g, '');
        //format with spaces every 4 digits
        let formatted = '';
        for (let i = 0; i < value.length; i += 4) {
            formatted += value.substring(i, i + 4) + ' ';
        }
        formData.cardNumber = formatted.trim();
    }

    async function handleSubmit() {
        if (!validateForm()) return;
        isSubmitting = true;
        try {
            //in a real app, you would call an API here to process the payment
            await new Promise(resolve => setTimeout(resolve, 1500)); // simulate payment processing
            //store the form data
            $paymentFormStore = {...formData};
            $paymentSubmitted = true;
            //navigate to the thank you page
            goto('thank-you');
        } catch (error) {
            console.error('Error processing payment:', error);
            alert('There was an error processing your payment. Please try again.');
        } finally {
            isSubmitting = false;
        }
    }
    
    
</script>

<div class="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
  <div class="text-center mb-8">
    <h2 class="text-2xl font-cormorant mb-2">Reserve Your Spot Today</h2>
    <p>Secure your exclusive new client deal for just $67.00</p>
  </div>
  
  <form on:submit|preventDefault={handleSubmit} class="flex flex-col gap-8">
    <div class="border-b border-gray-100 pb-6">
      <h3 class="text-xl font-cormorant mb-6">Personal Information</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="mb-6">
          <label for="firstName" class="block mb-2 font-medium">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            bind:value={formData.firstName} 
            placeholder="First name"
            class="w-full p-3 border border-gray-300 rounded text-base {errors.firstName ? 'border-red-500' : ''}"
          />
          {#if errors.firstName}
            <p class="text-red-600 text-sm mt-1">{errors.firstName}</p>
          {/if}
        </div>
        
        <div class="mb-6">
          <label for="lastName" class="block mb-2 font-medium">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            bind:value={formData.lastName} 
            placeholder="Last name"
            class="w-full p-3 border border-gray-300 rounded text-base {errors.lastName ? 'border-red-500' : ''}"
          />
          {#if errors.lastName}
            <p class="text-red-600 text-sm mt-1">{errors.lastName}</p>
          {/if}
        </div>
      </div>
      
      <div class="mb-6">
        <label for="phoneNumber" class="block mb-2 font-medium">Phone Number</label>
        <input 
          type="tel" 
          id="phoneNumber" 
          bind:value={formData.phoneNumber} 
          placeholder="Phone number"
          class="w-full p-3 border border-gray-300 rounded text-base {errors.phoneNumber ? 'border-red-500' : ''}"
        />
        {#if errors.phoneNumber}
          <p class="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>
        {/if}
      </div>
      
      <div class="mb-6">
        <label for="email" class="block mb-2 font-medium">Email Address</label>
        <input 
          type="email" 
          id="email" 
          bind:value={formData.email} 
          placeholder="Email address"
          class="w-full p-3 border border-gray-300 rounded text-base {errors.email ? 'border-red-500' : ''}"
        />
        {#if errors.email}
          <p class="text-red-600 text-sm mt-1">{errors.email}</p>
        {/if}
      </div>
    </div>
    
    <div class="border-b border-gray-100 pb-6">
      <h3 class="text-xl font-cormorant mb-6">Payment Information</h3>
      
      <div class="mb-6">
        <label for="cardNumber" class="block mb-2 font-medium">Credit Card Number</label>
        <input 
          type="text" 
          id="cardNumber" 
          bind:value={formData.cardNumber} 
          placeholder="Card number"
          maxlength="19"
          on:input={formatCardNumber}
          class="w-full p-3 border border-gray-300 rounded text-base {errors.cardNumber ? 'border-red-500' : ''}"
        />
        {#if errors.cardNumber}
          <p class="text-red-600 text-sm mt-1">{errors.cardNumber}</p>
        {/if}
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="mb-6">
          <label for="cvcCode" class="block mb-2 font-medium">CVC Code</label>
          <input 
            type="text" 
            id="cvcCode" 
            bind:value={formData.cvcCode} 
            placeholder="CVC"
            maxlength="4"
            class="w-full p-3 border border-gray-300 rounded text-base {errors.cvcCode ? 'border-red-500' : ''}"
          />
          {#if errors.cvcCode}
            <p class="text-red-600 text-sm mt-1">{errors.cvcCode}</p>
          {/if}
        </div>
        
        <div class="mb-6">
          <label for="expiryMonth" class="block mb-2 font-medium">Expiration Date</label>
          <div class="flex gap-4">
            <select 
              id="expiryMonth"
              bind:value={formData.expiryMonth} 
              class="flex-1 p-3 border border-gray-300 rounded text-base {errors.expiryMonth ? 'border-red-500' : ''}"
            >
              <option value="" disabled selected>Month</option>
              {#each months as month}
                <option value={month.value}>{month.label}</option>
              {/each}
            </select>
            
            <select 
              id="expiryYear"
              bind:value={formData.expiryYear} 
              class="flex-1 p-3 border border-gray-300 rounded text-base {errors.expiryYear ? 'border-red-500' : ''}"
            >
              <option value="" disabled selected>Year</option>
              {#each years as year}
                <option value={year.value}>{year.label}</option>
              {/each}
            </select>
          </div>
          {#if errors.expiryMonth || errors.expiryYear}
            <p class="text-red-600 text-sm mt-1">Please select both month and year</p>
          {/if}
        </div>
      </div>
      
      <div class="mb-1 flex items-center">
        <label for="isGift" class="flex items-center gap-2 cursor-pointer">
          <input id="isGift" type="checkbox" bind:checked={isGift} class="w-auto m-0" />
          <span>This is a gift for someone else</span>
        </label>
      </div>
      
      {#if isGift}
        <div class="mb-6">
          <label for="giftRecipientName" class="block mb-2 font-medium">Recipient Name</label>
          <input 
            type="text" 
            id="giftRecipientName" 
            bind:value={formData.giftRecipientName} 
            placeholder="Recipient's name"
            class="w-full p-3 border border-gray-300 rounded text-base {errors.giftRecipientName ? 'border-red-500' : ''}"
          />
          {#if errors.giftRecipientName}
            <p class="text-red-600 text-sm mt-1">{errors.giftRecipientName}</p>
          {/if}
        </div>
        
        <div class="mb-6">
          <label for="giftRecipientEmail" class="block mb-2 font-medium">Recipient Email</label>
          <input 
            type="email" 
            id="giftRecipientEmail" 
            bind:value={formData.giftRecipientEmail} 
            placeholder="Recipient's email address"
            class="w-full p-3 border border-gray-300 rounded text-base {errors.giftRecipientEmail ? 'border-red-500' : ''}"
          />
          {#if errors.giftRecipientEmail}
            <p class="text-red-600 text-sm mt-1">{errors.giftRecipientEmail}</p>
          {/if}
        </div>
      {/if}
    </div>
    
    <div class="bg-gray-50 rounded-lg p-6">
      <h3 class="text-xl font-cormorant mb-4">Order Summary</h3>
      <div class="flex flex-wrap justify-between mb-2 pb-1  border-gray-200">
        <span class="flex-1 mr-4">Precision Haircut, All Over Color -OR- Partial Highlights & Hydration Treatment/Eyebrow waxing</span>
        <span class="whitespace-nowrap">$67.00</span>
      </div>
      <div class="flex justify-between font-bold mt-4 pt-2 border-t border-gray-300">
        <span>Total:</span>
        <span>$67.00</span>
      </div>
    </div>
    
    <button 
      type="submit" 
      class="bg-[#2d91cd] hover:bg-[#1d6d9e] text-white border-none rounded py-4 text-lg font-medium cursor-pointer transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      disabled={isSubmitting}
    >
      {isSubmitting ? 'Processing Payment...' : 'Purchase Now'}
    </button>
    
    <p class="text-center text-sm italic">*** Valid for new guests only ***</p>
    
    <div class="flex items-center justify-center gap-2 mt-1 text-sm text-gray-600">
      <span class="text-base">🔒</span>
      <span>Secure Payment</span>
    </div>
  </form>
</div>