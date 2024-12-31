// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Bio Toggle Function
function toggleBio(bioId) {
    const bioElement = document.getElementById(bioId);
    const allBios = document.querySelectorAll('.bio-text');
    
    // Close all other open bios
    allBios.forEach(bio => {
        if (bio.id !== bioId && bio.style.display !== 'none') {
            bio.style.display = 'none';
        }
    });
    
    // Toggle the clicked bio
    if (bioElement.style.display === 'none') {
        bioElement.style.display = 'block';
    } else {
        bioElement.style.display = 'none';
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(26, 35, 126, 0.9)';
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(26, 35, 126, 1)';
    }
});

// Video Modal Functions
function playVideo(modalId, videoSrc) {
    const modal = document.getElementById(modalId);
    const videoPlayer = document.getElementById('videoPlayer1');
    if (modal && videoPlayer) {
        modal.style.display = 'block';
        videoPlayer.src = videoSrc;
        videoPlayer.play();
        document.body.style.overflow = 'hidden';
    }
}

function closeVideo(modalId) {
    const modal = document.getElementById(modalId);
    const videoPlayer = document.getElementById('videoPlayer1');
    if (modal && videoPlayer) {
        modal.style.display = 'none';
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('video-modal')) {
        const videoPlayer = document.getElementById('videoPlayer1');
        event.target.style.display = 'none';
        if (videoPlayer) {
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
        }
        document.body.style.overflow = 'auto';
    }
}

// Add this to your existing JavaScript
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding tab content
        const tabId = button.getAttribute('data-tab');
        const tabContent = button.closest('.project-tabs').querySelector(`#${tabId}`);
        if (tabContent) {
            tabContent.classList.add('active');
        }
    });
});

// For expandable text
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const container = button.closest('.expandable-text');
        const fullText = container.querySelector('.full-text');
        const preview = container.querySelector('.preview-text');
        const fadeOverlay = container.querySelector('.fade-overlay');

        if (fullText.style.display === 'none' || !fullText.style.display) {
            fullText.style.display = 'block';
            preview.style.maxHeight = 'none';
            fadeOverlay.style.display = 'none';
            button.textContent = 'Read Less';
        } else {
            fullText.style.display = 'none';
            preview.style.maxHeight = '100px';
            fadeOverlay.style.display = 'block';
            button.textContent = 'Read More';
        }
    });
});
// Scroll to Top functionality
const scrollToTopButton = document.getElementById('scrollToTop');

// Show button when user scrolls down 300px
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Handle tab switching
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const tabsContainer = button.closest('.project-tabs');
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes in this container
            tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            tabsContainer.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
            });
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            tabsContainer.querySelector(`#${tabId}`).classList.add('active');
        });
    });

    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all filter buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    // Progress bar animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = `${progress}%`;
            }
        });
    });

    document.querySelectorAll('.progress-fill').forEach(bar => {
        observer.observe(bar);
    });

    // Expandable text functionality
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const container = button.closest('.expandable-text');
            const fullText = container.querySelector('.full-text');
            const preview = container.querySelector('.preview-text');
            
            if (fullText.style.display === 'none') {
                fullText.style.display = 'block';
                button.textContent = 'Read Less';
                preview.style.maxHeight = 'none';
            } else {
                fullText.style.display = 'none';
                button.textContent = 'Read More';
                preview.style.maxHeight = '100px';
            }
        });
    });
});

// Filter Projects Function
function filterProjects(filter) {
    document.querySelectorAll('.project-card').forEach(card => {
        const categories = card.getAttribute('data-categories').split(' ');
        if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Gallery Modal Functionality
function openGalleryModal(imageSrc, caption) {
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imageSrc}" alt="${caption}">
            <p class="modal-caption">${caption}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    modal.querySelector('.close-modal').onclick = () => {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        }
    };
}

// Handle scroll animations
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 35, 126, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(26, 35, 126, 1)';
    }
});

// Add this to your existing JavaScript
document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding tab content
        const tabId = button.getAttribute('data-tab');
        const tabContent = button.closest('.project-tabs').querySelector(`#${tabId}`);
        if (tabContent) {
            tabContent.classList.add('active');
        }
    });
});

// For expandable text
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const container = button.closest('.expandable-text');
        const fullText = container.querySelector('.full-text');
        const preview = container.querySelector('.preview-text');
        const fadeOverlay = container.querySelector('.fade-overlay');

        if (fullText.style.display === 'none' || !fullText.style.display) {
            fullText.style.display = 'block';
            preview.style.maxHeight = 'none';
            fadeOverlay.style.display = 'none';
            button.textContent = 'Read Less';
        } else {
            fullText.style.display = 'none';
            preview.style.maxHeight = '100px';
            fadeOverlay.style.display = 'block';
            button.textContent = 'Read More';
        }
    });
});