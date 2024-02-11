import './App.css';
import './index.css';
import response from './api/lastfm.js';
import spotimg from './pics/spoti.png';

function App() {
  return (
    <div className="bg-indigo-900 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl bg-indigo-200 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Phoenix</h1>
        <p className="text-gray-900 mb-6 text-center">Web Developer and Producer</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">Hakkımda</h2>
            <p className="text-gray-900 text-center">Canım sıkıldıkça kod yazıyorum. Yani yarı zamanlı bir developerım. Çoğunlukla okul ve müzikle uğraşıyorum. Bana caganaydin.com.tr adresinden ulaşabilirsiniz.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">Discord</h2>
            <div className="flex justify-center">
            <img alt="discord" src="https://lanyard.cnrad.dev/api/785054250677960737?bg=301934"></img>
            </div>
          </div>
          <div>
          <div className="max-w-4xl p-8 rounded-lg bg-stone-950 shadow-md">
            <div className="spotify">
            <h2 className="text-xl font-semibold mb-2 text-center text-white">Spotify</h2>
            <div className="flex justify-center">
            <img className="rounded-lg -inset-1" src={response.recenttracks.track[0].image[3]['#text']}></img>  
            </div>
            </div>
            <div className="text-center text-1db954-600 text-gray-100">
            <p>{response.recenttracks.track[0].artist['#text']}</p>
            <p>{response.recenttracks.track[0].name}</p>
              </div>
            <div className="flex justify-center">
              <img className="rounded-lg" src={spotimg}></img>
            </div>
          </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center">GitHub</h2>
            <div className="flex justify-center">
            <img src="https://camo.githubusercontent.com/6d2f58d26e77f0fb3ca5c8f0a2b7997c7a15fa79654f0e743dceb6fd51a34d14/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d70686f656e69782d726174266c61796f75743d636f6d70616374"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
