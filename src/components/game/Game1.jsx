import React, { useState } from "react";
import { toast } from "react-toastify";
import '@fortawesome/fontawesome-free/css/all.css';
import "./Game.css";

function Game1() {
    const [isStart, setStart] = useState(false);
    const [value, setValue] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [input, setInput] = useState("");
    const [isbtn, setBtn] = useState();
    const [isVisible, setVisible] = useState(false)

    const notify = () => {
        if (!isStart) {
            setStart(!isStart);
            setValue(randomNumberInRange);
        }else{
            if (input === "") {
                toast.error("Input Tidak Boleh Kosong ", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
            } else if (value == input) {
                setAttempts(attempts + 1);
                toast.success("Anda Berhasil Menebak Angka", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
                setAttempts(5);
            } else if (value > input) {
                setAttempts(attempts + 1);
                toast.error("Nilai Terlalu Kecil", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
            } else if (value < input) {
                setAttempts(attempts + 1);
                toast.error("Nilai Terlalu Besar", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
            }
            handleAttemp();
        }
    }

    const handleText = (event) => {
        setInput(event.target.value);
    }

    const handleReset = () => {
        setValue(randomNumberInRange());
        setAttempts(0);
        setInput("");
        setBtn(!isbtn);
        const inputElement = document.getElementById("number");
        inputElement.disabled = false;
        inputElement.value = "";
    };
    
    const handleAttemp = () => {
        if (attempts == 5) {
            if (value === parseInt(input)) {
                setBtn(!isbtn);
                const inputElement = document.getElementById("number");
                inputElement.disabled = true;
            } else {
                setBtn(!isbtn);
                const inputElement = document.getElementById("number");
                inputElement.disabled = true;
                toast.error("Game Over", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                });
                setAttempts(0);
            }
        }
    };

    const randomNumberInRange = () => { 
        var number = Math.floor(Math.random() * 10) + 21;
        return number;
    };

    const onClickEyes = () =>{
        if(isVisible == 0){
            setVisible(true);
        }else{
            setVisible(false);
        }  
    }

    return (
        <div className="p-5">
            <h1 className="pt-3 pb-5">Number Guessing Game</h1>
            <div className="px-5 text-start">
                <div className="text-start">
                    <p>1. Each Player gets 5 chances to guess</p>
                    <p>2. Number range is between 21 - 30</p>
                    <p>3. You can reset the number after 5 wrong answers</p>
                </div>
                <div className={isStart ? "py-3 col-md-6" : "visually-hidden"}>
                    <div className="text-start">
                        <label htmlFor="number" className="form-label">Input Angka</label>
                        <div className="d-flex">
                            <input className="form-control1" type="number" name="number" id="number" placeholder="Input Angka 21 - 30" onChange={handleText} />
                            <button type="button" class="btn btn-primary" onClick={onClickEyes}>    
                                <i className={isVisible ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                            </button>
                        </div>
                    </div>
                </div>
                <p className={isStart ? "text-start pt-2 pb-1" : "text-start pt-3 pb-3"}>
                    {isVisible ? `Nilai Aslinya adalah ${value}` : ""}
                </p>
                <p className={isStart ? "py-2" : "visually-hidden"}>Jumlah Tebakan {attempts}</p>
                <div className={isbtn ? "visually-hidden" : "d-flex justify-item-start"}>
                    <button className={isStart ? "btn btn-primary" : "btn btn-success"} onClick={notify}>
                        {isStart ? "Tebak Angka" : "Mulai Permainan"}
                    </button>
                </div>
                <div className={isbtn ? "d-flex justify-item-start" : "visually-hidden"}>
                    <button className="btn btn-danger" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Game1;