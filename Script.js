<script>
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.mobile-nav');
    const menuLinks = document.querySelectorAll('.menu-items a');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('menu-open');
        document.body.classList.toggle('no-scroll');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('menu-open');
            document.body.classList.remove('no-scroll');
        });
    });
});
</script>
