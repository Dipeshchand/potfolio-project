// import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import Profile from "./components/Profile";

// function App() {

//   return (
//     <div>
//       <Navbar />
//       <Login />
//       <Profile />
//     </div>
//   );
// }

// export default App;

// import { useReducer } from "react";
// const initialState = 0;

// function reducer(state,action){
//     switch(action.type){
//         case "INCREMENT":
//          return state+1;

//         case "DECREMENT":
//             return state >0 ? state-1 : 0;
        
//         case "RETURN":
//             return 0;
        
//         default:
//             return state;
//     }
// }

// function App(){
//     const [cout, dispatch] = useReducer(reducer, initialState);
//     return(
//         <div>
//             <h1>{cout}</h1>
//         <button onClick={()=>dispatch({type:"INCREMENT"})}>
//             INCREMENT
//         </button>
//         <br />
//         <button onClick={()=>dispatch({type:"DECREMENT"})}>
//             DECREMENT
//         </button>
//         <br />
//         <button onClick={()=>dispatch({type:"RETURN"})}>
//             RETURN
//         </button>
//         </div>
//     )
// }

// export default App;



// -----------------
// import { useReducer } from "react";

// const initialState = 0;

// function reducer(state, action) {

//   switch(action.type) {

//     case "DEPOSIT":

//       return state + action.payload;

//     case "WITHDRAW":

//       return state - action.payload;

//     case "RESET":

//       return 0;

//     default:

//       return state;
//   }
// }

// function App() {

//   const [balance, dispatch] =
//     useReducer(reducer, initialState);

//   return (

//     <div
//       style={{
//         padding: "20px"
//       }}
//     >

//       <h1>
//         Balance: ₹{balance}
//       </h1>

//       <button
//         onClick={() =>
//           dispatch({
//             type: "DEPOSIT",
//             payload: 100
//           })
//         }
//       >
//         Deposit 100
//       </button>

//       <button
//         onClick={() =>
//           dispatch({
//             type: "WITHDRAW",
//             payload: 50
//           })
//         }
//         style={{
//           marginLeft: "10px"
//         }}
//       >
//         Withdraw 50
//       </button>

//       <button
//         onClick={() =>
//           dispatch({
//             type: "RESET"
//           })
//         }
//         style={{
//           marginLeft: "10px"
//         }}
//       >
//         Reset
//       </button>

//     </div>

//   );
// }

// export default App;



// -------------

// import { useReducer } from "react";
// const initalState = 0;
// function reducer(state, action){
//     switch(action.type){
//         case "DEPOSITE":
//             return state+ action.payload;
//         case "WITHDROW":
//             return state - action.payload;
//         case "RESET":
//             return 0;
        
//         default:
//             return state;
//     }
// }

// function App(){
//     const [balance, dispath] = useReducer(reducer, initalState);

//     return(
//         <div>
//             <h1>Balance {balance}</h1>
//             <br />
//             <button onClick={()=>dispath({
//                 type:"DEPOSITE",
//                 payload: 100
//             })}>
//                 DEPOSITE 100
//             </button>
//             <br />
//             <button onClick={()=>dispath({
//                 type:"WITHDROW",
//                 payload:50
//             })}>
//             WITHDROW 50    
//             </button>
//             <br />
//             <button onClick={()=>dispath({
//                 type:"RESET",
//                 payload:0
//             })}>
//                 REST
//             </button>
//         </div>
//     )
// }
// export default App;



// import { useState, useEffect, useRef } from "react";

// const skills = {
//   "Analytics & Visualization": ["Power BI", "Tableau", "Advanced Excel", "Dashboard Dev", "KPI Reporting", "Data Visualization"],
//   "Programming & Data": ["SQL", "Python", "R Programming", "Statistical Analysis", "Regression Analysis", "Forecasting", "Data Mining"],
//   "Data Engineering": ["ETL/ELT", "Data Modeling", "Data Cleaning", "Data Validation", "Data Warehousing", "ERD", "Database Management"],
//   "BI & Analytics Tools": ["RapidMiner", "Alteryx", "SAP", "Salesforce", "AWS Glue", "Amazon S3", "Amazon Redshift"],
//   "Domain Knowledge": ["Project Controls", "Cost Estimation", "Budget Tracking", "Schedule Monitoring", "Construction Analytics"],
// };

// const experience = [
//   {
//     company: "Tata Consultancy Services (TCS)",
//     role: "Data Engineer",
//     period: "Feb 2020 – Jul 2023",
//     location: "Hyderabad, India",
//     client: "NXP Semiconductors",
//     highlights: [
//       "Processed & analyzed operational/production datasets for a global semiconductor manufacturer",
//       "Built interactive Power BI dashboards with trend analysis, forecasting, and KPI tracking",
//       "Developed automated data pipelines using Python, Alteryx & ETL processes",
//       "Utilized AWS Glue, Amazon S3 & Redshift for scalable data integration",
//       "Designed relational DB structures & data warehouse tables for reporting efficiency",
//       "Monitored operational databases across AMEC & APAC regions for cross-regional reporting",
//     ],
//   },
// ];

// const education = [
//   {
//     degree: "M.S. Business Analytics",
//     school: "Webster University",
//     location: "St. Louis, MO",
//     icon: "🎓",
//   },
//   {
//     degree: "B.Tech Civil Engineering",
//     school: "Guru Nanak Institutions Technical Campus",
//     location: "Hyderabad, India",
//     icon: "🏗️",
//   },
// ];

// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return [ref, inView];
// }

// function AnimatedSection({ children, delay = 0, className = "" }) {
//   const [ref, inView] = useInView();
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(40px)",
//         transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// function TypewriterText({ text, started }) {
//   const [displayed, setDisplayed] = useState("");
//   useEffect(() => {
//     if (!started) return;
//     let i = 0;
//     const id = setInterval(() => {
//       setDisplayed(text.slice(0, ++i));
//       if (i >= text.length) clearInterval(id);
//     }, 38);
//     return () => clearInterval(id);
//   }, [started, text]);
//   return <span>{displayed}<span style={{ opacity: Math.sin(Date.now() / 400) > 0 ? 1 : 0, borderRight: "2px solid #f97316" }}>&nbsp;</span></span>;
// }

// function SkillPill({ skill, index }) {
//   const [ref, inView] = useInView(0.1);
//   const colors = [
//     { bg: "#fff7ed", border: "#fed7aa", text: "#c2410c" },
//     { bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8" },
//     { bg: "#f0fdf4", border: "#bbf7d0", text: "#15803d" },
//     { bg: "#fdf4ff", border: "#e9d5ff", text: "#7e22ce" },
//     { bg: "#fff1f2", border: "#fecdd3", text: "#be123c" },
//   ];
//   const c = colors[index % colors.length];
//   return (
//     <span
//       ref={ref}
//       style={{
//         background: c.bg,
//         border: `1px solid ${c.border}`,
//         color: c.text,
//         padding: "4px 12px",
//         borderRadius: "999px",
//         fontSize: "12px",
//         fontWeight: 500,
//         fontFamily: "'DM Mono', monospace",
//         display: "inline-block",
//         opacity: inView ? 1 : 0,
//         transform: inView ? "scale(1)" : "scale(0.7)",
//         transition: `opacity 0.4s ease ${(index % 8) * 0.06}s, transform 0.4s ease ${(index % 8) * 0.06}s`,
//       }}
//     >
//       {skill}
//     </span>
//   );
// }

// export default function Portfolio() {
//   const [heroReady, setHeroReady] = useState(false);
//   const [activeSection, setActiveSection] = useState("hero");
//   const [hoveredNav, setHoveredNav] = useState(null);

//   useEffect(() => {
//     const t = setTimeout(() => setHeroReady(true), 300);
//     return () => clearTimeout(t);
//   }, []);

//   const navItems = ["About", "Skills", "Experience", "Education", "Contact"];

//   const scrollTo = (id) => {
//     document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0a0a0f", color: "#e8e6f0", minHeight: "100vh", overflowX: "hidden" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
//         * { box-sizing: border-box; margin: 0; padding: 0; }
//         ::-webkit-scrollbar { width: 4px; }
//         ::-webkit-scrollbar-track { background: #0a0a0f; }
//         ::-webkit-scrollbar-thumb { background: #f97316; border-radius: 2px; }
//         .glow-text { text-shadow: 0 0 40px rgba(249,115,22,0.5); }
//         .card-hover { transition: transform 0.3s ease, border-color 0.3s ease; }
//         .card-hover:hover { transform: translateY(-4px); border-color: rgba(249,115,22,0.4) !important; }
//         @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
//         @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.5); opacity: 0; } }
//         @keyframes grid-drift { 0% { transform: translateY(0); } 100% { transform: translateY(60px); } }
//         @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
//         .shimmer-text {
//           background: linear-gradient(90deg, #f97316 0%, #fb923c 40%, #ffffff 50%, #fb923c 60%, #f97316 100%);
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           animation: shimmer 4s linear infinite;
//         }
//         .tag-bar { display: flex; flex-wrap: wrap; gap: 8px; }
//       `}</style>

