import Image1 from "../assets/image/Saly-3.png"
function Jumbotorn() {
    return (
        <section className="Jumbotron">
            <img className="gambar_jumbotorn" src={Image1}/>
            
            <div className="description">
            <h2>Laboratorium Informatika</h2>
            <h2 id="colored">UPN "Veteran" Jawa Timur</h2>
            <p>Laboratorium Sistem Cerdas dan Robotika (Lab SCR) atau Intelligent Systems And Robotic Laboratory (ISR Lab) merupakan salah satu Laboratorium di bawah pengelolaan Program Studi Informatika Fakultas Ilmu Komputer UPN Veteran Jawa Timur yang fokus pada keilmuan berkaitan dengan Sistem Cerdas dan Robotika.</p>
            </div>
        </section>
    );
  }
  
  export default Jumbotorn;