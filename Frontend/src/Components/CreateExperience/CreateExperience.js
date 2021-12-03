import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './CreateExperience.css'
import Card from './Card/Card'

const CreateExperience = () => {

    const onChangeInput = e => {
        e.preventDefault();
        console.log(e);
    }

    return (
        // <div className="background">
        <Card className="background">
            <div className="row my-3">
                <h1 className="text-center heading mb-4">Add a new travel experience</h1>
                <div className="col-md-9 mx-auto">
                    <form action="/newpost" method="POST" encType="multipart/form-data" onSubmit={onChangeInput}>
                        <div className="mb-3">
                            <label className="form-label" for="title">Name of Destination</label>
                            <input className="form-control" type="text" id="title" name="title" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" for="city">City</label>
                            <input className="form-control" type="text" id="city" name="city" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" for="price">Estimated Cost</label>
                            <div className="input-group">
                                <span className="input-group-text" id="price-label">Rs.</span>
                                <input type="text" className="form-control" id="price" placeholder="0.00" aria-label="price"
                                    aria-describedby="price-label" name="price" />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" for="description">Write your experience</label>
                            <textarea className="form-control" type="text" id="description" name="description"
                                required></textarea>
                        </div>
                        <div className="mb-3">
                            <label for="choose-files" className="form-label">Add Images</label>
                            <input
                                className="form-control"
                                type="file"
                                alt='Picture of a destination'
                                id="choose-files"
                                name="image"
                                multiple
                            />
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-success">Share your experience</button>
                        </div>
                    </form>
                    <NavLink to="/">Back to Landing</NavLink>
                </div>
            </div>
        </Card>
        // </div>

    )
}

export default CreateExperience
