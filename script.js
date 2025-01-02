document.addEventListener('DOMContentLoaded', function() {
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

// Function to initialize icons (replace with your preferred icon library)
function initializeIcons() {
    // This is a placeholder function. Replace with actual icon library initialization.
    console.log('Icons initialized');
}
import client from '../contentful'; // Import your Contentful client
import Image from 'next/image'; // Import Next.js Image for optimization

export async function getStaticProps() {
  // Fetch entries from Contentful
  const entries = await client.getEntries({ content_type: 'yourContentType' });

  return {
    props: {
      entries: entries.items, // Pass the data as props to the component
    },
  };
}

export default function Home({ entries }) {
  return (
    <div>
      <h1>Contentful Image Gallery</h1>
      <div className="gallery">
        {entries.map((entry) => (
          <div key={entry.sys.id} className="card">
            <h2>{entry.fields.title}</h2>
            {entry.fields.image && (
              <Image
                src={`https://app.contentful.com/spaces/keuw4d3nsxwl/assets/6KDYM35jSRZjiwgxMZ6ehf?focusedField=title`} // Image URL from Contentful
                alt={entry.fields.title}
                width={600} // Adjust width
                height={400} // Adjust height
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function changeLanguage(lang) {
  var googleTranslateElement = new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'am,en',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');

  googleTranslateElement.getInstance().setEnabled(true);
  googleTranslateElement.getInstance().setLanguage(lang);
}

let lastScroll = 0;

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

// Add scroll event listener to update arrows
document.querySelector('.main-nav ul').addEventListener('scroll', updateArrowVisibility);

// Initial arrow visibility check
document.addEventListener('DOMContentLoaded', updateArrowVisibility);