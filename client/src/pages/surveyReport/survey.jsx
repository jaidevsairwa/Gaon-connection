import React, { useEffect, useState } from "react";
import axios from "axios";
import './survey.css'


const surveyReport = () => {
    const [report, setReport] = useState([]);

    const head = {
        headers: {
            Authorization:
                "Bearer " + import.meta.env.VITE_TOKEN,
        }
    }
    const base = "http://45.126.126.209:1337"

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}api/e-libraries?populate=*`, head)
            .then(res => {
                console.log(res.data.data[1].attributes.thumbnail.data[0].attributes.url);
                setReport(res.data.data)
            });
    }, [])

    const downloadPDF = (name,data) => {
        axios.get(`${base}${data}`, {
            method: 'GET',
            responseType: 'blob',
        })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute("target", "_blank");
                link.setAttribute('view', name);
                document.body.appendChild(link);
                link.click();
            })
            .catch(er => {
                console.log(er);
            })
    }

    return (
        <div className="survey_report">
            <h1>Survey Reports</h1>
        <div className="pdf_container">
            {
                report.map(repo => {
                    const {id, attributes} = repo;
                    return (
                        <div className="pdf_images" key={id} >
                            <img src={`${base}${attributes.thumbnail.data[0].attributes.url}`} onClick={() => downloadPDF(attributes.Docs.data[0].attributes.name, attributes.Docs.data[0].attributes.url)} alt="" />    
                        </div>
                    )
                })
            }
            
        </div>
        </div>
    );
}
export default surveyReport;
