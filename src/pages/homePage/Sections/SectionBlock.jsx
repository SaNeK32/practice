import Section from './Section';
import './sections.css';

function SectionBlock(){
    return(
        <div className='sectionsBlock'>
            <Section />
            <Section />
            <Section />
            <Section />
        </div>
    );
}

export default SectionBlock;