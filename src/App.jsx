import jbl from "./assets/jbl.jpg";

function App() {
  return (
    <div className="container">
      <h1>Hallo Semua</h1>
      <p>Ini adalah contoh mudah dan simpel tentang react.</p>
      <div className="image-section">
        <img src={jbl} alt="gambar" />
      </div>
    </div>
  );
}

export default App
