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
const AALO_ICON = "data:image/png;base64,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";

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

const projects = [
  {
    title: "NXP Data Analytics Platform",
    subtitle: "Enterprise Data Pipeline & BI Suite",
    tech: ["Python", "AWS Glue", "Redshift", "Power BI", "Alteryx"],
    desc: "End-to-end analytics platform for NXP Semiconductors at TCS — automated ETL pipelines, AWS-based cloud warehousing, and interactive Power BI dashboards covering global AMEC & APAC production data.",
    icon: "📊",
  },
  {
    title: "WORD-WHIZ",
    subtitle: "Guess the Word Game",
    tech: ["Spring Boot", "HTML", "CSS", "STS4"],
    desc: "A Spring-based word guessing game that boosts engagement by 25% using restricted attempts, with a competitive scoring system that improved long-term retention by 20%.",
    icon: "🧩",
  },
  {
    title: "SHOUT",
    subtitle: "Safety Mobile App",
    tech: ["Android Java", "Android Studio", "XML"],
    desc: "A personal safety app that sends emergency alerts with real-time location in offline mode within 2 seconds, with a false-alarm prevention system reducing accidental triggers by 30%.",
    icon: "🚨",
  },
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
    reply: "Ajay is open to data engineering, analytics, and BI roles! Here's how to reach him:\n\n📧 ajaylakkuntla21@gmail.com\n🔗 linkedin.com/in/analyst-ajay\n📞 +1 (314) 583 7064\n📍 St. Louis, Missouri\n\nDon't hesitate — great data talent goes fast! ⚡",
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
    keys: ["github", "repo", "repository", "code sample", "git"],
    reply: "You can check out Ajay's code and projects on GitHub: github.com/uh-jay 🧑‍💻\n\nHis full portfolio is also live at uh-jay.github.io/My_Portfolio/ ✨",
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
    keys: ["project", "portfolio", "work sample", "example", "built", "created", "word-whiz", "word whiz", "game", "shout"],
    reply: "Ajay has 3 standout projects:\n\n📊 NXP Data Analytics Platform — automated ETL pipelines, AWS warehousing, and Power BI dashboards built at TCS for global production data.\n🧩 WORD-WHIZ — a Spring Boot word-guessing game with a competitive scoring system.\n🚨 SHOUT — an Android safety app sending offline emergency alerts in under 2 seconds.\n\nCheck out the code on GitHub: github.com/uh-jay 🚀",
  },
];

function aaloReply(input) {
  const q = input.toLowerCase();
  for (const item of AALO_KB) {
    if (item.keys.some(k => q.includes(k))) return item.reply;
  }
  return "Great question! I'm not 100% sure on that one, but Ajay would love to answer it directly.\n\n📧 ajaylakkuntla21@gmail.com\n🔗 linkedin.com/in/analyst-ajay\n\nDrop him a message — he responds fast! ⚡";
}
// ─────────────────────────────────────────────────────────────────────────────

