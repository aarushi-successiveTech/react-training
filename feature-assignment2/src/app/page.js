import Image from "next/image";
import styles from "./page.module.css";
import Counter from "./question1/page";
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <h1>Assignment - 2 Questions </h1>
      <nav>
        <ul>
          <br/>
          <li><Link href="/question1">Question1</Link></li>
          <br/>
          <li><Link href="/question2">Question2</Link></li>
          <br/>
          <li><Link href="/question3">Question3</Link></li>
          <br/>
          <li><Link href="/question4">Question4</Link></li>
          <br/>
          <li><Link href="/question5">Question5</Link></li>
          <br/>
          <li><Link href="/question6">Question6</Link></li>
          <br/>
          <li><Link href="/question7">Question7</Link></li>
          <br/>
          <li><Link href="/question8">Question8</Link></li>
         
        </ul>
      </nav>
    </div>
  );
}


