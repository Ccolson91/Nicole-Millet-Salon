export interface GiftCardFormData {
    name: string;
    email: string;
}

export interface PaymentFormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    cardNumber: string;
    cvcCode: string;
    expiryMonth: string;
    expiryYear: string;
    giftRecipientName?: string;
}

export interface FormErrors {
    [key: string]: string;
}

export interface Testimonial {
    id: number;
    name: string;
    quote: string;
    rating: number;
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}

export interface SalonService {
    id: number;
    name: string;
    description: string;
    regularPrice: string;
}