import React from "react"
import Layout from "./../componets/Layout"
import Mappic from "./../images/map.png"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Classes from "./Styles/Work.module.scss"

const HowItWorks = () => (
  <Layout>
    <div>
      <div className={Classes.container}>
        <div className={Classes.headingContainer}>
          <p className={Classes.heading}>How It Works</p>
        </div>
        <div className={Classes.sliderContainer}>
          <div className={Classes.series}>1</div>
          <div>
            <p className={Classes.paragraph}>
              PIAIC will launch classes in tde following locations, one city at
              a time, in tde following order
            </p>
          </div>
        </div>
        <div className={Classes.locationContainer}>
          <div>
            <img src={Mappic} width="274px" height="250px" alt="map Image" />
          </div>
          <div>
            <h5 style={{ textAlign: "center", color: "white" }}>
              City by City Roadmap
            </h5>
            <table>
              {/* row 1 */}
              <tr>
                <td className={Classes.numbering}>1</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Classes Started</td>
              </tr>

              {/* row 2 */}
              <tr>
                <td className={Classes.numbering}>2</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Classes Started</td>
              </tr>

              {/* row 3 */}
              <tr>
                <td className={Classes.numbering}>3</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Classes Started</td>
              </tr>

              {/* row 4 */}
              <tr>
                <td className={Classes.numbering}>4</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Accepting applications in Sialkot</td>
              </tr>

              {/* row 5 */}
              <tr>
                <td className={Classes.numbering}>5</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Coming Soon</td>
              </tr>

              {/* row 6 */}
              <tr>
                <td className={Classes.numbering}>6</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Coming Soon</td>
              </tr>

              {/* row 7 */}
              <tr>
                <td className={Classes.numbering}>7</td>
                <td>
                  <span className={Classes.circle}></span>{" "}
                </td>
                <td>
                  <p className={Classes.input}>Hello</p>
                </td>
                <td>Coming Soon</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      {/* body */}
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <h3>row data</h3>
          <h3>row data</h3>
        </div>
        <div>
          <h3>List Data</h3>
        </div>
      </div>
    </div>
  </Layout>
)

export default HowItWorks
// map image use
// <Grid container justifyContent="center">
//   <Grid lg={6} xl={6} md={6} sm={12} xm={12}>
//     <img src={Mappic} className="map_image" />
//   </Grid>

//   <Grid lg={6} xl={6} md={6} sm={12} xm={12}>
//     <table>
//       <tr>
//         <td className="numbring">
//           1
//           <div className="div">
//             <input
//               type="radio"
//               id="radio01"
//               name="radio"
//               className="input"
//             />
//             <label for="radio01">
//               <span></span>
//             </label>
//           </div>
//         </td>
//         <td>
//           <p className="city"> Karachi</p>
//         </td>
//         <td>Classes Started</td>
//       </tr>

//       <tr>
//         <td className="numbring">
//           2
//           <div className="div">
//             <input
//               type="radio"
//               id="radio01"
//               name="radio"
//               className="input"
//             />
//             <label for="radio01">
//               <span></span>
//             </label>
//           </div>
//         </td>

//         <td>
//           <br />

//           <p className="city"> Islamabad</p>
//         </td>
//         <td>Classes Started</td>
//       </tr>

//       <tr>
//         <td className="numbring">
//           3
//           <div className="div">
//             <input
//               type="radio"
//               id="radio01"
//               name="radio"
//               className="input"
//             />
//             <label for="radio01">
//               <span></span>
//             </label>
//           </div>
//         </td>

//         <td>
//           <br />

//           <p className="city"> Faisalabad</p>
//         </td>
//         <td>Classes Started</td>
//       </tr>

//       {/* 4 number */}

//       <tr>
//         <td className="numbring">
//           4
//           <div className="div">
//             <input
//               type="radio"
//               id="radio01"
//               name="radio"
//               className="input"
//             />
//             <label for="radio01">
//               <span></span>
//             </label>
//           </div>
//         </td>
//         <td>
//           <br />

//           <p className="sialkot"> Sialkot</p>
//         </td>
//         <td>Classes Started</td>
//       </tr>

//       {/* 5 */}

//       <tr>
//         <td className="numbring">
//           5
//           <div className="div">
//             <input
//               type="radio"
//               id="radio01"
//               name="radio"
//               className="input"
//             />
//             <label for="radio01">
//               <span></span>
//             </label>
//           </div>
//         </td>

