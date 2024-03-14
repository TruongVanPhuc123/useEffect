import React from 'react'

function SetLocalstorage({ key, value }) {
    return window.localStorage.setItem(key, value)
}

export default SetLocalstorage