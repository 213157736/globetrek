const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header container animations
ScrollReveal().reveal(".header__container h1", scrollRevealOption);
ScrollReveal().reveal(".header__container h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// About container animations
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// Discover container animations
ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".discover__card__content", {
  ...scrollRevealOption,
  interval: 500,
  delay: 200,
});

// Blogs container animations
ScrollReveal().reveal(".blogs__card", {
  duration: 1000,
  interval: 400,
});

// Trips container animations
ScrollReveal().reveal(".trip-card", {
  ...scrollRevealOption,
  interval: 400,
});

// Gallery container animations
ScrollReveal().reveal(".gallery__card", {
  ...scrollRevealOption,
  interval: 400,
});

// ===== TRIPS DATA =====
const upcomingTrips = [
  {
    id: 1,
    title: "Port Elizabeth Coastal",
    destination: "Port Elizabeth, Eastern Cape",
    date: "2026-04-24",
    endDate: "2026-04-27",
    duration: "4 Days",
    price: 7560,
    category: "coastal",
    special: false,
    description: "Discover the friendly city of Port Elizabeth with its beautiful beaches, rich history, and warm hospitality.",
    image: "assets/discover-1.jpeg",
    availability: "Available",
    deposit: 2000,
    depositDue: "2026-03-31",
    features: [
      "Beachfront accommodation",
      "City tour",
      "Seafood dining experience",
      "Donkin Heritage Trail",
      "3 nights accommodation"
    ],
    details: [
      { icon: "ri-beach-line", label: "Beaches" },
      { icon: "ri-water-flash-line", label: "Ocean Views" },
      { icon: "ri-restaurant-line", label: "Seafood" }
    ],
    previewImages: [
      { src: "assets/gallery-1.jpeg", alt: "PE Beach 1", caption: "Beautiful beaches" },
      { src: "assets/gallery-3.jpeg", alt: "PE Beach 2", caption: "Ocean views" },
      { src: "assets/discover-2.jpeg", alt: "PE City", caption: "City attractions" },
      { src: "assets/blog-4.jpeg", alt: "PE Culture", caption: "Local culture" }
    ]
  },
  {
    id: 2,
    title: "North West (Sun City)",
    destination: "Sun City, North West",
    date: "2026-07-03",
    endDate: "2026-07-06",
    duration: "4 Days",
    price: 7000,
    category: "safari",
    special: false,
    description: "Experience luxury and entertainment at Sun City Resort, with world-class facilities, gaming, and the adjacent Pilanesberg Game Reserve.",
    image: "assets/gallery-6.jpeg",
    availability: "Available",
    deposit: 2000,
    depositDue: "2026-05-31",
    features: [
      "Sun City Resort access",
      "Valley of Waves",
      "Pilanesberg Game Reserve",
      "Entertainment shows",
      "3 nights accommodation"
    ],
    details: [
      { icon: "ri-crown-line", label: "Luxury" },
      { icon: "ri-gamepad-line", label: "Entertainment" },
      { icon: "ri-swimming-pool-line", label: "Resort" }
    ],
    previewImages: [
      { src: "assets/gallery-6.jpeg", alt: "Sun City Resort", caption: "Luxury resort" },
      { src: "assets/discover-1.jpeg", alt: "Valley of Waves", caption: "Water park" },
      { src: "assets/gallery-5.jpeg", alt: "Wildlife", caption: "Game reserve" },
      { src: "assets/blog-1.jpeg", alt: "Entertainment", caption: "Shows & events" }
    ]
  },
  {
    id: 3,
    title: "Mpumalanga Panorama",
    destination: "Mpumalanga Province",
    date: "2026-07-10",
    endDate: "2026-07-13",
    duration: "4 Days",
    price: 6100,
    category: "mpumalanga",
    special: false,
    description: "Experience the breathtaking beauty of Mpumalanga's Panorama Route with God's Window, Bourke's Luck Potholes, and Blyde River Canyon.",
    image: "assets/discover-1.jpeg",
    availability: "Limited",
    deposit: 1500,
    depositDue: "2026-05-31",
    features: [
      "God's Window viewpoint",
      "Bourke's Luck Potholes",
      "Blyde River Canyon",
      "Waterfall tours",
      "3 nights accommodation"
    ],
    details: [
      { icon: "ri-waterfall-line", label: "Waterfalls" },
      { icon: "ri-landscape-line", label: "Canyon Views" },
      { icon: "ri-hiking-line", label: "Hiking" }
    ],
    previewImages: [
      { src: "assets/discover-1.jpeg", alt: "God's Window", caption: "Panoramic views" },
      { src: "assets/gallery-4.jpeg", alt: "Waterfalls", caption: "Beautiful waterfalls" },
      { src: "assets/blog-4.jpeg", alt: "Canyon", caption: "Blyde River Canyon" },
      { src: "assets/gallery-3.jpeg", alt: "Nature", caption: "Natural beauty" }
    ]
  },
  {
    id: 4,
    title: "Limpopo Bela Bela",
    destination: "Bela Bela, Limpopo",
    date: "2026-08-07",
    endDate: "2026-08-10",
    duration: "4 Days",
    price: 5850,
    category: "safari",
    special: false,
    description: "Experience the warm waters and wildlife of Bela Bela (Warmbaths), known for its natural hot springs and game reserves.",
    image: "assets/gallery-6.jpeg",
    availability: "Available",
    deposit: 1800,
    depositDue: "2026-06-30",
    features: [
      "Natural hot springs",
      "Game farm visits",
      "Spa treatments available",
      "Bushveld experience",
      "3 nights accommodation"
    ],
    details: [
      { icon: "ri-hot-spring-line", label: "Hot Springs" },
      { icon: "ri-lion-line", label: "Wildlife" },
      { icon: "ri-spa-line", label: "Relaxation" }
    ],
    previewImages: [
      { src: "assets/gallery-6.jpeg", alt: "Hot Springs", caption: "Natural hot springs" },
      { src: "assets/discover-1.jpeg", alt: "Wildlife", caption: "Game viewing" },
      { src: "assets/gallery-3.jpeg", alt: "Spa", caption: "Relaxation facilities" },
      { src: "assets/blog-1.jpeg", alt: "Accommodation", caption: "Comfortable stay" }
    ]
  },
  {
    id: 5,
    title: "Margate Beach Holiday",
    destination: "Margate, KwaZulu-Natal",
    date: "2026-09-25",
    endDate: "2026-09-28",
    duration: "4 Days",
    price: 6500,
    category: "coastal",
    special: false,
    description: "Relax on the beautiful beaches of Margate on the KwaZulu-Natal South Coast, known for its warm waters and laid-back atmosphere.",
    image: "assets/discover-2.jpeg",
    availability: "Available",
    deposit: 2000,
    depositDue: "2026-08-31",
    features: [
      "Beachfront accommodation",
      "Uvongo River Mouth",
      "Shopping at Margate Mall",
      "Beach activities",
      "3 nights accommodation"
    ],
    details: [
      { icon: "ri-beach-line", label: "Beach" },
      { icon: "ri-sun-line", label: "Sunshine Coast" },
      { icon: "ri-swimming-line", label: "Swimming" }
    ],
    previewImages: [
      { src: "assets/discover-2.jpeg", alt: "Margate Beach", caption: "Beautiful beaches" },
      { src: "assets/gallery-1.jpeg", alt: "River Mouth", caption: "Uvongo River Mouth" },
      { src: "assets/gallery-4.jpeg", alt: "Shopping", caption: "Local shopping" },
      { src: "assets/blog-3.jpeg", alt: "Activities", caption: "Beach activities" }
    ]
  },
  {
    id: 6,
    title: "Cape Town City Tour",
    destination: "Cape Town, Western Cape",
    date: "2026-10-15",
    endDate: "2026-10-18",
    duration: "4 Days",
    price: 9900,
    category: "cape-town",
    special: true,
    description: "Experience the Mother City! Includes Table Mountain, Sea Point, Robben Island, city sightseeing and more.",
    image: "assets/discover-2.jpeg",
    availability: "Deposit Required",
    deposit: 2000,
    depositDue: "2026-08-31",
    features: [
      "Travel to Braamfischer International Airport",
      "Travel from OR Tambo International Airport to Home",
      "Flight Tickets to and from",
      "Table Mountain Aerial Cableway",
      "Robben Island Tour",
      "Sea Point & Camps Bay",
      "City shuttle service included",
      "3 nights accommodation"
    ],
    details: [
      { icon: "ri-mountain-line", label: "Table Mountain" },
      { icon: "ri-island-line", label: "Robben Island" },
      { icon: "ri-bus-line", label: "Shuttle in CPT" }
    ],
    previewImages: [
      { src: "assets/discover-2.jpeg", alt: "Table Mountain", caption: "Table Mountain views" },
      { src: "assets/gallery-5.jpeg", alt: "Robben Island", caption: "Historical tour" },
      { src: "assets/gallery-1.jpeg", alt: "Sea Point", caption: "Coastal beauty" },
      { src: "assets/blog-2.jpeg", alt: "City", caption: "City attractions" }
    ]
  }
];

