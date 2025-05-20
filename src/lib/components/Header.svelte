<script lang="ts">
    import logo from '$lib/images/NMS_Logo_300x190.png';
</script>

<nav class="navbar">
    <div class="container">
        <div class="logo">
            <img src={logo} alt="Nicole Millet Salon logo" class="logo-image" />
        </div>
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-black);
        padding: 1.5rem 0;
        width: 100%;
    }
</style>