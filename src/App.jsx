import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const [lang, setLang] = React.useState("en");

  const t = {
    en: {
      brand: "Swarna Bhoomi Premium Aata",
      tag: "Fresh Aata, On Demand.",
      about:
        "We wash premium wheat, grind it fresh on traditional chakki only after you order, and deliver pure aata within 24 hours in Indore.",
      order: "Order Fresh Aata",
      dealer: "Dealership / Franchise Opportunity",
    },
    hi: {
      brand: "स्वर्ण भूमि प्रीमियम आटा",
      tag: "ताज़ा आटा, ऑर्डर पर तैयार",
      about:
        "हम बेहतरीन गेहूं धोते हैं, ऑर्डर के बाद चक्की पर पीसते हैं और 24 घंटे में ताज़ा आटा आपके घर पहुँचाते हैं।",
      order: "ताज़ा आटा ऑर्डर करें",
      dealer: "डीलरशिप / फ्रेंचाइज़ी अवसर",
    },
  };

  const images = [
    "https://images.unsplash.com/photo-1604908554261-3f9e0f65fa2e",
    "https://images.unsplash.com/photo-1627485937980-221c88ac04e3",
    "https://images.unsplash.com/photo-1621076530111-5d8c9c75b7cc",
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#3f2d20" }}>

      {/* NAV */}
      <nav style={nav}>
        <b style={{ color: "#d97706" }}>Swarna Bhoomi</b>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {["home","about","process","products","order","dealer","contact"].map(x=>(
            <a key={x} href={`#${x}`}>{x.toUpperCase()}</a>
          ))}
          <button onClick={()=>setLang(lang==="en"?"hi":"en")}>
            {lang==="en" ? "हिंदी" : "English"}
          </button>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" style={hero}>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} style={{fontSize:50}}>
          {t[lang].brand}
        </motion.h1>
        <p style={{fontWeight:600,color:"#b45309"}}>{t[lang].tag}</p>
        <p style={{maxWidth:720,margin:"20px auto"}}>{t[lang].about}</p>
        <a href="https://wa.me/918770814118" target="_blank">
          <button style={btn}>Order on WhatsApp</button>
        </a>
      </section>

      {/* SLIDER */}
      <div style={{display:"flex",overflowX:"auto",gap:16,padding:20}}>
        {images.map((img,i)=>(
          <img key={i} src={img} style={{height:260,borderRadius:16}}/>
        ))}
      </div>

      {/* ABOUT */}
      <section id="about" style={section}>
        <h2>About Us</h2>
        <p style={text}>{t[lang].about}</p>
      </section>

      {/* PROCESS */}
      <section id="process" style={{...section,background:"#fff8ee"}}>
        <h2>Our Process</h2>
        <div style={grid}>
          {["Premium Wheat","Washed Grains","Stone Grinding","Fresh Packing","24h Delivery"].map(x=>(
            <div key={x} style={card}><b>{x}</b><p>Hygienic and traditional process.</p></div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={section}>
        <h2>Our Products</h2>
        <div style={grid}>
          {["Premium Chakki Aata – 5kg","Premium Chakki Aata – 10kg"].map(x=>(
            <div key={x} style={card}>
              <div style={imgBox}>Add Packet Photo</div>
              <b>{x}</b>
              <p>Freshly prepared after order.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" style={{...section,background:"#fff3dc"}}>
        <h2>{t[lang].order}</h2>

        <form onSubmit={(e)=>{
          e.preventDefault();
          const n=e.target.name.value;
          const p=e.target.phone.value;
          const a=e.target.address.value;
          const k=e.target.pack.value;
          const msg=`New Aata Order:%0AName: ${n}%0APhone: ${p}%0APack: ${k}%0AAddress: ${a}`;
          window.open(`https://wa.me/918770814118?text=${msg}`,"_blank");
        }} style={{maxWidth:420,margin:"auto"}}>

          <input name="name" required placeholder="Your Name" style={input}/>
          <input name="phone" required placeholder="Mobile Number" style={input}/>
          <textarea name="address" required placeholder="Delivery Address (Indore)" style={input}/>
          <select name="pack" style={input}>
            <option>5 kg</option>
            <option>10 kg</option>
          </select>

          <button style={btn}>Place Order on WhatsApp</button>
        </form>

        <br/>
        <a href="upi://pay?pa=YOURUPIID@okaxis&pn=Swarna%20Bhoomi&cu=INR">
          <button style={{...btn,background:"#15803d"}}>Pay via UPI</button>
        </a>
      </section>

      {/* DEALER */}
      <section id="dealer" style={section}>
        <h2>{t[lang].dealer}</h2>
        <ul style={{maxWidth:600,margin:"auto",textAlign:"left"}}>
          <li>✔ High demand daily product</li>
          <li>✔ Area-wise dealership</li>
          <li>✔ Brand & marketing support</li>
          <li>✔ Attractive margins</li>
        </ul>
        <p>📞 8770814118</p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={section}>
        <h2>Contact</h2>
        <p>📍 Indore</p>
        <p>📞 WhatsApp: 8770814118</p>
        <p>📧 info@swarnabhoomiaata.com</p>
      </section>

      <footer style={{background:"#d97706",color:"white",textAlign:"center",padding:18}}>
        © {new Date().getFullYear()} Swarna Bhoomi Premium Aata
      </footer>

    </div>
  );
}

/* styles */
const nav={position:"sticky",top:0,background:"white",display:"flex",justifyContent:"space-between",padding:"12px 22px",boxShadow:"0 2px 8px rgba(0,0,0,0.05)",zIndex:10};
const hero={background:"#fff3dc",padding:"90px 20px",textAlign:"center"};
const section={padding:"80px 20px",textAlign:"center"};
const text={maxWidth:800,margin:"auto"};
const grid={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:20,maxWidth:1000,margin:"40px auto"};
const card={background:"white",padding:22,borderRadius:16,boxShadow:"0 5px 15px rgba(0,0,0,0.05)"};
const imgBox={background:"#fde68a",height:140,borderRadius:12,marginBottom:10,display:"flex",alignItems:"center",justifyContent:"center"};
const btn={padding:"14px 26px",borderRadius:30,border:"none",background:"#d97706",color:"white",cursor:"pointer",marginTop:10};
const input={width:"100%",padding:10,margin:"6px 0",borderRadius:10,border:"1px solid #ccc"};
