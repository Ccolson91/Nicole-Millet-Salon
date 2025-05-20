import { writable } from "svelte/store";
import type { GiftCardFormData, PaymentFormData } from "$lib/types";

// Gift card form store
export const giftCardFormStore = writable<GiftCardFormData>({
    name: '',
    email: ''
});

// Payment form store
export const paymentFormStore = writable<PaymentFormData>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    cardNumber: '',
    cvcCode: '',
    expiryMonth: '',
    expiryYear: '',
    giftRecipientName: ''
});

// Store to track if the gift card form was submitted
export const giftCardSubmitted = writable<boolean>(false);

// Store to track if the payment form was submitted
export const paymentSubmitted = writable<boolean>(false);