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

//------start
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

// // ─── AALO LOCAL BRAIN — no API key needed, works 100% offline ───────────────
// const AALO_KB = [
//   {
//     keys: ["skill", "know", "tech", "stack", "tool", "language", "proficient", "expert", "good at", "technical"],
//     reply: "Ajay's technical arsenal includes:\n\n🔹 BI & Viz — Power BI, Tableau, Advanced Excel\n🔹 Programming — SQL, Python, R\n🔹 Data Eng — ETL/ELT, Data Modeling, Data Warehousing\n🔹 Cloud — AWS Glue, Amazon S3, Amazon Redshift\n🔹 Tools — Alteryx, RapidMiner, SAP, Salesforce\n\nHe's especially strong at turning messy data into clean, actionable dashboards! 📊",
//   },
//   {
//     keys: ["power bi", "dashboard", "visualization", "tableau", "report", "kpi"],
//     reply: "Ajay built interactive Power BI dashboards at TCS for NXP Semiconductors — featuring trend analysis, KPI tracking, and forecasting across AMEC & APAC regions. He's also proficient in Tableau and Advanced Excel for data visualization. 📈",
//   },
//   {
//     keys: ["python", "sql", "r ", "programming", "code", "script", "automat"],
//     reply: "Ajay codes in Python, SQL, and R. At TCS he used Python to automate data pipelines and ETL workflows, cutting down manual processing significantly. SQL is his go-to for database queries and data warehouse design. 🐍",
//   },
//   {
//     keys: ["aws", "cloud", "glue", "redshift", "s3", "amazon"],
//     reply: "Ajay has hands-on experience with three AWS services:\n\n☁️ AWS Glue — for data integration & transformation\n☁️ Amazon S3 — for scalable data storage\n☁️ Amazon Redshift — for cloud data warehousing\n\nHe used these at TCS to build scalable data pipelines for NXP Semiconductors.",
//   },
//   {
//     keys: ["etl", "pipeline", "alteryx", "data engineering", "warehouse", "model"],
//     reply: "Data engineering is Ajay's core strength! He designed and automated ETL/ELT pipelines using Python and Alteryx, built relational DB schemas, and architected data warehouse tables for efficient reporting at TCS. 🏗️",
//   },
//   {
//     keys: ["tcs", "work", "experience", "job", "career", "nxp", "semiconductor", "tata"],
//     reply: "Ajay worked as a Data Engineer at Tata Consultancy Services (TCS) from Feb 2020 to Jul 2023, based in Hyderabad. His client was NXP Semiconductors — a global semiconductor giant.\n\nKey wins:\n▹ Power BI dashboards with forecasting\n▹ Automated Python/Alteryx pipelines\n▹ AWS data integration (Glue, S3, Redshift)\n▹ Cross-regional AMEC & APAC reporting",
//   },
//   {
//     keys: ["education", "degree", "study", "university", "college", "mba", "ms", "master", "btech", "bachelor", "webster", "graduate"],
//     reply: "Ajay holds two degrees:\n\n🎓 M.S. Business Analytics — Webster University, St. Louis, MO\n🏗️ B.Tech Civil Engineering — Guru Nanak Institutions Technical Campus, Hyderabad, India\n\nHis engineering background gives him a unique analytical edge in data work!",
//   },
//   {
//     keys: ["contact", "reach", "email", "phone", "linkedin", "hire", "available", "open to", "connect"],
//     reply: "Ajay is open to data engineering, analytics, and BI roles! Here's how to reach him:\n\n📧 ajaylakkuntla21@gmail.com\n🔗 linkedin.com/in/ajay\n📞 +1 (314) 583 7064\n📍 St. Louis, Missouri\n\nDon't hesitate — great data talent goes fast! ⚡",
//   },
//   {
//     keys: ["location", "where", "city", "based", "missouri", "st. louis", "louis"],
//     reply: "Ajay is based in St. Louis, Missouri. He's open to both local opportunities and remote roles in data engineering and analytics! 📍",
//   },
//   {
//     keys: ["who", "about", "ajay", "tell me", "introduce", "background", "profile", "summary"],
//     reply: "Ajay Lakkuntla is a Data Engineer & Business Analytics professional with 4+ years of experience.\n\nHe transforms raw data into strategic insights using Power BI, Python, SQL, and AWS. He's worked at TCS on NXP Semiconductors' global data infrastructure, and holds an M.S. in Business Analytics from Webster University.\n\nShort version: he makes data actually useful. 😄",
//   },
//   {
//     keys: ["hello", "hi", "hey", "howdy", "sup", "good morning", "good afternoon", "hola"],
//     reply: "Hey there! I'm Aalo, Ajay's AI analytics assistant! 👋\n\nI can tell you all about Ajay's skills, work experience, education, or how to get in touch. What would you like to know? 🤖✨",
//   },
//   {
//     keys: ["thank", "thanks", "great", "awesome", "perfect", "cool", "nice", "helpful"],
//     reply: "Happy to help! Data is my language. 😄 Feel free to ask anything else about Ajay — or go ahead and reach out to him directly at ajaylakkuntla21@gmail.com! 🚀",
//   },
//   {
//     keys: ["forecast", "prediction", "statistic", "regression", "analysis", "mining"],
//     reply: "Ajay is skilled in statistical analysis, regression, forecasting, and data mining. At TCS he built forecasting models into Power BI dashboards to help NXP make data-driven production decisions. Numbers don't lie — and Ajay makes sure they tell the right story! 📉📈",
//   },
//   {
//     keys: ["project", "portfolio", "work sample", "example", "built", "created"],
//     reply: "At TCS, Ajay's main project was building a comprehensive data analytics platform for NXP Semiconductors — covering global production data, automated pipelines, Power BI dashboards, and cloud warehousing on AWS. It spanned AMEC & APAC operations! 🌍",
//   },
// ];

