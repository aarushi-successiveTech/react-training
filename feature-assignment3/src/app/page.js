import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 style={{textAlign : 'center'}}>Assignment - 3</h1>
      <nav style={{textAlign : 'center', fontSize: '30px'}}>
        <ul>
          <br/>
          <li><u><Link href="/question1">Solutions</Link></u></li>
          
        </ul>
      </nav>
    </div>
  );
}