//       {/* Background grid */}
//       <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
//         <div style={{
//           position: "absolute", inset: 0,
//           backgroundImage: "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//           animation: "grid-drift 20s linear infinite",
//         }} />
//         <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />
//         <div style={{ position: "absolute", bottom: "30%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />
//       </div>

//       {/* Nav */}
//       <nav style={{
//         position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
//         background: "rgba(10,10,15,0.85)", backdropFilter: "blur(16px)",
//         borderBottom: "1px solid rgba(249,115,22,0.1)",
//         display: "flex", justifyContent: "space-between", alignItems: "center",
//         padding: "0 5%", height: 60,
//       }}>
//         <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: "#f97316" }}>AL</span>
//         <div style={{ display: "flex", gap: 32 }}>
//           {navItems.map(item => (
//             <button
//               key={item}
//               onClick={() => scrollTo(item)}
//               onMouseEnter={() => setHoveredNav(item)}
//               onMouseLeave={() => setHoveredNav(null)}
//               style={{
//                 background: "none", border: "none", cursor: "pointer",
//                 fontFamily: "'DM Mono', monospace", fontSize: 13,
//                 color: hoveredNav === item ? "#f97316" : "rgba(232,230,240,0.6)",
//                 transition: "color 0.2s ease",
//                 letterSpacing: "0.05em",
//               }}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Hero */}
//       <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 8% 60px", position: "relative", zIndex: 1 }}>
//         <div style={{ opacity: heroReady ? 1 : 0, transform: heroReady ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }}>
//           <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#f97316", letterSpacing: "0.15em", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
//             <span style={{ display: "inline-block", width: 40, height: 1, background: "#f97316" }} />
//             BUSINESS ANALYTICS PROFESSIONAL
//           </div>
//           <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1.0, marginBottom: 24 }}>
//             <span className="glow-text">Ajay</span><br />
//             <span className="shimmer-text">Lakkuntla</span>
//           </h1>
//           <p style={{ fontSize: 18, color: "rgba(232,230,240,0.6)", maxWidth: 560, lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
//             <TypewriterText text="4 years transforming raw data into strategic intelligence. SQL · Python · Power BI · AWS · ETL" started={heroReady} />
//           </p>
//           <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//             <button onClick={() => scrollTo("Experience")} style={{
//               padding: "12px 28px", background: "#f97316", border: "none", borderRadius: 4,
//               color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500,
//               cursor: "pointer", letterSpacing: "0.05em", transition: "background 0.2s",
//             }}
//               onMouseEnter={e => e.target.style.background = "#ea580c"}
//               onMouseLeave={e => e.target.style.background = "#f97316"}
//             >
//               VIEW WORK →
//             </button>
//             <a href="mailto:ajaylakkuntla21@gmail.com" style={{
//               padding: "12px 28px", background: "transparent",
//               border: "1px solid rgba(249,115,22,0.4)", borderRadius: 4,
//               color: "#f97316", fontFamily: "'DM Mono', monospace", fontSize: 13,
//               cursor: "pointer", textDecoration: "none", letterSpacing: "0.05em",
//               transition: "border-color 0.2s, background 0.2s",
//             }}>
//               GET IN TOUCH
//             </a>
//           </div>
//         </div>

//         {/* Floating stats */}
//         <div style={{
//           position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)",
//           display: "flex", flexDirection: "column", gap: 20,
//           opacity: heroReady ? 1 : 0, transition: "opacity 0.8s ease 0.8s",
//         }}>
//           {[{ num: "4+", label: "Years Exp" }, { num: "3", label: "AWS Tools" }, { num: "5+", label: "BI Tools" }].map((s, i) => (
//             <div key={i} style={{
//               background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.15)",
//               borderRadius: 8, padding: "20px 24px", textAlign: "center",
//               animation: `float ${3 + i * 0.7}s ease-in-out ${i * 0.3}s infinite`,
//             }}>
//               <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, color: "#f97316" }}>{s.num}</div>
//               <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(232,230,240,0.4)", letterSpacing: "0.1em" }}>{s.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Scroll hint */}
//         <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.4 }}>
//           <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.15em" }}>SCROLL</span>
//           <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #f97316, transparent)", animation: "float 2s ease-in-out infinite" }} />
//         </div>
//       </section>

//       {/* About */}
//       <section id="about" style={{ padding: "100px 8%", position: "relative", zIndex: 1 }}>
//         <AnimatedSection>
//           <div style={{ display: "flex", gap: "8%", alignItems: "center", flexWrap: "wrap" }}>
//             <div style={{ flex: "1 1 320px" }}>
//               <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.15em", marginBottom: 16 }}>01 / ABOUT</div>
//               <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, marginBottom: 24, lineHeight: 1.2 }}>
//                 Data Engineer<br /><span style={{ color: "#f97316" }}>& Analyst</span>
//               </h2>
//               <p style={{ color: "rgba(232,230,240,0.65)", lineHeight: 1.9, fontSize: 15, marginBottom: 20 }}>
//                 Based in St. Louis, Missouri, I specialize in turning complex data challenges into clean, actionable insights. With a background spanning semiconductor manufacturing analytics at TCS/NXP Semiconductors and graduate studies in Business Analytics.
//               </p>
//               <p style={{ color: "rgba(232,230,240,0.65)", lineHeight: 1.9, fontSize: 15 }}>
//                 I bridge the gap between raw data pipelines and strategic business decisions — whether that's through Power BI dashboards, Python automation, or AWS data warehousing.
//               </p>
//             </div>
//             <div style={{ flex: "1 1 280px" }}>
//               {[
//                 { icon: "📍", label: "Location", val: "St. Louis, Missouri" },
//                 { icon: "📧", label: "Email", val: "ajaylakkuntla21@gmail.com" },
//                 { icon: "🔗", label: "LinkedIn", val: "linkedin.com/in/ajay" },
//                 { icon: "🎯", label: "Focus", val: "Data Engineering & Analytics" },
//               ].map((item, i) => (
//                 <AnimatedSection delay={i * 0.1} key={i}>
//                   <div className="card-hover" style={{
//                     background: "rgba(249,115,22,0.04)", border: "1px solid rgba(249,115,22,0.1)",
//                     borderRadius: 8, padding: "14px 18px", marginBottom: 10,
//                     display: "flex", alignItems: "center", gap: 14,
//                   }}>
//                     <span style={{ fontSize: 20 }}>{item.icon}</span>
//                     <div>
//                       <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(232,230,240,0.35)", letterSpacing: "0.1em" }}>{item.label}</div>
//                       <div style={{ fontSize: 14, color: "rgba(232,230,240,0.85)", marginTop: 2 }}>{item.val}</div>
//                     </div>
//                   </div>
//                 </AnimatedSection>
//               ))}
//             </div>
//           </div>
//         </AnimatedSection>
//       </section>

//       {/* Skills */}
//       <section id="skills" style={{ padding: "100px 8%", position: "relative", zIndex: 1, background: "rgba(249,115,22,0.02)" }}>
//         <AnimatedSection>
//           <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.15em", marginBottom: 16 }}>02 / SKILLS</div>
//           <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, marginBottom: 60 }}>Technical <span style={{ color: "#f97316" }}>Arsenal</span></h2>
//         </AnimatedSection>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
//           {Object.entries(skills).map(([category, items], ci) => (
//             <AnimatedSection key={category} delay={ci * 0.1}>
//               <div className="card-hover" style={{
//                 background: "rgba(10,10,15,0.8)", border: "1px solid rgba(249,115,22,0.1)",
//                 borderRadius: 12, padding: "24px 20px",
//               }}>
//                 <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.1em", marginBottom: 16 }}>
//                   {category.toUpperCase()}
//                 </h3>
//                 <div className="tag-bar">
//                   {items.map((skill, si) => <SkillPill key={skill} skill={skill} index={ci * 10 + si} />)}
//                 </div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </section>

