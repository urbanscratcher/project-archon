import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className={`h-auto w-10`}>
        <Image
          src={"/assets/logo.png"}
          alt="logo"
          fill
          className="object-contain"
        />
      </div>
      <div>information</div>
      <div>menu</div>
      <div>topics</div>
      <div>newsletter</div>
    </footer>
  );
}

export default Footer;
