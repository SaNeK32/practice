import CustomCheckbox from "../CustomCheckbox";

function Section(){
    return(
        <section className="section">
            <CustomCheckbox className="chkSc"/>
            <button className="moreIconButton">
                <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="moreIcon">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM0 14C0 12.9 0.9 12 2 12C3.1 12 4 12.9 4 14C4 15.1 3.1 16 2 16C0.9 16 0 15.1 0 14Z" fill="#397BF7"/>
                </svg>
            </button>
            <span className="nameOfSection">Hello world</span>
        </section>
    );
}

export default Section;