//       {/* Experience */}
//       <section id="experience" style={{ padding: "100px 8%", position: "relative", zIndex: 1 }}>
//         <AnimatedSection>
//           <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.15em", marginBottom: 16 }}>03 / EXPERIENCE</div>
//           <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, marginBottom: 60 }}>Work <span style={{ color: "#f97316" }}>History</span></h2>
//         </AnimatedSection>
//         {experience.map((job, ji) => (
//           <AnimatedSection key={ji} delay={0.2}>
//             <div style={{
//               background: "rgba(10,10,15,0.9)", border: "1px solid rgba(249,115,22,0.15)",
//               borderRadius: 16, padding: "40px", position: "relative", overflow: "hidden",
//             }}>
//               <div style={{
//                 position: "absolute", top: 0, left: 0, right: 0, height: 3,
//                 background: "linear-gradient(90deg, #f97316, #fb923c, transparent)",
//               }} />
//               <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
//                 <div>
//                   <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{job.role}</h3>
//                   <div style={{ fontSize: 16, color: "#f97316", marginBottom: 4 }}>{job.company}</div>
//                   <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "rgba(232,230,240,0.4)" }}>
//                     {job.location} · Client: {job.client}
//                   </div>
//                 </div>
//                 <div style={{
//                   background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)",
//                   borderRadius: 6, padding: "8px 16px", height: "fit-content",
//                   fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#f97316",
//                 }}>
//                   {job.period}
//                 </div>
//               </div>
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
//                 {job.highlights.map((h, hi) => (
//                   <AnimatedSection key={hi} delay={hi * 0.07}>
//                     <div style={{
//                       display: "flex", gap: 12, alignItems: "flex-start",
//                       padding: "12px 16px", background: "rgba(249,115,22,0.04)",
//                       border: "1px solid rgba(249,115,22,0.08)", borderRadius: 8,
//                     }}>
//                       <span style={{ color: "#f97316", fontSize: 16, marginTop: 1, flexShrink: 0 }}>▹</span>
//                       <span style={{ fontSize: 14, color: "rgba(232,230,240,0.7)", lineHeight: 1.6 }}>{h}</span>
//                     </div>
//                   </AnimatedSection>
//                 ))}
//               </div>
//             </div>
//           </AnimatedSection>
//         ))}
//       </section>

//       {/* Education */}
//       <section id="education" style={{ padding: "100px 8%", position: "relative", zIndex: 1, background: "rgba(249,115,22,0.02)" }}>
//         <AnimatedSection>
//           <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.15em", marginBottom: 16 }}>04 / EDUCATION</div>
//           <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, marginBottom: 60 }}>Academic <span style={{ color: "#f97316" }}>Background</span></h2>
//         </AnimatedSection>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
//           {education.map((edu, ei) => (
//             <AnimatedSection key={ei} delay={ei * 0.2}>
//               <div className="card-hover" style={{
//                 background: "rgba(10,10,15,0.9)", border: "1px solid rgba(249,115,22,0.15)",
//                 borderRadius: 16, padding: "36px 32px", position: "relative", overflow: "hidden",
//               }}>
//                 <div style={{ fontSize: 48, marginBottom: 20 }}>{edu.icon}</div>
//                 <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{edu.degree}</h3>
//                 <div style={{ color: "#f97316", fontSize: 15, marginBottom: 6 }}>{edu.school}</div>
//                 <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "rgba(232,230,240,0.35)" }}>{edu.location}</div>
//                 <div style={{
//                   position: "absolute", bottom: -20, right: -20,
//                   width: 100, height: 100, borderRadius: "50%",
//                   background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.1)",
//                 }} />
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" style={{ padding: "100px 8% 140px", position: "relative", zIndex: 1, textAlign: "center" }}>
//         <AnimatedSection>
//           <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.15em", marginBottom: 16 }}>05 / CONTACT</div>
//           <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, marginBottom: 20, lineHeight: 1.1 }}>
//             Let's build something<br /><span style={{ color: "#f97316" }}>data-driven.</span>
//           </h2>
//           <p style={{ color: "rgba(232,230,240,0.5)", fontSize: 16, marginBottom: 48, maxWidth: 480, margin: "0 auto 48px" }}>
//             Open to data engineering, analytics, and BI roles. Let's talk.
//           </p>
//           <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
//             <a href="mailto:ajaylakkuntla21@gmail.com" style={{
//               padding: "16px 36px", background: "#f97316", border: "none", borderRadius: 6,
//               color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 500,
//               cursor: "pointer", textDecoration: "none", letterSpacing: "0.05em",
//               transition: "background 0.2s, transform 0.2s",
//               display: "inline-block",
//             }}
//               onMouseEnter={e => { e.target.style.background = "#ea580c"; e.target.style.transform = "translateY(-2px)"; }}
//               onMouseLeave={e => { e.target.style.background = "#f97316"; e.target.style.transform = "translateY(0)"; }}
//             >
//               📧 SEND EMAIL
//             </a>
//             <a href="https://www.linkedin.com/in/ajay/" target="_blank" rel="noopener noreferrer" style={{
//               padding: "16px 36px", border: "1px solid rgba(249,115,22,0.35)", borderRadius: 6,
//               color: "#f97316", fontFamily: "'DM Mono', monospace", fontSize: 14,
//               textDecoration: "none", letterSpacing: "0.05em", transition: "border-color 0.2s, transform 0.2s",
//               display: "inline-block",
//             }}
//               onMouseEnter={e => { e.target.style.borderColor = "#f97316"; e.target.style.transform = "translateY(-2px)"; }}
//               onMouseLeave={e => { e.target.style.borderColor = "rgba(249,115,22,0.35)"; e.target.style.transform = "translateY(0)"; }}
//             >
//               🔗 LINKEDIN
//             </a>
//           </div>
//         </AnimatedSection>
//       </section>

//       {/* Footer */}
//       <footer style={{
//         position: "relative", zIndex: 1, textAlign: "center",
//         padding: "24px 8%", borderTop: "1px solid rgba(249,115,22,0.08)",
//         fontFamily: "'DM Mono', monospace", fontSize: 12, color: "rgba(232,230,240,0.25)",
//       }}>
//         Ajay Lakkuntla · St. Louis, MO · +1(314) 583 7064
//       </footer>
//     </div>
//   );
// }


// import { useState, useEffect, useRef } from "react";

// const ORANGE = "#f97316";
// const DARK_BG = "#0a0a0f";

// const skills = {
//   "Analytics & Visualization": ["Power BI", "Tableau", "Advanced Excel", "Dashboard Dev", "KPI Reporting"],
//   "Programming & Data": ["SQL", "Python", "R Programming", "Statistical Analysis", "Forecasting"],
//   "Data Engineering": ["ETL/ELT", "Data Modeling", "Data Warehousing", "ERD", "Data Cleaning"],
//   "Cloud & BI Tools": ["AWS Glue", "Amazon Redshift", "Alteryx", "RapidMiner", "SAP"],
// };

// const pillColors = [
//   { bg: "#fff7ed", border: "#fed7aa", color: "#c2410c" },
//   { bg: "#eff6ff", border: "#bfdbfe", color: "#1d4ed8" },
//   { bg: "#f0fdf4", border: "#bbf7d0", color: "#15803d" },
//   { bg: "#fdf4ff", border: "#e9d5ff", color: "#7e22ce" },
//   { bg: "#fff1f2", border: "#fecdd3", color: "#be123c" },
// ];

// const SYSTEM_PROMPT = `You are Aalo, a friendly AI analytics assistant on Ajay Lakkuntla's portfolio. Be warm, concise (under 80 words unless asked for detail), and occasionally use a light data pun.

// ABOUT AJAY:
// - Location: St. Louis, Missouri
// - Email: ajaylakkuntla21@gmail.com | LinkedIn: linkedin.com/in/ajay | Phone: +1(314) 583 7064
// - M.S. Business Analytics — Webster University, St. Louis, MO
// - B.Tech Civil Engineering — Guru Nanak Institutions, Hyderabad, India
// - Data Engineer at TCS (Feb 2020–Jul 2023), client NXP Semiconductors
//   * Built Power BI dashboards with forecasting & KPI tracking
//   * Automated pipelines via Python, Alteryx & ETL
//   * AWS Glue, S3, Redshift data integration
//   * Relational DB & data warehouse design
//   * Cross-regional AMEC & APAC monitoring
// - Skills: SQL, Python, R, Power BI, Tableau, Excel, ETL/ELT, Data Modeling, Warehousing, Alteryx, SAP, AWS Glue, Redshift, Statistical Analysis, Forecasting
// Always encourage visitors to reach out!`;

// function AaloFace({ size = 64 }) {
//   return (
//     <svg width={size} height={size * 1.1} viewBox="0 0 72 80" fill="none">
//       <rect x="34" y="2" width="4" height="14" rx="2" fill={ORANGE} />
//       <circle cx="36" cy="4" r="5" fill={ORANGE} />
//       <ellipse cx="36" cy="42" rx="26" ry="24" fill={ORANGE} />
//       <ellipse cx="28" cy="32" rx="7" ry="4" fill="rgba(255,255,255,0.12)" transform="rotate(-20 28 32)" />
//       <ellipse cx="36" cy="44" rx="20" ry="17" fill="#1a0800" />
//       <ellipse cx="28" cy="40" rx="5" ry="5.5" fill={ORANGE} />
//       <ellipse cx="44" cy="40" rx="5" ry="5.5" fill={ORANGE} />
//       <circle cx="30" cy="38" r="1.5" fill="white" opacity="0.9" />
//       <circle cx="46" cy="38" r="1.5" fill="white" opacity="0.9" />
//       <path d="M26 52 Q36 60 46 52" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
//       <circle cx="26" cy="52" r="1.5" fill={ORANGE} />
//       <circle cx="46" cy="52" r="1.5" fill={ORANGE} />
//       <ellipse cx="10" cy="42" rx="5" ry="8" fill="#e06010" />
//       <ellipse cx="62" cy="42" rx="5" ry="8" fill="#e06010" />
//     </svg>
//   );
// }

