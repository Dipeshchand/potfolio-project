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



import { useState, useEffect, useRef } from "react";

const skills = {
  "Analytics & Visualization": ["Power BI", "Tableau", "Advanced Excel", "Dashboard Dev", "KPI Reporting", "Data Visualization"],
  "Programming & Data": ["SQL", "Python", "R Programming", "Statistical Analysis", "Regression Analysis", "Forecasting", "Data Mining"],
  "Data Engineering": ["ETL/ELT", "Data Modeling", "Data Cleaning", "Data Validation", "Data Warehousing", "ERD", "Database Management"],
  "BI & Analytics Tools": ["RapidMiner", "Alteryx", "SAP", "Salesforce", "AWS Glue", "Amazon S3", "Amazon Redshift"],
  "Domain Knowledge": ["Project Controls", "Cost Estimation", "Budget Tracking", "Schedule Monitoring", "Construction Analytics"],
};

const experience = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Data Engineer",
    period: "Feb 2020 – Jul 2023",
    location: "Hyderabad, India",
    client: "NXP Semiconductors",
    highlights: [
      "Processed & analyzed operational/production datasets for a global semiconductor manufacturer",
      "Built interactive Power BI dashboards with trend analysis, forecasting, and KPI tracking",
      "Developed automated data pipelines using Python, Alteryx & ETL processes",
      "Utilized AWS Glue, Amazon S3 & Redshift for scalable data integration",
      "Designed relational DB structures & data warehouse tables for reporting efficiency",
      "Monitored operational databases across AMEC & APAC regions for cross-regional reporting",
    ],
  },
];

const education = [
  {
    degree: "M.S. Business Analytics",
    school: "Webster University",
    location: "St. Louis, MO",
    icon: "🎓",
  },
  {
    degree: "B.Tech Civil Engineering",
    school: "Guru Nanak Institutions Technical Campus",
    location: "Hyderabad, India",
    icon: "🏗️",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedSection({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function TypewriterText({ text, started }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(text.slice(0, ++i));
      if (i >= text.length) clearInterval(id);
    }, 38);
    return () => clearInterval(id);
  }, [started, text]);
  return <span>{displayed}<span style={{ opacity: Math.sin(Date.now() / 400) > 0 ? 1 : 0, borderRight: "2px solid #f97316" }}>&nbsp;</span></span>;
}

function SkillPill({ skill, index }) {
  const [ref, inView] = useInView(0.1);
  const colors = [
    { bg: "#fff7ed", border: "#fed7aa", text: "#c2410c" },
    { bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8" },
    { bg: "#f0fdf4", border: "#bbf7d0", text: "#15803d" },
    { bg: "#fdf4ff", border: "#e9d5ff", text: "#7e22ce" },
    { bg: "#fff1f2", border: "#fecdd3", text: "#be123c" },
  ];
  const c = colors[index % colors.length];
  return (
    <span
      ref={ref}
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        padding: "4px 12px",
        borderRadius: "999px",
        fontSize: "12px",
        fontWeight: 500,
        fontFamily: "'DM Mono', monospace",
        display: "inline-block",
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.7)",
        transition: `opacity 0.4s ease ${(index % 8) * 0.06}s, transform 0.4s ease ${(index % 8) * 0.06}s`,
      }}
    >
      {skill}
    </span>
  );
}

