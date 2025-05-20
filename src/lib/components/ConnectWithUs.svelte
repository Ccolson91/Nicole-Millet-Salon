<script lang="ts">
    import SalonBuilding from '$lib/images/nms outside cropped 750x826.jpg';
    // contact information component
</script>

<section class="connect-with-us">
    <h2>Connect With Us</h2>
    <div class="contact-container">
        <div class="salon-image">
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src={SalonBuilding} alt="Nicole Millet Salon outside image" />
        </div>
        <div class="contact-details">
            <div class="address">
                <p>17650 Highland Rd. Suite G</p>
                <p>Baton Rouge, LA 70810</p>
                <p class="phone"><strong>(225) 421-1206</strong></p>
                <a href="https://www.facebook.com/nicolemilletsalon/" class="social-link">Get Social with Us</a>
            </div>
            <div class="hours">
                <h3>Salon Hours</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Sunday</td>
                            <td><strong>CLOSED</strong></td>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td><strong>CLOSED</strong></td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td><strong>9:00 am - 4:30 pm</strong></td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td><strong>9:00 am - 4:30 pm</strong></td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td><strong>9:00 am - 4:30 pm</strong></td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td><strong>9:00 am - 4:30 pm</strong></td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td><strong>9:00 am - 4:30 pm</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>

<style>
    .connect-with-us {
        background-color: var(--primary-black);
        padding: 2rem 3rem;
        margin: 0;
        border-bottom: 3px solid var(--text-dark);
        border-top: 3px solid var(--text-dark);

    }
    h2 {
        text-align: center;
        font-size: 2.2rem;
        font-family: 'Cormorant Garamond', serif;
        margin-bottom: 2rem;
        color: var(--secondary-gray);
        padding: 1rem;
    }
    .contact-container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        
    }
    
    .salon-image {
        flex: 1;
        min-width: 300px;
        align-items: center;
        
    }
    .salon-image img {
        width: 80%;
        height: auto;
        object-fit: cover;
        align-items:center;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        
    }
    .contact-details {
        flex: 1;
        min-width: 300px;
        text-align: center;
        
    }
    .address {
        margin-bottom: 2rem;
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--secondary-gray);
    }
    .phone {
        margin: 1rem 0;
        font-size: 1.2rem;
        color: var(--secondary-gray);
    }
    .social-link {
        display: inline-block;
        margin-top: 0.5rem;
        background-color: #4267B2;
        color: white;
        padding: 0.6rem 1.2rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 500;
        transition: background-color 0.3s;
    }
    .social-link:hover {
        background-color: #3b5998;
    }
    .hours {
        margin-bottom: 2rem;
        color: var(--secondary-gray);
    }
    .hours h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-family: 'Cormorant Garamond', serif;
        color: var(--secondary-gray);
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    table tr td {
        padding: 0.25rem;
        font-size: 1.05rem;
    }
    table tr td:first-child {
        width: 40%;
        padding-left: 0;
    }
    table tr td:last-child {
        width: 40%;
        padding-left: 0;
    }
    @media (max-width: 768px) {
        .contact-container {
            grid-template-columns: repeat(1, 1fr);
            flex-direction: column;
            gap: 2rem;
        }
        .salon-image, .contact-details {
            width: 100%;
            align-items: center;
        }
    }
</style>