import { useRef, useState } from 'react';

import classes from './Checkout.module.scss'
import { UserData } from '../../Model/UserData';
import { isEmpty, isFiveChars } from '../../utils/formValidation';

interface CheckoutProps {
    onCancel: () => void;
    onSubmit?: (userData: UserData) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onCancel, onSubmit }) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const nameInputRef = useRef<HTMLInputElement | null>(null);
    const streetInputRef = useRef<HTMLInputElement | null>(null);
    const postalInputRef = useRef<HTMLInputElement | null>(null);
    const cityInputRef = useRef<HTMLInputElement | null>(null);

    const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const enteredName = nameInputRef.current?.value;
        const enteredStreet = streetInputRef.current?.value;
        const enteredPostalCode = postalInputRef.current?.value;
        const enteredCity = cityInputRef.current?.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = !isFiveChars(enteredPostalCode);

        const formIsValid = 
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPostalCodeIsValid;

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid,
        })   

        if (!formIsValid) {
            return;
        }

        onSubmit && onSubmit({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostalCode,
        })
    }

    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`
    const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`
    const postalControlClasses = `${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`

    return <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} />
            {!formInputsValidity.name && <p className={classes.error}>Please, enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef}/>
            {!formInputsValidity.street && <p className={classes.error}>Please, enter a valid street!</p>}
        </div>
        <div className={cityControlClasses}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef}/>
            {!formInputsValidity.city && <p className={classes.error}>Please, enter a valid city!</p>}
        </div>
        <div className={postalControlClasses}>
            <label htmlFor='postalCode'>Postal Code</label>
            <input type='text' id='postalCode' ref={postalInputRef}/>
            {!formInputsValidity.postalCode && <p className={classes.error}>Please, enter a valid postalCode!</p>}
        </div>
        <div className={classes.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
};

export default Checkout;