// Sort trips by date
upcomingTrips.sort((a, b) => new Date(a.date) - new Date(b.date));

// ===== GLOBAL VARIABLES =====
let currentBookingTrip = null;

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
  // Initialize
  renderTrips(upcomingTrips);
  initMobileMenu();
  
  // Scroll to trips
  window.scrollToTrips = function() {
    const tripsSection = document.getElementById('trips');
    if (tripsSection) {
      const offset = window.innerWidth <= 768 ? 120 : 100;
      window.scrollTo({
        top: tripsSection.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };
  
  // WhatsApp function
  window.openWhatsApp = function(message) {
    const phone = "270725581629";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };
  
  // Email function
  window.openEmail = function() {
    const email = "lefumlangeni@icloud.com";
    const subject = "GlobeTrek Adventures Inquiry";
    const body = "Hello GlobeTrek Adventures,\n\nI would like to get more information about your trips.\n\nBest regards,";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  // Open Booking Modal
  window.openBookingModal = function(tripId) {
    const trip = upcomingTrips.find(t => t.id === tripId);
    if (!trip) return;
    
    currentBookingTrip = trip;
    
    document.getElementById('modalTripTitle').textContent = `Confirm Booking: ${trip.title}`;
    document.getElementById('modalTripName').textContent = trip.title;
    document.getElementById('modalTripDescription').textContent = trip.description;
    document.getElementById('modalTripDates').textContent = formatDateRange(trip.date, trip.endDate);
    document.getElementById('modalTripPrice').textContent = `R ${trip.price.toLocaleString('en-ZA')}`;
    document.getElementById('modalTripDuration').textContent = trip.duration;
    document.getElementById('modalTripDeposit').textContent = `R ${trip.deposit.toLocaleString('en-ZA')} due ${formatDate(trip.depositDue)}`;
    
    const previewContainer = document.getElementById('previewImages');
    previewContainer.innerHTML = trip.previewImages.map(img => `
      <div class="preview-image">
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
        <div class="preview-image-overlay">${img.caption}</div>
      </div>
    `).join('');
    
    const modal = document.getElementById('bookingModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  
  // Close Booking Modal
  window.closeBookingModal = function() {
    const modal = document.getElementById('bookingModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentBookingTrip = null;
  };
  
  // Confirm Booking
  window.confirmBooking = function() {
    if (!currentBookingTrip) return;
    
    const message = `Hello GlobeTrek Adventures! I would like to BOOK the "${currentBookingTrip.title}" trip for R${currentBookingTrip.price.toLocaleString('en-ZA')} (Deposit: R${currentBookingTrip.deposit.toLocaleString('en-ZA')}). Please send me the booking form and payment details.`;
    openWhatsApp(message);
    closeBookingModal();
  };
  
  // Sort trips
  const sortSelect = document.getElementById('sortTrips');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      sortTrips(this.value);
    });
  }
  
  // Search trips
  const tripSearch = document.getElementById('tripSearch');
  if (tripSearch) {
    tripSearch.addEventListener('input', function() {
      filterTrips(this.value);
    });
  }
  
  // Clear search
  const clearSearch = document.getElementById('clearSearch');
  if (clearSearch) {
    clearSearch.addEventListener('click', function() {
      tripSearch.value = '';
      filterTrips('');
    });
  }
  
  // Close modal on outside click
  const bookingModal = document.getElementById('bookingModal');
  if (bookingModal) {
    bookingModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeBookingModal();
      }
    });
  }
  
  // Close modal on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeBookingModal();
    }
  });
  
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if(targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if(targetElement) {
        e.preventDefault();
        const offset = window.innerWidth <= 768 ? 120 : 100;
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: 'smooth'
        });
        
        // Update active link
        document.querySelectorAll('.nav__links .link a').forEach(link => {
          link.classList.remove('active');
        });
        this.classList.add('active');
        
        // Close mobile menu if open
        const navMenu = document.querySelector('.nav__menu');
        const overlay = document.querySelector('.nav__overlay');
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          overlay.classList.remove('active');
          document.querySelector('.nav__toggle i').className = 'ri-menu-line';
          document.body.style.overflow = '';
        }
      }
    });
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(0, 0, 0, 0.8)';
      nav.style.backdropFilter = 'blur(20px)';
    } else {
      nav.style.background = 'rgba(0, 0, 0, 0.3)';
      nav.style.backdropFilter = 'blur(10px)';
    }
    
    // Update active nav link
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 150;
      const sectionId = section.getAttribute('id');
      
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav__links .link a').forEach(link => {
          link.classList.remove('active');
          if(link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
  
  // Search icon click
  const searchIcon = document.querySelector('.search span');
  if (searchIcon) {
    searchIcon.addEventListener('click', function() {
      const searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.placeholder = 'Search destinations...';
      searchInput.className = 'search-input';
      
      const navBar = document.querySelector('.nav__bar');
      const existingInput = navBar.querySelector('.search-input');
      
      if (existingInput) {
        existingInput.remove();
      }
      
      navBar.appendChild(searchInput);
      searchInput.focus();
      
      searchInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
          const searchTerm = this.value.toLowerCase();
          scrollToTrips();
          setTimeout(() => {
            filterTrips(searchTerm);
            tripSearch.value = searchTerm;
          }, 500);
          this.remove();
        }
      });
      
      searchInput.addEventListener('blur', function() {
        setTimeout(() => {
          if (document.activeElement !== this) {
            this.remove();
          }
        }, 300);
      });
    });
  }
  
  // Button hover effects
  const allButtons = document.querySelectorAll('.btn, .discover__btn, .btn-book');
  allButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Contact card click effect
  const contactCards = document.querySelectorAll('.contact__card');
  contactCards.forEach(card => {
    card.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'translateY(-10px)';
      }, 150);
    });
  });
  
  // WhatsApp float hover
  const whatsappBtn = document.querySelector('.whatsapp__float');
  if (whatsappBtn) {
    whatsappBtn.setAttribute('title', 'Book a Trip on WhatsApp');
    
    whatsappBtn.addEventListener('mouseenter', function() {
      if (window.innerWidth > 768) {
        this.style.width = 'auto';
        this.style.padding = '0 2rem';
        this.style.borderRadius = '35px';
        const textSpan = this.querySelector('.whatsapp__text');
        if (textSpan) {
          textSpan.style.display = 'inline-block';
        }
      }
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
      if (window.innerWidth > 768) {
        this.style.width = '56px';
        this.style.padding = '0';
        this.style.borderRadius = '50%';
        const textSpan = this.querySelector('.whatsapp__text');
        if (textSpan) {
          textSpan.style.display = 'none';
        }
      }
    });
  }
  
  // Initial navbar style
  const nav = document.querySelector('nav');
  if (nav && window.scrollY > 50) {
    nav.style.background = 'rgba(0, 0, 0, 0.8)';
    nav.style.backdropFilter = 'blur(20px)';
  } else {
    nav.style.background = 'rgba(0, 0, 0, 0.3)';
    nav.style.backdropFilter = 'blur(10px)';
  }
});

