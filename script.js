document.addEventListener('DOMContentLoaded', function() {
  let lastScroll = 0;

  // Scroll handling
  window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      const header = document.querySelector('.header');
      
      if (currentScroll > lastScroll && currentScroll > 100) {
          // Scrolling down
          header.classList.add('nav-hidden');
      } else {
          // Scrolling up
          header.classList.remove('nav-hidden');
      }
      
      lastScroll = currentScroll;
  });
  
  // Force scroll to top on page load (keep only one instance)
  window.scrollTo(0, 0);
  
  // Prevent automatic scroll to hash on page load (keep only one instance)
  if (window.location.hash) {
      setTimeout(function() {
          window.scrollTo(0, 0);
      }, 1);
  }

  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Initialize icons
  lucide.createIcons();

  // Initialize arrow functionality
  const navList = document.querySelector('.main-nav ul');
  const leftArrow = document.querySelector('.nav-arrow.left');
  const rightArrow = document.querySelector('.nav-arrow.right');

  // Add initial animation class
  navList.classList.add('scroll-hint');

  function scrollNav(direction) {
      const scrollAmount = 200;
      
      // Remove the initial animation class if it exists
      navList.classList.remove('scroll-hint');
      
      if (direction === 'left') {
          navList.scrollBy({
              left: -scrollAmount,
              behavior: 'smooth'
          });
      } else {
          navList.scrollBy({
              left: scrollAmount,
              behavior: 'smooth'
          });
      }
      
      // Update arrow visibility after scrolling
      setTimeout(updateArrowVisibility, 100);
  }

  function updateArrowVisibility() {
      // Show/hide left arrow
      const isAtStart = navList.scrollLeft <= 0;
      leftArrow.style.display = isAtStart ? 'none' : 'flex';

      // Show/hide right arrow
      const isAtEnd = navList.scrollLeft >= navList.scrollWidth - navList.clientWidth - 5;
      rightArrow.style.display = isAtEnd ? 'none' : 'flex';
  }

  // Add click event listeners to arrows
  leftArrow.addEventListener('click', () => scrollNav('left'));
  rightArrow.addEventListener('click', () => scrollNav('right'));

  // Add scroll event listener
  navList.addEventListener('scroll', updateArrowVisibility);

  // Initial visibility check
  updateArrowVisibility();
});

// Function to handle registration
function registerNow() {
    window.location.href = 'https://sites.google.com/view/your-registration-page';
}

let lastScroll = 0;


