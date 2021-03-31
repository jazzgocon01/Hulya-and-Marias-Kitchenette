import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Loader from '../layout/Loader'
import Sidebar from '../admin/Sidebar'
import MetaData from '../layout/MetaData'

const Profile = () => {

    const { user, loading } = useSelector(state => state.auth)

    return (
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                {loading ? <Loader /> : (
                    <Fragment>
                        <MetaData title={'Your Profile'} />
                        <div className="col-12 col-md-10">

                            <h1 className="my-5">My Profile</h1>

                            <div className="col-12 col-md-5">
                                <h4>Full Name</h4>
                                <p>{user.name}</p>

                                <h4>Email Address</h4>
                                <p>{user.email}</p>

                                <Link to="/profile/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                                    Edit Profile
                            </Link>
                                <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                                    Change Password
                            </Link>
                            </div>

                        </div>
                    </Fragment>
                )}

            </div>
        </Fragment>
    )
}

export default Profile
