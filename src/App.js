import './App.css';

let PAGES = [
  ["Zahlensysteme", "https://johanneshool.github.io/zahlensysteme/"],
  ["Zeichenkodierung", "https://johanneshool.github.io/zeichenKonverter/"],
  ["Pixelbilder", "https://johanneshool.github.io/pixelbilder/"]
]

function App() {

  function createList(dict) {
    let topics = [];

    for (let i = 0; i < PAGES.length; i++) {
      topics.push(
        <div className="entry">
          <a href={PAGES[i][1]} class="btn btn-secondary btn-lg btn-block" role="button" aria-disabled="true">{PAGES[i][0]}</a>
        </div>
      );
    }



    return (
      <div>
        {topics}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 center-bar">
        <div className="text-right">Contact: <a href="mailto:hooljohannes@gmail.com">Johannes Hool</a>
          </div>
          <div className="text-center title-container rounded">
            <h1>Informatik Interaktiv</h1>
          </div>
          {createList(PAGES)}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}

export default App;
