document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");

    // Vue app for Lebron stats
    const app = Vue.createApp({
        data() {
            return {
                stats: {
                    points: 27.2,
                    assists: 7.3,
                    rebounds: 7.5
                }
            };
        },
        methods: {
            updateStats() {
                this.stats.points = (27 + Math.random()).toFixed(1);
                this.stats.assists = (7 + Math.random()).toFixed(1);
                this.stats.rebounds = (7 + Math.random()).toFixed(1);
            }
        }
    });

    app.mount("#app");

    // Fix overlay event listener error
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('active');
        });
    } else {
        console.error("Overlay element not found!");
    }

    // Fix image click event listener
    document.querySelectorAll('.images-container img').forEach(img => {
        img.addEventListener('click', () => {
            showOverlay(img.src, img.alt);
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Function to show images per club
function showImages(club, element) {
    const clubs = ['cavs', 'heat', 'lakers'];
    clubs.forEach(c => {
        const imagesDiv = document.querySelector(`.${c}-images`);
        if (imagesDiv) {
            imagesDiv.classList.toggle('hidden', c !== club);
        }
    });

    document.querySelectorAll('.club-button').forEach(button => {
        button.classList.remove('active');
    });

    if (element) {
        element.classList.add('active');
    }
}

// Function to show overlay
function showOverlay(imageSrc, text) {
    const overlay = document.getElementById('overlay');
    const imgElement = document.getElementById('highlighted-image');
    const textElement = document.getElementById('image-text');

    if (overlay && imgElement && textElement) {
        imgElement.src = imageSrc;
        textElement.innerText = text;
        overlay.classList.add('active');
    }
}

// Function to hide overlay
function hideOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
}

document.getElementById('overlay').addEventListener('click', hideOverlay);