// function AaloBot({ onToggle }) {
//   const [hover, setHover] = useState(false);
//   return (
//     <div
//       onClick={onToggle}
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         position: "fixed", bottom: 28, right: 28, zIndex: 999,
//         cursor: "pointer",
//         animation: hover ? "none" : "aaloBounce 2.8s ease-in-out infinite",
//         filter: `drop-shadow(0 6px 20px rgba(249,115,22,${hover ? "0.7" : "0.4"}))`,
//         transition: "filter 0.2s",
//       }}
//     >
//       <AaloFace size={68} />
//       <div style={{
//         textAlign: "center", marginTop: 4,
//         fontFamily: "monospace", fontSize: 10, color: ORANGE, letterSpacing: "0.15em",
//       }}>AALO</div>
//     </div>
//   );
// }

// function ChatPanel({ open, onClose }) {
//   const [messages, setMessages] = useState([
//     { role: "bot", text: "Hi! I'm Aalo ✦\nAsk me anything about Ajay's skills, experience, or how to reach him!" }
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [history, setHistory] = useState([]);
//   const bottomRef = useRef(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   const send = async (text) => {
//     if (!text.trim() || loading) return;
//     const userMsg = text.trim();
//     setInput("");
//     setMessages(m => [...m, { role: "user", text: userMsg }]);
//     setLoading(true);
//     const newHistory = [...history, { role: "user", content: userMsg }];
//     try {
//       const res = await fetch("https://api.anthropic.com/v1/messages", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           model: "claude-sonnet-4-20250514",
//           max_tokens: 1000,
//           system: SYSTEM_PROMPT,
//           messages: newHistory,
//         }),
//       });
//       const data = await res.json();
//       const reply = data.content?.map(b => b.text || "").join("") || "Oops, my circuits glitched! Try again.";
//       setHistory([...newHistory, { role: "assistant", content: reply }]);
//       setMessages(m => [...m, { role: "bot", text: reply }]);
//     } catch {
//       setMessages(m => [...m, { role: "bot", text: "Something went wrong. Try again!" }]);
//     }
//     setLoading(false);
//   };

//   const quickReplies = ["Top skills", "Work at TCS", "AWS tools", "How to contact Ajay"];

//   return (
//     <div style={{
//       position: "fixed", bottom: 0, right: 0, width: 340, height: 500,
//       background: "#0f0f1a", border: "1px solid rgba(249,115,22,0.25)",
//       borderRadius: "16px 16px 0 0", zIndex: 1000, display: "flex", flexDirection: "column",
//       transform: open ? "translateY(0)" : "translateY(100%)",
//       transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
//     }}>
//       {/* Header */}
//       <div style={{
//         background: "rgba(249,115,22,0.08)", borderBottom: "1px solid rgba(249,115,22,0.15)",
//         padding: "10px 14px", display: "flex", alignItems: "center", gap: 10,
//         borderRadius: "16px 16px 0 0", flexShrink: 0,
//       }}>
//         <div style={{ animation: "aaloBounceSmall 2.5s ease-in-out infinite" }}>
//           <AaloFace size={30} />
//         </div>
//         <div style={{ flex: 1 }}>
//           <div style={{ fontWeight: 700, fontSize: 15, color: ORANGE }}>Aalo</div>
//           <div style={{ fontSize: 10, color: "rgba(232,230,240,0.4)", fontFamily: "monospace" }}>Ajay's AI Assistant</div>
//         </div>
//         <button onClick={onClose} style={{
//           background: "none", border: "none", color: "rgba(232,230,240,0.4)",
//           fontSize: 18, cursor: "pointer", lineHeight: 1, padding: 4,
//         }}>✕</button>
//       </div>

//       {/* Messages */}
//       <div style={{ flex: 1, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
//         {messages.map((m, i) => (
//           <div key={i} style={{ display: "flex", gap: 8, flexDirection: m.role === "user" ? "row-reverse" : "row" }}>
//             {m.role === "bot" && (
//               <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(249,115,22,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                 <AaloFace size={18} />
//               </div>
//             )}
//             <div style={{
//               maxWidth: "78%", padding: "9px 13px", borderRadius: 12, fontSize: 13, lineHeight: 1.6,
//               background: m.role === "bot" ? "rgba(249,115,22,0.08)" : ORANGE,
//               border: m.role === "bot" ? "1px solid rgba(249,115,22,0.15)" : "none",
//               color: m.role === "bot" ? "rgba(232,230,240,0.88)" : "#fff",
//               whiteSpace: "pre-wrap",
//             }}>
//               {m.text}
//             </div>
//           </div>
//         ))}
//         {loading && (
//           <div style={{ display: "flex", gap: 8 }}>
//             <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(249,115,22,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <AaloFace size={18} />
//             </div>
//             <div style={{ padding: "10px 14px", background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 12, display: "flex", gap: 4 }}>
//               {[0, 1, 2].map(i => (
//                 <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: ORANGE, opacity: 0.7, animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
//               ))}
//             </div>
//           </div>
//         )}
//         <div ref={bottomRef} />
//       </div>

//       {/* Quick replies */}
//       {messages.length <= 2 && (
//         <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "0 14px 8px" }}>
//           {quickReplies.map(q => (
//             <button key={q} onClick={() => send(q)} style={{
//               background: "rgba(249,115,22,0.07)", border: "1px solid rgba(249,115,22,0.2)",
//               color: ORANGE, fontSize: 11, fontFamily: "monospace", padding: "5px 10px",
//               borderRadius: 20, cursor: "pointer",
//             }}>{q}</button>
//           ))}
//         </div>
//       )}

//       {/* Input */}
//       <div style={{ display: "flex", gap: 8, padding: "10px 14px", borderTop: "1px solid rgba(249,115,22,0.1)", flexShrink: 0 }}>
//         <input
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           onKeyDown={e => e.key === "Enter" && send(input)}
//           placeholder="Ask about Ajay..."
//           style={{
//             flex: 1, background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.2)",
//             borderRadius: 8, color: "#e8e6f0", fontSize: 13, padding: "8px 12px", outline: "none",
//             fontFamily: "inherit",
//           }}
//         />
//         <button onClick={() => send(input)} style={{
//           background: ORANGE, border: "none", borderRadius: 8, width: 36, height: 36,
//           cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center",
//         }}>➤</button>
//       </div>
//     </div>
//   );
// }

// function Section({ id, children, style = {} }) {
//   const ref = useRef(null);
//   const [vis, setVis] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return (
//     <section id={id} ref={ref} style={{
//       opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)",
//       transition: "opacity 0.7s ease, transform 0.7s ease",
//       ...style,
//     }}>
//       {children}
//     </section>
//   );
// }

// export default function Portfolio() {
//   const [chatOpen, setChatOpen] = useState(false);
//   const [heroIn, setHeroIn] = useState(false);
//   const [typed, setTyped] = useState("");

//   useEffect(() => {
//     setTimeout(() => setHeroIn(true), 200);
//     const msg = "4 years transforming raw data into strategic intelligence. SQL · Python · Power BI · AWS · ETL";
//     let i = 0;
//     const id = setInterval(() => { setTyped(msg.slice(0, ++i)); if (i >= msg.length) clearInterval(id); }, 38);
//     return () => clearInterval(id);
//   }, []);

//   const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

//   return (
//     <div style={{ fontFamily: "'DM Sans', sans-serif, system-ui", background: DARK_BG, color: "#e8e6f0", minHeight: "100vh", overflowX: "hidden" }}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
//         *{box-sizing:border-box;margin:0;padding:0;}
//         ::-webkit-scrollbar{width:4px;}
//         ::-webkit-scrollbar-thumb{background:#f97316;border-radius:2px;}
//         @keyframes aaloBounce{0%,100%{transform:translateY(0) rotate(-2deg);}50%{transform:translateY(-16px) rotate(2deg);}}
//         @keyframes aaloBounceSmall{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
//         @keyframes floatAnim{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
//         @keyframes shimmer{0%{background-position:-200% center;}100%{background-position:200% center;}}
//         @keyframes gridDrift{0%{transform:translateY(0);}100%{transform:translateY(60px);}}
//         @keyframes typingDot{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-4px);}}
//         .shimmer{background:linear-gradient(90deg,#f97316 0%,#fb923c 40%,#fff 50%,#fb923c 60%,#f97316 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shimmer 4s linear infinite;}
//         .card:hover{transform:translateY(-4px);border-color:rgba(249,115,22,0.4)!important;}
//         .card{transition:transform 0.3s,border-color 0.3s;}
//         .nav-btn:hover{color:#f97316!important;}
//       `}</style>

