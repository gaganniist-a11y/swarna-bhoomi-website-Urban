import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{ fontFamily: "Poppins, Arial, sans-serif", color: "#3f2d20" }}>

      {/* HERO */}
      <section style={hero}>
        <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} style={heroTitle}>
          Swarna Bhoomi <span style={{color:"#d97706"}}>Premium Aata</span>
        </motion.h1>
        <div style={tagline}>Fresh Aata, On Demand.</div>
        <p style={heroText}>
          Washed wheat. Stone-ground on traditional chakki only after you order.  
          No chemicals. No preservatives. Delivered within 24 hours in Indore.
        </p>
        <a href="https://wa.me/918770814118" target="_blank">
          <button style={btnPrimary}>Order on WhatsApp</button>
        </a>
      </section>

      {/* WHY US */}
      <section style={section}>
        <h2 style={h2}>Why Swarna Bhoomi?</h2>
        <div style={grid4}>
          {[
            "Washed Wheat",
            "Stone Ground Chakki",
            "Fresh on Order",
            "24 Hour Delivery"
          ].map(x => (
            <div key={x} style={card}>
              <h3>{x}</h3>
              <p>Pure, hygienic and traditionally prepared aata.</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{...section, background:"#fff8ee"}}>
        <h2 style={h2}>Our Products</h2>
        <div style={grid3}>
          {["Premium Chakki Aata – 5kg", "Premium Chakki Aata – 10kg"].map(p => (
            <div key={p} style={productCard}>
              <div style={imgBox}>Add Packet Photo</div>
              <h3>{p}</h3>
              <p>Freshly milled after order. Airtight packed.</p>
              <a href="https://wa.me/918770814118" target="_blank">
                <button style={btnSecondary}>Order Now</button>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={section}>
        <h2 style={h2}>Our Freshness Process</h2>
        <div style={grid4}>
          {[
            "Select Premium Wheat",
            "Wash & Clean Grains",
            "Stone Grinding",
            "Fresh Packing & Delivery"
          ].map(s => (
            <div key={s} style={card}>
              <h3>{s}</h3>
              <p>Every batch prepared only after customer order.</p>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERY */}
      <section style={{...section, background:"#fff3dc", textAlign:"center"}}>
        <h2 style={h2}>Delivery Information</h2>
        <p><b>Currently serving: Indore</b></p>
        <p>Prepared fresh and delivered within 24 hours.</p>
      </section>

      {/* CONTACT */}
      <section style={{...section, textAlign:"center"}}>
        <h2 style={h2}>Contact & Orders</h2>
        <p>📍 Indore</p>
        <p>📞 WhatsApp: 8770814118</p>
        <a href="https://wa.me/918770814118" target="_blank">
          <button style={btnPrimary}>Order on WhatsApp</button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        © {new Date().getFullYear()} Swarna Bhoomi Premium Aata • Fresh Aata, On Demand.
      </footer>

    </div>
  )
}

/* ---------- STYLES ---------- */

const hero = {background:"#fff3dc", padding:"90px 20px", textAlign:"center"}
const heroTitle = {fontSize:"52px", marginBottom:"10px"}
const tagline = {color:"#b45309", fontWeight:"600", fontSize:"20px"}
const heroText = {maxWidth:"760px", margin:"22px auto", fontSize:"18px"}

const section = {padding:"70px 20px"}
const h2 = {textAlign:"center", fontSize:"34px", marginBottom:"40px"}

const grid4 = {display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"20px", maxWidth:"1000px", margin:"0 auto"}
const grid3 = {display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))", gap:"25px", maxWidth:"900px", margin:"0 auto"}

const card = {background:"white", padding:"25px", borderRadius:"16px", boxShadow:"0 5px 15px rgba(0,0,0,0.05)", textAlign:"center"}
const productCard = {...card}
const imgBox = {background:"#fde68a", height:"160px", borderRadius:"12px", marginBottom:"10px", display:"flex", alignItems:"center", justifyContent:"center"}

const btnPrimary = {padding:"14px 28px", borderRadius:"30px", border:"none", background:"#d97706", color:"white", fontSize:"16px", cursor:"pointer"}
const btnSecondary = {padding:"10px 22px", borderRadius:"25px", border:"1px solid #d97706", background:"white", color:"#d97706", cursor:"pointer"}

const footer = {background:"#d97706", color:"white", textAlign:"center", padding:"20px"}
