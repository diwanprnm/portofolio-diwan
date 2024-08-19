
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../Styles/Education.css'
import { RiGovernmentFill } from "react-icons/ri";

function Education() {
  return (
    <section id='education'>
        <div className='wrapper'>
            <h1>Education</h1>
            <VerticalTimeline layout='1-column-left' lineColor='#eaedef'> 
                <VerticalTimelineElement className='vertical-timeline-element--education'date='2024' iconStyle={{background:'rgb(33,150,243', color: '#eaedef'}} icon={<RiGovernmentFill />} style={{ backdropFilter:'#eaedef' }}>
                <h4 className="vertical-timeline-element-title">Politeknik Negeri Bandung</h4>
                <h5 className="vertical-timeline-element-subtitle">D3 Teknik Informatika</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--education'date='2020' iconStyle={{background:'rgb(33,150,243', color: '#eaedef'}} icon={<RiGovernmentFill />} style={{ backdropFilter:'#eaedef' }}>
                <h4 className="vertical-timeline-element-title">SMAN 1 Tasikmalaya</h4>
                <h5 className="vertical-timeline-element-subtitle">IPA</h5>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </section>
  )
}

export default Education