// function aaloReply(input) {
//   const q = input.toLowerCase();
//   for (const item of AALO_KB) {
//     if (item.keys.some(k => q.includes(k))) return item.reply;
//   }
//   return "Great question! I'm not 100% sure on that one, but Ajay would love to answer it directly.\n\n📧 ajaylakkuntla21@gmail.com\n🔗 linkedin.com/in/ajay\n\nDrop him a message — he responds fast! ⚡";
// }
// // ─────────────────────────────────────────────────────────────────────────────

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
//     // Simulate a natural typing delay (no API needed)
//     await new Promise(r => setTimeout(r, 700 + Math.random() * 600));
//     const reply = aaloReply(userMsg);
//     setMessages(m => [...m, { role: "bot", text: reply }]);
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
const AALO_SRC = "data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=";

/* ─── Skills ──────────────────────────────────────────────────────────────── */
const skills = {
  "DevOps & System Tools": ["GitHub","Gearset","DevOps Center","Jira","Datadog","Workflow Automation"],
  "Programming & Scripting": ["Python","SQL","BigQuery","Redshift"],
  "Cloud & Infrastructure": ["AWS S3","Apache Airflow","ETL","Data Transformation"],
  "Enterprise Platforms": ["Salesforce Admin","Salesforce App Builder","Netsuite","Shopify Plus","Shopify B2B","Marketo"],
  "BI & Visualization": ["Power BI","Tableau","Looker","Data Modeling","Predictive Modeling"],
  "Data Science": ["Pandas","Scikit-learn","Statistical Methods","A/B Testing"],
};

const pillColors = [
  { bg:"#fff7ed",border:"#fed7aa",color:"#c2410c" },
  { bg:"#eff6ff",border:"#bfdbfe",color:"#1d4ed8" },
  { bg:"#f0fdf4",border:"#bbf7d0",color:"#15803d" },
  { bg:"#fdf4ff",border:"#e9d5ff",color:"#7e22ce" },
  { bg:"#fff1f2",border:"#fecdd3",color:"#be123c" },
];

/* ─── Experience ──────────────────────────────────────────────────────────── */
const experience = [
  {
    company: "DraftKings Inc.",
    role: "Business Analyst",
    period: "Jul 2024 – Present",
    location: "United States",
    bullets: [
      "Developed technical requirements for player engagement platforms, translating complex business needs from marketing & product teams into actionable specifications.",
      "Performed hands-on configuration of gaming product analytics platforms and validated data logic to support critical business decisions.",
      "Managed product backlog for digital systems initiatives in Jira — prioritising enhancement requests and ensuring clear specifications for feature development.",
      "Designed current and future state data workflows for transactional and player data, identifying bottlenecks between analytical and operational systems.",
      "Built automated Power BI reporting solutions and Looker dashboards delivering insights on user acquisition and contest performance to stakeholders.",
      "Developed ETL jobs via Apache Airflow to integrate internal and external data sources, ensuring high data quality for marketing campaigns.",
      "Created predictive models in Python to forecast customer churn, supporting more effective retention strategies for digital gaming products.",
      "Implemented A/B testing analysis with Python and statistical methods, optimising UI elements to improve conversion rates for new gaming features.",
      "Utilised AWS S3 and Redshift for efficient data storage and retrieval, supporting large-scale analytics projects.",
    ],
  },
  {
    company: "Hover",
    role: "Data Analyst",
    period: "Sep 2021 – Jul 2023",
    location: "United States",
    bullets: [
      "Extracted complex property measurement data using SQL queries in BigQuery, supporting critical BI needs for construction and insurance sectors.",
      "Implemented data validation routines using SQL and Python scripts, enhancing reliability of incoming 3D measurement datasets for property modelling.",
      "Built interactive Tableau dashboards visualising key KPIs for property scan accuracy and processing efficiency across departments.",
      "Provided data-driven insights via Looker reports, directly improving decision-making for product development within 3D property modelling tools.",
      "Designed Salesforce CRM integration workflows with internal property management systems, enhancing data consistency for sales and service teams.",
      "Gathered business requirements for eCommerce platform enhancements on Shopify, translating stakeholder needs into technical specifications.",
      "Mapped current and future state data flows between ERP and CRM systems, identifying bottlenecks impacting operational efficiency for property data.",
      "Configured Marketo marketing automation to support targeted campaigns for new 3D modelling tool features and customer engagement.",
      "Automated configuration deployments and version control using GitHub, improving reliability of updates across core business applications.",
    ],
  },
];

