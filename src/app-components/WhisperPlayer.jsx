import { Flex, View, Button } from '@aws-amplify/ui-react'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const WhisperPlayer = () => {
    const audioRef = useRef(null)
    const [value, setValue] = useState(0)
    let parms = useParams()
    let url = 'https://commondatastorage.googleapis.com/codeskulptor-assets/'

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play()
        }
    }, [value])

    return (
        <View maxWidth="100%" padding="20rem">
            <Flex justifyContent="center">
                <audio
                    ref={audioRef}
                    controls
                    src={url + parms.audiofile}
                    type="audio/ogg"
                >
                    Your browser does not support the audio element.
                </audio>
            </Flex>
        </View>
    )
}
export default WhisperPlayer
