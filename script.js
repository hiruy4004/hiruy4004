document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();


    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize icons (replace with your preferred icon library initialization)
    initializeIcons();
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