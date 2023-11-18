import React from 'react'
import "./home.css";
import { Sidebar, Header } from '../../components/index';

export default function Home() {
    return (
        <section className='container-fluid'>
            <div className='row parentalRowHOME'>
                <Header />
                <Sidebar />
            </div>
        </section>
    )
}
