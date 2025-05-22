<script lang="ts">
    import Checkmark from '$lib/images/checkmark.svg';
</script>

<div class="thank-you-container">
    <div class="thank-you-card">
        <h1>Thank you!</h1>

        <div class="checkmark">
            <img src={Checkmark} alt="Success checkmark" />
        </div>
        <p class="confirmation-message">
            Your Beauty Bonus voucher is on its way to the email address you used to place your order.
            It can take up to 5 minutes for your voucher to get to your inbox.
            If you don't see it, remember to check your promtions tab!
        </p>
        <h2>Here's what you do next!</h2>
        <div class="steps-container">
            <div class="step">
                <span class="step-number">Step #1</span>
                <p><strong>Save</strong> or <strong>print</strong> the email that contains your voucher.</p>
            </div>
            <div class="step">
                <span class="step-numbr">Step #2</span>
                <p><strong>Call Us</strong> to book your appointment at</p>
                <p class="phone-number">(225) 421-1206</p>
            </div>
            <div class="step">
                <span class="step-number">Step #3</span>
                <p><strong>Present</strong> the email on your phone or show us the printed version to redeem your voucher</p>
            </div>
        </div>
        <div class="social-action">
            <a href="https://www.facebook.com/nicolemilletsalon/" class="facebook-button" target="_blank" rel="noopener noreferrer">Return to Facebook</a>
        </div>
        <p class="contact-note">
            You may contact us at info@nicolemilletsalon.com if you have additional questions
        </p>
    </div>
</div>

<style>
    .thank-you-container {
        max-width: 800px;
        margin: 0 auto;
    }
    .thank-you-card {
        background-color: var(--text-light);
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        padding: 2.5rem 2rem;
        margin-bottom: 3rem;
        text-align: center;
    }
    .thank-you-card h1 {
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
    }
    .checkmark {
        margin: 1.5rem auto;
        width: 80px;
        height: 80px;
    }
    .checkmark img {
        width: 100%;
        height: 100%;
    }
    .confirmation-message {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2.5rem;
    }
    .thank-you-card h2 {
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }
    .steps-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        margin-bottom: 2.5rem;
    }
    .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .step-number {
        font-weight: 600;
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
        color: var(--primary-button);
    }
    .phone-number {
        font-weight: 600;
        font-size: 1.1rem;
        margin-top: 0.5rem;
    }
    .social-action {
        margin: 2rem 0;
    }
    .facebook-button {
        display: inline-block;
        background-color: #4267B2;
        color: white;
        border-radius: 4px;
        padding: 0.75rem 1.5rem;
        font-weight: 500;
        transition: background-color 0.3s ease;
    }
    .facebook-button:hover {
        background-color: #365899;
        color: white;
    }
    .contact-note {
        font-size: 0.95rem;
        color: #665;
    }
    @media (max-width: 768px) {
        .thank-you-card {
            padding: 2rem 1.5rem;
        }
        .steps-container {
            grid-template-columns: 1fr;
        }
        .thank-you-card h1 {
            font-size: 2rem;
        }
        .thank-you-card h2 {
            font-size: 1.35rem;
        }
    }
</style>