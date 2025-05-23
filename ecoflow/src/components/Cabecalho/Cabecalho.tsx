import Image from "next/image";
import Menu from "../Menu/Menu";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div>
        <Image src="/img/logo.png" alt="logo" width={60} height={60} />
        <h1>EcoFlow</h1>
      </div>
      <Menu />

      <div className="btnlogin">
        <Link href="/auth">
          <button> Login </button>
        </Link>
      </div>
    </header>
  );
}
