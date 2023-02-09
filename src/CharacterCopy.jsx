import React, { useState } from "react";
import Buttun from "./Buttun";
import { USERS } from "./models/data";
import { styled } from "@mui/material/styles";
import { GiPaintBrush } from "react-icons/gi";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

//

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<GiPaintBrush sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

//

function CharacterCopy() {
    //
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    //
    // *BARBA con esto puedo puedo poner o quitar la barba
    let barba = "beardProbability=100";
    const [Characterdata, setCharacterdata] = useState(false);
    function actualizarSesion() {
        setCharacterdata(Characterdata === false);
    }
    if (Characterdata === false) {
        barba = "beardProbability=0";
    }
    // *BARBA con esto puedo puedo poner o quitar la barba
    // *Pecas con esto puedo puedo poner o quitar la Pecas
    let pecas = "frecklesProbability=100";
    const [PecasData, setPecasData] = useState(true);
    function actualizarPecasData() {
        setPecasData(PecasData === false);
    }
    if (PecasData === false) {
        pecas = "frecklesProbability=0";
    }
    // *Pecas con esto puedo puedo poner o quitar la Pecas
    const [Ojosdata, setOjosdata] = useState("");
    function actualizarOjos1() {
        setOjosdata("eyes=variant01");
    }
    function actualizarOjos2() {
        setOjosdata("eyes=variant02");
    }
    function actualizarOjos3() {
        setOjosdata("eyes=variant03");
    }
    function actualizarOjos4() {
        setOjosdata("eyes=variant04");
    }
    function actualizarOjos5() {
        setOjosdata("eyes=variant05");
    }
    function actualizarOjos6() {
        setOjosdata("eyes=variant06");
    }
    function actualizarOjos7() {
        setOjosdata("eyes=variant07");
    }
    function actualizarOjos8() {
        setOjosdata("eyes=variant08");
    }
    function actualizarOjos9() {
        setOjosdata("eyes=variant09");
    }
    function actualizarOjos10() {
        setOjosdata("eyes=variant10");
    }
    function actualizarOjos11() {
        setOjosdata("eyes=variant11");
    }
    function actualizarOjos12() {
        setOjosdata("eyes=variant12");
    }
    function actualizarOjos13() {
        setOjosdata("eyes=variant13");
    }
    function actualizarOjos14() {
        setOjosdata("eyes=variant14");
    }
    function actualizarOjos15() {
        setOjosdata("eyes=variant15");
    }
    function actualizarOjos16() {
        setOjosdata("eyes=variant16");
    }
    function actualizarOjos17() {
        setOjosdata("eyes=variant17");
    }
    function actualizarOjos18() {
        setOjosdata("eyes=variant18");
    }
    function actualizarOjos19() {
        setOjosdata("eyes=variant19");
    }
    function actualizarOjos20() {
        setOjosdata("eyes=variant20");
    }
    function actualizarOjos21() {
        setOjosdata("eyes=variant21");
    }
    function actualizarOjos22() {
        setOjosdata("eyes=variant22");
    }
    function actualizarOjos23() {
        setOjosdata("eyes=variant23");
    }
    function actualizarOjos24() {
        setOjosdata("eyes=variant24");
    }
    //
    // *Pecas con esto puedo puedo poner o quitar la Pecas
    const [CabezaData, setCabezaData] = useState("");
    function actualizarCabezaData1() {
        setCabezaData("head=variant01");
    }
    function actualizarCabezaData2() {
        setCabezaData("head=variant02");
    }
    function actualizarCabezaData3() {
        setCabezaData("head=variant03");
    }
    function actualizarCabezaData4() {
        setCabezaData("head=variant04");
    }

    return (
        <div className="">
            <div className="bg-purple-400 h-screen flex text-center items-center justify-between center flex-row">
                <div className="bg-blue-900 flex text-center items-center justify-center center flex-col ml-28 rounded-2xl p-4 shadow-sm shadow-black">
                    <div className="text-sky-200 text-4xl font-bold flex flex-row">
                        <h1 className="underline underline-offset-4">
                            ¡Hola! {USERS.PERSONA1.NAME}
                        </h1>
                        <span className="no-underline">👋</span>
                    </div>
                    <img
                        className="rounded-full my-4 shadow-sm shadow-purple-900"
                        src={`https://api.dicebear.com/5.x/lorelei/svg?seed=${USERS.PERSONA1.NAME} ${USERS.PERSONA1.LASTNAME}&backgroundColor=c0aede&size=150&${barba}&${Ojosdata}&${pecas}&${CabezaData}`}
                        alt="Avatar"
                    />
                </div>
                <div className="h-screen">
                    <div className="h-full  overflow-y-scroll">
                        <div className="w-[40rem]">
                            <Accordion
                                expanded={expanded === "panel1"}
                                onChange={handleChange("panel1")}
                            >
                                <AccordionSummary
                                    aria-controls="panel1d-content"
                                    id="panel1d-header"
                                >
                                    <Typography className="text-blue-900 text-2xl font-bold">
                                        Barba:
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <button
                                            className={`text-black transition-all uppercase text-lg py-1 px-2 my-3 mx-2 rounded-full border-solid border-2 hover:border-white font-light w-44 ${
                                                Characterdata
                                                    ? " border-red-600 bg-red-500 hover:bg-red-400 focus:border-red-300"
                                                    : " border-green-600 bg-green-500 hover:bg-green-400 focus:border-green-300"
                                            }`}
                                            onClick={actualizarSesion}
                                        >
                                            {Characterdata ? "Quitar" : "Dejar"}
                                        </button>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={expanded === "panel2"}
                                onChange={handleChange("panel2")}
                            >
                                <AccordionSummary
                                    aria-controls="panel2d-content"
                                    id="panel2d-header"
                                >
                                    <Typography className="text-blue-900 text-2xl font-bold">
                                        Ojos:
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="flex  flex-wrap ">
                                            <Buttun
                                                manejarClic={actualizarOjos1}
                                            >
                                                variant01
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos2}
                                            >
                                                variant02
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos3}
                                            >
                                                variant03
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos4}
                                            >
                                                variant04
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos5}
                                            >
                                                variant05
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos6}
                                            >
                                                variant06
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos7}
                                            >
                                                variant07
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos8}
                                            >
                                                variant08
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos9}
                                            >
                                                variant09
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos10}
                                            >
                                                variant10
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos11}
                                            >
                                                variant11
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos12}
                                            >
                                                variant12
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos13}
                                            >
                                                variant13
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos14}
                                            >
                                                variant14
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos15}
                                            >
                                                variant15
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos16}
                                            >
                                                variant16
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos17}
                                            >
                                                variant17
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos18}
                                            >
                                                variant18
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos19}
                                            >
                                                variant19
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos20}
                                            >
                                                variant20
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos21}
                                            >
                                                variant21
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos22}
                                            >
                                                variant22
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos23}
                                            >
                                                variant23
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarOjos24}
                                            >
                                                variant24
                                            </Buttun>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={expanded === "panel3"}
                                onChange={handleChange("panel3")}
                            >
                                <AccordionSummary
                                    aria-controls="panel3d-content"
                                    id="panel3d-header"
                                >
                                    <Typography className="text-blue-900 text-2xl font-bold">
                                        Pecas:
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <button
                                            className={`text-black transition-all uppercase text-lg py-1 px-2 my-3 mx-2 rounded-full border-solid border-2 hover:border-white font-light w-44 ${
                                                PecasData
                                                    ? " border-red-600 bg-red-500 hover:bg-red-400 focus:border-red-300"
                                                    : " border-green-600 bg-green-500 hover:bg-green-400 focus:border-green-300"
                                            }`}
                                            onClick={actualizarPecasData}
                                        >
                                            {PecasData ? "Quitar" : "Dejar"}
                                        </button>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion
                                expanded={expanded === "panel4"}
                                onChange={handleChange("panel4")}
                            >
                                <AccordionSummary
                                    aria-controls="panel4d-content"
                                    id="panel4d-header"
                                >
                                    <Typography className="text-blue-900 text-2xl font-bold">
                                        Ojos:
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div className="flex  flex-wrap ">
                                            <Buttun
                                                manejarClic={actualizarCabezaData1}
                                            >
                                                variant01
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarCabezaData2}
                                            >
                                                variant02
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarCabezaData3}
                                            >
                                                variant03
                                            </Buttun>
                                            <Buttun
                                                manejarClic={actualizarCabezaData4}
                                            >
                                                variant04
                                            </Buttun>

                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterCopy;
