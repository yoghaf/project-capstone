import "../../assets/landing-page.css";
import "../../assets/navbar-landing.css";
function Jumbotron1() {
  return (
    <section className="Jumbotron1">
      <img className="gambar_jumbotron" src="./images/jumbotron/Saly-3.png" alt="" />

      <div className="description">
        <h2>Menjaga Lingkungan Bukan Angan-angan, tapi Tindakan</h2>
        <p>Mari bergabung bersama Trash Hunter agar dapat menemukan beragam kegiatan peduli lingkungan di seluruh Indonesia dan mengambil bagian dalam gerakan menuju bumi yang lebih bersih.</p>
      </div>
    </section>
  );
}

function Jumbotron2() {
  return (
    <section className="Jumbotron2">
      <img className="gambar_jumbotron" src="./images/jumbotron/image2.png" alt="" />

      <div className="description2">
        <p>Trash Hunter menjadi media untuk mempromosikan kegiatan peduli lingkungan yang akan diselenggarakan.</p>
        <p>Menemukan dan mendaftar menjadi bagian dari kegiatan peduli lingkungan yang ada di sekitar anda.</p>
        <p>Bertemu dengan teman yang memiliki visi dan misi terhadap keberlangsungan bumi.</p>
      </div>
    </section>
  );
}

function Jumbotron3() {
  return (
    <section className="Jumbotron3">
      <div className="description3">
        <p>Kerusakan alam bukan terjadi pada kita, tapi karena kita.</p>
      </div>
    </section>
  );
}

function Jumbotron4() {
  return (
    <section className="Jumbotron4">
      <img className="gambar_jumbotron" src="./images/jumbotron/image3.png" alt="" />

      <div className="description4">
        <p>Mari bergabung dengan Trash Hunter</p>
        <h2>Merawat lingkungan hari ini untuk kehidupan yang lebih baik besok.</h2>
      </div>
    </section>
  );
}
export { Jumbotron1, Jumbotron2, Jumbotron3, Jumbotron4 };