function scrollNav(direction) {
    const navList = document.querySelector('.main-nav ul');
    const scrollAmount = 100; // Adjust this value as needed
    
    if (direction === 'left') {
        navList.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        navList.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    // Update arrow visibility
    updateArrowVisibility();
}

function updateArrowVisibility() {
    const navList = document.querySelector('.main-nav ul');
    const leftArrow = document.querySelector('.nav-arrow.left');
    const rightArrow = document.querySelector('.nav-arrow.right');

    // Show/hide left arrow
    if (navList.scrollLeft <= 0) {
        leftArrow.classList.add('hidden');
    } else {
        leftArrow.classList.remove('hidden');
    }

    // Show/hide right arrow
    if (navList.scrollLeft >= navList.scrollWidth - navList.clientWidth) {
        rightArrow.classList.add('hidden');
    } else {
        rightArrow.classList.remove('hidden');
    }
}
let isAmharic = false;

function toggleLanguage() {
    const content = {
        en: {
            navItems: {
                features: "Features",
                pdf: "PDF",
                testimonials: "Testimonials",
                images: "Images",
                aboutus: "About Us",
            },
            contactButton: "Contact Us",
            hero: {
                title: "Elevate Your Reading Experience",
                subtitle: "Join a community of passionate readers, unlock exclusive literary events, and expand your horizons with the Book Lovers Association.",
                button: "Become a Member"
            },
            features: {
                title: "Why Join Our Association?",
                cards: [
                    {
                        title: "Curated Reading Lists",
                        desc: "Discover handpicked selections tailored to your literary tastes."
                    },
                    {
                        title: "Exclusive Events",
                        desc: "Engage in thought-provoking discussions with authors and fellow readers."
                    },
                    {
                        title: "Priority Access",
                        desc: "Be the first to know about new releases and literary events."
                    }
                ]
            },
            testimonials: {
                title: "What Our Members Say",
                cards: [
                    {
                        quote: "The Book Lovers Association has transformed our local reading group into a vibrant community of passionate literature enthusiasts.",
                        author: "Sarah J.",
                        role: "Book Club Leader"
                    },
                    {
                        quote: "As an educator, I'm impressed by the depth and diversity of discussions fostered by this association.",
                        author: "Dr. Michael R.",
                        role: "Literature Professor"
                    },
                    {
                        quote: "The networking opportunities and writing workshops have been invaluable in my journey as a writer.",
                        author: "Emily T.",
                        role: "Aspiring Author"
                    }
                ]
            },
            about: {
                title: "About Us",
                desc1: "The Book Lovers Association is dedicated to fostering a community of passionate readers. We aim to connect literature enthusiasts through curated reading lists, exclusive events, and engaging discussions.",
                desc2: "Our mission is to promote literacy and a love for literature in our community. We believe that reading can transform lives, and we strive to create an inclusive environment where everyone can share their thoughts and experiences related to books."
            },
            join: {
                title: "Ready to Join Our Literary Community?",
                subtitle: "Become a member today and immerse yourself in a world of literary exploration, engaging discussions, and exclusive events.",
                button: "Register Now"
            },
            contact: {
                title: "Contact Us",
                subtitle: "For inquiries, reach us at:",
                phone: "Phone",
                telegram: "Telegram",
                channel: "Telegram Channel",
                chat: "Chat with us",
                join: "Join our Telegram Channel"
            }
        },
        am: {
            navItems: {
                features: "ባህሪያት",
                pdf: "ፒዲኤፍ",
                testimonials: "ምስክርነቶች",
                images: "ምስሎች",
                aboutus: "ስለ እኛ"
            },
            contactButton: "አግኙን",
            hero: {
                title: "የንባብ ልምድዎን ያሳድጉ",
                subtitle: "በመጽሐፍ ፍቅር ማህበር ውስጥ ከሌሎች አንባቢዎች ጋር ይገናኙ፣ ልዩ የሆኑ የስነ-ጽሑፍ ዝግጅቶችን ያግኙ እና እውቀትዎን ያስፋፉ።",
                button: "አባል ይሁኑ"
            },
            features: {
                title: "ለምን አባል መሆን አለብዎት?",
                cards: [
                    {
                        title: "የተዘጋጁ የንባብ ዝርዝሮች",
                        desc: "ለእርስዎ የንባብ ፍላጎት የተዘጋጁ መጽሐፍትን ያግኙ።"
                    },
                    {
                        title: "ልዩ ዝግጅቶች",
                        desc: "ከደራሲያን እና ከሌሎች አንባቢዎች ጋር አስተሳሰብን በሚቀሰቅሱ ውይይቶች ይሳተፉ።"
                    },
                    {
                        title: "ቅድሚያ ተደራሽነት",
                        desc: "ስለ አዳዲስ መጽሐፍት እና ዝግጅቶች መጀመሪያ ያውቁ።"
                    }
                ]
            },
            testimonials: {
                title: "የአባላቶቻችን አስተያየት",
                cards: [
                    {
                        quote: "የመጽሐፍ ፍቅር ማህበር የአካባቢያችንን የንባብ ቡድን ወደ ጠንካራ የሥነ ጽሑፍ ማህበረሰብ ለውጦታል።",
                        author: "ሳራ ጄ.",
                        role: "የንባብ ክበብ መሪ"
                    },
                    {
                        quote: "እንደ አስተማሪ፣ ይህ ማህበር የሚያዳብረው የውይይቶች ጥልቀት እና ብዝሃነት አስደንቆኛል።",
                        author: "ዶ/ር ሚካኤል ር.",
                        role: "የሥነ ጽሑፍ ፕሮፌሰር"
                    },
                    {
                        quote: "የአውታረ መረብ እድሎች እና የጽሑፍ ሥልጠናዎች በጸሐፊነት ጉዞዬ ውስጥ ከፍተኛ ጠቀሜታ ነበራቸው።",
                        author: "ኤሚሊ ቲ.",
                        role: "የወደፊት ጸሐፊ"
                    }
                ]
            },
            about: {
                title: "ስለ እኛ",
                desc1: "የመጽሐፍ ፍቅር ማህበር ለንባብ ፍቅር ያላቸውን ሰዎች ማህበረሰብ ለመፍጠር የተቀደሰ ነው። በተዘጋጁ የንባብ ዝርዝሮች፣ በልዩ ዝግጅቶች እና በሚያሳትፉ ውይይቶች አማካኝነት የሥነ ጽሑፍ ወዳዶችን ለማገናኘት እንሰራለን።",
                desc2: "ዓላማችን በማህበረሰባችን ውስጥ ንባብን እና የሥነ ጽሑፍ ፍቅርን ማስፋፋት ነው። ንባብ ሕይትን መመለወጥ እንደሚችል እናምናለን፣ እና ሁሉም ሰው ስለ መጽሐፍት ያላቸውን ሃሳቦች እና ተሞክሮዎች ሊያካፍሉ የሚችሉበትን አካታች አካባቢ ለመፍጠር እንጥራለን።"
            },
            join: {
                title: "ወደ የስነ-ጽሑፍ ማህበረሰባችን ለመቀላቀል ዝግጁ ነዎት?",
                subtitle: "ዛሬውኑ አባል ይሁኑ እና በስነ-ጽሑፍ አድናቆት፣ አሳታፊ ውይይቶች እና ልዩ ዝግጅቶች ዓለም ውስጥ ይዋኙ።",
                button: "አሁኑኑ ይመዝገቡ"
            },
            contact: {
                title: "አግኙን",
                subtitle: "ለጥያቄዎች በሚከተሉት አድራሻዎች ያግኙን:",
                phone: "ስልክ",
                telegram: "ቴሌግራም",
                channel: "የቴሌግራም ቻናል",
                chat: "መልእክት ይላኩ",
                join: "ቻናላችንን ይቀላቀሉ"
            }
        }
    };

    isAmharic = !isAmharic;
    const lang = isAmharic ? 'am' : 'en';
    
    // Update button text
    const langButton = document.querySelector('.logoa');
    langButton.textContent = isAmharic ? 'Switch to English' : 'ወደ አማርኛ';
    
    // Update navigation
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks[0].textContent = content[lang].navItems.features;
    navLinks[1].textContent = content[lang].navItems.pdf;
    navLinks[2].textContent = content[lang].navItems.testimonials;
    navLinks[3].textContent = content[lang].navItems.aboutUs;
    navLinks[4].textContent = content[lang].navItems.images;

    // Update contact button
    const contactButton = document.querySelector('.logob');
    contactButton.textContent = content[lang].contactButton;

    // Rest of your translation updates...
    // Update hero section
    document.querySelector('.hero h1').textContent = content[lang].hero.title;
    document.querySelector('.hero p').textContent = content[lang].hero.subtitle;
    document.querySelector('.hero .cta-button').textContent = content[lang].hero.button;

    // Update features section
    document.querySelector('#features h2').textContent = content[lang].features.title;
    const featureCards = document.querySelectorAll('.feature-card');
    content[lang].features.cards.forEach((card, index) => {
        featureCards[index].querySelector('h3').textContent = card.title;
        featureCards[index].querySelector('p').textContent = card.desc;
    });

    // Update testimonials section
    document.querySelector('#testimonials h2').textContent = content[lang].testimonials.title;
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    content[lang].testimonials.cards.forEach((card, index) => {
        testimonialCards[index].querySelector('p').textContent = card.quote;
        testimonialCards[index].querySelector('strong').textContent = card.author;
        testimonialCards[index].querySelector('span').textContent = card.role;
    });

    // Update about section
    document.querySelector('#about-us-section h2').textContent = content[lang].about.title;
    const aboutParagraphs = document.querySelectorAll('#about-us-section p');
    aboutParagraphs[0].textContent = content[lang].about.desc1;
    aboutParagraphs[1].textContent = content[lang].about.desc2;

    // Update join section
    document.querySelector('#join h2').textContent = content[lang].join.title;
    document.querySelector('#join p').textContent = content[lang].join.subtitle;
    document.querySelector('#join .cta-button').textContent = content[lang].join.button;

    // Update contact section
    document.querySelector('.contact-box h3').textContent = content[lang].contact.title;
    document.querySelector('.contact-box > p').textContent = content[lang].contact.subtitle;
    const contactStrongs = document.querySelectorAll('.contact-box strong');
    contactStrongs[0].textContent = content[lang].contact.phone + ':';
    contactStrongs[1].textContent = content[lang].contact.telegram + ':';
    contactStrongs[2].textContent = content[lang].contact.channel + ':';
}

// Initialize icons when the page loads
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});
