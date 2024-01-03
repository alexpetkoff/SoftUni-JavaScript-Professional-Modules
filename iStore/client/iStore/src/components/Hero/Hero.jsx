import "./Hero.css";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-title">
                    <p className="title">
                        Hurry up, before our Christmast and New Year discounts
                        end!
                    </p>
                    <p className="hero-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorum animi veritatis, minus reiciendis, sit
                        maiores libero explicabo nam fugit nobis a, eius sequi
                        nisi quidem!
                    </p>
                    <div>
                        <a href="#" className="hero-btn-text">
                            Hurry up!
                        </a>
                    </div>
                </div>
                <img
                    className="hero-image"
                    src="../../assets/imgs/christmas-hero.png"
                    alt="Christmas decoration image!"
                />
            </div>
        </div>
    );
}

export default Hero;
