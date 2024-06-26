

function CustomCheckbox({ checked, onChange }){
    return(
        <label className="checkboxStyle">
            <input type="checkbox" id="chkBox"
            checked={checked}
            onChange={onChange}
            ></input>
            <span className="custom-checkbox"></span>
        </label>
    );
}

export default CustomCheckbox;