export default function Portfolio() {
  const [heroReady, setHeroReady] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  const navItems = ["About", "Skills", "Experience", "Education", "Contact"];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0a0a0f", color: "#e8e6f0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #f97316; border-radius: 2px; }
        .glow-text { text-shadow: 0 0 40px rgba(249,115,22,0.5); }
        .card-hover { transition: transform 0.3s ease, border-color 0.3s ease; }
        .card-hover:hover { transform: translateY(-4px); border-color: rgba(249,115,22,0.4) !important; }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-ring { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.5); opacity: 0; } }
        @keyframes grid-drift { 0% { transform: translateY(0); } 100% { transform: translateY(60px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        .shimmer-text {
          background: linear-gradient(90deg, #f97316 0%, #fb923c 40%, #ffffff 50%, #fb923c 60%, #f97316 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .tag-bar { display: flex; flex-wrap: wrap; gap: 8px; }
      `}</style>

      {/* Background grid */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "grid-drift 20s linear infinite",
        }} />
        <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "30%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />
      </div>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(10,10,15,0.85)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(249,115,22,0.1)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "0 5%", height: 60,
      }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: "#f97316" }}>AL</span>
        <div style={{ display: "flex", gap: 32 }}>
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              onMouseEnter={() => setHoveredNav(item)}
              onMouseLeave={() => setHoveredNav(null)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'DM Mono', monospace", fontSize: 13,
                color: hoveredNav === item ? "#f97316" : "rgba(232,230,240,0.6)",
                transition: "color 0.2s ease",
                letterSpacing: "0.05em",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 8% 60px", position: "relative", zIndex: 1 }}>
        <div style={{ opacity: heroReady ? 1 : 0, transform: heroReady ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#f97316", letterSpacing: "0.15em", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "#f97316" }} />
            BUSINESS ANALYTICS PROFESSIONAL
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 1.0, marginBottom: 24 }}>
            <span className="glow-text">Ajay</span><br />
            <span className="shimmer-text">Lakkuntla</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(232,230,240,0.6)", maxWidth: 560, lineHeight: 1.8, marginBottom: 40, fontWeight: 300 }}>
            <TypewriterText text="4 years transforming raw data into strategic intelligence. SQL · Python · Power BI · AWS · ETL" started={heroReady} />
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("Experience")} style={{
              padding: "12px 28px", background: "#f97316", border: "none", borderRadius: 4,
              color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500,
              cursor: "pointer", letterSpacing: "0.05em", transition: "background 0.2s",
            }}
              onMouseEnter={e => e.target.style.background = "#ea580c"}
              onMouseLeave={e => e.target.style.background = "#f97316"}
            >
              VIEW WORK →
            </button>
            <a href="mailto:ajaylakkuntla21@gmail.com" style={{
              padding: "12px 28px", background: "transparent",
              border: "1px solid rgba(249,115,22,0.4)", borderRadius: 4,
              color: "#f97316", fontFamily: "'DM Mono', monospace", fontSize: 13,
              cursor: "pointer", textDecoration: "none", letterSpacing: "0.05em",
              transition: "border-color 0.2s, background 0.2s",
            }}>
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Floating stats */}
        <div style={{
          position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)",
          display: "flex", flexDirection: "column", gap: 20,
          opacity: heroReady ? 1 : 0, transition: "opacity 0.8s ease 0.8s",
        }}>
          {[{ num: "4+", label: "Years Exp" }, { num: "3", label: "AWS Tools" }, { num: "5+", label: "BI Tools" }].map((s, i) => (
            <div key={i} style={{
              background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.15)",
              borderRadius: 8, padding: "20px 24px", textAlign: "center",
              animation: `float ${3 + i * 0.7}s ease-in-out ${i * 0.3}s infinite`,
            }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 32, fontWeight: 800, color: "#f97316" }}>{s.num}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(232,230,240,0.4)", letterSpacing: "0.1em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.4 }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, letterSpacing: "0.15em" }}>SCROLL</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #f97316, transparent)", animation: "float 2s ease-in-out infinite" }} />
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "100px 8%", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div style={{ display: "flex", gap: "8%", alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 320px" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.15em", marginBottom: 16 }}>01 / ABOUT</div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, marginBottom: 24, lineHeight: 1.2 }}>
                Data Engineer<br /><span style={{ color: "#f97316" }}>& Analyst</span>
              </h2>
              <p style={{ color: "rgba(232,230,240,0.65)", lineHeight: 1.9, fontSize: 15, marginBottom: 20 }}>
                Based in St. Louis, Missouri, I specialize in turning complex data challenges into clean, actionable insights. With a background spanning semiconductor manufacturing analytics at TCS/NXP Semiconductors and graduate studies in Business Analytics.
              </p>
              <p style={{ color: "rgba(232,230,240,0.65)", lineHeight: 1.9, fontSize: 15 }}>
                I bridge the gap between raw data pipelines and strategic business decisions — whether that's through Power BI dashboards, Python automation, or AWS data warehousing.
              </p>
            </div>
            <div style={{ flex: "1 1 280px" }}>
              {[
                { icon: "📍", label: "Location", val: "St. Louis, Missouri" },
                { icon: "📧", label: "Email", val: "ajaylakkuntla21@gmail.com" },
                { icon: "🔗", label: "LinkedIn", val: "linkedin.com/in/ajay" },
                { icon: "🎯", label: "Focus", val: "Data Engineering & Analytics" },
              ].map((item, i) => (
                <AnimatedSection delay={i * 0.1} key={i}>
                  <div className="card-hover" style={{
                    background: "rgba(249,115,22,0.04)", border: "1px solid rgba(249,115,22,0.1)",
                    borderRadius: 8, padding: "14px 18px", marginBottom: 10,
                    display: "flex", alignItems: "center", gap: 14,
                  }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(232,230,240,0.35)", letterSpacing: "0.1em" }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: "rgba(232,230,240,0.85)", marginTop: 2 }}>{item.val}</div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "100px 8%", position: "relative", zIndex: 1, background: "rgba(249,115,22,0.02)" }}>
        <AnimatedSection>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.15em", marginBottom: 16 }}>02 / SKILLS</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, marginBottom: 60 }}>Technical <span style={{ color: "#f97316" }}>Arsenal</span></h2>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {Object.entries(skills).map(([category, items], ci) => (
            <AnimatedSection key={category} delay={ci * 0.1}>
              <div className="card-hover" style={{
                background: "rgba(10,10,15,0.8)", border: "1px solid rgba(249,115,22,0.1)",
                borderRadius: 12, padding: "24px 20px",
              }}>
                <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.1em", marginBottom: 16 }}>
                  {category.toUpperCase()}
                </h3>
                <div className="tag-bar">
                  {items.map((skill, si) => <SkillPill key={skill} skill={skill} index={ci * 10 + si} />)}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: "100px 8%", position: "relative", zIndex: 1 }}>
        <AnimatedSection>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.15em", marginBottom: 16 }}>03 / EXPERIENCE</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, marginBottom: 60 }}>Work <span style={{ color: "#f97316" }}>History</span></h2>
        </AnimatedSection>
        {experience.map((job, ji) => (
          <AnimatedSection key={ji} delay={0.2}>
            <div style={{
              background: "rgba(10,10,15,0.9)", border: "1px solid rgba(249,115,22,0.15)",
              borderRadius: 16, padding: "40px", position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, #f97316, #fb923c, transparent)",
              }} />
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{job.role}</h3>
                  <div style={{ fontSize: 16, color: "#f97316", marginBottom: 4 }}>{job.company}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "rgba(232,230,240,0.4)" }}>
                    {job.location} · Client: {job.client}
                  </div>
                </div>
                <div style={{
                  background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)",
                  borderRadius: 6, padding: "8px 16px", height: "fit-content",
                  fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#f97316",
                }}>
                  {job.period}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
                {job.highlights.map((h, hi) => (
                  <AnimatedSection key={hi} delay={hi * 0.07}>
                    <div style={{
                      display: "flex", gap: 12, alignItems: "flex-start",
                      padding: "12px 16px", background: "rgba(249,115,22,0.04)",
                      border: "1px solid rgba(249,115,22,0.08)", borderRadius: 8,
                    }}>
                      <span style={{ color: "#f97316", fontSize: 16, marginTop: 1, flexShrink: 0 }}>▹</span>
                      <span style={{ fontSize: 14, color: "rgba(232,230,240,0.7)", lineHeight: 1.6 }}>{h}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </section>

      {/* Education */}
      <section id="education" style={{ padding: "100px 8%", position: "relative", zIndex: 1, background: "rgba(249,115,22,0.02)" }}>
        <AnimatedSection>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.15em", marginBottom: 16 }}>04 / EDUCATION</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, marginBottom: 60 }}>Academic <span style={{ color: "#f97316" }}>Background</span></h2>
        </AnimatedSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {education.map((edu, ei) => (
            <AnimatedSection key={ei} delay={ei * 0.2}>
              <div className="card-hover" style={{
                background: "rgba(10,10,15,0.9)", border: "1px solid rgba(249,115,22,0.15)",
                borderRadius: 16, padding: "36px 32px", position: "relative", overflow: "hidden",
              }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>{edu.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{edu.degree}</h3>
                <div style={{ color: "#f97316", fontSize: 15, marginBottom: 6 }}>{edu.school}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "rgba(232,230,240,0.35)" }}>{edu.location}</div>
                <div style={{
                  position: "absolute", bottom: -20, right: -20,
                  width: 100, height: 100, borderRadius: "50%",
                  background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.1)",
                }} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "100px 8% 140px", position: "relative", zIndex: 1, textAlign: "center" }}>
        <AnimatedSection>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#f97316", letterSpacing: "0.15em", marginBottom: 16 }}>05 / CONTACT</div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, marginBottom: 20, lineHeight: 1.1 }}>
            Let's build something<br /><span style={{ color: "#f97316" }}>data-driven.</span>
          </h2>
          <p style={{ color: "rgba(232,230,240,0.5)", fontSize: 16, marginBottom: 48, maxWidth: 480, margin: "0 auto 48px" }}>
            Open to data engineering, analytics, and BI roles. Let's talk.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:ajaylakkuntla21@gmail.com" style={{
              padding: "16px 36px", background: "#f97316", border: "none", borderRadius: 6,
              color: "#fff", fontFamily: "'DM Mono', monospace", fontSize: 14, fontWeight: 500,
              cursor: "pointer", textDecoration: "none", letterSpacing: "0.05em",
              transition: "background 0.2s, transform 0.2s",
              display: "inline-block",
            }}
              onMouseEnter={e => { e.target.style.background = "#ea580c"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.background = "#f97316"; e.target.style.transform = "translateY(0)"; }}
            >
              📧 SEND EMAIL
            </a>
            <a href="https://www.linkedin.com/in/ajay/" target="_blank" rel="noopener noreferrer" style={{
              padding: "16px 36px", border: "1px solid rgba(249,115,22,0.35)", borderRadius: 6,
              color: "#f97316", fontFamily: "'DM Mono', monospace", fontSize: 14,
              textDecoration: "none", letterSpacing: "0.05em", transition: "border-color 0.2s, transform 0.2s",
              display: "inline-block",
            }}
              onMouseEnter={e => { e.target.style.borderColor = "#f97316"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(249,115,22,0.35)"; e.target.style.transform = "translateY(0)"; }}
            >
              🔗 LINKEDIN
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer style={{
        position: "relative", zIndex: 1, textAlign: "center",
        padding: "24px 8%", borderTop: "1px solid rgba(249,115,22,0.08)",
        fontFamily: "'DM Mono', monospace", fontSize: 12, color: "rgba(232,230,240,0.25)",
      }}>
        Ajay Lakkuntla · St. Louis, MO · +1(314) 583 7064
      </footer>
    </div>
  );
}
