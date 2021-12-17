import Image from "next/image";
import Head from "next/head";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

    return (
      <div className="bg-black relative">
        <Head>
          <title>Metaverse Challenge</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Login screen</h1>
        <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
          {/* logo */}
          <Image
            className="object-cover rounded-full"
            src="https://avatars.githubusercontent.com/u/59863035?v=4"
            height={200}
            width={200}
          />
          {/* Login button */}
          <button
            onClick={authenticate}
            className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
          >
            Login to the Metaverse
          </button>
        </div>

        <div className="w-full h-screen">
          <Image
            src="https://links.papareact.com/55n"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    );
}

export default Login
