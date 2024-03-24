import React from "react";
import { useState } from "react";
import styles from "./Career.module.css";
import Questions from "./Questions/Questions";
import HamburgerMenu from "../../components/Navbar/NavBar";
import { useNavigate } from "react-router-dom";

function Career() {
    const initialArray = Array(48).fill(-1);
    let [ans, setAns] = useState(initialArray);
    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        let checkAns = ans.find((ele) => {  return ele===-1      });

        if (!checkAns) {
            console.log("ans", ans);
            let r = ans[0] + ans[6] + ans[12] + ans[18] + ans[24] + ans[30] + ans[36] + ans[42];
            let i = ans[1] + ans[7] + ans[13] + ans[19] + ans[25] + ans[31] + ans[37] + ans[43];
            let a = ans[2] + ans[8] + ans[14] + ans[20] + ans[26] + ans[32] + ans[38] + ans[44];
            let s = ans[3] + ans[9] + ans[15] + ans[21] + ans[27] + ans[33] + ans[39] + ans[45];
            let e = ans[4] + ans[10] + ans[16] + ans[22] + ans[28] + ans[34] + ans[40] + ans[46];
            let c = ans[5] + ans[11] + ans[17] + ans[23] + ans[29] + ans[35] + ans[41] + ans[47];
            navigate(`./result?r=${r}&i=${i}&s=${s}&a=${a}&e=${e}&c=${c}`);
        }
    }

    return (<div className={styles["career"]}>
        <HamburgerMenu />
        <div className={styles["aptitude"]}>
            <div className={styles["desc"]}>Inaccurate . Netural . Accurate</div>
            <form className={styles["form"]} onSubmit={handleSubmit}>
                <div className={styles["questions"]} >
                    <Questions onUpdatedAns={setAns} ans={ans} />
                </div>
              <div className={styles["btnDiv"]}><button className={styles["btn"]}>Submit</button></div>  
            </form>
        </div>
    </div>
    );
}

export default Career;