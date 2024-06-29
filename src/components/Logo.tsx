import Image from "next/image";

export default function Logo() {
  return (
    <Image
      alt="logo"
      src={
        "https://img.freepik.com/premium-vector/alphabetical-letter-e-logo-collection_647881-448.jpg?size=626&ext=jpg&ga=GA1.1.1616792848.1712877448&semt=ais_user"
      }
      className="rounded-full"
      height={40}
      width={40}
    ></Image>
  );
}
