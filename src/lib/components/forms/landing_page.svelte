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
            goto('/deal-page');

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again.');
        } finally {
            isSubmitting = false;
        }
    }
</script>

<div class="gift-card-form-container">
    <div class="form-header">
        <h2>Want your FREE gift card?</h2>
        <p>Let us know where to send your FREE $25 gift card and get exclusive access to our new guest beaty package for a limited time only!</p>
    </div>
    <form on:submit|preventDefault={handleSubmit} class="gift-card-form">
        <div class="form-group">
            <label for="name">Name</label>
            <input
                type="text"
                id="name"
                bind:value={FormData.name}
                placeholder="Your name"
                class:error={errors.name}
            />
            {#if errors.name}
                <p class="error-message">{errors.name}</p>
            {/if}
        </div>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input
                type="email"
                id="email"
                bind:value={formData.email}
                placeholder="Your email address"
                class:error={errors.email}
            />
            {#if errors.email}
                <p class="error-message">{errors.email}</p>
            {/if}
        </div>
        <button type="submit" class="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send My Gift Card Now!'}
        </button>
        <p class="form-disclaimer">*** Valid for new guests only ***</p>
    </form>
</div>

<style>
    .gift-card-form-container {
        background-color: rgba(211,211,211,0.3);
        border-radius: 8px;
        padding: 2rem;
        max-width: 500px;
        margin: 0 auto;
    }
    .form-header {
        margin-bottom: 1.5rem;
    }
    .form-header h2 {
        margin-bottom: 0.5rem;
    }
    .gift-card-form {
        display: flex;
        flex-direction: column;
    }
    .form-group {
        margin-bottom: 1.5rem;
    }
    label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }
    input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }
    input.error {
        border-color: var(--error-color);
    }
    .error-message {
        color: var(--error-color);
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }
    .submit-button {
        background-color: var(--primary-button);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.75rem 1 rem;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    .submit-button:hover:not(:disabled) {
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
    @media (max-width: 768px) {
        .gift-card-form-container {
            padding: 1.5rem;
        }
    }
</style>