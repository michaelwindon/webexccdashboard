import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const DisplayCenterStatus = (props) => {
    const { contactcenter, onStatusChange } = props
    const [contactCenterStatus, setcontactCenterStatus] = useState('N/A')

    const isContactCenterOpen = (
        openTimes = contactcenter.daystodopen,
        closedTimes = contactcenter.daystodclose,
        secClosedTimes = contactcenter.secondarytodclose,
        secOpenTimes = contactcenter.secondarytodopen,
        daysOpen = contactcenter.daysopen,
        holidayArray = contactcenter.holiday
    ) => {
        const today = new Date()
        const currentDay = today
            .toLocaleString('en-US', { weekday: 'short' })
            .toUpperCase()
        const currentTime = today.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        const isHoliday = holidayArray.some((holidayDate) => {
            const [month, day, year] = holidayDate.split('/')
            const holiday = new Date(year, month - 1, day) // Month in JavaScript Date starts from 0 (0 - January, 1 - February, ...)

            // Extract date components without time
            const todayWithoutTime = new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
            )
            const holidayWithoutTime = new Date(
                holiday.getFullYear(),
                holiday.getMonth(),
                holiday.getDate()
            )

            return todayWithoutTime.getTime() === holidayWithoutTime.getTime()
        })

        const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
        const dayIndex = daysOfWeek.indexOf(currentDay)

        if (contactcenter.isoverride) {
            return 'OVERRIDE' // Contact center is closed on the current day
        }

        if (daysOpen.indexOf(currentDay) === -1) {
            return 'CLOSED' // Contact center is closed on the current day
        }

        if (isHoliday) {
            return 'HOLIDAY' // Contact center is closed on holidays
        }

        const curreTimeobj = new Date(`01/01/1970 ${currentTime}`)
        const openTime = new Date(
            `01/01/1970 ${contactcenter.daystodopen[dayIndex]}`
        ).getTime()
        const closeTime = new Date(
            `01/01/1970 ${closedTimes[dayIndex]}`
        ).getTime()
        const secCloseTime = new Date(
            `01/01/1970 ${secClosedTimes[dayIndex]}`
        ).getTime()
        const secOpenTime = new Date(
            `01/01/1970 ${secOpenTimes[dayIndex]}`
        ).getTime()
        const currentTimeMillis = new Date(
            `01/01/1970 ${currentTime}`
        ).getTime()

        const stropenTime = new Date(openTime)
        const fromatedopenTime = stropenTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        const strcloseTime = new Date(closeTime)
        const formatedcloseTime = strcloseTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        const strsecCloseTime = new Date(secCloseTime)
        const formatesecCloseTime = strsecCloseTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        const strsecOpenTime = new Date(secOpenTime)
        const formatesecOpenTime = strsecOpenTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        })

        if (
            isNaN(openTime) ||
            openTime === new Date('Invalid Date').getTime() ||
            isNaN(closeTime) ||
            closeTime === new Date('Invalid Date').getTime()
        ) {
            return 'CLOSED' // Return 'CLOSED' if any of the times are invalid
        }

        if (currentTimeMillis < openTime || currentTimeMillis >= closeTime) {
            return 'CLOSED' // Before opening time or after closing time
        }

        // Check if it's during the lunch break
        if (
            currentTimeMillis >= secCloseTime &&
            currentTimeMillis < secOpenTime
        ) {
            return '2nd CLOSED' // During the lunch break
        }

        return 'OPEN' // Contact center is open
    }

    useEffect(() => {
        setcontactCenterStatus(isContactCenterOpen)

        const interval = setInterval(() => {
            setcontactCenterStatus(isContactCenterOpen)
            onStatusChange({
                status: isContactCenterOpen(),
                center: contactcenter.ccname,
            })
        }, 60000) // 60,000 milliseconds = 1 minute

        // Clear interval on component unmount
        return () => clearInterval(interval)
    }, [contactcenter])

    return <>{contactCenterStatus}</>
}
DisplayCenterStatus.propTypes = {}
export default DisplayCenterStatus
