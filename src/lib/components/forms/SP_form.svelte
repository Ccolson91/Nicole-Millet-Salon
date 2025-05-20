<script lang="ts">
    import {paymentFormStore, giftCardFormStore, paymentSubmitted} from '$lib/stores/formStore';
    import {goto} from '$app/navigation';
    import type {PaymentFormData, FormErrors} from '$lib/types';
  import { ValueError } from 'sanity';
  import { error } from '@sveltejs/kit';

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
        giftRecipientName: ''
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

<div class="payment-form-container">
    <div class="form-header">
        <h2>Reserve Your Spot Today</h2>
    </div>
    <form on:submit|preventDefault={handleSubmit} class="payment-form">
        <div class="form-section">
            <h3>Personal Information</h3>
            <div class="form-row">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input 
                        type="text"
                        id="firstName"
                        bind:value={formData.firstName}
                        placeholder="First name"
                        class:error={errors.firstName}
                    />
                    {#if errors.firstName}
                        <p class="error-message">{errors.firstName}</p>
                    {/if}
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input 
                        type="text"
                        id="lastName"
                        bind:value={formData.lastName}
                        placeholder="Last name"
                        class:error={errors.lastName}
                    />
                    {#if errors.lastName}
                        <p class="error-message">{errors.lastName}</p>
                    {/if}
                </div>
                <div class="form-group">
                    <label for="phoneNumber">Phone Number</label>
                    <input 
                        type="tel"
                        id="phoneNumber"
                        bind:value={formData.phoneNumber}
                        placeholder="Phone number"
                        class:error={errors.phoneNumber}
                    />
                    {#if errors.phoneNumber}
                        <p class="error-message">{errors.phoneNumber}</p>
                    {/if}
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input 
                        type="email"
                        id="email"
                        bind:value={formData.email}
                        placeholder="Email Address"
                        class:error={errors.email}
                    />
                    {#if errors.email}
                        <p class="error-message">{errors.email}</p>
                    {/if}
                </div>
            </div>
            <div class="form-section">
                <div class="form-group">
                    <label for="cardNumber">Credit Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        bind:value={formData.cardNumber}
                        placeholder="Card number"
                        maxlength="19"
                        on:input={formatCardNumber}
                        class:error={errors.cardNumber}
                    />
                    {#if errors.cardNumber}
                        <p class="error-message">{errors.cardNumber}</p>
                    {/if}
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="cvcCode">CVC Code</label>
                        <input
                            type="text"
                            id="cvcCode"
                            bind:value={formData.cvcCode}
                            placeholder="CVC"
                            maxlength="4"
                            class:error={errors.cvcCode}
                        />
                        {#if errors.cvcCode}
                            <p class="error-message">{errors.cvcCode}</p>
                        {/if}
                    </div>
                    <div class="form-group">
                        <label for="expiryMonth">Expiration Date</label>
                        <div class="expiry-date">
                            <select bind:value={formData.expiryMonth} class:error={errors.expiryMonth}>
                                <option value="" disabled selected>Month</option>
                                {#each years as year}
                                    <option value={year.value}>{year.label}</option>
                                {/each}
                            </select>
                        </div>
                        {#if errors.expiryMonth || errors.expiryYear}
                            <p class="error-message">Please select both month and year</p>
                        {/if}
                    </div>
                </div>
            </div>
            <div class="form-group gift-option">
                <label>
                    <input type="checkbox" bind:checked={isGift} />
                    This is a gift for someone else
                </label>
            </div>
            {#if isGift}
                <div class="form-group">
                    <label for="giftRecipientName">Recipient's Name</label>
                    <input
                        type="text"
                        id="giftRecipientName"
                        bind:value={formData.giftRecipientName}
                        placeholder="Recipient's name"
                        class:error={errors.giftRecipientName}
                    />
                    {#if errors.giftRecipientName}
                        <p class="error-message">{errors.giftRecipientName}</p>
                    {/if}
                </div>
            {/if}
        </div>
        <div class="order-summary">
            <h3>Order Summary</h3>
            <div class="order-item">
                <span>Precision Haircut, All Over Color -OR- Partial Highlights & Hydration Treament -OR- Eyebrow Waxing</span>
                <span>$67.00</span>
            </div>
            <div class="order-total">
                <span>Total:</span>
                <span>$67.00</span>
            </div>
        </div>
        <button type="submit" class="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Processing Payment...' : 'Purchase Now'}
        </button>
        <p class="form-disclaimer">*** Valid for new guests only ***</p>
        <div class="secure-payment">
            <span class="secure-icon">&#128274;</span>
            <span>Secure Payment</span>
        </div>
    </form>
</div>

<style>
    .payment-form-container {
        background-color: var(--text-light);
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        padding: 2rem;
        max-width: 600px;
        margin: 0 auto;
    }
    .form-header {
        margin-bottom: 2rem;
        text-align: center;
    }
    .form-header h2 {
        margin-bottom: 0.5rem;
    }
    .payment-form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .form-section {
        border-bottom: 1px solid #eee;
    }
    .form-section h3 {
        margin-bottom: 1.5rem;
        font-size: 1.25rem;
    }
    .form-row {
        display: flex;
        gap: 1rem;
    }
    .form-group {
        margin-bottom: 1.5rem;
        flex: 1;
    }
    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }
    input, select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1 rem;
    }
    input.error, select.error {
        border-color: var(--error-color);
    }
    .expiry-date {
        display: flex;
        gap: 1rem;
    }
    .error-message {
        color: var(--error-color);
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
    .gift-option {
        display: flex;
        align-items: center;
    }
    .gift-option label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0;
    }
    .gift-option input[type="checkbox"] {
        width: auto;
        margin: 0;
    }
    .order-summary {
        background-color: #f9f9f9;
        border-radius: 8px;
        padding: 1.5rem;
    }
    .order-summary h3 {
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }
    .order-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #eee;
    }
    .order-total {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        margin-top: 1rem;
        padding-top: 0.5rem;
        border-top: 1px solid #ddd;
    }
    .submit-button {
        background-color: var(--primary-button);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 1rem;
        font-size: 1.125rem;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .submit-button:hover:not(disabled) {
        background-color: var(--primary-button-hover);
    }
    .submit-button:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    .form-disclaimer {
        text-align: center;
        font-size: 0.875rem;
        margin-top: 1rem;
        font-style: italic;
    }
    .secure-payment {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1rem;
        font-size: 0.875rem;
        color: #555;
    }
    @media (max-width: 768px) {
        .payment-form-container {
            padding: 1.5rem;
        }
        .form-row {
            flex-direction: column;
            gap: 0;
        }
    }
</style>