// ===== HELPER FUNCTIONS =====
function formatDate(dateString) {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    const month = start.toLocaleDateString('en-US', { month: 'short' });
    const year = start.getFullYear();
    return `${start.getDate()} - ${end.getDate()} ${month} ${year}`;
  }
  
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
}

// ===== RENDER TRIPS =====
function renderTrips(trips) {
  const tripsGrid = document.getElementById('tripsGrid');
  if (!tripsGrid) return;
  
  if (trips.length === 0) {
    tripsGrid.innerHTML = `
      <div class="no-trips">
        <i class="ri-map-pin-line"></i>
        <h3>No trips found</h3>
        <p>Try adjusting your search. Check back soon for more trips!</p>
      </div>
    `;
    return;
  }
  
  tripsGrid.innerHTML = trips.map(trip => `
    <div class="trip-card ${trip.special ? 'special' : ''}" data-category="${trip.category}">
      ${trip.special ? '<div class="special-badge">SPECIAL</div>' : ''}
      <div class="trip-header">
        <h3>${trip.title}</h3>
        <div class="trip-date">${formatDateRange(trip.date, trip.endDate)}</div>
      </div>
      <div class="trip-body">
        <div class="trip-details">
          ${trip.details.map(detail => `
            <div class="trip-detail">
              <i class="${detail.icon}"></i>
              <span>${detail.label}</span>
            </div>
          `).join('')}
        </div>
        
        <div class="trip-price">
          <div class="price-amount">R ${trip.price.toLocaleString('en-ZA')}</div>
          <div class="price-note">Per person</div>
        </div>
        
        <p class="trip-description">${trip.description.substring(0, 100)}...</p>
        
        <div class="trip-actions">
          <button class="btn btn-book" onclick="openBookingModal(${trip.id})">
            <i class="ri-calendar-event-line"></i> Book Now
          </button>
          <button class="btn btn-secondary" onclick="enquireTrip('${trip.title}')">
            <i class="ri-question-line"></i> Enquire
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== SORT TRIPS =====
function sortTrips(sortBy) {
  let sortedTrips = [...upcomingTrips];
  
  switch(sortBy) {
    case 'date-asc':
      sortedTrips.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case 'date-desc':
      sortedTrips.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case 'price-asc':
      sortedTrips.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sortedTrips.sort((a, b) => b.price - a.price);
      break;
    case 'duration':
      sortedTrips.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
      break;
  }
  
  renderTrips(sortedTrips);
}

// ===== FILTER TRIPS =====
function filterTrips(searchTerm) {
  if (!searchTerm.trim()) {
    renderTrips(upcomingTrips);
    return;
  }
  
  const filtered = upcomingTrips.filter(trip => 
    trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    trip.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  renderTrips(filtered);
}

// ===== ENQUIRE =====
function enquireTrip(tripTitle) {
  const message = `Hello GlobeTrek Adventures! I have a question about the "${tripTitle}" trip. Could you please provide more information?`;
  openWhatsApp(message);
}

// ===== MOBILE MENU =====
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'nav__overlay';
  document.body.appendChild(overlay);
  
  if (toggleBtn && navMenu) {
    // Toggle menu
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      
      // Change icon
      const icon = this.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'ri-close-line';
        document.body.style.overflow = 'hidden';
      } else {
        icon.className = 'ri-menu-line';
        document.body.style.overflow = '';
      }
    });
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
      navMenu.classList.remove('active');
      overlay.classList.remove('active');
      const icon = toggleBtn.querySelector('i');
      icon.className = 'ri-menu-line';
      document.body.style.overflow = '';
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.link a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        icon.className = 'ri-menu-line';
        document.body.style.overflow = '';
      });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        icon.className = 'ri-menu-line';
        document.body.style.overflow = '';
      }
    });
    
    // Handle resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        icon.className = 'ri-menu-line';
        document.body.style.overflow = '';
      }
    });
  }
}

// ===== FILTER TOGGLE =====
window.toggleFilterPanel = function() {
  const filterPanel = document.querySelector('.trips__controls');
  const toggleBtn = document.querySelector('.filter-toggle-btn');
  
  if (window.innerWidth <= 768) {
    filterPanel.classList.toggle('active');
    toggleBtn.classList.toggle('active');
    
    if (filterPanel.classList.contains('active')) {
      toggleBtn.innerHTML = '<i class="ri-filter-3-line"></i> Hide Filters <i class="ri-arrow-up-s-line"></i>';
    } else {
      toggleBtn.innerHTML = '<i class="ri-filter-3-line"></i> Show Filters <i class="ri-arrow-down-s-line"></i>';
    }
  }
};

// ===== RESIZE HANDLER =====
window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    const filterPanel = document.querySelector('.trips__controls');
    const toggleBtn = document.querySelector('.filter-toggle-btn');
    
    if (filterPanel) {
      filterPanel.classList.remove('active');
    }
    if (toggleBtn) {
      toggleBtn.classList.remove('active');
      toggleBtn.innerHTML = '<i class="ri-filter-3-line"></i> Show Filters <i class="ri-arrow-down-s-line"></i>';
    }
    
    // Reset WhatsApp button
    const whatsappBtn = document.querySelector('.whatsapp__float');
    if (whatsappBtn) {
      whatsappBtn.style.width = '56px';
      whatsappBtn.style.padding = '0';
      whatsappBtn.style.borderRadius = '50%';
      const textSpan = whatsappBtn.querySelector('.whatsapp__text');
      if (textSpan) {
        textSpan.style.display = 'none';
      }
    }
  }
});

// ===== ANIMATED PARTICLES =====
(function createParticles() {
  const container = document.querySelector('body');
  const particleCount = 15;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 150 + 50;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 30 + 20;
    const delay = Math.random() * 10;
    
    particle.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(59, 130, 246, 0.05));
      border-radius: 50%;
      filter: blur(${Math.random() * 30 + 20}px);
      left: ${x}%;
      top: ${y}%;
      z-index: -1;
      pointer-events: none;
      animation: floatParticle ${duration}s ease-in-out ${delay}s infinite;
    `;
    
    container.appendChild(particle);
  }
  
  const style = document.createElement('style');
  style.textContent = `
    @keyframes floatParticle {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(20px, -20px) rotate(5deg); }
      50% { transform: translate(0, -40px) rotate(10deg); }
      75% { transform: translate(-20px, -20px) rotate(5deg); }
    }
  `;
  document.head.appendChild(style);
})();
