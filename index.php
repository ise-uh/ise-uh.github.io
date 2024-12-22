<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intelligent System Engineering Research Group</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link href="css/style.css" rel="stylesheet">
    <link href="css/team.css" rel="stylesheet">
    <link href="css/research-areas.css" rel="stylesheet">
    <link href="css/publications.css" rel="stylesheet">
    <link href="css/video-modal.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">ISE Research Group</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#research-areas">Research</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#team">Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#publications">Publications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
        <div class="container text-center">
            <h1 class="display-4">Intelligent System Engineering</h1>
            <p class="lead">Advancing the frontiers of artificial intelligence and systems engineering</p>
        </div>
    </section>

    <!-- Research Areas Section -->
    <div id="research-areas">
        <?php include 'sections/research-areas.html'; ?>
    </div>

    <!-- Team Section -->
    <div id="team">
        <?php include 'sections/team.html'; ?>
    </div>

    <!-- Publications Section -->
    <div id="publications">
        <?php include 'sections/publications.html'; ?>
    </div>

    <!-- Contact Section -->
    <section id="contact" class="section-padding bg-light">
        <div class="container">
            <h2 class="text-center mb-5">Contact Us</h2>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <form id="contactForm">
                        <div class="mb-3">
                            <input type="text" class="form-control" placeholder="Name" required>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email" required>
                        </div>
                        <div class="mb-3">
                            <textarea class="form-control" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Video Modals Container -->
    <div id="videoModalsContainer">
        <!-- Video Modal Template -->
        <div id="videoModal" class="video-modal">
            <div class="video-modal-content">
                <span class="close-video">&times;</span>
                <div class="video-embed">
                    <!-- Video iframe will be inserted here -->
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-4">
                    <h5>Location</h5>
                    <p>123 University Street<br>City, Country 12345</p>
                </div>
                <div class="col-md-4">
                    <h5>Contact</h5>
                    <p>Email: info@university.edu<br>Phone: +1 234 567 8900</p>
                </div>
                <div class="col-md-4">
                    <h5>Follow Us</h5>
                    <div class="social-links">
                        <a href="#" class="social-link">Twitter</a>
                        <a href="#" class="social-link">LinkedIn</a>
                        <a href="#" class="social-link">GitHub</a>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12">
                    <p class="copyright">&copy; 2024 Intelligent System Engineering Research Group. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
    
    <!-- Custom JavaScript -->
    <script src="js/main.js"></script>
</body>
</html>