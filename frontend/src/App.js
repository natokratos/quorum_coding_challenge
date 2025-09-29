import React, { useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';

function App() {
    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);

    Chart.register(...registerables);

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post("http://172.32.0.4:8080/api/upload-csv/", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        console.log("ROWS...: " + res.data.rows);
        const jsonString = JSON.stringify(res.data);
        console.log("HEADER.: " + jsonString);
        // Assumes CSV columns 'label' and 'value'
        setLabels(res.data.rows.map(row => row[0]));
        setValues(res.data.rows.map(row => parseFloat(row[1])));
        console.log("LABELS.: " + labels);
        console.log("VALUES.: " + values);
    };

    return (
        <div>
            <h2>CSV to Graph</h2>
            <input type="file" accept=".csv" onChange={handleUpload} />
            {labels.length > 0 && (
                <Bar
                    data={{
                        labels: labels,
                        datasets: [{
                            label: "CSV Data",
                            data: values,
                            backgroundColor: "rgba(75,192,192,0.6)",
                        }]
                    }}
                />
            )}
        </div>
    );
}

export default App;