import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const ProfileButton = ({ photoUrl, size, gotolink }) => {
    const handleButtonClick = () => {
        // Add logic to launch the profile edit page using the phone URL
        window.location.href = `${gotolink}`
    }
    return (
        <Button
            onClick={handleButtonClick}
            style={{
                border: 'none',
                background: 'none',
                padding: 0,
                margin: 0,
                width: size, // Set the width based on the size prop
                height: size, // Set the height based on the size prop
                borderRadius: '50%',
            }}
        >
            <img
                src={photoUrl}
                alt="Profile Pic"
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
        </Button>
    )
}

ProfileButton.propTypes = {
    photoUrl: PropTypes.string.isRequired,
    size: PropTypes.string, // Define size as a string prop
    gotolink: PropTypes.string,
}

ProfileButton.defaultProps = {
    size: 50, // Set a default size if not provided
    photoUrl:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    gotolink: '/',
}

export default ProfileButton