//         <td>
//           <br />

//           <p className="city"> Lahore</p>
//         </td>
//         <td>Coming soon</td>
//       </tr>

//       {/* 6 */}
//       <tr>
//         <td className="numbring">
//           6
//           <div className="div">
//             <input
//               type="radio"
//               id="radio01"
//               name="radio"
//               className="input"
//             />
//             <label for="radio01">
//               <span></span>
//             </label>
//           </div>
//         </td>

//         <td>
//           <br />

//           <p className="city"> Peshawar</p>
//         </td>
//         <td>Coming soon</td>
//       </tr>

//       {/* 7 */}

//       <tr>
//         <td className="numbring">
//           7
//           <div className="div">
//             <input
//               type="radio"
//               id="radio01"
//               name="radio"
//               className="input"
//             />
//             <label for="radio01">
//               <span></span>
//             </label>
//           </div>
//         </td>

//         <td>
//           <br />

//           <p className="city"> Quetta</p>
//         </td>
//         <td>Coming soon</td>
//       </tr>
//     </table>
//   </Grid>
// </Grid>
// </div>

// <div style={{ backgroundColor: "#e2e4e6" }}>
// <div className="number2">2</div>
// <div className="numberText">
//   To participate in the program and become eligible for the most
//   prestigious credentials for AI, Cloud, and Blockchain technologies in
//   the world, students must complete the following process
// </div>

// <div
//   style={{
//     lineHeight: "-10px",
//     marginLeft: "20%",
//     fontSize: "10px",
//     marginTop: "30px",
//     borderTop: "1px solid grey",
//     paddingTop: "20px",
//     width: "70%",
//     paddingBottom: "5px",
//     fontWeight: "bold",
//   }}
// >
//   <p className="numberPText">1- Submit the online application.</p>
//   <p className="numberPText">
//     2- Get admit card attested at a PIAIC office.
//   </p>
//   <p className="numberPText">
//     3- Pass the entrance exam which consists of multiple choice English
//     and Mathematics questions. Results are determined based on percentile.
//   </p>
//   <p className="numberPText">
//     4- Pass all PIAIC exams with an average score of at least 70%.
//   </p>
// </div>
// </div>

// <div>
// <div className="number2">3</div>
// <div className="numberText">
//   All programs are one year long in duration. Each program is divided into
//   four quarters (12 weeks each). Classes are held once a week. In the
//   initial stages, classes will be held only on Sundays. There will 3
//   sections of classes available, including Artificial Intelligence, Cloud
//   Native and Mobile Web Computing, and Blockchain. Each class will be 3
//   hours in duration per week, for a total of 36 hours per quarter or 144
//   hours for the entire year.
// </div>
// </div>

// <div style={{ backgroundColor: "#0bc897" }}>
// <div className="number4">4</div>
// <div className="numberText4">
//   Those students who wish to participate in the program online can check
//   the distance learning option in the application form. Please note that
//   distance learning students must also take proctored exams on site, just
//   like the onsite students.
//   <br />
//   <br />
//   The fee structure for onsite students is PKR 1,000 per month for 12
//   months, payable in 4 installments of PKR 3,000, before the start of each
//   quarter.
//   <br />
//   <br />
//   The fee structure for distance learning students is PKR 500 per month
//   for 12 months, payable in 4 installments of PKR 1,500, before the start
//   of each quarter.
// </div>
// </div>

// <div></div>

// <div style={{ backgroundColor: "white" }}>
// <div className="number5">5</div>
// <div className="numberText5">
//   Please note, all fees will be collected by Saylani Welfare Trust, the
//   most trusted NGO in Pakistan. Saylani has strict audit processes already
//   in place to ensure proper accountability of funds.
// </div>
// </div>

// <div></div>

// <div style={{ backgroundColor: "#0bc897" }}>
// <div className="number4">6</div>
// <div className="numberText6">
//   Please note, this is a highly prestigious program. Due to the high level
//   of difficulty, only 10% of students will be awarded the PIAIC
//   certifications.
// </div>
// </div>

// <div style={{ backgroundColor: "#33322d" }}>
// <div className="number7">7</div>
// <div className="numberText7">
//   For questions related to admissions, you may call us on the PIAIC
//   Helpline: +92-311-1729526.
//   <br />
//   For technical questions related to coursework, you may contact us via
//   the contact form. (https://www.piaic.org/contact).
// </div>