//       {/* BG grid */}
//       <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
//         <div style={{
//           position: "absolute", inset: 0,
//           backgroundImage: "linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px)",
//           backgroundSize: "60px 60px", animation: "gridDrift 20s linear infinite",
//         }} />
//         <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,0.07) 0%,transparent 70%)" }} />
//         <div style={{ position: "absolute", bottom: "30%", right: "5%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.06) 0%,transparent 70%)" }} />
//       </div>

//       {/* Nav */}
//       <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,15,0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(249,115,22,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6%", height: 60 }}>
//         <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: ORANGE }}>AL</span>
//         <div style={{ display: "flex", gap: 28 }}>
//           {["about", "skills", "experience", "education", "contact"].map(s => (
//             <button key={s} className="nav-btn" onClick={() => scrollTo(s)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: 13, color: "rgba(232,230,240,0.55)", letterSpacing: "0.05em", transition: "color 0.2s", textTransform: "capitalize" }}>{s}</button>
//           ))}
//         </div>
//       </nav>

//       {/* Hero */}
//       <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 8% 60px", position: "relative", zIndex: 1 }}>
//         <div style={{ opacity: heroIn ? 1 : 0, transform: heroIn ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }}>
//           <div style={{ fontFamily: "monospace", fontSize: 13, color: ORANGE, letterSpacing: "0.15em", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
//             <span style={{ display: "inline-block", width: 40, height: 1, background: ORANGE }} />
//             BUSINESS ANALYTICS PROFESSIONAL
//           </div>
//           <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(48px,8vw,88px)", lineHeight: 1.0, marginBottom: 24 }}>
//             <span style={{ textShadow: "0 0 40px rgba(249,115,22,0.5)" }}>Ajay</span><br />
//             <span className="shimmer">Lakkuntla</span>
//           </h1>
//           <p style={{ fontSize: 17, color: "rgba(232,230,240,0.6)", maxWidth: 540, lineHeight: 1.8, marginBottom: 40, fontWeight: 300, minHeight: 28 }}>
//             {typed}<span style={{ borderRight: "2px solid #f97316", animation: "floatAnim 0.8s ease-in-out infinite" }}>&nbsp;</span>
//           </p>
//           <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
//             <button onClick={() => scrollTo("experience")} style={{ padding: "12px 28px", background: ORANGE, border: "none", borderRadius: 4, color: "#fff", fontFamily: "monospace", fontSize: 13, cursor: "pointer", letterSpacing: "0.05em" }}>VIEW WORK →</button>
//             <a href="mailto:ajaylakkuntla21@gmail.com" style={{ padding: "12px 28px", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 4, color: ORANGE, fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>GET IN TOUCH</a>
//           </div>
//         </div>
//         {/* Floating stats */}
//         <div style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 20, opacity: heroIn ? 1 : 0, transition: "opacity 1s ease 0.9s" }}>
//           {[["4+", "YEARS EXP"], ["3", "AWS TOOLS"], ["5+", "BI TOOLS"]].map(([n, l], i) => (
//             <div key={l} style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 8, padding: "18px 22px", textAlign: "center", animation: `floatAnim ${3 + i * 0.7}s ease-in-out ${i * 0.3}s infinite` }}>
//               <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 30, fontWeight: 800, color: ORANGE }}>{n}</div>
//               <div style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(232,230,240,0.4)", letterSpacing: "0.1em" }}>{l}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* About */}
//       <Section id="about" style={{ padding: "100px 8%", position: "relative", zIndex: 1 }}>
//         <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>01 / ABOUT</div>
//         <div style={{ display: "flex", gap: "8%", flexWrap: "wrap", alignItems: "flex-start" }}>
//           <div style={{ flex: "1 1 300px" }}>
//             <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, marginBottom: 22, lineHeight: 1.2 }}>Data Engineer<br /><span style={{ color: ORANGE }}>& Analyst</span></h2>
//             <p style={{ color: "rgba(232,230,240,0.65)", lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>Based in St. Louis, Missouri, I specialize in turning complex data challenges into clean, actionable insights — spanning semiconductor analytics at TCS/NXP and graduate-level Business Analytics.</p>
//             <p style={{ color: "rgba(232,230,240,0.65)", lineHeight: 1.9, fontSize: 15 }}>I bridge raw data pipelines and strategic decisions through Power BI dashboards, Python automation, and AWS data warehousing.</p>
//           </div>
//           <div style={{ flex: "1 1 260px", marginTop: 8 }}>
//             {[["📍", "LOCATION", "St. Louis, Missouri"], ["📧", "EMAIL", "ajaylakkuntla21@gmail.com"], ["🔗", "LINKEDIN", "linkedin.com/in/ajay"], ["🎯", "FOCUS", "Data Engineering & Analytics"]].map(([icon, label, val]) => (
//               <div key={label} className="card" style={{ background: "rgba(249,115,22,0.04)", border: "1px solid rgba(249,115,22,0.1)", borderRadius: 8, padding: "13px 16px", marginBottom: 10, display: "flex", alignItems: "center", gap: 12 }}>
//                 <span style={{ fontSize: 18 }}>{icon}</span>
//                 <div><div style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(232,230,240,0.35)", letterSpacing: "0.1em" }}>{label}</div><div style={{ fontSize: 13, color: "rgba(232,230,240,0.85)", marginTop: 2 }}>{val}</div></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Section>

//       {/* Skills */}
//       <Section id="skills" style={{ padding: "100px 8%", position: "relative", zIndex: 1, background: "rgba(249,115,22,0.015)" }}>
//         <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>02 / SKILLS</div>
//         <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, marginBottom: 50 }}>Technical <span style={{ color: ORANGE }}>Arsenal</span></h2>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 }}>
//           {Object.entries(skills).map(([cat, items]) => (
//             <div key={cat} className="card" style={{ background: "rgba(10,10,15,0.85)", border: "1px solid rgba(249,115,22,0.1)", borderRadius: 12, padding: "22px 18px" }}>
//               <h3 style={{ fontFamily: "monospace", fontSize: 11, color: ORANGE, letterSpacing: "0.1em", marginBottom: 14 }}>{cat.toUpperCase()}</h3>
//               <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
//                 {items.map((s, i) => {
//                   const c = pillColors[i % pillColors.length];
//                   return <span key={s} style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color, padding: "4px 11px", borderRadius: 999, fontSize: 12, fontFamily: "monospace", fontWeight: 500 }}>{s}</span>;
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* Experience */}
//       <Section id="experience" style={{ padding: "100px 8%", position: "relative", zIndex: 1 }}>
//         <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>03 / EXPERIENCE</div>
//         <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, marginBottom: 50 }}>Work <span style={{ color: ORANGE }}>History</span></h2>
//         <div style={{ background: "rgba(10,10,15,0.9)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 16, padding: "36px", position: "relative", overflow: "hidden" }}>
//           <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#f97316,#fb923c,transparent)" }} />
//           <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, marginBottom: 24 }}>
//             <div>
//               <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Data Engineer</h3>
//               <div style={{ fontSize: 15, color: ORANGE, marginBottom: 4 }}>Tata Consultancy Services (TCS)</div>
//               <div style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(232,230,240,0.4)" }}>Hyderabad, India · Client: NXP Semiconductors</div>
//             </div>
//             <div style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: 6, padding: "8px 14px", height: "fit-content", fontFamily: "monospace", fontSize: 12, color: ORANGE }}>Feb 2020 – Jul 2023</div>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 10 }}>
//             {[
//               "Processed & analyzed operational/production datasets for a global semiconductor manufacturer",
//               "Built interactive Power BI dashboards with trend analysis, forecasting, and KPI tracking",
//               "Developed automated data pipelines using Python, Alteryx & ETL processes",
//               "Utilized AWS Glue, Amazon S3 & Redshift for scalable data integration",
//               "Designed relational DB structures & data warehouse tables for reporting efficiency",
//               "Monitored operational databases across AMEC & APAC regions",
//             ].map((h, i) => (
//               <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "11px 14px", background: "rgba(249,115,22,0.04)", border: "1px solid rgba(249,115,22,0.08)", borderRadius: 8 }}>
//                 <span style={{ color: ORANGE, flexShrink: 0, marginTop: 1 }}>▹</span>
//                 <span style={{ fontSize: 13, color: "rgba(232,230,240,0.7)", lineHeight: 1.6 }}>{h}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </Section>

