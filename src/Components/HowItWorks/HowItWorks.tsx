import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const HowItWorks = () => {
  return (
    <div id="education" className='bg-gray-100'>
            <h2 className="text-3xl font-semibold text-center mt-10 mb-10 uppercase">How It Works</h2>
            
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1c9991', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #1c9991' }}
    iconStyle={{ background: '#1c9991', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Creative a account</h3>
    
    <p>
      Creative a account to books our facility. Only a user can create a booking.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#03AED2', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #03AED2' }}
    iconStyle={{ background: '#03AED2', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Find your desire facility</h3>
    
    <p>
    Find your desire facility by exploring popular facilities from home page or you can to to the facility page to see all facility
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1c9991', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #1c9991' }}
    iconStyle={{ background: '#1c9991', color: '#fff' }}
  
  >
    <h3 className="vertical-timeline-element-title">Choose your facility</h3>
    <p>
    Choose your facility and choose your date to check the facility availability
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#03AED2', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #03AED2' }}
    iconStyle={{ background: '#03AED2', color: '#fff' }}
    
  >
     <h3 className="vertical-timeline-element-title">Make your payment</h3>
    <p>
    Make your payment to confirm to booking, you can pay vai Aamar pay.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#1c9991', color: '#fff' }}
    
  />
</VerticalTimeline>
        </div>
  );
};

export default HowItWorks;