/* ─── Aalo KB ─────────────────────────────────────────────────────────────── */
const AALO_KB = [
  { keys:["draftkings","draftking","gaming","player","engagement","churn","bet"],
    reply:"At DraftKings Ajay works as a Business Analyst (Jul 2024–Present):\n\n▹ Built Power BI & Looker dashboards for user acquisition & contest insights\n▹ Created Python predictive models to forecast customer churn\n▹ Ran A/B testing to optimise gaming UI conversion rates\n▹ Built Apache Airflow ETL jobs integrating internal and external data\n▹ Used AWS S3 & Redshift for large-scale analytics\n\nHe translates complex business needs into actionable tech specs for dev teams! 🎯"},
  { keys:["hover","property","3d","construction","insurance","scan"],
    reply:"At Hover (Sep 2021–Jul 2023) Ajay was a Data Analyst:\n\n▹ SQL queries in BigQuery for 3D property measurement data\n▹ Tableau & Looker dashboards for property scan KPIs\n▹ Salesforce CRM integration with internal property systems\n▹ Shopify eCommerce requirement gathering\n▹ Marketo marketing automation configuration\n▹ GitHub version-control automation for deployments\n\nA fascinating mix of data engineering and business analytics! 🏗️"},
  { keys:["skill","know","tech","stack","tool","language","proficient","expert","good at","technical"],
    reply:"Ajay's full technical stack:\n\n🔹 DevOps & Systems — GitHub, Gearset, DevOps Center, Jira, Datadog\n🔹 Programming — Python, SQL, BigQuery, Redshift\n🔹 Cloud — AWS S3, Apache Airflow, ETL\n🔹 Enterprise — Salesforce Admin, Netsuite, Shopify Plus, Marketo\n🔹 BI & Viz — Power BI, Tableau, Looker\n🔹 Data Science — Pandas, Scikit-learn, A/B Testing, Predictive Modelling\n\nHe's especially strong at bridging raw data and strategic decisions! 📊"},
  { keys:["power bi","dashboard","visualization","tableau","looker","kpi","report"],
    reply:"Ajay has built dashboards across three platforms:\n\n📊 Power BI — automated reporting at DraftKings for user acquisition & contests\n📈 Tableau — property scan accuracy & KPI dashboards at Hover\n🔍 Looker — product development insights at Hover & stakeholder reporting at DraftKings\n\nHis dashboards drive real decisions, not just pretty charts!"},
  { keys:["python","sql","ab test","a/b","predictive","churn","model","machine learning","scikit"],
    reply:"Ajay codes in Python and SQL:\n\n🐍 Python — churn predictive models, A/B testing analysis, ETL scripting, data validation\n🗃️ SQL — complex queries in BigQuery (Hover) and data integrity checks (DraftKings)\n📦 Libraries — Pandas, Scikit-learn, statistical methods\n\nHe uses data science to answer real business questions, not just academic exercises!"},
  { keys:["aws","airflow","etl","pipeline","cloud","s3","redshift","data engineer"],
    reply:"Ajay's data engineering toolkit:\n\n☁️ AWS S3 — scalable data storage at DraftKings\n🏭 Amazon Redshift — cloud data warehousing for large-scale analytics\n🔄 Apache Airflow — ETL job orchestration integrating internal & external sources\n🧹 ETL/Data Transformation — ensuring high data quality for marketing campaigns\n\nHe builds the pipelines that keep everything flowing! 🚰"},
  { keys:["salesforce","crm","netsuite","shopify","marketo","erp"],
    reply:"Ajay has deep experience with enterprise platforms:\n\n💼 Salesforce — CRM integration & administration at Hover\n🛍️ Shopify Plus / B2B — eCommerce requirement gathering at Hover\n📬 Marketo — marketing automation for targeted campaigns\n🏢 Netsuite — ERP system experience\n\nHe's the bridge between business teams and technical systems!"},
  { keys:["jira","backlog","agile","scrum","sprint","product"],
    reply:"Ajay manages product backlogs like a pro! At DraftKings he:\n\n📋 Manages the product backlog for digital systems initiatives in Jira\n🎯 Prioritises enhancement requests from stakeholders\n✅ Ensures clear, actionable specifications for development teams\n🗺️ Designs current and future state data workflows\n\nHe keeps sprints focused and teams unblocked!"},
  { keys:["work","experience","job","career","background","history"],
    reply:"Ajay has 4+ years of experience across two companies:\n\n🎯 DraftKings Inc. — Business Analyst (Jul 2024–Present)\n   Gaming analytics, player engagement, churn modelling, A/B testing\n\n🏗️ Hover — Data Analyst (Sep 2021–Jul 2023)\n   Property data, 3D measurement, Salesforce CRM, BI dashboards\n\nPlus an M.S. in Business Analytics from Webster University!"},
  { keys:["education","degree","study","university","college","mba","ms","master","btech","bachelor","webster","graduate"],
    reply:"Ajay holds two degrees:\n\n🎓 M.S. Business Analytics — Webster University, St. Louis, MO (Dec 2025)\n🏗️ B.Tech Civil Engineering — Guru Nanak Institutions Technical Campus, Hyderabad, India\n\nHis engineering background gives him a unique structured-thinking edge in data work!"},
  { keys:["contact","reach","email","phone","linkedin","hire","available","open to","connect"],
    reply:"Ajay is actively open to data analytics and BA roles!\n\n📧 ajaylakkuntla21@gmail.com\n📞 +1 (314) 583 7064\n📍 United States\n\nDon't hesitate — great analysts with real industry experience don't stay on the market long! ⚡"},
  { keys:["who","about","ajay","tell me","introduce","profile","summary"],
    reply:"Ajay Lakkuntla is a Business Analyst with 4+ years of experience optimising digital systems and data workflows.\n\nHe specialises in translating complex business needs into actionable specs for CRM, ERP, and eCommerce platforms (Salesforce, Shopify, Netsuite). Strong in SQL, Python, BigQuery, Apache Airflow, Tableau, and Power BI.\n\nCurrently at DraftKings building player analytics — previously at Hover doing 3D property data. Holds an M.S. in Business Analytics from Webster University."},
  { keys:["hello","hi","hey","howdy","good morning","good afternoon","hola"],
    reply:"Hey there! I'm Aalo, Ajay's AI assistant! 👋\n\nI can tell you all about Ajay's skills, experience at DraftKings & Hover, education, or how to get in touch. What would you like to know? 🤖✨"},
  { keys:["thank","thanks","great","awesome","perfect","cool","helpful"],
    reply:"Happy to help! 😄 Feel free to ask anything else about Ajay — or reach out directly at ajaylakkuntla21@gmail.com! 🚀"},
];