//       {/* Education */}
//       <Section id="education" style={{ padding: "100px 8%", position: "relative", zIndex: 1, background: "rgba(249,115,22,0.015)" }}>
//         <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>04 / EDUCATION</div>
//         <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, marginBottom: 50 }}>Academic <span style={{ color: ORANGE }}>Background</span></h2>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
//           {[["🎓", "M.S. Business Analytics", "Webster University", "St. Louis, MO"], ["🏗️", "B.Tech Civil Engineering", "Guru Nanak Institutions Technical Campus", "Hyderabad, India"]].map(([icon, deg, school, loc]) => (
//             <div key={deg} className="card" style={{ background: "rgba(10,10,15,0.9)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 16, padding: "32px 28px" }}>
//               <div style={{ fontSize: 44, marginBottom: 18 }}>{icon}</div>
//               <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 19, fontWeight: 700, marginBottom: 8 }}>{deg}</h3>
//               <div style={{ color: ORANGE, fontSize: 14, marginBottom: 6 }}>{school}</div>
//               <div style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(232,230,240,0.35)" }}>{loc}</div>
//             </div>
//           ))}
//         </div>
//       </Section>

//       {/* Contact */}
//       <Section id="contact" style={{ padding: "100px 8% 160px", position: "relative", zIndex: 1, textAlign: "center" }}>
//         <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>05 / CONTACT</div>
//         <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(34px,6vw,60px)", fontWeight: 800, marginBottom: 18, lineHeight: 1.1 }}>Let's build something<br /><span style={{ color: ORANGE }}>data-driven.</span></h2>
//         <p style={{ color: "rgba(232,230,240,0.5)", fontSize: 15, maxWidth: 440, margin: "0 auto 44px" }}>Open to data engineering, analytics, and BI roles. Let's talk.</p>
//         <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
//           <a href="mailto:ajaylakkuntla21@gmail.com" style={{ padding: "14px 32px", background: ORANGE, borderRadius: 6, color: "#fff", fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>📧 SEND EMAIL</a>
//           <a href="https://www.linkedin.com/in/ajay/" target="_blank" rel="noopener noreferrer" style={{ padding: "14px 32px", border: "1px solid rgba(249,115,22,0.35)", borderRadius: 6, color: ORANGE, fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>🔗 LINKEDIN</a>
//         </div>
//       </Section>

//       {/* Footer */}
//       <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "20px 8%", borderTop: "1px solid rgba(249,115,22,0.08)", fontFamily: "monospace", fontSize: 11, color: "rgba(232,230,240,0.22)" }}>
//         Ajay Lakkuntla · St. Louis, MO · +1(314) 583 7064
//       </footer>

//       {/* Aalo */}
//       <AaloBot onToggle={() => setChatOpen(o => !o)} />
//       <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
//     </div>
//   );
// }


import { useState, useEffect, useRef } from "react";

const ORANGE = "#f97316";
const DARK_BG = "#0a0a0f";

const skills = {
  "Analytics & Visualization": ["Power BI", "Tableau", "Advanced Excel", "Dashboard Dev", "KPI Reporting"],
  "Programming & Data": ["SQL", "Python", "R Programming", "Statistical Analysis", "Forecasting"],
  "Data Engineering": ["ETL/ELT", "Data Modeling", "Data Warehousing", "ERD", "Data Cleaning"],
  "Cloud & BI Tools": ["AWS Glue", "Amazon Redshift", "Alteryx", "RapidMiner", "SAP"],
};

const pillColors = [
  { bg: "#fff7ed", border: "#fed7aa", color: "#c2410c" },
  { bg: "#eff6ff", border: "#bfdbfe", color: "#1d4ed8" },
  { bg: "#f0fdf4", border: "#bbf7d0", color: "#15803d" },
  { bg: "#fdf4ff", border: "#e9d5ff", color: "#7e22ce" },
  { bg: "#fff1f2", border: "#fecdd3", color: "#be123c" },
];

// ─── AALO LOCAL BRAIN — no API key needed, works 100% offline ───────────────
const AALO_KB = [
  {
    keys: ["skill", "know", "tech", "stack", "tool", "language", "proficient", "expert", "good at", "technical"],
    reply: "Ajay's technical arsenal includes:\n\n🔹 BI & Viz — Power BI, Tableau, Advanced Excel\n🔹 Programming — SQL, Python, R\n🔹 Data Eng — ETL/ELT, Data Modeling, Data Warehousing\n🔹 Cloud — AWS Glue, Amazon S3, Amazon Redshift\n🔹 Tools — Alteryx, RapidMiner, SAP, Salesforce\n\nHe's especially strong at turning messy data into clean, actionable dashboards! 📊",
  },
  {
    keys: ["power bi", "dashboard", "visualization", "tableau", "report", "kpi"],
    reply: "Ajay built interactive Power BI dashboards at TCS for NXP Semiconductors — featuring trend analysis, KPI tracking, and forecasting across AMEC & APAC regions. He's also proficient in Tableau and Advanced Excel for data visualization. 📈",
  },
  {
    keys: ["python", "sql", "r ", "programming", "code", "script", "automat"],
    reply: "Ajay codes in Python, SQL, and R. At TCS he used Python to automate data pipelines and ETL workflows, cutting down manual processing significantly. SQL is his go-to for database queries and data warehouse design. 🐍",
  },
  {
    keys: ["aws", "cloud", "glue", "redshift", "s3", "amazon"],
    reply: "Ajay has hands-on experience with three AWS services:\n\n☁️ AWS Glue — for data integration & transformation\n☁️ Amazon S3 — for scalable data storage\n☁️ Amazon Redshift — for cloud data warehousing\n\nHe used these at TCS to build scalable data pipelines for NXP Semiconductors.",
  },
  {
    keys: ["etl", "pipeline", "alteryx", "data engineering", "warehouse", "model"],
    reply: "Data engineering is Ajay's core strength! He designed and automated ETL/ELT pipelines using Python and Alteryx, built relational DB schemas, and architected data warehouse tables for efficient reporting at TCS. 🏗️",
  },
  {
    keys: ["tcs", "work", "experience", "job", "career", "nxp", "semiconductor", "tata"],
    reply: "Ajay worked as a Data Engineer at Tata Consultancy Services (TCS) from Feb 2020 to Jul 2023, based in Hyderabad. His client was NXP Semiconductors — a global semiconductor giant.\n\nKey wins:\n▹ Power BI dashboards with forecasting\n▹ Automated Python/Alteryx pipelines\n▹ AWS data integration (Glue, S3, Redshift)\n▹ Cross-regional AMEC & APAC reporting",
  },
  {
    keys: ["education", "degree", "study", "university", "college", "mba", "ms", "master", "btech", "bachelor", "webster", "graduate"],
    reply: "Ajay holds two degrees:\n\n🎓 M.S. Business Analytics — Webster University, St. Louis, MO\n🏗️ B.Tech Civil Engineering — Guru Nanak Institutions Technical Campus, Hyderabad, India\n\nHis engineering background gives him a unique analytical edge in data work!",
  },
  {
    keys: ["contact", "reach", "email", "phone", "linkedin", "hire", "available", "open to", "connect"],
    reply: "Ajay is open to data engineering, analytics, and BI roles! Here's how to reach him:\n\n📧 ajaylakkuntla21@gmail.com\n🔗 linkedin.com/in/ajay\n📞 +1 (314) 583 7064\n📍 St. Louis, Missouri\n\nDon't hesitate — great data talent goes fast! ⚡",
  },
  {
    keys: ["location", "where", "city", "based", "missouri", "st. louis", "louis"],
    reply: "Ajay is based in St. Louis, Missouri. He's open to both local opportunities and remote roles in data engineering and analytics! 📍",
  },
  {
    keys: ["who", "about", "ajay", "tell me", "introduce", "background", "profile", "summary"],
    reply: "Ajay Lakkuntla is a Data Engineer & Business Analytics professional with 4+ years of experience.\n\nHe transforms raw data into strategic insights using Power BI, Python, SQL, and AWS. He's worked at TCS on NXP Semiconductors' global data infrastructure, and holds an M.S. in Business Analytics from Webster University.\n\nShort version: he makes data actually useful. 😄",
  },
  {
    keys: ["hello", "hi", "hey", "howdy", "sup", "good morning", "good afternoon", "hola"],
    reply: "Hey there! I'm Aalo, Ajay's AI analytics assistant! 👋\n\nI can tell you all about Ajay's skills, work experience, education, or how to get in touch. What would you like to know? 🤖✨",
  },
  {
    keys: ["thank", "thanks", "great", "awesome", "perfect", "cool", "nice", "helpful"],
    reply: "Happy to help! Data is my language. 😄 Feel free to ask anything else about Ajay — or go ahead and reach out to him directly at ajaylakkuntla21@gmail.com! 🚀",
  },
  {
    keys: ["forecast", "prediction", "statistic", "regression", "analysis", "mining"],
    reply: "Ajay is skilled in statistical analysis, regression, forecasting, and data mining. At TCS he built forecasting models into Power BI dashboards to help NXP make data-driven production decisions. Numbers don't lie — and Ajay makes sure they tell the right story! 📉📈",
  },
  {
    keys: ["project", "portfolio", "work sample", "example", "built", "created"],
    reply: "At TCS, Ajay's main project was building a comprehensive data analytics platform for NXP Semiconductors — covering global production data, automated pipelines, Power BI dashboards, and cloud warehousing on AWS. It spanned AMEC & APAC operations! 🌍",
  },
];

