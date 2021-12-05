import React from 'react';
import {useFormik} from 'formik';
import './form-styles.css';
import {useDispatch, useSelector} from "react-redux";
import CharacterItem from "../characters/CharacterItem";
import {addHeroNew} from "../../store/action";

const AddCharacterComponent = () => {
    const heroes = useSelector(state => state);
    const dispatch = useDispatch();

    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required Name';
        }
        if (!values.image) {
            errors.image = 'Required Image';
        }
        if (!values.email) {
            errors.email = 'Required field';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    };
    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            email: '',
            gender: 'Male',
            image: '',
        },
        validate,
        onSubmit: values => {
            dispatch(addHeroNew({
                id: Date.now(),
                name: values.name,
                email: values.email,
                gender: values.gender,
                image: values.image,
            }));
            formik.resetForm()
        },
    });

    return (
        <>
            <div className="characters ">
                <div className="form">
                    <h2 className="t-center">Add new Hero</h2>
                    <form onSubmit={formik.handleSubmit}>
                        {formik.errors.name ? <div className="pl-1">{formik.errors.name}:</div> : null}
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name || ''}
                            placeholder="Name"
                        />
                        {formik.errors.email ? <div className="pl-1">{formik.errors.email}:</div> : null}
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="Email"
                        />
                        <div role="group" aria-labelledby="gender-radio-group">
                            <label htmlFor="gender" className="pl-1">Gender:</label>
                            <input onChange={formik.handleChange} type="radio" name="gender" value="Male"/>Male
                            <input onChange={formik.handleChange} type="radio" name="gender" value="Female"/>Female
                        </div>
                        {formik.errors.image ? <div className="pl-1">{formik.errors.image}:</div> : null}
                        <input
                            id="image"
                            name="image"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.image}
                            placeholder="Url"
                        />
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>

            {(heroes.length > 0) &&
            <div className="characters">
                <div>
                    {heroes.map(el => <CharacterItem key={el.id} character={el}/>)}
                </div>
            </div>
            }
        </>
    );
};

export default AddCharacterComponent;