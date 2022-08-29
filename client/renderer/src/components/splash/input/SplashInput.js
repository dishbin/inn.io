import './SplashInput.css';

export default function SplashInput({ label, value, onTextChange }) {
    return(
        <input 
            className='SplashInput'
            type='text'
            placeholder={label}
            value={value}
            onChange={onTextChange}
            id={label}
        />
    );
}