function aaloReply(input) {
  const q = input.toLowerCase();
  for (const item of AALO_KB) {
    if (item.keys.some(k => q.includes(k))) return item.reply;
  }
  return "Great question! I'm not 100% sure on that one, but Ajay would love to answer it directly.\n\n📧 ajaylakkuntla21@gmail.com\n🔗 linkedin.com/in/ajay\n\nDrop him a message — he responds fast! ⚡";
}
// ─────────────────────────────────────────────────────────────────────────────

function AaloFace({ size = 64 }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 72 80" fill="none">
      <rect x="34" y="2" width="4" height="14" rx="2" fill={ORANGE} />
      <circle cx="36" cy="4" r="5" fill={ORANGE} />
      <ellipse cx="36" cy="42" rx="26" ry="24" fill={ORANGE} />
      <ellipse cx="28" cy="32" rx="7" ry="4" fill="rgba(255,255,255,0.12)" transform="rotate(-20 28 32)" />
      <ellipse cx="36" cy="44" rx="20" ry="17" fill="#1a0800" />
      <ellipse cx="28" cy="40" rx="5" ry="5.5" fill={ORANGE} />
      <ellipse cx="44" cy="40" rx="5" ry="5.5" fill={ORANGE} />
      <circle cx="30" cy="38" r="1.5" fill="white" opacity="0.9" />
      <circle cx="46" cy="38" r="1.5" fill="white" opacity="0.9" />
      <path d="M26 52 Q36 60 46 52" stroke={ORANGE} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="26" cy="52" r="1.5" fill={ORANGE} />
      <circle cx="46" cy="52" r="1.5" fill={ORANGE} />
      <ellipse cx="10" cy="42" rx="5" ry="8" fill="#e06010" />
      <ellipse cx="62" cy="42" rx="5" ry="8" fill="#e06010" />
    </svg>
  );
}

function AaloBot({ onToggle }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onToggle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 999,
        cursor: "pointer",
        animation: hover ? "none" : "aaloBounce 2.8s ease-in-out infinite",
        filter: `drop-shadow(0 6px 20px rgba(249,115,22,${hover ? "0.7" : "0.4"}))`,
        transition: "filter 0.2s",
      }}
    >
      <AaloFace size={68} />
      <div style={{
        textAlign: "center", marginTop: 4,
        fontFamily: "monospace", fontSize: 10, color: ORANGE, letterSpacing: "0.15em",
      }}>AALO</div>
    </div>
  );
}