function aaloReply(input) {
  const q = input.toLowerCase();
  for (const item of AALO_KB) {
    if (item.keys.some(k => q.includes(k))) return item.reply;
  }
  return "Great question! I'm not 100% sure on that one, but Ajay would love to answer it directly.\n\n📧 ajaylakkuntla21@gmail.com\n📞 +1 (314) 583 7064\n\nDrop him a message — he responds fast! ⚡";
}

/* ─── Aalo Bot Icon — mix-blend-mode removes black bg ──────────────────────── */
function AaloIcon({ size = 60 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", overflow: "hidden", background: "transparent", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <img
        src={AALO_SRC}
        alt="Aalo"
        width={size}
        height={size}
        style={{ objectFit:"cover", mixBlendMode:"screen", display:"block" }}
      />
    </div>
  );
}

/* ─── Chat Panel ──────────────────────────────────────────────────────────── */
function ChatPanel({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role:"bot", text:"Hi! I'm Aalo ✦\nAsk me anything about Ajay's skills, experience at DraftKings & Hover, or how to reach him!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages, loading]);

  const send = async (text) => {
    if (!text.trim() || loading) return;
    const userMsg = text.trim();
    setInput("");
    setMessages(m => [...m, { role:"user", text:userMsg }]);
    setLoading(true);
    await new Promise(r => setTimeout(r, 600 + Math.random() * 500));
    setMessages(m => [...m, { role:"bot", text:aaloReply(userMsg) }]);
    setLoading(false);
  };

  const quickReplies = ["DraftKings role","Skills overview","Work at Hover","How to contact Ajay"];

  return (
    <div style={{
      position:"fixed", bottom:0, right:0, width:340, height:500,
      background:"#0f0f1a", border:"1px solid rgba(249,115,22,0.25)",
      borderRadius:"16px 16px 0 0", zIndex:1000, display:"flex", flexDirection:"column",
      transform:open ? "translateY(0)" : "translateY(100%)",
      transition:"transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
    }}>
      {/* Header */}
      <div style={{ background:"rgba(249,115,22,0.08)", borderBottom:"1px solid rgba(249,115,22,0.15)", padding:"10px 14px", display:"flex", alignItems:"center", gap:10, borderRadius:"16px 16px 0 0", flexShrink:0 }}>
        <div style={{ animation:"aaloBounceSmall 2.5s ease-in-out infinite" }}>
          <AaloIcon size={30} />
        </div>
        <div style={{ flex:1 }}>
          <div style={{ fontWeight:700, fontSize:15, color:ORANGE }}>Aalo</div>
          <div style={{ fontSize:10, color:"rgba(232,230,240,0.4)", fontFamily:"monospace" }}>Ajay's AI Assistant</div>
        </div>
        <button onClick={onClose} style={{ background:"none", border:"none", color:"rgba(232,230,240,0.4)", fontSize:18, cursor:"pointer", lineHeight:1, padding:4 }}>✕</button>
      </div>
      {/* Messages */}
      <div style={{ flex:1, overflowY:"auto", padding:14, display:"flex", flexDirection:"column", gap:10 }}>
        {messages.map((m,i) => (
          <div key={i} style={{ display:"flex", gap:8, flexDirection:m.role==="user"?"row-reverse":"row" }}>
            {m.role==="bot" && (
              <div style={{ width:26, height:26, borderRadius:"50%", background:"rgba(249,115,22,0.12)", overflow:"hidden", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <AaloIcon size={26} />
              </div>
            )}
            <div style={{ maxWidth:"78%", padding:"9px 13px", borderRadius:12, fontSize:13, lineHeight:1.6, background:m.role==="bot"?"rgba(249,115,22,0.08)":ORANGE, border:m.role==="bot"?"1px solid rgba(249,115,22,0.15)":"none", color:m.role==="bot"?"rgba(232,230,240,0.88)":"#fff", whiteSpace:"pre-wrap" }}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display:"flex", gap:8 }}>
            <div style={{ width:26, height:26, borderRadius:"50%", background:"rgba(249,115,22,0.12)", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <AaloIcon size={26} />
            </div>
            <div style={{ padding:"10px 14px", background:"rgba(249,115,22,0.08)", border:"1px solid rgba(249,115,22,0.15)", borderRadius:12, display:"flex", gap:4 }}>
              {[0,1,2].map(i => <div key={i} style={{ width:6, height:6, borderRadius:"50%", background:ORANGE, opacity:0.7, animation:`typingDot 1.2s ease-in-out ${i*0.2}s infinite` }} />)}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>
      {/* Quick replies */}
      {messages.length <= 2 && (
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, padding:"0 14px 8px" }}>
          {quickReplies.map(q => (
            <button key={q} onClick={() => send(q)} style={{ background:"rgba(249,115,22,0.07)", border:"1px solid rgba(249,115,22,0.2)", color:ORANGE, fontSize:11, fontFamily:"monospace", padding:"5px 10px", borderRadius:20, cursor:"pointer" }}>{q}</button>
          ))}
        </div>
      )}
      {/* Input */}
      <div style={{ display:"flex", gap:8, padding:"10px 14px", borderTop:"1px solid rgba(249,115,22,0.1)", flexShrink:0 }}>
        <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key==="Enter" && send(input)} placeholder="Ask about Ajay..." style={{ flex:1, background:"rgba(249,115,22,0.05)", border:"1px solid rgba(249,115,22,0.2)", borderRadius:8, color:"#e8e6f0", fontSize:13, padding:"8px 12px", outline:"none", fontFamily:"inherit" }} />
        <button onClick={() => send(input)} style={{ background:ORANGE, border:"none", borderRadius:8, width:36, height:36, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" }}>➤</button>
      </div>
    </div>
  );
}

/* ─── Floating Bot ──────────────────────────────────────────────────────────── */
function AaloBot({ onToggle }) {
  const [hover, setHover] = useState(false);
  return (
    <div onClick={onToggle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position:"fixed", bottom:28, right:28, zIndex:999, cursor:"pointer",
        animation:hover?"none":"aaloBounce 2.8s ease-in-out infinite",
        filter:`drop-shadow(0 6px 20px rgba(249,115,22,${hover?"0.8":"0.45"}))`,
        transition:"filter 0.2s",
        width:64, height:64, borderRadius:"50%", overflow:"hidden", background:"transparent",
      }}
    >
      <img src={AALO_SRC} alt="Aalo" width={64} height={64} style={{ objectFit:"cover", mixBlendMode:"screen", display:"block" }} />
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────────── */
function Section({ id, children, style={} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setVis(true); }, { threshold:0.08 });
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section id={id} ref={ref} style={{ opacity:vis?1:0, transform:vis?"translateY(0)":"translateY(32px)", transition:"opacity 0.7s ease, transform 0.7s ease", ...style }}>
      {children}
    </section>
  );
}

/* ─── Main Portfolio ─────────────────────────────────────────────────────────── */
export default function Portfolio() {
  const [chatOpen, setChatOpen] = useState(false);
  const [heroIn, setHeroIn] = useState(false);
  const [typed, setTyped] = useState("");
  const [openExp, setOpenExp] = useState(null);

  useEffect(() => {
    setTimeout(() => setHeroIn(true), 200);
    const msg = "4+ years bridging business needs and data systems — SQL · Python · Power BI · Salesforce · AWS · ETL";
    let i = 0;
    const id = setInterval(() => { setTyped(msg.slice(0, ++i)); if(i >= msg.length) clearInterval(id); }, 36);
    return () => clearInterval(id);
  }, []);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <div style={{ fontFamily:"'DM Sans', sans-serif, system-ui", background:DARK_BG, color:"#e8e6f0", minHeight:"100vh", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px;}
        ::-webkit-scrollbar-thumb{background:#f97316;border-radius:2px;}
        @keyframes aaloBounce{0%,100%{transform:translateY(0) rotate(-2deg);}50%{transform:translateY(-16px) rotate(2deg);}}
        @keyframes aaloBounceSmall{0%,100%{transform:translateY(0);}50%{transform:translateY(-5px);}}
        @keyframes floatAnim{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
        @keyframes gridDrift{0%{transform:translateY(0);}100%{transform:translateY(60px);}}
        @keyframes typingDot{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-4px);}}
        @keyframes shimmer{0%{background-position:-200% center;}100%{background-position:200% center;}}
        .shimmer{background:linear-gradient(90deg,#f97316 0%,#fb923c 40%,#fff 50%,#fb923c 60%,#f97316 100%);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:shimmer 4s linear infinite;}
        .card{transition:transform 0.3s,border-color 0.3s;}
        .card:hover{transform:translateY(-4px);border-color:rgba(249,115,22,0.4)!important;}
        .nav-btn:hover{color:#f97316!important;}
        .exp-bullet{padding:10px 14px;background:rgba(249,115,22,0.04);border:1px solid rgba(249,115,22,0.08);border-radius:8px;display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;}
        .exp-bullet span{font-size:13px;color:rgba(232,230,240,0.7);line-height:1.6;}
      `}</style>

      {/* BG grid */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(249,115,22,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,0.04) 1px,transparent 1px)", backgroundSize:"60px 60px", animation:"gridDrift 20s linear infinite" }} />
        <div style={{ position:"absolute", top:"20%", left:"10%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(249,115,22,0.07) 0%,transparent 70%)" }} />
        <div style={{ position:"absolute", bottom:"30%", right:"5%", width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle,rgba(139,92,246,0.06) 0%,transparent 70%)" }} />
      </div>

      {/* Nav */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:"rgba(10,10,15,0.88)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(249,115,22,0.1)", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"0 6%", height:60 }}>
        <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:20, color:ORANGE }}>AL</span>
        <div style={{ display:"flex", gap:28 }}>
          {["about","skills","experience","education","contact"].map(s => (
            <button key={s} className="nav-btn" onClick={() => scrollTo(s)} style={{ background:"none", border:"none", cursor:"pointer", fontFamily:"monospace", fontSize:13, color:"rgba(232,230,240,0.55)", letterSpacing:"0.05em", transition:"color 0.2s", textTransform:"capitalize" }}>{s}</button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"80px 8% 60px", position:"relative", zIndex:1 }}>
        <div style={{ opacity:heroIn?1:0, transform:heroIn?"translateY(0)":"translateY(28px)", transition:"opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }}>
          <div style={{ fontFamily:"monospace", fontSize:13, color:ORANGE, letterSpacing:"0.15em", marginBottom:24, display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ display:"inline-block", width:40, height:1, background:ORANGE }} />
            BUSINESS SYSTEMS ANALYST
          </div>
          <h1 style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(60px,11vw,116px)", lineHeight:1.0, marginBottom:24 }}>
            <span style={{ textShadow:"0 0 40px rgba(249,115,22,0.5)" }}>Ajay</span><br />
            <span className="shimmer">Lakkuntla</span>
          </h1>
          <p style={{ fontSize:17, color:"rgba(232,230,240,0.6)", maxWidth:560, lineHeight:1.8, marginBottom:40, fontWeight:300, minHeight:28 }}>
            {typed}<span style={{ borderRight:"2px solid #f97316", animation:"floatAnim 0.8s ease-in-out infinite" }}>&nbsp;</span>
          </p>
          <div style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
            <button onClick={() => scrollTo("experience")} style={{ padding:"12px 28px", background:ORANGE, border:"none", borderRadius:4, color:"#fff", fontFamily:"monospace", fontSize:13, cursor:"pointer", letterSpacing:"0.05em" }}>VIEW EXPERIENCE →</button>
            <a href="mailto:ajaylakkuntla21@gmail.com" style={{ padding:"12px 28px", border:"1px solid rgba(249,115,22,0.4)", borderRadius:4, color:ORANGE, fontFamily:"monospace", fontSize:13, textDecoration:"none", letterSpacing:"0.05em" }}>GET IN TOUCH</a>
          </div>
        </div>
        {/* Stats */}
        <div style={{ position:"absolute", right:"8%", top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:20, opacity:heroIn?1:0, transition:"opacity 1s ease 0.9s" }}>
          {[["4+","YEARS EXP"],["2","COMPANIES"],["6+","TECH DOMAINS"]].map(([n,l],i) => (
            <div key={l} className="card" style={{ background:"rgba(249,115,22,0.05)", border:"1px solid rgba(249,115,22,0.15)", borderRadius:8, padding:"18px 22px", textAlign:"center", animation:`floatAnim ${3+i*0.7}s ease-in-out ${i*0.3}s infinite` }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:30, fontWeight:800, color:ORANGE }}>{n}</div>
              <div style={{ fontFamily:"monospace", fontSize:10, color:"rgba(232,230,240,0.4)", letterSpacing:"0.1em" }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <Section id="about" style={{ padding:"100px 8%", position:"relative", zIndex:1 }}>
        <div style={{ fontFamily:"monospace", fontSize:12, color:ORANGE, letterSpacing:"0.15em", marginBottom:14 }}>01 / ABOUT</div>
        <div style={{ display:"flex", gap:"8%", flexWrap:"wrap", alignItems:"flex-start" }}>
          <div style={{ flex:"1 1 300px" }}>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:38, fontWeight:800, marginBottom:22, lineHeight:1.2 }}>Business Systems<br /><span style={{ color:ORANGE }}>Analyst</span></h2>
            <p style={{ color:"rgba(232,230,240,0.65)", lineHeight:1.9, fontSize:15, marginBottom:16 }}>Business Analyst with 4+ years of experience optimising digital systems and data workflows across diverse environments. I specialise in translating complex business needs into actionable technical requirements for CRM, ERP, and eCommerce platforms like Salesforce, Shopify, and Netsuite.</p>
            <p style={{ color:"rgba(232,230,240,0.65)", lineHeight:1.9, fontSize:15 }}>Proficient in data analysis, system configuration, and process architecture — utilising SQL, BigQuery, Tableau, and Apache Airflow to ensure data integrity and drive informed decision-making. Adept at managing product backlogs in Jira and facilitating system integrations.</p>
          </div>
          <div style={{ flex:"1 1 260px", marginTop:8 }}>
            {[["📍","LOCATION","United States"],["📧","EMAIL","ajaylakkuntla21@gmail.com"],["📞","PHONE","+1 (314) 583 7064"],["🎓","EDUCATION","M.S. Business Analytics — Webster University"],["🎯","FOCUS","Business Systems & Data Analytics"]].map(([icon,label,val]) => (
              <div key={label} className="card" style={{ background:"rgba(249,115,22,0.04)", border:"1px solid rgba(249,115,22,0.1)", borderRadius:8, padding:"13px 16px", marginBottom:10, display:"flex", alignItems:"center", gap:12 }}>
                <span style={{ fontSize:18 }}>{icon}</span>
                <div><div style={{ fontFamily:"monospace", fontSize:10, color:"rgba(232,230,240,0.35)", letterSpacing:"0.1em" }}>{label}</div><div style={{ fontSize:13, color:"rgba(232,230,240,0.85)", marginTop:2 }}>{val}</div></div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" style={{ padding:"100px 8%", position:"relative", zIndex:1, background:"rgba(249,115,22,0.015)" }}>
        <div style={{ fontFamily:"monospace", fontSize:12, color:ORANGE, letterSpacing:"0.15em", marginBottom:14 }}>02 / SKILLS</div>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:38, fontWeight:800, marginBottom:50 }}>Technical <span style={{ color:ORANGE }}>Arsenal</span></h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:18 }}>
          {Object.entries(skills).map(([cat,items]) => (
            <div key={cat} className="card" style={{ background:"rgba(10,10,15,0.85)", border:"1px solid rgba(249,115,22,0.1)", borderRadius:12, padding:"22px 18px" }}>
              <h3 style={{ fontFamily:"monospace", fontSize:11, color:ORANGE, letterSpacing:"0.1em", marginBottom:14 }}>{cat.toUpperCase()}</h3>
              <div style={{ display:"flex", flexWrap:"wrap", gap:7 }}>
                {items.map((s,i) => { const c=pillColors[i%pillColors.length]; return <span key={s} style={{ background:c.bg, border:`1px solid ${c.border}`, color:c.color, padding:"4px 11px", borderRadius:999, fontSize:12, fontFamily:"monospace", fontWeight:500 }}>{s}</span>; })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" style={{ padding:"100px 8%", position:"relative", zIndex:1 }}>
        <div style={{ fontFamily:"monospace", fontSize:12, color:ORANGE, letterSpacing:"0.15em", marginBottom:14 }}>03 / EXPERIENCE</div>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:38, fontWeight:800, marginBottom:50 }}>Work <span style={{ color:ORANGE }}>History</span></h2>
        <div style={{ display:"flex", flexDirection:"column", gap:22 }}>
          {experience.map((exp,idx) => (
            <div key={exp.company} className="card" style={{ background:"rgba(10,10,15,0.9)", border:"1px solid rgba(249,115,22,0.15)", borderRadius:16, padding:"32px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${idx===0?"#f97316,#fb923c":"#8b5cf6,#a78bfa"},transparent)` }} />
              <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:14, marginBottom:20 }}>
                <div>
                  <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:700, color:"#fff", marginBottom:4 }}>{exp.role}</h3>
                  <div style={{ fontSize:16, color:idx===0?ORANGE:"#8b5cf6", marginBottom:4 }}>{exp.company}</div>
                  <div style={{ fontFamily:"monospace", fontSize:11, color:"rgba(232,230,240,0.35)" }}>{exp.location}</div>
                </div>
                <div style={{ background:`rgba(${idx===0?"249,115,22":"139,92,246"},0.1)`, border:`1px solid rgba(${idx===0?"249,115,22":"139,92,246"},0.25)`, borderRadius:6, padding:"8px 14px", height:"fit-content", fontFamily:"monospace", fontSize:12, color:idx===0?ORANGE:"#8b5cf6" }}>{exp.period}</div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:openExp===idx?"1fr":"repeat(auto-fit,minmax(260px,1fr))", gap:0 }}>
                {(openExp===idx ? exp.bullets : exp.bullets.slice(0,4)).map((b,i) => (
                  <div key={i} className="exp-bullet">
                    <span style={{ color:idx===0?ORANGE:"#8b5cf6", flexShrink:0, marginTop:1 }}>▹</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              {exp.bullets.length > 4 && (
                <button onClick={() => setOpenExp(openExp===idx?null:idx)} style={{ marginTop:12, background:"none", border:`1px solid rgba(249,115,22,0.3)`, borderRadius:6, color:ORANGE, fontFamily:"monospace", fontSize:12, padding:"6px 16px", cursor:"pointer" }}>
                  {openExp===idx ? "▲ Show less" : `▼ Show all ${exp.bullets.length} highlights`}
                </button>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" style={{ padding:"100px 8%", position:"relative", zIndex:1, background:"rgba(249,115,22,0.015)" }}>
        <div style={{ fontFamily:"monospace", fontSize:12, color:ORANGE, letterSpacing:"0.15em", marginBottom:14 }}>04 / EDUCATION</div>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:38, fontWeight:800, marginBottom:50 }}>Academic <span style={{ color:ORANGE }}>Background</span></h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:22 }}>
          {[
            ["🎓","M.S. Business Analytics","Webster University","St. Louis, MO","Dec 2025"],
            ["🏗️","B.Tech Civil Engineering","Guru Nanak Institutions Technical Campus","Hyderabad, India",""],
          ].map(([icon,deg,school,loc,year]) => (
            <div key={deg} className="card" style={{ background:"rgba(10,10,15,0.9)", border:"1px solid rgba(249,115,22,0.15)", borderRadius:16, padding:"32px 28px" }}>
              <div style={{ fontSize:44, marginBottom:18 }}>{icon}</div>
              <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:19, fontWeight:700, marginBottom:8 }}>{deg}</h3>
              <div style={{ color:ORANGE, fontSize:14, marginBottom:6 }}>{school}</div>
              <div style={{ fontFamily:"monospace", fontSize:11, color:"rgba(232,230,240,0.35)" }}>{loc}{year?" · "+year:""}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" style={{ padding:"100px 8% 160px", position:"relative", zIndex:1, textAlign:"center" }}>
        <div style={{ fontFamily:"monospace", fontSize:12, color:ORANGE, letterSpacing:"0.15em", marginBottom:14 }}>05 / CONTACT</div>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(34px,6vw,60px)", fontWeight:800, marginBottom:18, lineHeight:1.1 }}>Let's build something<br /><span style={{ color:ORANGE }}>data-driven.</span></h2>
        <p style={{ color:"rgba(232,230,240,0.5)", fontSize:15, maxWidth:440, margin:"0 auto 44px" }}>Open to Business Analyst, Data Analyst, and Systems Analyst roles. Let's talk.</p>
        <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
          <a href="mailto:ajaylakkuntla21@gmail.com" style={{ padding:"14px 32px", background:ORANGE, borderRadius:6, color:"#fff", fontFamily:"monospace", fontSize:13, textDecoration:"none", letterSpacing:"0.05em" }}>📧 SEND EMAIL</a>
          <a href="tel:+13145837064" style={{ padding:"14px 32px", border:"1px solid rgba(249,115,22,0.35)", borderRadius:6, color:ORANGE, fontFamily:"monospace", fontSize:13, textDecoration:"none", letterSpacing:"0.05em" }}>📞 CALL ME</a>
        </div>
        <p style={{ marginTop:24, fontFamily:"monospace", fontSize:12, color:"rgba(232,230,240,0.3)" }}>+1 (314) 583 7064 · United States</p>
      </Section>

      {/* Footer */}
      <footer style={{ position:"relative", zIndex:1, textAlign:"center", padding:"20px 8%", borderTop:"1px solid rgba(249,115,22,0.08)", fontFamily:"monospace", fontSize:11, color:"rgba(232,230,240,0.22)" }}>
        Ajay Lakkuntla · Business Systems Analyst · ajaylakkuntla21@gmail.com
      </footer>

      {/* Aalo */}
      <AaloBot onToggle={() => setChatOpen(o => !o)} />
      <ChatPanel open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}