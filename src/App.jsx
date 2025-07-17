import './App.css'

const chickens = [
  {
    name: 'Henrietta',
    img: '/chickens/henrietta.jpg',
    bio: 'Henrietta is the queen of the coop! She loves sunflower seeds and strutting her stuff for the flock.'
  },
  {
    name: 'Cluckles',
    img: '/chickens/cluckles.jpg',
    bio: 'Cluckles is a curious explorer, always the first to greet you at the gate and the last to leave the snack pile.'
  },
  {
    name: 'Pecky Blinders',
    img: '/chickens/pecky.jpg',
    bio: 'Don’t let the name fool you—Pecky is a gentle soul who enjoys dust baths and cloud watching.'
  }
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Ol' Flat Rock Farms!</h1>
        <p>Meet the feathered celebrities of our backyard at Ol' Flat Rock Farms. Each chicken has a story to tell and a personality to match!</p>
      </header>
      <main>
        <h2>Meet the Flock</h2>
        <div className="gallery">
          {chickens.map((chicken) => (
            <div className="chicken-card" key={chicken.name}>
              <img src={chicken.img} alt={chicken.name} className="chicken-img" />
              <h3>{chicken.name}</h3>
              <p>{chicken.bio}</p>
            </div>
          ))}
        </div>
      </main>
      <section className="livestream-section">
        <h2>🐥 Live from the Coop!</h2>
        <p>Catch the latest antics of our flock in real time. Grab some popcorn and enjoy the show!</p>
        <div className="livestream-embed">
          {/* Replace the src below with your actual live stream URL */}
          <iframe
            src="https://www.youtube.com/embed/c2SXDkaNOU4?si=fH2syB1K8fRLYpVQ&autoplay=1&mute=1"
            title="Chicken Coop Live Stream"
            width="100%"
            height="360"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>
      <footer>
        <p>Made with 🐔 and lots of love at Ol' Flat Rock Farms!</p>
      </footer>
    </div>
  );
}

export default App
