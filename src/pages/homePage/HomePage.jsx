import DivUnderSearchBar from './DivUnderSearchBar';
import Nav from './Nav';
import NewProject from './NewProject';
import SearchBar from './SearchBar';
import SectionBlock from './Sections/SectionBlock';
import './homePage.css';
import './nav.css';


function HomePage(){
    return(
        <>
         <Nav />
         <NewProject />
         <SearchBar />
         <DivUnderSearchBar />
         <SectionBlock />
        </>
    );
}

export default HomePage;