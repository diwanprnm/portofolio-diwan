import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../Styles/Experiences.css'
import { AiFillThunderbolt } from "react-icons/ai";
import { RiGovernmentFill } from "react-icons/ri";
import { BsFillRouterFill } from "react-icons/bs";
import { BiSolidDonateHeart } from "react-icons/bi";

function Experiences() {
  return (
    <section id='experience'>
        <div className='wrapper'>
            <h1>Experience</h1>
            <VerticalTimeline lineColor='#eaedef'>
                <VerticalTimelineElement className='vertical-timeline-element--work' date='Februari 2022 - Juni 2022' iconStyle={{background:'rgb(33,150,243', color: '#eaedef'}} icon={<AiFillThunderbolt />} style={{ backdropFilter:'#eaedef' }}>
                    <h5 className="vertical-timeline-element-title">Back-End Web Developer</h5>
                    <h7 className="vertical-timeline-element-subtitle">Project PLN Succesor , PT. PLN Indonesia</h7>
                    <br/><br/>
                    <ul>
                        <li>Membuat web pengelolaan kenaikan jabatan di PT.PLN menggunakan framework laravel</li>
                        <li>Membuat rancangan database</li>
                        <li>Mengimplementasikan rancangan menggunakan database PostgreSql</li>
                        <li>Membuat dokumentasi API</li>
                    </ul>
                    <p>Teknologi yang digunakan : Strapi, PostgreSQL, React.js, Git, Gitlab</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work' date='Maret 2022 - Juni 2022' iconStyle={{background:'rgb(33,150,243', color: '#eaedef'}} icon={<RiGovernmentFill />} style={{ backdropFilter:'#eaedef' }}>
                    <h5 className="vertical-timeline-element-title">Fullstack Web Developer</h5>
                    <h7 className="vertical-timeline-element-subtitle">Project Web Diarvis , Pemerintah Kabupaten Bandung</h7>
                    <br/><br/>
                    <ul>
                        <li>Membuat web pengelolaan aset daerah milik Pemkab Bandung menggunakan framework laravel</li>
                        <li>Membuat tampilan data master list aset daerah</li>
                        <li>Membuat fitur Create, List table, Delete, Update, dan detail aset</li>
                    </ul>
                    <p>Teknologi yang digunakan : Laravel, PostgreSQL, Git, Gitlab, Ajax, JQuery</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work' date='Juli 2022 - Oktober 2022' iconStyle={{background:'rgb(33,150,243', color: '#eaedef'}} icon={<BsFillRouterFill />} style={{ backdropFilter:'#eaedef' }}>
                    <h5 className="vertical-timeline-element-title">Front-End Web Developer</h5>
                    <h7 className="vertical-timeline-element-subtitle">Project Web Telkom Test House , PT. Arif Konversi Surya Inovasi indonesia (AKSII)</h7>
                    <br/><br/>
                    <ul>
                        <li>Web yang membantu proses pengujian perangkat telekomunikasi di PT.Telkom menggunakan Laravel</li>
                        <li>Membuat fitur verifikasi dengan OTP(one-time password) melalui email</li>
                        <li>Membuat fitur uji fungsi</li>
                        <li>Membuat fitur Technical Meeting Pra Uji Fungsi</li>
                    </ul>
                    <p>Teknologi yang digunakan : Laravel, MySQL, Docker, Gitlab, Bootstrap, Ajax, JQuery</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work' date='Oktober 2023 - Januari 2024' iconStyle={{background:'rgb(33,150,243', color: '#eaedef'}} icon={<BiSolidDonateHeart/>} style={{ backdropFilter:'#eaedef' }}>
                    <h5 className="vertical-timeline-element-title">Fullstack Developer</h5>
                    <h7 className="vertical-timeline-element-subtitle">Project Yayasan Sekar Telkom , PT. Arif Konversi Surya Inovasi indonesia (AKSII)</h7>
                    <br/><br/>
                    <ul>
                        <li>Web yang mengelola program dari Yayasan Sekar Telkom menggunakan Laravel</li>
                        <li>Membuat Dokumentasi API</li>
                        <li>Memperbaiki masalah pada back-end fitur web Yayasan Sekar Telkom</li>
                        <li>Support front-end web Yayasan Sekar Telkom</li>
                    </ul>
                    <p>Teknologi yang digunakan : Laravel, MySQL, Git, Gitlab, Vue.js</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </section>
    
  )
}

export default Experiences
