import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Technologies from "./components/Technologies";
import ProfExperience from "./components/ProfExperience";
import Education from "./components/Education"

library.add(fab, faEnvelope);

function App() {
  return (
    <>
      <Header />
      <div id="main">
        <Summary />
        <Technologies />
        <ProfExperience />
        <Education />
      </div>
    </>
  );
}

export default App;
