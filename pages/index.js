import Head from 'next/head'
import Image from 'next/image'
import Section1 from '../components/Section1.jsx'
import Section2 from '../components/Section2.jsx'
import Section3 from '../components/Section3.jsx'
import Section4 from '../components/Section4.jsx'
import Format from '../layout/Format.jsx'
import styles from '../styles/Home.module.css'
import Page from './posts/Page.jsx'

export default function Home() {
  return (
    
    <div>
      <Format>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        
      </Format>
    </div>
  )
}
