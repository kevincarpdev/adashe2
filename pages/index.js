import clsx from 'clsx';
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import mainLogo from '../public/logo.png'
import Image from 'next/image'
import { PieChart } from 'react-minimal-pie-chart';
import { motion } from "framer-motion";
import PageBreak from "../public/PageBreak.svg";
import * as Scroll from 'react-scroll';
import PageBreakBottom from "../public/PageBreakBottom.svg";

export default function Home() {
  // const [hasScrolled, setHasScrolled] = useState(false)
  const { authenticate, isAuthenticated, user, Moralis } = useMoralis();
  Moralis.getSigningData = () => "Adashe (ADSE)";
  let ScrollLink = Scroll.Link;

  const login = async () => {
    if (!isAuthenticated) {

      await authenticate()
        .then(function (user) {
          console.log(Moralis.User.current().get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  // async function login() {
  //   await Moralis.Web3.enableWeb3();
  //   await Moralis.Web3.authenticate();
  //   console.log(Moralis.User.current().get("ethAddress"));
  // }
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
  };
  const shiftSize = 7;

  const container = {
    hidden: { rotate: 180 },
    show: {
      rotate: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }
  const panela = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
  }

  // useEffect(() => {
  //   const handleScroll = throttle(() => {
      
  //     const offset = 0
  //     const { scrollTop } = document.documentElement
  //     const scrolled = scrollTop > offset

  //     if (hasScrolled !== scrolled) {
  //       setHasScrolled(scrolled)
  //     }
  //   }, 200)

  //   document.addEventListener('scroll', handleScroll)
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //   }
    
  // }, [hasScrolled])


  return (
    <div>
      <Head>
        <title>Adashe</title>
        <meta name="description" content="Adashe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#060B19",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 120,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#382C53",
            },
            links: {
              color: "#382C53",
              distance: 250,
              enable: true,
              opacity: 1.0,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1920,
              },
              value: 100,
            },
            opacity: {
              value: 1.0,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      
      <header className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1>Buy Adashe (ADSE)</h1>
              <div className="panel-content">
                <span className='subheader'>Adashe is the primary utility token of our ecosystem and enables you to participate in our upcoming generation staking rewards program as well as earn by providing stability to the ADSE Stablecoin.</span>
                <p><span className="price"><span className="highlight">1 ADSE = $0.00025 USD</span></span></p>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.0 }}
                  className="btn"
                  onClick={login}
                >
                  {isAuthenticated ? 'Sign Out' : 'Connect'}
                </motion.button>
              </div>
            </div>
            <div className="logo">
              <Image
                src={mainLogo}
                alt="Logo"
                quality="85"
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-center align-items-center text-center">

        <PageBreak />

        <section className="tabs">
          <ul>
            <li><ScrollLink to='supply' activeClass='selected' spy={true}>Supply</ScrollLink></li>
            <li><ScrollLink to='terms' activeClass='selected' spy={true}>Terms</ScrollLink></li>
            <li><ScrollLink to='distribution' activeClass='selected' spy={true}>Fair Distribution</ScrollLink></li>
            <li><ScrollLink to='allocation' activeClass='selected' spy={true}>Token Allocaton</ScrollLink></li>
          </ul>
        </section>

        <section id="supply">
          <div className="flex items-center justify-center">
            <div className="panel-layout">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="panel"
              >
                <div className="panel-content">
                  <span className='subheader'><h3>Supply</h3></span>
                  <p>A total of a 750,000,000 ADSE (7.5% of the supply) is available for the presale event. The total ADSE supply is 10,000,000,000.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="terms">
          <div className="flex items-center justify-center">
            <div className="panel-layout">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="panel"
              >
                <div className="panel-content">
                  <span className='subheader'><h3>Terms</h3></span>
                  <p>The contract accepts MATIC and the token price will begin at $0.000025 or 3200 ADSE per MATIC. The event will run until all tokens are sold.</p>
                </div>
              </motion.div>
              
            </div>
          </div>
        </section>
        <section id="distribution">
          <div className="flex items-center justify-center">
            <div className="panel-layout">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="panel"
              >
                <div className="panel-content">
                  <span className='subheader'><h3>Fair Distribution</h3></span>
                  <p>There is no front-running and being first or last doesn&apos;t matter. All participants will receive ADSE at the same rate depending on how much is purchased.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section id="allocation">
          <h2 className="page-header">Token Allocation</h2>
                <PieChart
                  data={[
                    { title: '30%', value: 30, color: '#775BB4' },
                    { title: '30%', value: 30, color: '#2E52E1' },
                    { title: '9.5%', value: 9.5, color: '#775BB4' },
                    { title: '9.5%', value: 9.5, color: '#2E52E1' },
                    { title: '3%', value: 3, color: '#775BB4' },
                    { title: '5%', value: 5, color: '#3174C7' },
                  ]}
                  radius={PieChart.defaultProps.radius - shiftSize}
                  segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                  label={({ dataEntry }) => dataEntry.value}
                  labelStyle={{
                    ...defaultLabelStyle,
                  }}
                  className="pieChart"
                />
                {/* <p>Learn about our tokenomics <Link href={'/'}>here</Link></p> */}
              
        </section>
        
        
        {/* <div className="disclaimer">
          <p>Please make sure you are connected to the right network Mumbai mainnet and the correct address.</p>
          <p>NOTE: you may need to <Link href={'/'}>bridge</Link> or <Link href={'/'}>swap</Link> assets.</p>
          <p>We have set the gas limit to 1000000 for the contract to successfully process your order.</p>
          <p>We recommend that you don&apos;t lower the gas limit.</p>
        </div> */}
      </main>
      <footer>
        <PageBreakBottom />

        <div className="footerLogo">
          <Image
            src={mainLogo}
            alt="Logo"
            quality="85"
            layout="intrinsic"
          />
        </div>
        <ul>
          <li><ScrollLink to='supply' activeClass='selected' spy={true}>Supply</ScrollLink></li>
          <li><ScrollLink to='terms' activeClass='selected' spy={true}>Terms</ScrollLink></li>
          <li><ScrollLink to='distribution' activeClass='selected' spy={true}>Fair Distribution</ScrollLink></li>
          <li><ScrollLink to='allocation' activeClass='selected' spy={true}>Token Allocaton</ScrollLink></li>
        </ul>
      </footer>

    </div>
  );
}

