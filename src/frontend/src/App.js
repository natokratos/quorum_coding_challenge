import React, { useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

function App() {
    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post("http://0.0.0.0:8000/api/upload-csv/", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        // Assumes CSV columns 'label' and 'value'
        setLabels(res.data.rows.map(row => row.label));
        setValues(res.data.rows.map(row => parseFloat(row.value)));
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