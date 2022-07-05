import clsx from 'clsx';
import Head from "next/head";
import Link from 'next/link'
import { useMoralis } from "react-moralis";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import mainLogo from '../public/logo.png'
import Image from 'next/image'
import { PieChart } from 'react-minimal-pie-chart';
import { motion } from "framer-motion";

export default function Home() {
  const { Moralis } = useMoralis();
  async function login() {
    await Moralis.Web3.enableWeb3();
    await Moralis.Web3.authenticate();
    console.log(Moralis.User.current().get("ethAddress"));
  }
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
      {/* <header
        className={clsx(
          'header',
          'md:px-8',
          'lg:h-header-lg',
        )}
        role="banner"
      >
        <div
          className={clsx(
            'absolute right-0 flex h-full items-center',
            'md:mr-4',
          )}
        >
          
          <div
            className={clsx(
              'hidden',
              'lg:block',
            )}
          >
            
          </div>
        </div>
      </header> */}
      
      <header className="hero">
        <div className="container">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <h1>Buy Adashe (ADSE)</h1>
              <div className="panel-content">
                <span className='subheader'>Adashe is the primary utility token of our ecosystem and enables you to participate in our upcoming generation staking rewards program as well as earn by providing stability to the ADSE Stablecoin.</span>
                <p><span className="price"><span className="highlight">1 ADSE = $0.00025 USD</span></span></p>
                <p>Get whitelisted for our upcoming presale <Link href={'/'}>here</Link></p>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.0 }}
                  className="btn"
                  onClick={login}
                >
                  Connect
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
      <main className="flex flex-col justify-center align-items-center">
        <div className="page-break">
          <Image src="/public/PageBreak.svg" width="1680" height="40" />
        </div>
        <div className="flex items-center justify-center">
          <div className="panel-layout">
            <div className="panel">
              <h2>Details</h2>
              <div className="panel-content">
                <span className='subheader'><h3>Supply</h3></span>
                <p>A total of a 750,000,000 ADSE (7.5% of the supply) is available for the presale event. The total ADSE supply is 10,000,000,000.</p>
              </div>
              <div className="panel-content">
                <span className='subheader'><h3>Terms</h3></span>
                <p>The contract accepts MATIC and the token price will begin at $0.000025 or 3200 ADSE per MATIC. The event will run until all tokens are sold.</p>
              </div>
              <div className="panel-content">
                <span className='subheader'><h3>Fair Distribution</h3></span>
                <p>There is no front-running and being first or last doesn&apos;t matter. All participants will receive ADSE at the same rate depending on how much is purchased.</p>
              </div>
            </div>
            
            <div className="panel">
              <h2>Token Allocation</h2>
              <div className="panel-content">
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
                <p>Learn about our tokenomics <Link href={'/'}>here</Link></p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="disclaimer">
          <p>Please make sure you are connected to the right network Mumbai mainnet and the correct address.</p>
          <p>NOTE: you may need to <Link href={'/'}>bridge</Link> or <Link href={'/'}>swap</Link> assets.</p>
          <p>We have set the gas limit to 1000000 for the contract to successfully process your order.</p>
          <p>We recommend that you don&apos;t lower the gas limit.</p>
        </div> */}
      </main>

    </div>
  );
}

