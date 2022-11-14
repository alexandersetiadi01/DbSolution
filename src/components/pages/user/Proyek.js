import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import projectBg from "../../../assets/project.jpg";

import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { seeAllProyek, setSelectedProyek } from "../../API/repository";

// const ProyekList = ["A", "B", "C"];

export default function Proyek() {
    const navigate = useNavigate();

    const [proyek, setProyek] = useState([]);
    useEffect(() => {
        async function getProyekAPI() {
        const datas = await seeAllProyek();
        let rowsData = [];
        for (const data of datas) {
            const newData = {
            namaProyek: data.namaProyek,
            };
            rowsData.push(newData);
        }
        setProyek(rowsData);
        }
        getProyekAPI();
    }, []);

    const [input, setInput] = useState("");
    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const selectProyek = (event) => {
        event.preventDefault();
        setSelectedProyek(input.namaProyek);
        navigate("/dashboard");
    };

    return (
        <div
        className="proyek-container"
        style={{
            height: "100vh",
            overflow: "hidden",
            backgroundImage: `url(${projectBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "none",
            backgroundPosition: "center center",
        }}
        >
        <div
            className="proyek-wrapper"
            style={{
            marginTop: "15%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            }}
        >
            <div
            className="proyek-container"
            style={{
                border: "1px solid black",
                borderRadius: "5px",
                padding: "10px",
                width: "50%",
                backgroundColor: "rgba(255,255,255, 0.7)",
            }}
            >
            <div className="proyek-title">
                <h3
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                }}
                >
                Pilih Proyek
                </h3>
            </div>
            <form onSubmit={selectProyek}>
                <div
                className="proyek-selector"
                style={{
                    marginBottom: "10px",
                }}
                >
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Proyek</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="namaProyek" 
                    value={input.namaProyek} 
                    onChange={handleInputChange}
                    label="Proyek"
                    // onChange={handleChange}
                    >
                    {proyek.map((item) => (
                        <MenuItem value={item.namaProyek}>{item.namaProyek}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
                </div>
                <div className="proyek-submit">
                
                    <Button type="submit" fullWidth variant="contained">
                    Select
                    </Button>
                
                </div>
            </form>
            </div>
        </div>
        </div>
    );
}