// Aalo mark: custom robot icon — no caption beneath it.
function AaloMark({ size = 64 }) {
  return (
    <img
      src={AALO_ICON}
      alt="Aalo"
      width={size}
      height={size}
      style={{ display: "block", objectFit: "contain" }}
    />
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
      <AaloMark size={60} />
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
          <AaloMark size={30} />
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
                <AaloMark size={18} />
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
              <AaloMark size={18} />
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
          {["about", "skills", "projects", "experience", "education", "contact"].map(s => (
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
          <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(60px,11vw,116px)", lineHeight: 1.0, marginBottom: 24 }}>
            <span style={{ textShadow: "0 0 40px rgba(249,115,22,0.5)" }}>Ajay</span><br />
            <span className="shimmer">Lakkuntla</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(232,230,240,0.6)", maxWidth: 540, lineHeight: 1.8, marginBottom: 40, fontWeight: 300, minHeight: 28 }}>
            {typed}<span style={{ borderRight: "2px solid #f97316", animation: "floatAnim 0.8s ease-in-out infinite" }}>&nbsp;</span>
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("experience")} style={{ padding: "12px 28px", background: ORANGE, border: "none", borderRadius: 4, color: "#fff", fontFamily: "monospace", fontSize: 13, cursor: "pointer", letterSpacing: "0.05em" }}>VIEW WORK →</button>
            <a href="mailto:ajaylakkuntla21@gmail.com" style={{ padding: "12px 28px", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 4, color: ORANGE, fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>GET IN TOUCH</a>
            <a href="https://github.com/uh-jay" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 4, color: ORANGE, fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>🐙 GITHUB</a>
            <a href="https://uh-jay.github.io/My_Portfolio/" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 4, color: ORANGE, fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>VIEW PORTFOLIO ↗</a>
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
            {[["📍", "LOCATION", "St. Louis, Missouri"], ["📧", "EMAIL", "ajaylakkuntla21@gmail.com"], ["🔗", "LINKEDIN", "linkedin.com/in/analyst-ajay"], ["🐙", "GITHUB", "github.com/uh-jay"], ["🎯", "FOCUS", "Data Engineering & Analytics"]].map(([icon, label, val]) => (
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

      {/* Projects */}
      <Section id="projects" style={{ padding: "100px 8%", position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14, textAlign: "center" }}>03 / PROJECTS</div>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 38, fontWeight: 800, marginBottom: 50, textAlign: "center" }}>Featured <span style={{ color: ORANGE }}>Builds</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22, maxWidth: 1100, margin: "0 auto" }}>
          {projects.map(p => (
            <div key={p.title} className="card" style={{ background: "rgba(10,10,15,0.9)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: 16, padding: "32px 28px", textAlign: "center" }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 21, fontWeight: 700, marginBottom: 4, color: "#fff" }}>{p.title}</h3>
              <div style={{ color: ORANGE, fontSize: 13, marginBottom: 14 }}>{p.subtitle}</div>
              <p style={{ color: "rgba(232,230,240,0.65)", fontSize: 13, lineHeight: 1.7, marginBottom: 18 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }}>
                {p.tech.map((t, i) => {
                  const c = pillColors[i % pillColors.length];
                  return <span key={t} style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color, padding: "3px 10px", borderRadius: 999, fontSize: 11, fontFamily: "monospace", fontWeight: 500 }}>{t}</span>;
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" style={{ padding: "100px 8%", position: "relative", zIndex: 1, background: "rgba(249,115,22,0.015)" }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>04 / EXPERIENCE</div>
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
      <Section id="education" style={{ padding: "100px 8%", position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>05 / EDUCATION</div>
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
      <Section id="contact" style={{ padding: "100px 8% 160px", position: "relative", zIndex: 1, textAlign: "center", background: "rgba(249,115,22,0.015)" }}>
        <div style={{ fontFamily: "monospace", fontSize: 12, color: ORANGE, letterSpacing: "0.15em", marginBottom: 14 }}>06 / CONTACT</div>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(34px,6vw,60px)", fontWeight: 800, marginBottom: 18, lineHeight: 1.1 }}>Let's build something<br /><span style={{ color: ORANGE }}>data-driven.</span></h2>
        <p style={{ color: "rgba(232,230,240,0.5)", fontSize: 15, maxWidth: 440, margin: "0 auto 44px" }}>Open to data engineering, analytics, and BI roles. Let's talk.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:ajaylakkuntla21@gmail.com" style={{ padding: "14px 32px", background: ORANGE, borderRadius: 6, color: "#fff", fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>📧 SEND EMAIL</a>
          <a href="https://www.linkedin.com/in/analyst-ajay/" target="_blank" rel="noopener noreferrer" style={{ padding: "14px 32px", border: "1px solid rgba(249,115,22,0.35)", borderRadius: 6, color: ORANGE, fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>🔗 LINKEDIN</a>
          <a href="https://github.com/uh-jay" target="_blank" rel="noopener noreferrer" style={{ padding: "14px 32px", border: "1px solid rgba(249,115,22,0.35)", borderRadius: 6, color: ORANGE, fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>🐙 GITHUB</a>
          <a href="https://uh-jay.github.io/My_Portfolio/" target="_blank" rel="noopener noreferrer" style={{ padding: "14px 32px", border: "1px solid rgba(249,115,22,0.35)", borderRadius: 6, color: ORANGE, fontFamily: "monospace", fontSize: 13, textDecoration: "none", letterSpacing: "0.05em" }}>VIEW PORTFOLIO ↗</a>
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