function ChatPanel({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm Aalo ✦\nAsk me anything about Ajay's skills, experience, or how to reach him!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text) => {
    if (!text.trim() || loading) return;
    const userMsg = text.trim();
    setInput("");
    setMessages(m => [...m, { role: "user", text: userMsg }]);
    setLoading(true);
    // Simulate a natural typing delay (no API needed)
    await new Promise(r => setTimeout(r, 700 + Math.random() * 600));
    const reply = aaloReply(userMsg);
    setMessages(m => [...m, { role: "bot", text: reply }]);
    setLoading(false);
  };

  const quickReplies = ["Top skills", "Work at TCS", "AWS tools", "How to contact Ajay"];

  return (
    <div style={{
      position: "fixed", bottom: 0, right: 0, width: 340, height: 500,
      background: "#0f0f1a", border: "1px solid rgba(249,115,22,0.25)",
      borderRadius: "16px 16px 0 0", zIndex: 1000, display: "flex", flexDirection: "column",
      transform: open ? "translateY(0)" : "translateY(100%)",
      transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
    }}>
      {/* Header */}
      <div style={{
        background: "rgba(249,115,22,0.08)", borderBottom: "1px solid rgba(249,115,22,0.15)",
        padding: "10px 14px", display: "flex", alignItems: "center", gap: 10,
        borderRadius: "16px 16px 0 0", flexShrink: 0,
      }}>
        <div style={{ animation: "aaloBounceSmall 2.5s ease-in-out infinite" }}>
          <AaloFace size={30} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700, fontSize: 15, color: ORANGE }}>Aalo</div>
          <div style={{ fontSize: 10, color: "rgba(232,230,240,0.4)", fontFamily: "monospace" }}>Ajay's AI Assistant</div>
        </div>
        <button onClick={onClose} style={{
          background: "none", border: "none", color: "rgba(232,230,240,0.4)",
          fontSize: 18, cursor: "pointer", lineHeight: 1, padding: 4,
        }}>✕</button>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", gap: 8, flexDirection: m.role === "user" ? "row-reverse" : "row" }}>
            {m.role === "bot" && (
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(249,115,22,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <AaloFace size={18} />
              </div>
            )}
            <div style={{
              maxWidth: "78%", padding: "9px 13px", borderRadius: 12, fontSize: 13, lineHeight: 1.6,
              background: m.role === "bot" ? "rgba(249,115,22,0.08)" : ORANGE,
              border: m.role === "bot" ? "1px solid rgba(249,115,22,0.15)" : "none",
              color: m.role === "bot" ? "rgba(232,230,240,0.88)" : "#fff",
              whiteSpace: "pre-wrap",
            }}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(249,115,22,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <AaloFace size={18} />
            </div>
            <div style={{ padding: "10px 14px", background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 12, display: "flex", gap: 4 }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: ORANGE, opacity: 0.7, animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick replies */}
      {messages.length <= 2 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, padding: "0 14px 8px" }}>
          {quickReplies.map(q => (
            <button key={q} onClick={() => send(q)} style={{
              background: "rgba(249,115,22,0.07)", border: "1px solid rgba(249,115,22,0.2)",
              color: ORANGE, fontSize: 11, fontFamily: "monospace", padding: "5px 10px",
              borderRadius: 20, cursor: "pointer",
            }}>{q}</button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{ display: "flex", gap: 8, padding: "10px 14px", borderTop: "1px solid rgba(249,115,22,0.1)", flexShrink: 0 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send(input)}
          placeholder="Ask about Ajay..."
          style={{
            flex: 1, background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.2)",
            borderRadius: 8, color: "#e8e6f0", fontSize: 13, padding: "8px 12px", outline: "none",
            fontFamily: "inherit",
          }}
        />
        <button onClick={() => send(input)} style={{
          background: ORANGE, border: "none", borderRadius: 8, width: 36, height: 36,
          cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center",
        }}>➤</button>
      </div>
    </div>
  );
}

function Section({ id, children, style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section id={id} ref={ref} style={{
      opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
      ...style,
    }}>
      {children}
    </section>
  );
}

export default function Portfolio() {
  const [chatOpen, setChatOpen] = useState(false);
  const [heroIn, setHeroIn] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTimeout(() => setHeroIn(true), 200);
    const msg = "4 years transforming raw data into strategic intelligence. SQL · Python · Power BI · AWS · ETL";
    let i = 0;
    const id = setInterval(() => { setTyped(msg.slice(0, ++i)); if (i >= msg.length) clearInterval(id); }, 38);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif, system-ui", background: DARK_BG, color: "#e8e6f0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-thumb{background:#f97316;border-radius:2px;}
        @keyframes aaloBounce{0%,100%{transform:translateY(0) rotate(-2deg);}50%{transform:translateY(-16px) rotate(2deg);}}
        @keyframes aaloBounceSmall{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
        @keyframes floatAnim{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
        @keyframes shimmer{0%{background-position:-200% center;}100%{background-position:200% center;}}
        @keyframes gridDrift{0%{transform:translateY(0);}100%{transform:translateY(60px);}}
        @keyframes typingDot{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-4px);}}
        .shimmer{background:linear-gradient(90deg,#f97316 0%,#fb923c 40%,#fff 50%,#fb923c 60%,#f97316 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shimmer 4s linear infinite;}
        .card:hover{transform:translateY(-4px);border-color:rgba(249,115,22,0.4)!important;}
        .card{transition:transform 0.3s,border-color 0.3s;}
        .nav-btn:hover{color:#f97316!important;}
      `}</style>

      {/* BG grid */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px)",
          backgroundSize: "60px 60px", animation: "gridDrift 20s linear infinite",
        }} />
        <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,0.07) 0%,transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "30%", right: "5%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.06) 0%,transparent 70%)" }} />
      </div>

      {/* Nav */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,15,0.88)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(249,115,22,0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 6%", height: 60 }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: 20, color: ORANGE }}>AL</span>
        <div style={{ display: "flex", gap: 28 }}>
          {["about", "skills", "experience", "education", "contact"].map(s => (
            <button key={s} className="nav-btn" onClick={() => scrollTo(s)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: 13, color: "rgba(232,230,240,0.55)", letterSpacing: "0.05em", transition: "color 0.2s", textTransform: "capitalize" }}>{s}</button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 8% 60px", position: "relative", zIndex: 1 }}>
        <div style={{ opacity: heroIn ? 1 : 0, transform: heroIn ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }}>
          <div style={{ fontFamily: "monospace", fontSize: 13, color: ORANGE, letterSpacing: "0.15em", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: ORANGE }} />
            BUSINESS ANALYTICS PROFESSIONAL
          </div>
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(48px,8vw,88px)", lineHeight: 1.0, marginBottom: 24 }}>
            <span style={{ textShadow: "0 0 40px rgba(249,115,22,0.5)" }}>Ajay</span><br />
            <span className="shimmer">Lakkuntla</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(232,230,240,0.6)", maxWidth: 540, lineHeight: 1.8, marginBottom: 40, fontWeight: 300, minHeight: 28 }}>
            {typed}<span style={{ borderRight: "2px solid #f97316", animation: "floatAnim 0.8s ease-in-out infinite" }}>&nbsp;</span>
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("experience")} style={{ padding: "12px 28px", background: ORANGE, border: "none", borderRadius: 4, color: "#fff", fontFamily: "monospace", fontSize: 13, cursor: "pointer", letterSpacing: "0.05em" }}>VIEW WORK →</button>
            <a href="mailto:ajaylakkuntla21@gmail.com" style={{ padding: "12px 28px", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 4, color: ORANGE, fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>GET IN TOUCH</a>
          </div>
        </div>
        {/* Floating stats */}
        <div style={{ position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: 20, opacity: heroIn ? 1 : 0, transition: "opacity 1s ease 0.9s" }}>
          {[["4+", "YEARS EXP"], ["3", "AWS TOOLS"], ["5+", "BI TOOLS"]].map(([n, l], i) => (
            <div key={l} style={{ background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 8, padding: "18px 22px", textAlign: "center", animation: `floatAnim ${3 + i * 0.7}s ease-in-out ${i * 0.3}s infinite` }}>
              <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 30, fontWeight: 800, color: ORANGE }}>{n}</div>
              <div style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(232,230,240,0.4)", letterSpacing: "0.1em" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <Section id="about" style={{ padding: "100px 8%", position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>01 / ABOUT</div>
        <div style={{ display: "flex", gap: "8%", flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 300px" }}>
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, marginBottom: 22, lineHeight: 1.2 }}>Data Engineer<br /><span style={{ color: ORANGE }}>& Analyst</span></h2>
            <p style={{ color: "rgba(232,230,240,0.65)", lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>Based in St. Louis, Missouri, I specialize in turning complex data challenges into clean, actionable insights — spanning semiconductor analytics at TCS/NXP and graduate-level Business Analytics.</p>
            <p style={{ color: "rgba(232,230,240,0.65)", lineHeight: 1.9, fontSize: 15 }}>I bridge raw data pipelines and strategic decisions through Power BI dashboards, Python automation, and AWS data warehousing.</p>
          </div>
          <div style={{ flex: "1 1 260px", marginTop: 8 }}>
            {[["📍", "LOCATION", "St. Louis, Missouri"], ["📧", "EMAIL", "ajaylakkuntla21@gmail.com"], ["🔗", "LINKEDIN", "linkedin.com/in/ajay"], ["🎯", "FOCUS", "Data Engineering & Analytics"]].map(([icon, label, val]) => (
              <div key={label} className="card" style={{ background: "rgba(249,115,22,0.04)", border: "1px solid rgba(249,115,22,0.1)", borderRadius: 8, padding: "13px 16px", marginBottom: 10, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 18 }}>{icon}</span>
                <div><div style={{ fontFamily: "monospace", fontSize: 10, color: "rgba(232,230,240,0.35)", letterSpacing: "0.1em" }}>{label}</div><div style={{ fontSize: 13, color: "rgba(232,230,240,0.85)", marginTop: 2 }}>{val}</div></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" style={{ padding: "100px 8%", position: "relative", zIndex: 1, background: "rgba(249,115,22,0.015)" }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>02 / SKILLS</div>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, marginBottom: 50 }}>Technical <span style={{ color: ORANGE }}>Arsenal</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 }}>
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="card" style={{ background: "rgba(10,10,15,0.85)", border: "1px solid rgba(249,115,22,0.1)", borderRadius: 12, padding: "22px 18px" }}>
              <h3 style={{ fontFamily: "monospace", fontSize: 11, color: ORANGE, letterSpacing: "0.1em", marginBottom: 14 }}>{cat.toUpperCase()}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {items.map((s, i) => {
                  const c = pillColors[i % pillColors.length];
                  return <span key={s} style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color, padding: "4px 11px", borderRadius: 999, fontSize: 12, fontFamily: "monospace", fontWeight: 500 }}>{s}</span>;
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" style={{ padding: "100px 8%", position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>03 / EXPERIENCE</div>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, marginBottom: 50 }}>Work <span style={{ color: ORANGE }}>History</span></h2>
        <div style={{ background: "rgba(10,10,15,0.9)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 16, padding: "36px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#f97316,#fb923c,transparent)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 14, marginBottom: 24 }}>
            <div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Data Engineer</h3>
              <div style={{ fontSize: 15, color: ORANGE, marginBottom: 4 }}>Tata Consultancy Services (TCS)</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(232,230,240,0.4)" }}>Hyderabad, India · Client: NXP Semiconductors</div>
            </div>
            <div style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: 6, padding: "8px 14px", height: "fit-content", fontFamily: "monospace", fontSize: 12, color: ORANGE }}>Feb 2020 – Jul 2023</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 10 }}>
            {[
              "Processed & analyzed operational/production datasets for a global semiconductor manufacturer",
              "Built interactive Power BI dashboards with trend analysis, forecasting, and KPI tracking",
              "Developed automated data pipelines using Python, Alteryx & ETL processes",
              "Utilized AWS Glue, Amazon S3 & Redshift for scalable data integration",
              "Designed relational DB structures & data warehouse tables for reporting efficiency",
              "Monitored operational databases across AMEC & APAC regions",
            ].map((h, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", padding: "11px 14px", background: "rgba(249,115,22,0.04)", border: "1px solid rgba(249,115,22,0.08)", borderRadius: 8 }}>
                <span style={{ color: ORANGE, flexShrink: 0, marginTop: 1 }}>▹</span>
                <span style={{ fontSize: 13, color: "rgba(232,230,240,0.7)", lineHeight: 1.6 }}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" style={{ padding: "100px 8%", position: "relative", zIndex: 1, background: "rgba(249,115,22,0.015)" }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>04 / EDUCATION</div>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, marginBottom: 50 }}>Academic <span style={{ color: ORANGE }}>Background</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
          {[["🎓", "M.S. Business Analytics", "Webster University", "St. Louis, MO"], ["🏗️", "B.Tech Civil Engineering", "Guru Nanak Institutions Technical Campus", "Hyderabad, India"]].map(([icon, deg, school, loc]) => (
            <div key={deg} className="card" style={{ background: "rgba(10,10,15,0.9)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 16, padding: "32px 28px" }}>
              <div style={{ fontSize: 44, marginBottom: 18 }}>{icon}</div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 19, fontWeight: 700, marginBottom: 8 }}>{deg}</h3>
              <div style={{ color: ORANGE, fontSize: 14, marginBottom: 6 }}>{school}</div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: "rgba(232,230,240,0.35)" }}>{loc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" style={{ padding: "100px 8% 160px", position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>05 / CONTACT</div>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(34px,6vw,60px)", fontWeight: 800, marginBottom: 18, lineHeight: 1.1 }}>Let's build something<br /><span style={{ color: ORANGE }}>data-driven.</span></h2>
        <p style={{ color: "rgba(232,230,240,0.5)", fontSize: 15, maxWidth: 440, margin: "0 auto 44px" }}>Open to data engineering, analytics, and BI roles. Let's talk.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:ajaylakkuntla21@gmail.com" style={{ padding: "14px 32px", background: ORANGE, borderRadius: 6, color: "#fff", fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>📧 SEND EMAIL</a>
          <a href="https://www.linkedin.com/in/ajay/" target="_blank" rel="noopener noreferrer" style={{ padding: "14px 32px", border: "1px solid rgba(249,115,22,0.35)", borderRadius: 6, color: ORANGE, fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>🔗 LINKEDIN</a>
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "20px 8%", borderTop: "1px solid rgba(249,115,22,0.08)", fontFamily: "monospace", fontSize: 11, color: "rgba(232,230,240,0.22)" }}>
        Ajay Lakkuntla · St. Louis, MO · +1(314) 583 7064
      </footer>

      {/* Aalo */}
      <AaloBot onToggle={() => setChatOpen(o => !o)} />
      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}