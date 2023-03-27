import { carouselA } from "../../../styles/styled";


function CarouselA() {
  

    return (
      <>
<div className={carouselA}>
    {/* <div className="carousel-container">
      <h2>fade in/out</h2>
      <ul className="carousel my-carousel">
        <input className="carousel__activator" type="radio" id="A" name="activator" defaultChecked="checked" />
        <input className="carousel__activator" type="radio" id="B" name="activator" />
        <input className="carousel__activator" type="radio" id="C" name="activator" />
        <input className="carousel__activator" type="radio" id="D" name="activator" />
        <input className="carousel__activator" type="radio" id="E" name="activator" />
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="E" />
          <label className="carousel__control carousel__control--forward" htmlFor="B" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="A" />
          <label className="carousel__control carousel__control--forward" htmlFor="C" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="B" />
          <label className="carousel__control carousel__control--forward" htmlFor="D" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="C" />
          <label className="carousel__control carousel__control--forward" htmlFor="E" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="D" />
          <label className="carousel__control carousel__control--forward" htmlFor="A" />
        </div>
        <li className="carousel__slide">
          <h1>A</h1>
        </li>
        <li className="carousel__slide">
          <h1>B</h1>
        </li>
        <li className="carousel__slide">
          <h1>C</h1>
        </li>
        <li className="carousel__slide">
          <h1>D</h1>
        </li>
        <li className="carousel__slide">
          <h1>E</h1>
        </li>
        <div className="carousel__indicators">
          <label className="carousel__indicator" htmlFor="A" />
          <label className="carousel__indicator" htmlFor="B" />
          <label className="carousel__indicator" htmlFor="C" />
          <label className="carousel__indicator" htmlFor="D" />
          <label className="carousel__indicator" htmlFor="E" />
        </div>
      </ul>
    </div>
    <div className="carousel-container">
      <h2>slider</h2>
      <div className="carousel my-carousel carousel--translate">
        <input className="carousel__activator" type="radio" name="carousel" id="F" defaultChecked="checked" />
        <input className="carousel__activator" type="radio" name="carousel" id="G" />
        <input className="carousel__activator" type="radio" name="carousel" id="H" />
        <input className="carousel__activator" type="radio" name="carousel" id="I" />
        <input className="carousel__activator" type="radio" name="carousel" id="J" />
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="J" />
          <label className="carousel__control carousel__control--forward" htmlFor="G" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="F" />
          <label className="carousel__control carousel__control--forward" htmlFor="H" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="G" />
          <label className="carousel__control carousel__control--forward" htmlFor="I" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="H" />
          <label className="carousel__control carousel__control--forward" htmlFor="J" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="I" />
          <label className="carousel__control carousel__control--forward" htmlFor="F" />
        </div>
        <div className="carousel__track">
          <li className="carousel__slide">
            <h1>F</h1>
          </li>
          <li className="carousel__slide">
            <h1>G</h1>
          </li>
          <li className="carousel__slide">
            <h1>H</h1>
          </li>
          <li className="carousel__slide">
            <h1>I</h1>
          </li>
          <li className="carousel__slide">
            <h1>J</h1>
          </li>
        </div>
        <div className="carousel__indicators">
          <label className="carousel__indicator" htmlFor="F" />
          <label className="carousel__indicator" htmlFor="G" />
          <label className="carousel__indicator" htmlFor="H" />
          <label className="carousel__indicator" htmlFor="I" />
          <label className="carousel__indicator" htmlFor="J" />
        </div>
      </div>
    </div> */}
    <div className="carousel-container">
      <h2 className="text-6xl">Çözüm Ortaklarımız</h2>
      <ul className="carousel my-carousel carousel--thumb inline-block text-center">
        <input className="carousel__activator" type="radio" id="K" name="thumb" defaultChecked={true} />
        <input className="carousel__activator" type="radio" id="L" name="thumb" />
        <input className="carousel__activator" type="radio" id="M" name="thumb" />
        <input className="carousel__activator" type="radio" id="N" name="thumb" />
        <input className="carousel__activator" type="radio" id="O" name="thumb" />
        <input className="carousel__activator" type="radio" id="P" name="thumb" />
        <input className="carousel__activator" type="radio" id="R" name="thumb" />
        <input className="carousel__activator" type="radio" id="S" name="thumb" />
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="S" />
          <label className="carousel__control carousel__control--forward" htmlFor="L" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="K" />
          <label className="carousel__control carousel__control--forward" htmlFor="M" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="L" />
          <label className="carousel__control carousel__control--forward" htmlFor="N" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="M" />
          <label className="carousel__control carousel__control--forward" htmlFor="O" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="N" />
          <label className="carousel__control carousel__control--forward" htmlFor="P" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="O" />
          <label className="carousel__control carousel__control--forward" htmlFor="R" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="P" />
          <label className="carousel__control carousel__control--forward" htmlFor="S" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="R" />
          <label className="carousel__control carousel__control--forward" htmlFor="K" />
        </div>
        <li className="carousel__slide">
          <h3>İRFAN YÜREKLİ</h3>
          <p>ISPARTA BAROSU</p>
          <p>KURUCU</p>
        </li>
        <li className="carousel__slide">
          <h3>SÜLEYMAN YILDIZ</h3>
          <p>ISPARTA BAROSU</p>
          <p>KURUCU</p>
        </li>
        <li className="carousel__slide">
          <h3>MAHMUT ÇETİN</h3>
          <p>ANTALYA BAROSU</p>
        </li>
        <li className="carousel__slide">
          <h3>FEYZULLAH YEŞİLYAYLA</h3>
          <p>İSTANBUL BAROSU</p>
        </li>
        <li className="carousel__slide">
          <h3>MUSTAFA ÜN</h3>
          <p>MERSİN BAROSU</p>
        </li>
        <li className="carousel__slide">
          <h3>TAHİR ÇATAL</h3>
          <p>KONYA BAROSU</p>
        </li>
        <li className="carousel__slide">
          <h3>ARZU NUR CENGİZ</h3>
          <p>İZMİR BAROSU</p>
        </li>
        <li className="carousel__slide">
          <h3>ŞULE KOL</h3>
          <p>İSTANBUL BAROSU</p>
        </li>
        <div className="carousel__indicators">
          <label className="carousel__indicator" htmlFor="K" />
          <label className="carousel__indicator" htmlFor="L" />
          <label className="carousel__indicator" htmlFor="M" />
          <label className="carousel__indicator" htmlFor="N" />
          <label className="carousel__indicator" htmlFor="O" />
          <label className="carousel__indicator" htmlFor="P" />
          <label className="carousel__indicator" htmlFor="R" />
          <label className="carousel__indicator" htmlFor="S" />
        </div>
      </ul>
    </div>
    {/* <div className="carousel-container">
      <h2>scale</h2>
      <ul className="carousel my-carousel carousel--scale">
        <input className="carousel__activator" type="radio" id="P" name="scale" defaultChecked="checked" />
        <input className="carousel__activator" type="radio" id="Q" name="scale" />
        <input className="carousel__activator" type="radio" id="R" name="scale" />
        <input className="carousel__activator" type="radio" id="S" name="scale" />
        <input className="carousel__activator" type="radio" id="T" name="scale" />
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="T" />
          <label className="carousel__control carousel__control--forward" htmlFor="Q" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="P" />
          <label className="carousel__control carousel__control--forward" htmlFor="R" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="Q" />
          <label className="carousel__control carousel__control--forward" htmlFor="S" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="R" />
          <label className="carousel__control carousel__control--forward" htmlFor="T" />
        </div>
        <div className="carousel__controls">
          <label className="carousel__control carousel__control--backward" htmlFor="S" />
          <label className="carousel__control carousel__control--forward" htmlFor="P" />
        </div>
        <li className="carousel__slide">
          <h1>P</h1>
        </li>
        <li className="carousel__slide">
          <h1>Q</h1>
        </li>
        <li className="carousel__slide">
          <h1>R</h1>
        </li>
        <li className="carousel__slide">
          <h1>S</h1>
        </li>
        <li className="carousel__slide">
          <h1>T</h1>
        </li>
        <div className="carousel__indicators">
          <label className="carousel__indicator" htmlFor="P" />
          <label className="carousel__indicator" htmlFor="Q" />
          <label className="carousel__indicator" htmlFor="R" />
          <label className="carousel__indicator" htmlFor="S" />
          <label className="carousel__indicator" htmlFor="T" />
        </div>
      </ul>
    </div> */}
  </div>
  
      </>
  
    );
  }
  
  export default CarouselA