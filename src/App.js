 import './App.css';
import PieChart from "./components/charts/pieChart/PieChart";
import LineChart from "./components/charts/lineChart/LineChart";
import DoughnutChart from "./components/charts/doughnutChart/DoughnutChart";
import BarChart from "./components/charts/barChart/BarChart";
 import DataJson from '/../components/testJson.json'

function App() {


    return (
        <div className="App">
            <PieChart/>
            <LineChart data={DataJson}/>
            <DoughnutChart/>
            <BarChart/>
        </div>
    );
}

export default App;
